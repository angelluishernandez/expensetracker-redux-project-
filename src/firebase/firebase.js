import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB5OXXhMhapSO88n7HXHJqqVIjGJmR08F0",
  authDomain: "expense-tracker-5beb1.firebaseapp.com",
  databaseURL: "https://expense-tracker-5beb1.firebaseio.com",
  projectId: "expense-tracker-5beb1",
  storageBucket: "expense-tracker-5beb1.appspot.com",
  messagingSenderId: "464148932892",
  appId: "1:464148932892:web:300e1dd7b0164a72b072d9",
  measurementId: "G-GKTM5W3Z6H"
};

firebase.initializeApp(firebaseConfig)

firebase.database().ref().set({
  name: "Angel",
})

