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
  
  function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.href = 'workspace.html'; // Redirect to the workspace page
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  }