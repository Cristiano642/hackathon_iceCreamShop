

const element = document.getElementById("myBtn");
const element1 = document.getElementById("myBtn1");
const element2 = document.getElementById("myBtn2");
const element3 = document.getElementById("myBtn3");

element.addEventListener("click", myPink);
element1.addEventListener("click", myGreen);
element2.addEventListener("click", myBrown);
element3.addEventListener("click", myWhite);

function myGreen() {
    document.getElementById("myImg").src = "Green IceCream.png";
}

function myPink() {
    document.getElementById("myImg").src = "Pink IceCream.png";
}

function myBrown() {
    document.getElementById("myImg").src = "Brown IceCream.png";
}

function myWhite() {
    document.getElementById("myImg").src = "White IceCream.png";
}

//Slider

