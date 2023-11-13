var isOpen=false;
var isOver=false;
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  isOpen=true;
  document.getElementById("mainContainer").style.opacity = "0.4";
  document.getElementById("mainContainer").style.filter= "blur(2px)";
}
  
function closeNav() {
  document.getElementById("mainContainer").style.opacity = "1";
  document.getElementById("mainContainer").style.filter= "blur(0)";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menuButton").style.position = "fixed";
  isOpen=false;
  
}

function teaseNav(){
  document.getElementById("mySidenav").style.width = "7px";
}

function closeTeasedNav(){
  if (isOpen==false){
    document.getElementById("mySidenav").style.width = "0";
  }
}
