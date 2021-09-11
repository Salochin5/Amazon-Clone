import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: 'AIzaSyCXZy7pJaLIKuVJOgZimztB3WTWXp3-mAU',
 authDomain: 'clone-3fd00.firebaseapp.com',
 projectId: 'clone-3fd00',
 storageBucket: 'clone-3fd00.appspot.com',
 messagingSenderId: '1084225138841',
 appId: '1:1084225138841:web:aeac4388d75c8eb163c808',
 measurementId: 'G-92HJSTFBBQ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
