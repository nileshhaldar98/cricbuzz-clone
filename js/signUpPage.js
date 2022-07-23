document.querySelector(".btnSubmit").addEventListener("click",addData);


let data=JSON.parse(localStorage.getItem("userData"))||[];
function addData(){


    let userObj={
        userName:document.querySelector("#name").value,
        userEmail:document.querySelector("#email").value,
        userPhone:document.querySelector("#phone").value,
        userPassword:document.querySelector("#password").value
    }
    
data.push(userObj);
localStorage.setItem("userData",JSON.stringify(data));
location.href = "loginPage.html";
}

document.querySelector(".home").addEventListener("click",home);
function home(){
    location.href = "index.html";
}