let shopContainer = document.querySelectorAll(".shop-container")
let priceContainer = document.querySelector(".price-container")
let images = document.querySelector(".images")
let productName = document.querySelector(".product-name")
let z_i = document.querySelectorAll(".z-i")
let dollar = document.querySelector(".dollar")
let quantity = document.querySelector(".quantityno")
let fullName = document.getElementById("fullName")
let E_mail = document.getElementById("E-mail")
let passwd = document.getElementById("passwd")
let sign = document.getElementById("sign")
let signupContainer = document.querySelector(".signup-container")
let signUp = document.querySelector(".signUp")
let closeBtn = document.querySelector(".s-b i")
let url = new URLSearchParams(window.location.search);
let orderbtn = document.querySelector(".orderbtn")
let clickCard = url.get("shopCard");
let selectedPrice = 0;


shopContainer.forEach((shopContainers, index) => {
    let z_iImg = shopContainers.querySelectorAll(".z-i img")
    let z_i = shopContainers.querySelectorAll(".z-i")
    let mt4h2 = shopContainers.querySelectorAll(".mt-4 h2");
    let mt4P = shopContainers.querySelectorAll(".mt-4 p small");
    if (index != clickCard) {
        shopContainers.style.display = "none";
    }

    z_i.forEach((z_is, index) => {
        z_is.addEventListener("click", () => {
            images.src = z_iImg[index].src;
            productName.textContent = mt4h2[index].textContent;
            selectedPrice = Number(mt4P[index].innerText);
            dollar.textContent = `$${selectedPrice}`;
        })
    })

})

orderbtn.addEventListener("click", () => {
    msg.style.display = "block";
    setTimeout(() => {
        priceContainer.style.display = "none";
        quantity.value = 1
        msg.style.display = "none";
        document.body.style.overflow = "auto"
    }, 3000);
})

quantity.addEventListener("input", () => {
    let qty = Number(quantity.value);
    if (qty < 1) {
        quantity.value = 1;
        qty = 1;
    }

    let total = selectedPrice * qty;
    dollar.textContent = `$${Math.round(total)}`;
});

z_i.forEach((smallCard, index) => {
    smallCard.addEventListener("click", () => {
        priceContainer.style = "display: flex;"
        document.body.style.overflow = "hidden";
    })
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
    fullName.value = "";
    E_mail.value = "";
    passwd.value = "";
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