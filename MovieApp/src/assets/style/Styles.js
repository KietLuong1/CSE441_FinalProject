import { StatusBar, StyleSheet } from "react-native";
import { myColors } from "../../utils/Theme";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default style = StyleSheet.create({
    // global styles
    container: {
        flex: 1,
        backgroundColor: myColors.primary,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%'
    },

    subContainer: {
        paddingHorizontal: 10,
        gap: 10,
        marginTop: 20
    },

    linearContainer: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'stretch'
    },

    logo: {
        width: responsiveWidth(50),
        height: responsiveHeight(50),
        borderRadius: 20
    },

    scrollView: {
        flex: 1,
    },

    // Login styles
    login: {
        width: responsiveWidth(80),
        height: responsiveHeight(60),
        backgroundColor: myColors.secondary,
        borderRadius: 10
    },

    textInput: {
        backgroundColor: '#ccc',
        width: responsiveWidth(90),
        borderRadius: 10,
        color: myColors.primary,
        marginBottom: 20,
    },

    textInputFocused: {
        backgroundColor: myColors.secondary,
    },

    loginBtn: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        backgroundColor: '#2C353C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    // Sign up styles
    bottomContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center',
        gap: 10
    },

    // HomeBanner styles
    movieBanner: {
        width: responsiveWidth(100),
        height: '100%',
        justifyContent: 'flex-end',
        opacity: 0.7
    },

    title: {
        fontSize: responsiveFontSize(2),
        color: myColors.secondary,
        fontWeight: "700",
    },

    touchBtn: {
        backgroundColor: myColors.secondary,
        width: responsiveWidth(30),
        height: responsiveHeight(7),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },

    // Movie Card styles
    cardContainer: {
        height: responsiveHeight(40),
        gap: 20,
        marginTop: 20,
        marginBottom: 20,
    },

    movieCardTitle: {
        color: myColors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },

    movieCardImg: {
        width: responsiveWidth(40),
        height: '100%',
        borderRadius: 10,
    },

    // Video Player styles
    mainContainer: {
        flex: 1,
        backgroundColor: '#080508',
        marginTop: StatusBar.currentHeight,
    },

    firstContainer: {
        height: responsiveHeight(35),
    },

    secondContainer: {
        padding: 10,
        gap: 10,
    },

    movieDetailsContainer: {
        width: responsiveWidth(100),
        padding: 10,
    },

    // search Screen styles
    searchInput: {
        marginTop: StatusBar.currentHeight,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: responsiveWidth(90),
        height: responsiveHeight(6),
    },
})