/**
var x = document.getElementById('appleID'); 
x.value = "enter your id";
document.getElementsByTagName('h1')[0].innerText = "hi there";

var flexDivs = document.getElementsByTagName('div');

console.log(flexDivs.length);

for (i = 1; i < flexDivs.length; i++) {
  flexDivs[i].classList.add("item-box");
}


*/

$('document').ready({
  
 
  
});
  
function enableSignIn() {
  //put this in a function
  //see if AppleID has a value appleID
  var appleIDElem = document.getElementById("appleID");
  var idLength = appleIDElem.value.length;
  //see if PWD has a value password
  var passElem = document.getElementById("password");
  console.log("password:" + passElem.value.length);
  //if they both do, enable the button signInBtn
  if (idLength != 0) {
    //console.log("not equal zero");
    //if they both do, enable the button signInBtn
    document.getElementById('signInBtn').disabled = false;
  } else if (idLength == 0) {
    //console.log("is zero");
    document.getElementById('signInBtn').disabled = true;
  }
}

 enableSignIn();