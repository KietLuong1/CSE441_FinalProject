import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import Styles from "../assets/style/Styles";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ title, data }) => {
    const navigation = useNavigation();

    const renderMovieCards = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("VideoPlayer", {item})}>
                <Image
                    resizeMode="contain"
                    style={Styles.movieCardImg}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={[Styles.cardContainer]}>
            <Text style={Styles.movieCardTitle}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderMovieCards}
                ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
            />
        </View>
    )
}
export default MovieCard;