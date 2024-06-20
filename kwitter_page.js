//firebase links
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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//messaging thingamabobs I need to do
console.log("hi");
console.log(firebase_message_id);
console.log(message_data);
console.log("hi");

name=message_data["name"];
like=message_data["like"];
message=message_data["message"];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'</h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button> </hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

      } });  }); }
getData();

document.getElementById("msg").addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
        send();
      }
    });
//Send functions 
function send(){
      console.log("send!");
      message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name, message:message, like:100000000000
      });

      document.getElementById("msg").value="";
console.log("return key pressed")

}
//this send is in bets
//function sendimg(){
      //console.log("received image");
      //message=document.getElementById("msgimg").value;
     // const file = document.getElementById("msgimg").files[0];

      // write the file to the server


      // console.log(message)
      // firebase.database().ref(room_name).push({
      //       name:user_name, message:message, like:0
      // });

    //  const this_div = document.getElementById("msgimg")

     // new_html = this_div.innerHTML + `<img src="${upload_path}"/>`
     // this_div.innerHTML = new_html

    //  document.getElementById("msgimg").value="";

//}



function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
       
 }

function updateLike(message_id){
      console.log("clicked on like button"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}