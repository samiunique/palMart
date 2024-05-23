// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX4XJFSytEtEvt8EdP814PQGMPYp8FS68",
    authDomain: "palmart-f7427.firebaseapp.com",
    projectId: "palmart-f7427",
    storageBucket: "palmart-f7427.appspot.com",
    messagingSenderId: "394965523403",
    appId: "1:394965523403:web:552f783c7e8a396ac6344e",
    measurementId: "G-EPZQRN5JW9"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();
  
  function register() {
    var user = auth.currentUser;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
  
    db.collection('users').doc(user.uid).set({
      name: name,
      phone: phone
    })
    .then(() => {
      console.log('User successfully registered!');
    })
    .catch((error) => {
      console.error('Error registering user:', error);
    });
  }