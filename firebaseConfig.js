import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2qblvA5ZvR-2y1ANgDuocEVa9zNDkLbI",
  database: "https://mobile-application-proje-a261d.firebaseapp.com",
  authDomain: "mobile-application-proje-a261d.firebaseapp.com",
  projectId: "mobile-application-proje-a261d",
  storageBucket: "mobile-application-proje-a261d.firebasestorage.app",
  messagingSenderId: "756505503431",
  appId: "1:756505503431:web:7d7409d9855abfd23a80e2"
};

let app;

if(!firebase.apps.length){
  alert("initialising");
  app = firebase.initializeApp(firebaseConfig);
}
else {
  alert("app length " + firebase.apps.length)
}

const db = firebase.firestore();

export {db};