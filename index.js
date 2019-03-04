//get the img file
var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);

//get the img file for the second dice:
var randomImage1 = "images/dice"+randomNumber1+".png";

document.querySelector("img.img1").setAttribute("src",randomImage1);

var randomNumber2= Math.floor(((Math.random())*6)+1);
var randomImage2= "images/dice"+randomNumber2+".png";

document.querySelector("img.img2").setAttribute("src",randomImage2);
//if player 1 wins:
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🏁 Player 1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins 🏁";
}
else{
  document.querySelector("h1").innerHTML="Draw!!";
}
