import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {getFirebaseApp} from '../firebase'
import { child, getDatabase, ref, set } from 'firebase/database';

export const signUp = (name, email, password) =>{
    return async (dispatch) => {
        const app = getFirebaseApp();
        const auth = getAuth(app);

        try {
            const results = await createUserWithEmailAndPassword(auth, email, password);

            const {uid, tokenManager } = results.user;
            const {accessToken, expirationTime } = tokenManager;
            const expiryDate = new Date(expirationTime);
        } catch (error) {
            
        }
    }
}

const createUser = async (name, email, password) => {
    const userData = {
        name, 
        email,
        userId,
        signUpDate: new Date().toISOString()
    }

    const dbRef = ref(getDatabase())
    const childRef = child(dbRef,`users/${userId}`)
    await set(childRef, userData)
    return userData;
}