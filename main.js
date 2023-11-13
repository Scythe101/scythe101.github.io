var isOpen=false;
var isOver=false;
function controlNav(){
  if (isOpen){
    closeNav();
  }
  else{
    openNav();
  }
}
function openNav() {
  
  document.getElementById("mySidenav").style.width = "250px";
  isOpen=true;
  document.getElementById("mainContainer").style.opacity = "0.4";
  document.getElementById("mainContainer").style.filter= "blur(2px)";
  document.getElementById("menuButton").style.color= "#ced4de";
  
}
  
function closeNav() {
  document.getElementById("mainContainer").style.opacity = "1";
  document.getElementById("mainContainer").style.filter= "blur(0)";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menuButton").style.position = "fixed";
  document.getElementById("menuButton").style.color = "#3B4252";
  isOpen=false;
  
}

function teaseNav(){
  if (isOpen!==true){
    document.getElementById("mySidenav").style.width = "7px";
  }
  
}

function closeTeasedNav(){
  if (isOpen==false){
    document.getElementById("mySidenav").style.width = "0";
  }
}
