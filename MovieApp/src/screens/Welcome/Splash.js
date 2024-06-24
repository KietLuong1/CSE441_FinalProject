import { Image, StatusBar, View } from "react-native"
import { Icon, Text } from "react-native-paper"
import Styles from "../../assets/style/Styles";
import { useEffect } from "react";
import Feather from "react-native-vector-icons/Feather"
 
const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 3000)
    }, [])

    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor={'transparent'} hidden />
            <Feather name="film" size={100} color="#fff" />
        </View>
    )
}
export default Splash;