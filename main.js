var isOpen=false;
var isOver=false;
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  isOpen=true;
}
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
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
