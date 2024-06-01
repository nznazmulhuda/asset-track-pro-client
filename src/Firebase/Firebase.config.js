import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const Env = import.meta.env;
const firebaseConfig = {
    apiKey: Env.AUTH_APIKEY,
    authDomain: Env.AUTH_AUTHDOMAIN,
    projectId: Env.AUTH_PROJECTID,
    storageBucket: Env.AUTH_STORAGEBUCKET,
    messagingSenderId: Env.AUTH_MESSAGINGSENDERID,
    appId: Env.AUTH_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
