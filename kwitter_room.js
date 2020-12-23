
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBhwUyGCoOOq7ujz8Wc7QRBsD0kqIeRN0k",
  authDomain: "lets-chat-web-app-ef8a8.firebaseapp.com",
  projectId: "lets-chat-web-app-ef8a8",
  storageBucket: "lets-chat-web-app-ef8a8.appspot.com",
  messagingSenderId: "308843783236",
  appId: "1:308843783236:web:2c4189e49188c989618811"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name");
 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
 