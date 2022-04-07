let uNum = document.getElementById("getNumber")
uNum.addEventListener("keydown", function (e) { 
  if (e.keyCode == 13) {
     run(e)
   } 
})
                     
      

function run() {
    let x = document.getElementById("paragraph")
    x.innerHTML = "Results!"
    x.style.backgroundColor = "black";
    x.style.color = "white";
    x.style.padding = "30px;"
    x.style.margin = "0;"
    ranNum();
    userNum();
    compare();
}

function ranNum() {
    let ran = Math.floor(Math.random() * 5 + 1)
    
    let x = document.getElementById("random")

    x.innerHTML = ran
    x.style.backgroundColor = "black";
    x.style.color = "white";
    x.style.textAlign = "center";
    x.style.padding = "30px;"
    x.style.margin = "0;"

    return ran;
}

function userNum() {
    let user = document.getElementById("getNumber").value;

    let x = document.getElementById("userNumber")

    document.getElementById("userNumber").innerHTML = user;

    x.style.backgroundColor = "black";
    x.style.color = "white";
    x.style.textAlign = "center";
    x.style.padding = "30px;"
    x.style.margin = "0;"

    return user

}

function compare() {
    let a = userNum();
    let b = ranNum();
    let x = document.getElementById("compare")
    x.style.backgroundColor = "black";
    x.style.color = "white";
    x.style.textAlign = "center";
    x.style.padding = "30px;"
    x.style.margin = "0;"


    if (a != b) {
        x.style.backgroundColor = "red";
        x.innerHTML = "Aww man! You guessed wrong!"
    } else {
        x.style.backgroundColor = "green";
        x.innerHTML = "Wow! You guess right!"
    }
}
