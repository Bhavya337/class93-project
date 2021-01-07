// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBhwUyGCoOOq7ujz8Wc7QRBsD0kqIeRN0k",
  authDomain: "lets-chat-web-app-ef8a8.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-ef8a8-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-ef8a8",
  storageBucket: "lets-chat-web-app-ef8a8.appspot.com",
  messagingSenderId: "308843783236",
  appId: "1:308843783236:web:2c4189e49188c989618811"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("user_name");


    function add_room() {
      Room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({ 
     purpose:"adding_room_name"  });
  
    localStorage.setItem("room_name",Room_name);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  console.log("room_name" + Room_names);
  
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  
    //End code
        });});}
  getData();
  function  redirecttoRoomName(name){
    console.log(name); 
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
  
  
  
 