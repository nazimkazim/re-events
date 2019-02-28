import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
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
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};

firestore.settings(settings);

export default firebase;
