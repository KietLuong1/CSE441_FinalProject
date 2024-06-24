import { ScrollView, StatusBar, Touchable, TouchableOpacity, View } from "react-native"
import Styles from "../../assets/style/Styles";
import HomeBanner from "../../components/HomeBanner";
import MovieCard from "../../components/MovieCard";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from "../../apis/Network";
import { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather"
import { useNavigation } from "@react-navigation/native";

const Home = ({navigation}) => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const handleMovies = async () => {
            const { data, status } = await getNowPlayingMovies();

            if (status === 200) {
                setNowPlayingMovies(data.results);
            } else {
                Alert.alert('Error', 'Failed to fetch upcoming movies')
            }
        };
        handleMovies();
    }, [])

    useEffect(() => {
        const handleRatedMovies = async () => {
            const { data, status } = await getTopRatedMovies();

            if (status === 200) {
                setTopRatedMovies(data.results);
            } else {
                Alert.alert('Error', 'Failed to fetch upcoming movies')
            }
        };
        handleRatedMovies();
    }, [])

    useEffect(() => {
        const handlePopularMovies = async () => {
            const { data, status } = await getPopularMovies();

            if (status === 200) {
                setPopularMovies(data.results);
            } else {
                Alert.alert('Error', 'Failed to fetch upcoming movies')
            }
        };
        handlePopularMovies();
    }, [])

    return (
        <View style={Styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <ScrollView style={Styles.scrollView}>
                <View>
                    <HomeBanner />
                    <View style={Styles.subContainer}>
                        <TouchableOpacity style={{ width: 40, height: 40, alignSelf: "flex-end" }} onPress={navigation.navigate('Search')}>
                            <Feather name="search" size={30} color="#fff" />
                        </TouchableOpacity>
                        <MovieCard title={'Now Playing'} data={nowPlayingMovies} />
                        <MovieCard title={'Top Rated'} data={topRatedMovies} />
                        <MovieCard title={'Popular'} data={popularMovies} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Home;