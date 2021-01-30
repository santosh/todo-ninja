import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDe5hTvyp8E4-xu6MntDoZ0nj2BW_Z8XRo',
  authDomain: 'todo-ninja-f6daf.firebaseapp.com',
  projectId: 'todo-ninja-f6daf',
  storageBucket: 'todo-ninja-f6daf.appspot.com',
  messagingSenderId: '505344991520',
  appId: '1:505344991520:web:f4eb948125a13b03483745',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true,
});

export default db;
