import {
    Image,
    ScrollView,
    StatusBar,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from'react-native-vector-icons/AntDesign';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Styles from '../../assets/style/Styles';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const VideoPlayer = ({ route }) => {
    const {
        title,
        release_date,
        overview,
        backdrop_path,
        vote_count,
    } = route.params.item;
    const [isVideoVisible, setisVideoVisible] = useState(false);

    console.log(route.params.item);

    return (
        <View style={Styles.mainContainer}>
            <StatusBar backgroundColor={'#080508'} />
            <ScrollView style={Styles.scrollView}>
                {isVideoVisible ? (
                    <Video
                        setControls
                        controls
                        repeat={false}
                        resizeMode="cover"
                        style={Styles.firstContainer}
                        source={{
                            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                        }}
                        onFullscreenPlayerWillPresent={() => {
                            Orientation.lockToLandscape();
                        }}
                        onFullscreenPlayerWillDismiss={() => {
                            Orientation.lockToPortrait();
                        }}
                    />
                ) : (
                    <Image
                        style={Styles.firstContainer}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
                        }}
                    />
                )}

                <View style={Styles.secondContainer}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                        {title}
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text style={{ fontSize: 16, color: 'white' }}>
                            {release_date.split('-')[0]}
                        </Text>
                        <View
                            style={{ width: 2.5, height: 20, backgroundColor: 'white' }}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <AntDesign name="like1" size={20} color="white" />
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontWeight: '700',
                                }}>
                                {vote_count} votes
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 10, gap: 10, marginTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => {
                            setisVideoVisible(true);
                        }}
                        activeOpacity={0.8}
                        style={[Styles.touchBtn,{width: responsiveWidth(95)}]}>
                        <Entypo name="controller-play" size={22} color="black" />
                        <Text
                            style={[
                                Styles.title,
                                {
                                    fontSize: responsiveFontSize(2),
                                    color: 'black',
                                    fontWeight: '700',
                                },
                            ]}>
                            Play
                        </Text>
                    </TouchableOpacity>

                    <Text
                        style={{
                            fontSize: 16,
                            color: 'white',
                            marginVertical: 10,
                            lineHeight: 25,
                            textAlign: 'justify',
                        }}>
                        {overview}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default VideoPlayer;