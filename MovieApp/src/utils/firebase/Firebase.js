import {getApp, getApps, initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

let firebaseApp;

export const firebase = () => {
    if(firebaseApp){
        return firebaseApp;
    }

    const firebaseConfig = {
        apiKey: "AIzaSyDliAyiouPlTMJHx4ogFWR3Wv4SfdbCJGM",
        authDomain: "movieapp-edfab.firebaseapp.com",
        projectId: "movieapp-edfab",
        storageBucket: "movieapp-edfab.appspot.com",
        messagingSenderId: "515467872954",
        appId: "1:515467872954:web:f868b89f71cd09c7865083",
        measurementId: "G-QCLDZWF78B"
      };
      
      const app = getApps().length ===0 ? initializeApp(firebaseConfig) : getApps()[0];

    //   intialize Firebase Auth
    initializeApp(app, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) });

    firebaseApp = app;
    return app
}
