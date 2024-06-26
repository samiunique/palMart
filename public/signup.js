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
  
  // Sign Up function
  function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        user.sendEmailVerification().then(function() {
          // Email sent
          window.location.href = 'register.html'; // Redirect to the register page
        }).catch(function(error) {
          // An error happened
          console.error('Error sending verification email:', error);
        });
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
  }