var submit = document.getElementById('submit');
var textboxes;
let nameValidate;
let emailValidate;
let contactNumValidate;
let msgValidate;
var nameResult
var emailResult;
var contactNumResult;
var msgResult;
var clearNot;
textboxes= document.getElementsByTagName('input');

var errors = document.getElementsByClassName('Errormsg');
for(var i=0;i<errors.length;i++){
    errors[i].style.color = 'red';
    errors[i].style.position="absolute";
    errors[i].style.top = 190+(i*35)+'px';
    errors[i].style.left = '870px';
   
}
console.log(errors[2].style.top);

function errorDisappear(){
  for(var i =0;i<errors.length;i++){
    errors[i].style.display='none';
  }
}
errorDisappear();
function clear(){
    
    if(clearNot<1){
      for(var i =0;i<textboxes.length;i++){
        textboxes[i].value="";
     }
    } 
     

}
function validate(){
  clearNot=0;
      nameValidate = /[\\\d]+/;
      nameResult=nameValidate.test(textboxes[0].value);
      //console.log('name '+nameResult);
      if(nameResult){
        errors[0].style.display='block';
        clearNot++;

      }
      //console.log(nameResult);

      emailValidate = /[\\\w]+@[\\\w]+/;
      emailResult = emailValidate.test(textboxes[1].value);
      //console.log(emailResult);
      if(!emailResult){
        console.log(errors[1]);
        errors[1].style.display='block';
        clearNot++;
      }

      contactNumValidate = /0[\\\d]{9}/;
      contactNumResult = contactNumValidate.test(textboxes[2].value);
      //console.log(contactNumResult);
      if(!contactNumResult){
        errors[2].style.display='block';
        clearNot++;
      }

      msgValidate = /.+/;
      msgResult = msgValidate.test(textboxes[3].value);
      console.log(msgResult);

     



}

var homeTab = document.getElementById('hometab');
var aboutTab = document.getElementById('abouttab');
var contactTab = document.getElementById('contactstab');
function homeActive(){
  
  contactTab.style.backgroundColor='rgb(31, 220, 109)';
 
  
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

function hoverAbout(){
  aboutTab.style.backgroundColor='rgb(31, 197, 86)';
}
function unhoverAbout(){
  aboutTab.style.backgroundColor='#d0db2d';
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

aboutTab.addEventListener('mouseover',hoverAbout);
aboutTab.addEventListener('mouseout', unhoverAbout);
submit.addEventListener('click', errorDisappear);
submit.addEventListener('click',validate);
submit.addEventListener('click',clear);
