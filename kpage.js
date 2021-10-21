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
  roomname=localStorage.getItem("roomname");
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
          message:msg,
          name:username,
          like:0
      })
      document.getElementById("msg").innerHTML="";
  }
  function getData(){
       firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "Ralph") { firebase_message_id = childKey; message_data = childData;
       console.log(firebase_message_id);
       console.log(message_data);
       nameuser=message_data["name"];
       message=message_data["message"];
       like=message_data["like"];
       namewithtag="<h4>"+nameuser+"<img class='user_tick' src='tick.png'></h4>";
       messagewithteg="<h4 class='message_h4'>"+message+"</h4>";
       likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value=" +like+" onclick='updatelike(this.id)'>";
       spanwithtag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>";
       row=namewithtag+messagewithteg+likebutton+spanwithtag;
       document.getElementById("output").innerHTML+=row;
       } }); }); } getData();
       function updatelike(firebase_message_id){
           console.log("The like button is clicked for msg id-"+firebase_message_id);
           old_likes=document.getElementById(firebase_message_id).value;
           new_likes=Number(old_likes)+1;
           console.log(new_likes);
           firebase.database().ref(roomname).child(firebase_message_id).update({
               like:new_likes
           })
       }
       function logout(){
        localStorage.removeItem("username");
        localStorage.removeItem("roomname");
        window.location.replace("index.html");
       }