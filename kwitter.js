
function addUser(){
    user_name=document.getElementById("username").value;
    localStorage.setItem("user_name",user_name);
    console.log("hi")
    window.location="kwitter_room.html";
}