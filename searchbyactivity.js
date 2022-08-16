var activtiyImageList=['pics/activties/diving.jpg', 'pics/activties/cruise.jpg', 'pics/activties/cuisine.png', 'pics/activties/hiking.webp', 'pics/activties/playing.jpg', 'pics/activties/safari.jpg', 'pics/activties/surfing.jpg', 'pics/activties/walking.jpg', 'pics/activties/whale.jpg',];
var activityImage = document.getElementById('activityimage');
//disposable
var but = document.getElementById('testbut');
var but1 = document.getElementById('testbut1');
var count=0;
var t;
var y;
var g;


//-----importnat correction variable

//hello world

var activityImageListReplacement/*=[1,2,3,4,5,6,7,8,9]*/;
//-----

//identify variables
var id=0;
var countNew=2;


var activity1 = document.getElementById('activitytype1');
var activity2 = document.getElementById('activitytype2');
var activity3 = document.getElementById('activitytype3');
var activity4 = document.getElementById('activitytype4');
var activity5 = document.getElementById('activitytype5');
var activity6 = document.getElementById('activitytype6');
var activity7 = document.getElementById('activitytype7');
var activity8 = document.getElementById('activitytype8');
var activity9 = document.getElementById('activitytype9');
var common;
const actvityTypeList=[document.getElementById('activitytype1'),document.getElementById('activitytype2'),document.getElementById('activitytype3'),document.getElementById('activitytype4'),document.getElementById('activitytype5'),document.getElementById('activitytype6'),document.getElementById('activitytype7'),document.getElementById('activitytype8'),document.getElementById('activitytype9')]

const tops=[];
for(var i=0;i<actvityTypeList.length;i++){
   
   common=actvityTypeList[i];
   console.log(common);
   common.style.position='absolute';
   common.style.color='white';
   common.style.left=60+'px';
   common.style.width='250px';
   common.style.backgroundColor='#0aa80a';
   common.style.textAlign='center';
   common.style.height='20px';
   common.style.paddingTop='5px';
   common.style.paddingBottom='5px';
   common.style.borderRadius='20px';
   //common.style.top=parseFloat(common.style.top)+50+'px';
   //common.style.top='200px';
   tops.push(200);
   //common.style.top=parseFloat(common.style.top)+

}

//var activtiyType=document.getElementById('')

activityImage.src=activtiyImageList[0];
activityImageListReplacement=1;
console.log(activityImage.src);

activityImage.style.top=200+'px';
activityImage.style.opacity=1;
activityImage.style.left=320+'px';
activityImage.style.width=700+'px';
activityImage.style.height=400+'px';
activityImage.style.zIndex=3;



var caption = document.getElementsByClassName('testpara');
for(var i =0;i<caption.length;i++){
   console.log(caption[i]);
  // if(i>0){
  //    caption[i].style.top=(350-64*i)+'px';
 //  }else{
      caption[i].style.top=350+'px';
//   }
   
}

// locations lists
var place1 = document.getElementsByClassName('places1');
var place2 = document.getElementsByClassName('places2');
var place3 = document.getElementsByClassName('places3');
var place4 = document.getElementsByClassName('places4');
var place5 = document.getElementsByClassName('places5');
var place6 = document.getElementsByClassName('places6');
var place7 = document.getElementsByClassName('places7');
var place8 = document.getElementsByClassName('places8');
var place9 = document.getElementsByClassName('places9');
/*place1[0].style.color='blue';
place2[0].style.color='blue';
place3[0].style.color='blue';
place4[0].style.color='blue';
place5[0].style.color='blue';
place6[0].style.color='blue';
place7[0].style.color='blue';
place8[0].style.color='blue';

place9[0].style.color='blue';*/

const placeList=[place1,place2,place3,place4,place5,place6,place7,place8,place9];


//cover info
var coverAnimation;
var cover = document.getElementById('coverInfo');
cover.style.opacity=1;
//cover.style.display='none';
cover.style.height=505+'px';
//cover.style.zIndex=1;
//cover button
var coverButton = document.getElementById('start');
coverButton.style.opacity=1;

//cover screen dissappear
function coverDisappear(){
   if(cover.style.opacity<=1 && cover.style.opacity>0 && coverButton.style.opacity<=1 && coverButton.style.opacity>0){
      cover.style.opacity=cover.style.opacity-0.01;
      coverButton.style.opacity=coverButton.style.opacity-0.01;


      //console.log('yooon');
   }else{
      window.clearInterval();
      cover.style.display='none';
     // coverButton.style.display='none';
      //g=window.setInterval(listen,3000);
     
     
      
   }
}
function coverCaptionOn(){
   
 but1.style.opacity=1;
}
coverCaptionOff(); 
function coverCaptionOff(){
   for(var i =0;i<actvityTypeList.length;i++){
      actvityTypeList[i].style.backgroundColor='rgb(29, 146, 29)';
      console.log('astivitii');
   }
   but1.style.opacity=0;
  }

function testfunct(){
   g=window.setInterval(listen,3000);

}
function coverDisappearCall(){
  coverAnimation= window.setInterval(coverDisappear,5);
}

function coverHover(){
   coverButton.style.backgroundColor='rgb(4, 61, 4)';
}
function coverUnHover(){
   coverButton.style.backgroundColor='rgb(29, 146, 29)';
}


function disapear(){
   for(var i =0;i<caption.length;i++){
      caption[i].style.display='none';
   }
   for(var n =0;n<placeList.length;n++){
      var currentplace;
      currentplace = placeList[n];
      for(var j=0;j<currentplace.length;j++){
         currentplace[j].style.display='none';
      }
   }


}

   //reapperiang of place list
  function appear(){
for(var i =0;i<place1.length;i++){
   if(i==0){
      place1[i].style.display='block';
      continue;
   }else{
      place1[i].style.top=300+(30*i)+'px';
      place1[i].style.display='block';


   }
}

   
   }
disapear();
caption[0].style.display='block';
appear();

function nextRight(){
   console.log('nextright check');
   console.log(id!=0);
   console.log(id);
   disapear();
   if(id!=0){
      console.log('id!=0 check');
      switch(id){
         
         case 1:
            activityImage.src=activtiyImageList[0];
            activityImageListReplacement=1;
            caption[0].style.display='block';
            for(var i =0;i<place1.length;i++){
               if(i==0){
                  place1[i].style.display='block';
                  
                  continue;
               }else{
                  place1[i].style.top=300+(30*i)+'px';
                  place1[i].style.display='block';


               }
              
               
            }
           /* for(var i = 0;i<place1.length;i++){


            }*/
            id=0
            break;
         case 2:
            activityImage.src=activtiyImageList[1];
            caption[1].style.display='block';
            activityImageListReplacement=2;
            for(var i =0;i<place2.length;i++){
               place2[i].style.display='block';
               if(i==0){
                  place2[i].style.display='block';
                  continue;
               }else{
                  place2[i].style.top=300+(30*i)+'px';
                  place2[i].style.display='block';


               }
               
            }
            id=0
            break;
         case 3:
            activityImage.src=activtiyImageList[2];
            caption[2].style.display='block';
            activityImageListReplacement=3;
            for(var i =0;i<place3.length;i++){
               place3[i].style.display='block';
               if(i==0){
                  place3[i].style.display='block';
                  continue;
               }else{
                  place3[i].style.top=300+(30*i)+'px';
                  place3[i].style.display='block';


               }
            }
            id=0;
            break;
         case 4:
            activityImage.src=activtiyImageList[3];
            caption[3].style.display='block';
            activityImageListReplacement=4;
            for(var i =0;i<place4.length;i++){
               place4[i].style.display='block';
               if(i==0){
                  place4[i].style.display='block';
                  continue;
               }else{
                  place4[i].style.top=300+(30*i)+'px';
                  place4[i].style.display='block';


               }
            }
            id=0
            break;
         case 5:
            activityImage.src=activtiyImageList[4];
            caption[4].style.display='block';
            activityImageListReplacement=5;
            for(var i =0;i<place5.length;i++){
               place5[i].style.display='block';
               if(i==0){
                  place5[i].style.display='block';
                  continue;
               }else{
                  place5[i].style.top=300+(30*i)+'px';
                  place5[i].style.display='block';


               }
            }
            id=0;
            break;
         case 6:
            activityImage.src=activtiyImageList[5];
            caption[5].style.display='block';
            activityImageListReplacement=6;
            for(var i =0;i<place6.length;i++){
               place6[i].style.display='block';
               if(i==0){
                  place6[i].style.display='block';
                  continue;
               }else{
                  place6[i].style.top=300+(30*i)+'px';
                  place6[i].style.display='block';


               }
            }
            id=0
            break;
         case 7:
            activityImage.src=activtiyImageList[6];
            caption[6].style.display='block';
            activityImageListReplacement=7;
            for(var i =0;i<place7.length;i++){
               place7[i].style.display='block';
               if(i==0){
                  place7[i].style.display='block';
                  continue;
               }else{
                  place7[i].style.top=300+(30*i)+'px';
                  place7[i].style.display='block';


               }
            }
            id=0;
            break;
         case 8:
            activityImage.src=activtiyImageList[7];
            caption[7].style.display='block';
            activityImageListReplacement=8;
            for(var i =0;i<place8.length;i++){
               place8[i].style.display='block';
               if(i==0){
                  place8[i].style.display='block';
                  continue;
               }else{
                  place8[i].style.top=300+(30*i)+'px';
                  place8[i].style.display='block';


               }
            }
            id=0
            break;
         case 9:
            activityImage.src=activtiyImageList[8];
            caption[8].style.display='block';
            activityImageListReplacement=9;
            for(var i =0;i<place9.length;i++){
               place9[i].style.display='block';
               if(i==0){
                  place9[i].style.display='block';
                  continue;
               }else{
                  place9[i].style.top=300+(30*i)+'px';
                  place9[i].style.display='block';


               }
            }
            id=0;
            break;
      }

   }
   else{disapear();
   switch(activityImageListReplacement){
      case 1:
         activityImage.src=activtiyImageList[1];
         activityImageListReplacement=2;
         caption[1].style.display='block';
         for(var i =0;i<place2.length;i++){
           // place2[i].style.display='block';
            if(i==0){
               place2[i].style.display='block';
               continue;
            }else{
               place2[i].style.top=300+(30*i)+'px';
               place2[i].style.display='block';


            }
            
         }
         
         break;
      case 2:
         activityImage.src=activtiyImageList[2];
         activityImageListReplacement=3;
         caption[2].style.display='block';
         for(var i =0;i<place3.length;i++){
           // place3[i].style.display='block';
            if(i==0){
               place3[i].style.display='block';
               continue;
            }else{
               place3[i].style.top=300+(30*i)+'px';
               place3[i].style.display='block';


            }
         }
         break;
      case 3:
         activityImage.src=activtiyImageList[3];
         activityImageListReplacement=4;
         caption[3].style.display='block';
         for(var i =0;i<place4.length;i++){
           // place4[i].style.display='block';
            if(i==0){
               place4[i].style.display='block';
               continue;
            }else{
               place4[i].style.top=300+(30*i)+'px';
               place4[i].style.display='block';


            }
         }
         break;
      case 4:
         activityImage.src=activtiyImageList[4];
         activityImageListReplacement=5;
         caption[4].style.display='block';
         for(var i =0;i<place5.length;i++){
          //  place5[i].style.display='block';
            if(i==0){
               place5[i].style.display='block';
               continue;
            }else{
               place5[i].style.top=300+(30*i)+'px';
               place5[i].style.display='block';


            }
         }
         break;
      case 5:
         activityImage.src=activtiyImageList[5];
         activityImageListReplacement=6;
         caption[5].style.display='block';
         for(var i =0;i<place6.length;i++){
           // place6[i].style.display='block';
            if(i==0){
               place6[i].style.display='block';
               continue;
            }else{
               place6[i].style.top=300+(30*i)+'px';
               place6[i].style.display='block';


            }
         }
         break;
      case 6:
         activityImage.src=activtiyImageList[6];
         activityImageListReplacement=7;
         caption[6].style.display='block';
         for(var i =0;i<place7.length;i++){
          //  place7[i].style.display='block';
            if(i==0){
               place7[i].style.display='block';
               continue;
            }else{
               place7[i].style.top=300+(30*i)+'px';
               place7[i].style.display='block';


            }
         }
         break;
      case 7:
         activityImage.src=activtiyImageList[7];
         activityImageListReplacement=8;
         caption[7].style.display='block';
         for(var i =0;i<place8.length;i++){
          //  place8[i].style.display='block';
            if(i==0){
               place8[i].style.display='block';
               continue;
            }else{
               place8[i].style.top=300+(30*i)+'px';
               place8[i].style.display='block';


            }
         }
         break;
      case 8:
         activityImage.src=activtiyImageList[8];
         activityImageListReplacement=9;
         caption[8].style.display='block';
         for(var i =0;i<place9.length;i++){
          //  place9[i].style.display='block';
            if(i==0){
               place9[i].style.display='block';
               continue;
            }else{
               place9[i].style.top=300+(30*i)+'px';
               place9[i].style.display='block';


            }
         }
         break;
      case 9:
         activityImage.src=activtiyImageList[0];
         activityImageListReplacement=1;
         caption[0].style.display='block';
         for(var i =0;i<place1.length;i++){
           // place1[i].style.display='block';
            if(i==0){
               place1[i].style.display='block';
               continue;
            }else{
               place1[i].style.top=300+(30*i)+'px';
               place1[i].style.display='block';


            }
         }
         break;
   }
}
}

function fadeOn(){
 
 if(activityImage.style.opacity<=1 &&activityImage.style.opacity>0){
    activityImage.style.opacity=activityImage.style.opacity-0.01
    console.log('yooon');
 }else{
    window.clearInterval(t);
    //count++;
    nextRight();
    y=window.setInterval(fadeOff,5);
    //window.setInterval(fadeOn,5);
    
 }
// console.log(count);

}

function fadeOff(){
   // console.log('paaaaak off');
 if(activityImage.style.opacity>=0 && activityImage.style.opacity<1){
    activityImage.style.opacity=parseFloat(activityImage.style.opacity)+0.01
    console.log('yooooff');
    if(id!=0){
      nextRight();
    }
 }else{
    window.clearInterval(y);
   // window.setInterval(fadeOn,5);
    //nextRight();
    count=0;
    countNew=2;
 }
}
//t=  window.setInterval(right,5);

function listen(){
   countNew=1;
   console.log('listen');
   t= window.setInterval(fadeOn,5);
  // window.clearInterval(t);
  // t;
 
}


function info(){
  
    g = window.setInterval(listen,3000);

   // window.setInterval(listen,2000);
}
function info2(){
   console.log(countNew);
}

function selectActivity(){
   coverCaptionOn();
   activityHover();
   window.clearInterval(g);
   if(countNew>1){
      console.log('imassssshhh');
      t=window.setInterval(fadeOn,5);
   }

   //activityImage.style.opacity=0;


}

//identifyer functions
function identify1(){
   id=1;
   console.log(id);
   console.log(id!=0);

}
function identify2(){
   id=2;
   console.log(id);
   console.log(id!=0);

}
function identify3(){
   id=3;
   console.log('id 333333');
   console.log(id);
   console.log(id!=0);

}
function identify4(){
   id=4;
   console.log('hiikiiiing');
   console.log(id);
   console.log(id!=0);

}
function identify5(){
   console.log('id 5 bittttchhh');
   id=5;
   console.log(id);
   console.log(id!=0);

}
function identify6(){
   id=6;
   console.log(id);
   console.log(id!=0);

}
function identify7(){
   id=7;
   console.log(id);
   console.log(id!=0);
//testbut1
}
function identify8(){
   id=8;
   console.log(id);
   console.log(id!=0);

}
function identify9(){
   id=9;
   console.log(id);
   console.log(id!=0);

}
function hik(){
   console.log('da pk is goi on');
}

function activityNonHover(){
   for(var i =0;i<actvityTypeList;i++){
      actvityTypeList[i].style.backgroundColor='rgb(29, 146, 29)';
      console.log('astivitiinonhover');
   }

   /*switch(id){
      case 1:

         break;
      case 2:

         break;
      case 3:

         break;
      case 4:

         break;
      case 5:

         break;
      case 6:

         break;
      case 7:

         break;
      case 8:

         break;
      case 9:

         break;
   }*/

}
function activityHover(){
   for(var i =0;i<actvityTypeList.length;i++){
      actvityTypeList[i].style.backgroundColor='rgb(29, 146, 29)';
      console.log('astivitii');
   }
   console.log('hover');
   switch(id){

      case 1:
         activity1.style.backgroundColor='#14e45a';
         break;
      case 2:
         activity2.style.backgroundColor='#14e45a';
         break;
      case 3:
         activity3.style.backgroundColor='#14e45a';
         break;
      case 4:
         activity4.style.backgroundColor='#14e45a';
         break;
      case 5:
         activity5.style.backgroundColor='#14e45a';
         break;
      case 6:
         activity6.style.backgroundColor='#14e45a';
         break;
      case 7:
         activity7.style.backgroundColor='#14e45a';
         break;
      case 8:
         activity8.style.backgroundColor='#14e45a';
         break;
      case 9:
         activity9.style.backgroundColor='#14e45a';
         break;
   }

}

//g=window.setInterval(listen,3000);
//window.clearInterval(g);
//but.addEventListener('click',listen);
but.addEventListener('click',info2);

//but1.addEventListener('click',nextRight);
but1.addEventListener('click',info);
//but1.addEventListener('click', nextRight);
//but1.addEventListener('click',selectActivity);
activity1.addEventListener('click',identify1);
activity1.addEventListener('click',selectActivity);
activity2.addEventListener('click',identify2);
activity2.addEventListener('click',selectActivity);
activity3.addEventListener('click',identify3);
activity3.addEventListener('click',selectActivity);
activity4.addEventListener('click',hik);
activity4.addEventListener('click',identify4);
activity4.addEventListener('click',selectActivity);
activity5.addEventListener('click',identify5);
activity5.addEventListener('click',selectActivity);
activity6.addEventListener('click',identify6);
activity6.addEventListener('click',selectActivity);
activity7.addEventListener('click',identify7);
activity7.addEventListener('click',selectActivity);
activity8.addEventListener('click',identify8);
activity8.addEventListener('click',selectActivity);
activity9.addEventListener('click',identify9);
activity9.addEventListener('click',selectActivity);
coverButton.addEventListener('click', coverDisappearCall);
coverButton.addEventListener('click', testfunct);
coverButton.addEventListener('mouseover', coverHover);
coverButton.addEventListener('mouseout', coverUnHover);
but1.addEventListener('click',coverCaptionOff);
