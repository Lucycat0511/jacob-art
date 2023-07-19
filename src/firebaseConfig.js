import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD3oc5pz89CAVMtny1FLNooKaqbC-DY_Y",
  authDomain: "jacob-lang-art.firebaseapp.com",
  projectId: "jacob-lang-art",
  storageBucket: "jacob-lang-art.appspot.com",
  messagingSenderId: "261178406993",
  appId: "1:261178406993:web:550c61b56ce3dcaf882070",
  measurementId: "G-1X1JTHD7LK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
