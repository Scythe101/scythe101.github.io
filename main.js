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
  document.getElementById("mySidenav").style.overflow = "auto";
  // document.getElementById("mySidenav").style.whiteSpace = "normal";
  isOpen=true;
  document.getElementById("mainContainer").style.opacity = "0.4";
  document.getElementById("mainContainer").style.filter= "blur(2px)";
  document.getElementById("mainContainer").style.pointerEvents= "none";
  document.getElementById("mainContainer").style.userSelect= "none";
  document.getElementById("menuButton").style.color= "#ced4de";
  
}
  
function closeNav() {
  document.getElementById("mainContainer").style.opacity = "1";
  document.getElementById("mainContainer").style.filter= "blur(0)";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menuButton").style.position = "fixed";
  document.getElementById("menuButton").style.color = "#3B4252";
  document.getElementById("mainContainer").style.pointerEvents= "auto";
  isOpen=false;
  document.getElementById("mySidenav").style.overflow = "hidden";
  document.getElementById("mySidenav").style.whiteSpace = "nowrap";
  document.getElementById("mainContainer").style.overflow= "hidden";
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

function enhanceSideNav(){
  if (document.getElementById("mySidenav").style.width === "250px"){
    document.getElementById("mySidenav").style.overflow = "normal";
  }
  else{
    document.getElementById("mySidenav").style.overflow = "nowrap";
  }
}

document.addEventListener("click", function(e){
  x=e.clientX;
  y=e.clientY;
  var elementMouseIsOver = document.elementFromPoint(x,y);
  if (!(elementMouseIsOver.className=="sidenav"||elementMouseIsOver.id=="menuButton")){
    closeNav();
  }
});

setInterval(enhanceSideNav(), 5);