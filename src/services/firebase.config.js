// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwsdjIYye61zU-6w6aoFFLM5Kv14BbGAk',
  authDomain: 'fir-chat-4ecf6.firebaseapp.com',
  databaseURL:
    'https://fir-chat-4ecf6-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-chat-4ecf6',
  storageBucket: 'fir-chat-4ecf6.appspot.com',
  messagingSenderId: '474749911715',
  appId: '1:474749911715:web:39c8f70a8cf64334483516',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
