//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAOjWDThg9QyzjVlwRBMJ0q_DO_bWKmgp8",
      authDomain: "kwitter-744e3c.firebaseapp.com",
      databaseURL: "https://kwitter-744e3c-default-rtdb.firebaseio.com",
      projectId: "kwitter-744e3c",
      storageBucket: "kwitter-744e3c.appspot.com",
      messagingSenderId: "634541138869",
      appId: "1:634541138869:web:2df7b2174ec2e6ef67effc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    console.log(room_name);
    console.log(user_name);
    function send() {
          msg=document.getElementById("message").value;
          firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
          }
          );
          console.log(msg);
          console.log(room_name);
          console.log(user_name);
  }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";
    }