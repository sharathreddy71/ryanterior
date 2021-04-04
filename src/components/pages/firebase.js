import firebase from 'firebase'
// import "firebase/storage"

const config={
    apiKey: "AIzaSyDIupFKik2gk5YxmqV9di-v9zqzWM23aVc",
    authDomain: "ryanterior-102a1.firebaseapp.com",
    projectId: "ryanterior-102a1",
    storageBucket: "ryanterior-102a1.appspot.com",
    messagingSenderId: "45086786709",
    appId: "1:45086786709:web:4e9e051e5568d1a7bc479c",
    measurementId: "G-N95KNJWVMT"
}

firebase.initializeApp(config)
// const storage = firebase.storage();
export default firebase;