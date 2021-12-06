import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyAT8ytjvnvDp52SapBLjawwYMX9PIZoKP0",
  authDomain: "gallery-19f54.firebaseapp.com",
  projectId: "gallery-19f54",
  storageBucket: "gallery-19f54.appspot.com",
  messagingSenderId: "983941248654",
  appId: "1:983941248654:web:9a8fecfdc2c209b028fbdf",
};

let app = firebase.initializeApp(firebaseConfig);
export default app;
