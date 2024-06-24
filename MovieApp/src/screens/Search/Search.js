import React, { useState } from 'react';
import { View, TextInput, FlatList, Image, Text, StyleSheet } from 'react-native';
import { searchMovies } from '../../apis/Network';
import Styles from '../../assets/style/Styles';

const MovieSearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearching = async (query) => {
        const { data, status } = await searchMovies(query);

        if (status === 200) {
            setMovies(data.results);
        } else if (status === 404) {
            setMovies([]);
        } else {
            Alert.alert('Error', 'Failed to fetch movies')
        }
    }

    const renderMovieItem = ({ item }) => (
        <View style={styles.movieItem}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.poster}
            />
            <View style={styles.movieInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.releaseDate}>{item.release_date}</Text>
            </View>
        </View>
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
            <FlatList
                data={movies}
                renderItem={renderMovieItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({


    movieItem: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',
    },
    poster: {
        width: 80,
        height: 120,
    },
    movieInfo: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    releaseDate: {
        fontSize: 14,
        color: 'gray',
    },
});

export default MovieSearchScreen;