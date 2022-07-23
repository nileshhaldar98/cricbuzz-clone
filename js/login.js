document.querySelector(".btnSubmit").addEventListener("click", login);

function login() {
  var value = JSON.parse(localStorage.getItem("userData"));
  let userEamil = document.querySelector("#email").value;
  let userPassword = document.querySelector("#password").value;

  if (value === null) {
    alert("User Not registerd ");
    return;
  }
  value.forEach(function (elem) {
    if (userEamil === elem.userEmail && userPassword === elem.userPassword) {
      location.href = "index.html";
    } else {
      alert("you enterd wrong email and password");
    }
  });
}
document.querySelector(".home").addEventListener("click", home);
function home() {
  location.href = "index.html";
}
