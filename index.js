// nav Bar
const menuIcon = document.querySelector(".nav-toggle"),
    closeIcon = document.querySelector(".close-icon"),
    slideBar = document.querySelector(".slide-bar");

menuIcon.addEventListener("click", function () {
    slideBar.classList.add("open");
});

closeIcon.addEventListener("click", function () {
    slideBar.classList.remove("open");
});

// cart
const cartBtn = document.querySelector(".cart-btn"),
    deleteIcon = document.querySelector(".delete-icon"),
    cartBox = document.querySelector(".cart-box-card"),
    cartEmpty = document.querySelector(".cart-content-empty"),
    cartCheckout = document.querySelector(".cart-content-checkout");

cartBtn.addEventListener("click", function () {
    if (cartBox.classList.contains("active")) {
        cartBox.classList.remove("active");
    } else {
        cartBox.classList.add("active");
    }
});

deleteIcon.addEventListener("click", function () {
    cartEmpty.classList.remove("hidden");
    cartCheckout.classList.remove("show");
    countCart.innerHTML = 0;
    num.innerHTML = 0;
});

// operation plus and minus
const minus = document.querySelector(".minus"),
    num = document.querySelector(".num"),
    plus = document.querySelector(".plus"),
    numCountcheckout = document.querySelector(".num-count-checkout"),
    totalCart = document.querySelector(".total-cart");

let activeNum = 0;
let total = 125;

minus.addEventListener("click", function () {
    if (activeNum > 0) {
        activeNum--;
        num.innerHTML = activeNum;
        countCart.innerHTML = activeNum;
        numCountcheckout.innerHTML = activeNum;
        checkoutDone.classList.remove("active");
        totalCart.innerHTML = "$" + (activeNum * total) + ".00";
    };
});

plus.addEventListener("click", function () {
    activeNum++;
    num.innerHTML = activeNum;
    countCart.innerHTML = activeNum;
    numCountcheckout.innerHTML = activeNum;
    countCart.classList.add("count");
    cartCheckout.classList.add("show");
    cartEmpty.classList.add("hidden");
    checkoutDone.classList.remove("active");
    totalCart.innerHTML = "$" + (activeNum * total) + ".00";
});

// add to cart button
const addCart = document.querySelector(".add-to-cart-btn"),
    countCart = document.querySelector(".cart-count");

addCart.addEventListener("click", function () {
    countCart.classList.add("count");
    cartBox.classList.add("active");

    if (activeNum = 0) {
        cartCheckout.classList.remove("show");
        cartEmpty.classList.add("hidden");
    };
});

// checkout purchase
const checkoutBtn = document.querySelector(".checkout-btn"),
    checkoutDone = document.querySelector(".checkout-done");

checkoutBtn.addEventListener("click", function () {
    cartCheckout.classList.remove("show");
    checkoutDone.classList.add("active");
    countCart.classList.remove("count");
    num.innerHTML = 0;
});

// change image thumbnail on desktop screen

const mainImage = document.querySelector(".main-image"),
    thumbnailImage1 = document.querySelector(".thumbnail-1"),
    thumbnailImage1src = document.querySelector(".thumbnail-1").src,
    thumbnailImage2 = document.querySelector(".thumbnail-2"),
    thumbnailImage2src = document.querySelector(".thumbnail-2").src,
    thumbnailImage3 = document.querySelector(".thumbnail-3"),
    thumbnailImage3src = document.querySelector(".thumbnail-3").src,
    thumbnailImage4 = document.querySelector(".thumbnail-4"),
    thumbnailImage4src = document.querySelector(".thumbnail-4").src;

thumbnailImage1.addEventListener("click", function () {
    mainImage.src = thumbnailImage1src
});
thumbnailImage2.addEventListener("click", function () {
    mainImage.src = thumbnailImage2src
});
thumbnailImage3.addEventListener("click", function () {
    mainImage.src = thumbnailImage3src
});
thumbnailImage4.addEventListener("click", function () {
    mainImage.src = thumbnailImage4src
});