import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDx3EgoNVGjwsjvugK7-YwfwxRX2aPSB6k",
    authDomain: "tripmaster-64cb7.firebaseapp.com",
    projectId: "tripmaster-64cb7",
    storageBucket: "tripmaster-64cb7.firebasestorage.app",
    messagingSenderId: "1015671912746",
    appId: "1:1015671912746:web:9379e6f43ed18c9fe38653",
    measurementId: "G-MD5JGE52F8"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const storage = getStorage(firebaseApp); 

export { db, storage }; 

const auth = getAuth(firebaseApp);

export { auth };


