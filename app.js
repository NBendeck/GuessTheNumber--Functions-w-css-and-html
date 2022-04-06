

function run() {
    let x = document.getElementById("paragraph")
    x.innerHTML = "hello World!>!>?!"
    x.style.backgroundColor = "black";
    x.style.color = "white";
    x.style.padding = "30px;"
    ranNum();
    userNum();
    compare();
}

function ranNum() {
    let ran = Math.floor(Math.random() * 10)
    
    let x = document.getElementById("random")

    x.innerHTML = ran
    x.style.backgroundColor = "black";
    x.style.color = "white";
    x.style.textAlign = "center";
    x.style.padding = "30px;"

    return ran;
}

function userNum() {
    let user = document.getElementById("getNumber").value;

    let x = document.getElementById("userNumber")

    document.getElementById("userNumber").innerHTML = user;

    alert(user);

    x.style.backgroundColor = "black";
    x.style.color = "white";
    x.style.textAlign = "center";
    x.style.padding = "30px;"

    return user

}

function compare() {
    let a = userNum();
    let b = ranNum();

    if (a != b) {
        document.getElementById("compare").innerHTML = "did not guess right!"
    } else {
        document.getElementById("compare").innerHTML = "yes guees right"
    }
}