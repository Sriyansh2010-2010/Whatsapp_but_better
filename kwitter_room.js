var firebaseConfig = {
     apiKey: "AIzaSyAc5Vm_SraB-kHeYniC7Drz5RNBZlKpaxk",
     authDomain: "kwitter-e34bf.firebaseapp.com",
     databaseURL: "https://kwitter-e34bf-default-rtdb.firebaseio.com",
     projectId: "kwitter-e34bf",
     storageBucket: "kwitter-e34bf.appspot.com",
     messagingSenderId: "152035701031",
     appId: "1:152035701031:web:953a785adea01912227902",
     measurementId: "G-9NS3CB8N61"
   };
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

console.log("hi");
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //adding room names
      console.log("room_names="+Room_names);
      row="<div class='room_name' id = "+Room_names+" onclick = 'redirecttoroomname(this.id)'> #"+Room_names+" </div> <hr>";
      document.getElementById("output").innerHTML+=row;
 //End code
      });});}
getData();

function addRoom(){
     console.log("hi");
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
     purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function redirecttoroomname(name){
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location="kwitter_page.html";
}


function logOut(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html";
      
}