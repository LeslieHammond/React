import * as firebase from 'firebase';

const config =  {
  apiKey: "AIzaSyDVjMARisVFZLyepl_NkqN6KvWEPJH5ft8",
  authDomain: "goalcoach-87c91.firebaseapp.com",
  databaseURL: "https://goalcoach-87c91.firebaseio.com",
  projectId: "goalcoach-87c91",
  storageBucket: "goalcoach-87c91.appspot.com",
  messagingSenderId: "781168193709"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
