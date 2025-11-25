

function register(){
let username = document.getElementById("name").value
let password = document.getElementById("password").value

localStorage.setItem("username", username);
localStorage.setItem("password",password);
alert("registerd succesfully") }

function login(){

let username = document.getElementById("name").value
let password = document.getElementById("password").value
let result=localStorage.getItem("username")
let result2=localStorage.getItem("password")

if(username== result && password == result2){
    alert("login sucessful");
    window.location.href="index.html"
    
}
else{
    alert("")
}
}
document.getElementById("text").innerHTML=`<p>Welcome ${localStorage.getItem("username")}</p>`;
