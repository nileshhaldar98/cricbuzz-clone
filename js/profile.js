document.getElementById("username").value="nileshhaldar98";
document.getElementById("emailA").value="nileshhaldar98@gmail.com";
document.querySelector("#signOut").addEventListener("click",signout)
function signout(){

location.href="index.html"

}


document.querySelector("#submitBtn").addEventListener("click",username)
function username(){

document.getElementById("username").value=document.getElementById("username").value;
document.getElementById("emailA").value=document.getElementById("emailA").value;   
alert("username saved succesfully");


}