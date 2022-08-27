var homeTab = document.getElementById('hometab');
var aboutTab = document.getElementById('abouttab');
var contactTab = document.getElementById('contactstab');
function homeActive(){
  
  aboutTab.style.backgroundColor='rgb(31, 197, 86)';
 
  
}
function tabInactive(){
  homeTab.style.backgroundColor='#d0db2d' ;
  aboutTab.style.backgroundColor='#d0db2d' ;
  contactTab.style.backgroundColor='#d0db2d' ;
  
}
function hoverHome(){
  homeTab.style.backgroundColor='rgb(31, 197, 86)';
}
function unhoverHome(){
  homeTab.style.backgroundColor='#d0db2d';
}

function hoverContact(){
  contactTab.style.backgroundColor='rgb(31, 197, 86)';
}
function unhoverContact(){
  contactTab.style.backgroundColor='#d0db2d';
}

var dropDownMenu = document.getElementById('dropdown1');
//Search button color change
function colorActive(){
 
  dropDownMenu.style.backgroundColor='rgb(31, 197, 86)';
  
  
}
function colorInactive(){
  dropDownMenu.style.backgroundColor='#d0db2d' ;
  //dropDownMenu.style.backgroundColor='red';
}

/*function hover(){
  contactTab.style.backgroundColor='rgb(31, 197, 86)';
}
function unhoverHome(){
  contactTab.style.backgroundColor='#d0db2d';
}*/
tabInactive();
homeActive();
/*clear();
for(var i=0;i<textboxes.length;i++){
    console.log(textboxes[i]);
}*/
dropDownMenu.addEventListener('mouseover',colorActive);
dropDownMenu.addEventListener('mouseout',colorInactive);
homeTab.addEventListener('mouseover',hoverHome);
homeTab.addEventListener('mouseout', unhoverHome);

contactTab.addEventListener('mouseover',hoverContact);
contactTab.addEventListener('mouseout', unhoverContact);