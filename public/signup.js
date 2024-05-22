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
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // Sign Up function
  function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('User signed up:', user);
  
        // Send verification email
        user.sendEmailVerification()
          .then(() => {
            console.log('Email verification sent');
          })
          .catch((error) => {
            console.error('Error sending email verification:', error);
          });
  
        // Add user to Firestore
        db.collection('palmUsers').doc(user.uid).set({
          displayName: user.displayName || '',
          email: user.email,
          phoneNumber: user.phoneNumber || ''
        })
        .then(() => {
          console.log('User added to Firestore');
        })
        .catch((error) => {
          console.error('Error adding user to Firestore:', error);
        });
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
  }
  