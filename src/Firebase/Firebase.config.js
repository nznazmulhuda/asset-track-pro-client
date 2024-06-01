import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const value = import.meta.env;
const firebaseConfig = {
    apiKey: value.VITE_APIKEY,
    authDomain: value.VITE_AUTHDOMAIN,
    projectId: value.VITE_PROJECTID,
    storageBucket: value.VITE_STORAGEBUCKET,
    messagingSenderId: value.VITE_MESSAGINGSENDERID,
    appId: value.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
