import { useState } from 'react';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { myColors } from '../../utils/Theme';

const { View, Text, TextInput, Image, SafeAreaView, ScrollView, TouchableOpacity, StatusBar } = require('react-native');
const { default: Styles } = require('../../assets/style/Styles');

const Login = ({navigation}) => {
    const [isFocused, setIsFocused] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={Styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <View>
                    <View style={{ height: responsiveScreenHeight(40), alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../assets/images/logo.jpg')}
                            style={{ width: 150, height: 150, margin: 10, borderRadius: 10 }}
                        />
                        <Text style={[Styles.title, { fontSize: 40 }]}>Log In</Text>
                        <Text style={{ color: '#ccc', fontSize: 15 }}>Come and explore new movies</Text>
                    </View>
                    <View style={{ height: responsiveScreenHeight(45) }}>
                        <TextInput placeholder="Email" keyboardType="email-address" textContentType="emailAddress"
                            style={[Styles.textInput, isFocused == 'username' && Styles.textInputFocused]}
                            placeholderTextColor={myColors.primary}
                            onBlur={() => setIsFocused('')}
                            onFocus={() => setIsFocused('username')}
                            onChangeText={text => { setPhone(text) }}></TextInput>
                        <TextInput placeholder="Password" secureTextEntry={true} textContentType="password"
                            keyboardType="default"
                            placeholderTextColor={myColors.primary}
                            style={[Styles.textInput, isFocused == 'password' && Styles.textInputFocused]}
                            onBlur={() => setIsFocused('')}
                            onFocus={() => setIsFocused('password')}
                            onChangeText={text => { setPassword(text) }}></TextInput>
                        <TouchableOpacity activeOpacity={0.6} style={Styles.loginBtn} onPress={() => { handleLogin() }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Log In</Text>
                        </TouchableOpacity>
                        <View style={Styles.bottomContainer}>
                            <Text>Do not have an account?</Text>
                            <TouchableOpacity style={{ padding: 0 }} onPress={navigation.navigate('SignUp')}>
                                <Text style={{ color: myColors.primary, fontWeight: 'bold', color: myColors.secondary }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Login;