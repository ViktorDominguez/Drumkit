// case sensitive
// querySelectorAll is relevant
// function should have ()
// when you add a Class dont forget the .
// use the i if inside for
// [] are not valid to count the lenght
// instead of using button to count the buttons use a class, otherwise other non-intended buttons might be counted
var qbuttons = document.querySelectorAll("button").length;

for (var i = 0; i < qbuttons; i++) {
document.querySelectorAll("button")[i].addEventListener("click",function(){
    //alert("Anonimuous function");

    var letter = this.innerHTML; 

    switch (letter) {
        case "T1":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
        case "T2":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
        case "T3":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
        case "T4":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
        case "S":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
        case "K":
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
        case "H":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
        default:
            break;
    }
    
});
}


/*
function su(a,b){
    return a + b;
}
function re(a,b){
    return a - b;
}
function mu(a,b){
    return a * b;
}
function di(a,b){
    return a/b;
}
function calc (a,b,operator){
    return operator(a,b);
}
*/