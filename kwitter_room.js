
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
	apiKey: "AIzaSyCFQJQlRFESgz6UM7YpfytHO4phsqRMAOc",
	authDomain: "kwitter-6db1f.firebaseapp.com",
	databaseURL: "https://kwitter-6db1f-default-rtdb.firebaseio.com",
	projectId: "kwitter-6db1f",
	storageBucket: "kwitter-6db1f.appspot.com",
	messagingSenderId: "995006223983",
	appId: "1:995006223983:web:79245772bed62064761f9a"
  };
  firebase.initializeApp(firebaseConfig);


username=localStorage.getItem("username");
document.getElementById("h3username").innerHTML="Welcome "+username+"!";

function addroom(){
     roomname=document.getElementById("roomname").value ;
     localStorage.setItem("roomname",roomname);
     firebase.database().ref("/").child(roomname).update({
       Moksh:"Agarwal"
     });
     window.location="kpage.html";
}


  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name-"+Room_names);
       row="<div class='room_name' id="+Room_names + " onclick='redirect(this.id)'>"+ "#" + Room_names+ "</div><hr>";
       document.getElementById("output").innerHTML+=row;
       //End code
      });});}
getData();
function redirect(Room_names){
  localStorage.setItem("roomname",Room_names);
  window.location="kpage.html";
}
function logout(){
  localStorage.removeItem("roomname");
  localStorage.removeItem("username");
  window.location.replace("index.html");
}