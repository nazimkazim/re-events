import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFgFHIR0PaweKHBNWFihSrEM84zpmeS3c',
  authDomain: 'revents-230803.firebaseapp.com',
  databaseURL: 'https://revents-230803.firebaseio.com',
  projectId: 'revents-230803',
  storageBucket: 'revents-230803.appspot.com',
  messagingSenderId: '950051837178'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
