import React, { useState, useCallback } from 'react';
import {
    View,
    TextInput,
    FlatList,
    Image,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Alert
} from 'react-native';
import { searchMovies } from '../../apis/Network';
import { debounce } from 'lodash';
import Styles from '../../assets/style/Styles';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';

const MovieSearchScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearching = useCallback(
        debounce(async (query) => {
            if (query.length < 3) {
                setMovies([]);
                return;
            }

            setLoading(true);
            try {
                const response = await searchMovies(query);
                if (response && response.results) {
                    setMovies(response.results);
                } else {
                    setMovies([]);
                }
            } catch (error) {
                console.error('Error searching movies:', error);
                Alert.alert('Error', 'Failed to fetch movies. Please try again.');
                setMovies([]);
            } finally {
                setLoading(false);
            }
        }, 300),
        []
    );

    const renderMovieItem = ({ item }) => (
        <TouchableOpacity style={styles.movieItem} onPress={() => navigation.navigate("VideoPlayer", {item}) }>
            <View style = {{flexDirection: 'row', width: responsiveScreenWidth(90)}}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                    style={styles.poster}/>
                <View style={styles.movieInfo}>
                    <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.releaseDate}>{item.release_date.split('-')[0]}</Text>
                    <Text style={styles.overview} numberOfLines={3}>{item.overview}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={Styles.container}>
            <TextInput
                style={Styles.searchInput}
                placeholder="Search for movies..."
                value={searchQuery}
                onChangeText={(text) => {
                    setSearchQuery(text);
                    handleSearching(text);
                }}
            />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
            ) : (
                <FlatList
                    data={movies}
                    renderItem={renderMovieItem}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>
                            {searchQuery.length > 2 ? "No movies found" : "Start typing to search for movies"}
                        </Text>
                    }
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    movieItem: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',
        elevation: 3,
    },
    poster: {
        width: 100,
        height: 150,
    },
    movieInfo: {
        flex: 1,
        padding: 10,
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    releaseDate: {
        fontSize: 13,
        color: 'gray',
        marginBottom: 18,
    },
    overview: {
        fontSize: 12,
        color: '#333',
    },
    loader: {
        marginTop: 20,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
    },
});

export default MovieSearchScreen;