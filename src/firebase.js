import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFNliPnp7TuxHZDsXwmH8GeesR4_iAYoQ",
  authDomain: "netflix-clone-yt-75692.firebaseapp.com",
  projectId: "netflix-clone-yt-75692",
  storageBucket: "netflix-clone-yt-75692.appspot.com",
  messagingSenderId: "378304461835",
  appId: "1:378304461835:web:9f324f1ff66dd9b17e1b0e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

//   npm install -g firebase-tools
