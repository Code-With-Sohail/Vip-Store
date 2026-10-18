let lrContainer = document.querySelectorAll(".l-r-container");
let signupContainer = document.querySelector(".signup-container")
let saleCart = document.getElementById("sale-cart")
console.log(saleCart)
let saleClose = document.getElementById("sale-close")
let hideBtn = document.getElementById("hideBtn")
let cartBtn = document.querySelectorAll(".right button")
console.log(cartBtn)
let fullName = document.getElementById("fullName")
let E_mail = document.getElementById("E-mail")
let passwd = document.getElementById("passwd")
let sign = document.getElementById("sign")
let signUp = document.querySelector(".signUp")
let para = document.getElementById("para")
let closeBtn = document.querySelector(".s-b i")
let accName = document.getElementById("AccName")
let accNo = document.getElementById("AccNum")
let currentVal = 1;


lrContainer.forEach((cards) => {
    let smallBox = cards.querySelectorAll(".small-box img")
    let bigImg = cards.querySelector(".big-img img")
    let plus = cards.querySelector(".add")
    let minus = cards.querySelector(".sub")
    let dollar = parseFloat(cards.querySelector(".dollar small").innerHTML);
    let number = cards.querySelector(".number")
    let price = cards.querySelector(".dollar small");

    smallBox.forEach((smallImg) => {
        smallImg.addEventListener("click", () => {
            bigImg.src = smallImg.src
        })
    })

    plus.addEventListener("click", () => {
        currentVal++;
        number.textContent = `${currentVal}`
        price.textContent = `${currentVal * dollar}`
    })

    minus.addEventListener("click", () => {
        currentVal--;
        if (currentVal < 1) {
            currentVal = 1;
        }
        number.textContent = `${currentVal}`
        price.textContent = `${currentVal * dollar}`
    })
})

let url = new URLSearchParams(window.location.search);
let clickCard = url.get("saleBox");

lrContainer.forEach((container, index) => {
    if (clickCard != index) {
        container.style.display = "none";
    }
})

signUp.addEventListener("click", () => {
    signupContainer.style = "display:flex; align-item:center; justify-content:center;"
    document.body.style.overflow = "hidden";
    sign.addEventListener("click", () => {
        if (fullName.value === "" && E_mail.value === "" && passwd.value === "") {

        } else {
            signupContainer.style = "display:none";
            document.body.style.overflow = "auto";
            fullName.value = "";
            E_mail.value = "";
            passwd.value = "";
        }
    })
})

closeBtn.addEventListener("click", () => {
    signupContainer.style = "display: none;"
    document.body.style.overflow = "auto";
    saleCart.style.display = "none";
    fullName.value = "";
    E_mail.value = "";
    passwd.value = "";

})

saleClose.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    saleCart.style.display = "none";
    accName.value = "";
    accNo.value = "";
})

cartBtn.forEach((cartBtns, index) => {
    cartBtns.addEventListener("click", () => {
        saleCart.style = "display: flex; align-item: center; justify-content: center;"
        document.body.style.overflow = "hidden";
    })
})



hideBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (accName.value == "" && accNo.value == "") {
        document.body.style.overflow = "hidden";
        saleCart.style = "display: flex; align-item: center; justify-content: center;"
    } else {
        para.textContent = "Order Succesfully Completed";
        setTimeout(() => {
            document.body.style.overflow = "auto";
            saleCart.style = "display : none;"
            para.textContent = "Welcome! To Best Sales.";
            accName.value = "";
            accNo.value = "";
        }, 2000);
    }
})

let hamburger = document.querySelector(".hamburger");
let links = document.querySelector(".links");

hamburger.addEventListener("click", () => {

    links.classList.toggle("active");

    // hamburger ko X mein change karna
    if (links.classList.contains("active")) {

        hamburger.classList.remove("fa-bars");
        hamburger.classList.add("fa-xmark");

    } else {

        hamburger.classList.remove("fa-xmark");
        hamburger.classList.add("fa-bars");

    }

});