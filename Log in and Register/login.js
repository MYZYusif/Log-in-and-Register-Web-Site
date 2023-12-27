let button = document.querySelector("button").addEventListener("click",(event=>{
    event.preventDefault();
    let Name = document.querySelector("#name").value;
    let Password = document.querySelector("#password").value;
    let arr = JSON.parse(localStorage.getItem("RegistrationData"));
    let isUserFound = false;
    arr.forEach(LoginData => {
        if(LoginData.Name == Name && LoginData.password == Password){
            isUserFound = true
        }
    });
    if (isUserFound) {
        alert("Form Correct!");
        window.location.href = "./HomePage.html"
    }else{
        alert("Form Incorrect!");
    }
}))