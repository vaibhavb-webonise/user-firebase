// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCgOH_72UV16awP3sTROZjPpfi_MFLRd_U',
  authDomain: 'user-22168.firebaseapp.com',
  projectId: 'user-22168',
  storageBucket: 'user-22168.appspot.com',
  messagingSenderId: '162436784691',
  appId: '1:162436784691:web:a3007a57744cf010ebb946',
  measurementId: 'G-H4YEJ7VB5P',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
