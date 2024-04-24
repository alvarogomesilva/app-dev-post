import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAENUxLMAFbCumQLYdqY1zKNXqBga0N_uc",
  authDomain: "dev-post-dc268.firebaseapp.com",
  projectId: "dev-post-dc268",
  storageBucket: "dev-post-dc268.appspot.com",
  messagingSenderId: "681711462994",
  appId: "1:681711462994:web:14af1ddc15d867600b0d8b"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
