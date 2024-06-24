import { useEffect, useState } from "react"
import { FlatList, ImageBackground, Touchable, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-paper"
import { getUpcomingMovies } from "../apis/Network"
import Styles from "../assets/style/Styles"
import { responsiveHeight } from "react-native-responsive-dimensions"
import LinearGradient from "react-native-linear-gradient"
import { myColors } from "../utils/Theme"
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"

const HomeBanner = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        const handleUpcomingMovies = async () => {
            const { data, status } = await getUpcomingMovies();

            if (status === 200) {
                setUpcomingMovies(data.results);
            } else {
                Alert.alert('Error', 'Failed to fetch upcoming movies')
            }
        };
        handleUpcomingMovies();
    }, [])

    const renderMovieBanner = ({ item, index }) => {
        return (
            <ImageBackground
                resizeMode="cover"
                style={Styles.movieBanner}
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}>
                <LinearGradient
                    style={Styles.linearContainer}
                    colors={['rgba(0,0,0,0.02)', 'rgba(0,0,0,7)']}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={Styles.touchBtn}
                        onPress={() => {
                            navigation.navigate('VideoPlayer', {item})
                        }}>
                        <Ionicons name="bookmark" size={30} color={myColors.primary} />
                        <Text style={[Styles.title, { color: myColors.primary, fontWeight: '900' }]}>
                            Save
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={Styles.touchBtn}
                        onPress={() => {
                            navigation.navigate('VideoPlayer', {item})
                        }}>
                        <Ionicons name="information-circle" size={30} color={myColors.primary} />
                        <Text style={[Styles.title, { color: myColors.primary, fontWeight: 'bold'}]}>
                            Detail
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ImageBackground>
        )
    }

    return (
        <View style={[Styles.container, { height: responsiveHeight(70) }]}>
            <FlatList
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={upcomingMovies}
                renderItem={renderMovieBanner}
            />
        </View>
    )
}
export default HomeBanner;