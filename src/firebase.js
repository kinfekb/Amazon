// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoSzQIljqz3XG9xUq-REofK-XOfD4R40k",
  authDomain: "fir-c5bf5.firebaseapp.com",
  projectId: "fir-c5bf5",
  storageBucket: "fir-c5bf5.appspot.com",
  messagingSenderId: "370154513890",
  appId: "1:370154513890:web:778241c552f231e8a245bb",
  measurementId: "G-4RX8ECFW8S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
