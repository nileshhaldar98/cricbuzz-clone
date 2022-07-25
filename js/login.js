document.querySelector(".btnSubmit").addEventListener("click", login);

function login() {
  var value = JSON.parse(localStorage.getItem("userData"));
  let userEamil = document.querySelector("#email").value;
  let userPassword = document.querySelector("#password").value;
let valu=true;
  if (value === null) {
    alert("User Not registerd ");
    return;
  }
  let arr=JSON.parse(localStorage.getItem("userInfo"))||[];
  value.forEach(function (elem) {
    if (userEamil === elem.userEmail && userPassword === elem.userPassword) {
      arr.push(elem);
      valu=false;
      localStorage.setItem("userInfo",JSON.stringify(arr));
      location.href = "loginIndex.html";
      return;
    } else {
      valu=true;
    }
  });


  if(valu){
    alert("you enterd wrong email and password");
  }

}
document.querySelector(".home").addEventListener("click", home);
function home() {
  location.href = "index.html";
}
