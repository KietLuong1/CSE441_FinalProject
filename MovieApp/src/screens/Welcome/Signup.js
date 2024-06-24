import { useEffect, useState } from 'react';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { myColors } from '../../utils/Theme';
import { useNavigation } from '@react-navigation/native';

const { View, Text, TextInput, Image, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, Alert } = require('react-native');
const { default: Styles } = require('../../assets/style/Styles');

const SignUp = ({ navigation }) => {
    const [isFocused, setIsFocused] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authenticateUser = async () => {
        console.log(name, email, password);
    }

    const handleSignUp = () => {
        if (name === '' || email === '' || password === '') {
            Alert.alert('Error', 'Please fill all the fields');
        }
    }

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
                        <Text style={[Styles.title, { fontSize: 40 }]}>Sign Up</Text>
                        <Text style={{ color: '#ccc', fontSize: 15 }}>Signup now for free and explore movies</Text>
                    </View>
                    <View style={{ height: responsiveScreenHeight(60) }}>
                        <TextInput
                            id='name'
                            placeholder="Name"
                            style={[Styles.textInput, isFocused == 'name' && Styles.textInputFocused]}
                            placeholderTextColor={myColors.primary}
                            onBlur={() => setIsFocused('')}
                            onFocus={() => setIsFocused('name')}
                            onChangeText={text => { setName(text) }}>
                        </TextInput>

                        <TextInput
                            id='email'
                            placeholder="Email"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            style={[Styles.textInput, isFocused == 'name' && Styles.textInputFocused]}
                            placeholderTextColor={myColors.primary}
                            onBlur={() => setIsFocused('')}
                            onFocus={() => setIsFocused('name')}
                            onChangeText={text => { setEmail(text) }}>
                        </TextInput>

                        <TextInput
                            id='password'
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"
                            keyboardType="default"
                            placeholderTextColor={myColors.primary}
                            style={[Styles.textInput, isFocused == 'password' && Styles.textInputFocused]}
                            onBlur={() => setIsFocused('')}
                            onFocus={() => setIsFocused('password')}
                            onChangeText={text => { setPassword(text) }}>
                        </TextInput>

                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={Styles.loginBtn}
                            onPress={() => { authenticateUser() }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={Styles.bottomContainer}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity style={{ padding: 0 }} onPress={navigation.goBack}>
                                <Text style={{ color: myColors.primary, fontWeight: 'bold', color: myColors.secondary }}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default SignUp;