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
  const db = firebase.firestore();
  const storage = firebase.storage();
  
  function postItem() {
    // Get the current user's ID
    var userId = auth.currentUser.uid;
  
    // Get the data from the input fields
    var image = document.getElementById('image').files[0];
    var tag = document.getElementById('tag').value;
    var price = document.getElementById('price').value;
    var condition = document.getElementById('condition').value;
    var location = document.getElementById('location').value;
    var phone = document.getElementById('phone').value;
  
    // Create a storage reference
    var storageRef = storage.ref('items/' + image.name);
  
    // Upload the image to Firebase Storage
    var uploadTask = storageRef.put(image);
  
    uploadTask.on('state_changed', function(snapshot) {
      // Observe state change events such as progress, pause, and resume
    }, function(error) {
      // Handle unsuccessful uploads
      console.error('Upload failed:', error);
    }, function() {
      // Handle successful uploads on complete
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
  
        // Save the data to Firestore
        db.collection('items').add({
          userId: userId,
          tag: tag,
          price: price,
          condition: condition,
          location: location,
          phone: phone,
          imageUrl: downloadURL
        }).then(function(docRef) {
          console.log('Document written with ID:', docRef.id);
        }).catch(function(error) {
          console.error('Error adding document:', error);
        });
      });
    });
  }