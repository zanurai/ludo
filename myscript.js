//alert("hello");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let submit = document.querySelector("#submit");

submit.addEventListener("click", function () {
    //alert('hello');
    randomone();
    randomtwo();
    randomthree();
});

function randomone() {
    one.value = Math.floor(Math.random() * 10);
};

function randomtwo() {
    two.value = Math.floor(Math.random() * 10);
};

function randomthree() {
    three.value = Math.floor(Math.random() * 10);
};

