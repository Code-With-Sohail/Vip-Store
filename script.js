let slide = document.querySelector(".slide")
let prevBtn = document.getElementById("right-icon")
let nextBtn = document.getElementById("left-icon")
let fullName = document.getElementById("fullName")
let E_mail = document.getElementById("E-mail")
let passwd = document.getElementById("passwd")
let sign = document.getElementById("sign")
let saleBox = document.querySelectorAll(".salebox")
let shopCard = document.querySelectorAll(".shop-card")
let signupContainer = document.querySelector(".signup-container")
let signUp = document.querySelector(".signUp")
let closeBtn = document.querySelector(".s-b i")

let images = ["image/slider and logo/slider 3.jpg",
    "image/slider and logo/slider 1.jpg",
    "image/slider and logo/slider 2.jpg"
]

slide.style = `background: url("${images[0]}");background-repeat: no-repeat; background-position: center; background-size: cover;`

let currentImg = 0;

nextBtn.addEventListener("click", () => {
    currentImg++;
    if (currentImg >= images.length) {
        currentImg = 0;
    }

    let newSlide = document.createElement("div")
    newSlide.style = `background: url("${images[currentImg]}");background-repeat: no-repeat; background-position: center; background-size: cover;`
    slide.appendChild(newSlide);
    newSlide.classList.add("slide", "next");
})

prevBtn.addEventListener("click", () => {
    currentImg--;
    if (currentImg < 0) {
        currentImg = images.length - 1;
    }

    let newSlide = document.createElement("div")
    newSlide.style = `background: url("${images[currentImg]}");background-repeat: no-repeat; background-position: center; background-size: cover;`
    slide.appendChild(newSlide);
    newSlide.classList.add("slide", "previous");
})

saleBox.forEach((saleboxes, index) => {
    saleboxes.addEventListener("click", () => {
        window.location.href = "sales.html?saleBox=" + index;
    })
})

shopCard.forEach((shopCards, index) => {
    shopCards.addEventListener("click", () => {
        window.location.href = "gallery.html?shopCard=" + index
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

