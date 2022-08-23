console.log("test big00");
var currentimage;
var count=0;
var leftSliderButton=document.getElementById('slider-left');
var rightSliderButton=document.getElementById('slider-right');
var r;
var t;
var y;
var u;
var mouse;

var xxx = document.getElementsByClassName('slider-info');
var viewMore = document.getElementById('viewmore');
function viewmoreHover(){
  viewMore.style.color='black';
}
function viewmoreUnHover(){
  viewMore.style.color='white';
}
//---
var clickOn = document.getElementsByClassName('clickOn');
clickOn[0].style.opacity = 1;
//---

//geo,cli,flora
var currentCloud;
var cloudNo;
var dedutingAmount;

var geographyTopic = document.getElementById('geography');
var climateTopic = document.getElementById('climate');
var floraTopic = document.getElementById('flora');

var currentTopic;
var currentTopicDe;
var topicSizeAnime1;
var topicSizeAnime2;
var topicSizeAnime3;

var topicSizeDeAnime1;
var topicSizeDeAnime2;
var topicSizeDeAnime3;

var mouseOverRecognition;
var mouseOutRecognition;


const topicList = [document.getElementById('geography'),document.getElementById('climate'),document.getElementById('flora')];

for(var i =0;i<topicList.length;i++){
  topicList[i].style.height='35px';
  topicList[i].style.width='250px';
  topicList[i].style.fontSize='25px';

}








/***new edit */
var auto;


var count;
var count1;
var count2;

var countimg11;
var countimg12;

var countimg21;
var countimg22;

var countimg41;
var countimg42;

var countimg51;
var countimg52;
/*disposable*/ var tesss;
var img;
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var buttonleft = document.getElementById('slider-left');
var buttonright = document.getElementById('slider-right');
// var buttontest = document.getElementById('test');


var r;
var l;
var img1r;
var img1l;

var img2r;
var img2l;

var img4r;
var img4l;

var img5r;
var img5l;

var frontImageArea = document.getElementById('frontImageArea');

/***new edit */
var cloudanime;
var cloudanimeContract1;
var cloudanimeContract2;
var cloudanimeContract3;


/***********************/
img1.style.width='700px';
img1.style.height='300px';
img1.style.top='220px';
img1.style.left='130px';
img1.style.zIndex=1;

img2.style.width='800px';
img2.style.height='400px';
img2.style.top='170px';
img2.style.left='180px';
img2.style.zIndex=2;



img3.style.width='900px';
img3.style.height='500px';
img3.style.top='120px';
img3.style.left='230px';

img4.style.width='800px';
img4.style.height='400px';
img4.style.top='170px';
img4.style.left='380px';
img4.style.zIndex=2;

img5.style.width='700px';
img5.style.height='300px';
img5.style.top='220px';
img5.style.left='530px';

/*var leaf1 = document.getElementsByClassName('leaf1');
for(var i =0;i<leaf1.length;i++){
  leaf1[i].style.left=50+(i*9)+'px';
  leaf1[i].style.top=205+(i*(2+i))+'px';
  leaf1[i].style.height=80-(i*2)+'px';
}

var leaf2 = document.getElementsByClassName('leaf2');
for(var i =0;i<leaf2.length;i++){
  leaf2[i].style.left=85+(i*8)+'px';
  leaf2[i].style.top=170+(i*(4+i))+'px';
  leaf2[i].style.height=50-(i*2)+'px';
}*/

//Geoprahpy, climate, and flora
var geo = document.getElementById('geography');
var climmate = document.getElementById('climate');
var flora = document.getElementById('flora');

 
const clouds = [document.getElementById('geographycloud'),document.getElementById('climatecloud'),document.getElementById('floracloud')];

clouds[0].style.width="50px";
clouds[1].style.width="60px";
clouds[2].style.width="70px";

var cloudDescription=document.getElementsByClassName('ydesc');
/*console.log(cloudDescription[0]);
console.log(cloudDescription[1]);
console.log(cloudDescription[2]);*/
function cloudDescriptionHide(){
  for(var i =0;i<cloudDescription.length;i++){
    cloudDescription[i].style.display='none';
  }
}
cloudDescriptionHide();
function expand(){


  if(parseFloat(currentCloud.style.width)<1285){
    currentCloud.style.width=parseFloat(currentCloud.style.width)+8+'px';
    cloudDescriptionHide();
   // console.log('hereere wee gooo');
  }else{
    window.clearInterval(cloudanime);
    //console.log('were done');
    if(currentCloud==clouds[0]){
      cloudDescription[0].style.display='block';
    }else if(currentCloud==clouds[1]){
      cloudDescription[1].style.display='block';
    }else if(currentCloud==clouds[2]){
      cloudDescription[2].style.display='block';

    }
  }

 





}
 //disposable
tesss = document.getElementById('tess');
tesss.style.zIndex=10;
function tessinfo(){
  console.log(currentCloud);
  console.log(clouds[0]);
  console.log(clouds[1]);
  console.log(clouds[2]);
}
tesss.addEventListener('click',tessinfo);

function contract1(){
  if(parseFloat(clouds[0].style.width)>50){
    clouds[0].style.width=parseFloat(clouds[0].style.width)-8+'px';
  //  console.log('hereere wee gooo contract');
   // cloudDescriptionHide();

  }else{
    window.clearInterval(cloudanimeContract1);


  }
}
function contract2(){
  if(parseFloat(clouds[1].style.width)>60){
    clouds[1].style.width=parseFloat(clouds[1].style.width)-8+'px';
  //  console.log('hereere wee gooo contract2');
  //  cloudDescriptionHide();

  }else{
    window.clearInterval(cloudanimeContract2)
    console.log('contract 2 done');


  }
}
function contract3(){
  if(parseFloat(clouds[2].style.width)>70){
    clouds[2].style.width=parseFloat(clouds[2].style.width)-8+'px';
   // console.log('hereere wee gooo contract3');
   // cloudDescriptionHide();

  }else{
    window.clearInterval(cloudanimeContract3);
    console.log('contract 3');


  }
}
/*console.log(clouds[1]);

console.log(clouds[2]);*/
function cloudidentify1(){
  clickOn[0].style.opacity = 0;
 //cloudNo=1;
 currentCloud=clouds[0];
 //dedutingAmount=0;
 cloudanime = window.setInterval(expand,5);
 cloudanimeContract2=window.setInterval(contract2,5);
 cloudanimeContract3=window.setInterval(contract3,5);
 console.log("geo");

}
function cloudidentify2(){
  //cloudNo=2;
  currentCloud=clouds[1];
 // dedutingAmount=10;
 cloudanime = window.setInterval(expand,5);
 cloudanimeContract1=window.setInterval(contract1,5);
 cloudanimeContract3=window.setInterval(contract3,5);
 console.log("climate");
 }
function cloudidentify3(){
  //cloudNo=3;
  currentCloud=clouds[2];
  //dedutingAmount=20;
 cloudanime = window.setInterval(expand,5);
 cloudanimeContract2=window.setInterval(contract2,5);
 cloudanimeContract1=window.setInterval(contract1,5);
 console.log("flora");
 }








function imgright3(){
  
    
    //right4
    if(parseFloat(img3.style.height)>400 && parseFloat(img3.style.left)<380 &&count1!=2){
        count1=1;
        hide();
       // if(parseFloat(img3.style.left)>=200){}
        console.log('img right 4 fisrt if done');
        img3.style.width=parseFloat( img3.style.width)-2+'px';
        img3.style.height=parseFloat(img3.style.height)-2+'px';
        img3.style.top=parseFloat( img3.style.top)+1+'px';
        img3.style.left=parseFloat(img3.style.left)+3+'px';
        img3.style.zIndex=2;
        img5.style.zIndex=1;
       // xxx[1].style.display='block';
        

    }else if(count1==1){
        console.log('imgright4 first else done');
        window.clearInterval(r);
        //count=0;
        count1=0;
      //  hide();
    }

    //right3
    else if(parseFloat(img3.style.height)<500 && parseFloat(img3.style.left)<230 && count1!=3 && count1!=4 && parseFloat(img3.style.height)>=400){
      hide();
        console.log('img right 3 fisrt if done');
        count1=2;
        img3.style.width=parseFloat( img3.style.width)+2+'px';
        img3.style.height=parseFloat(img3.style.height)+2+'px';
        img3.style.top=parseFloat( img3.style.top)-1+'px';
        img3.style.left=parseFloat(img3.style.left)+1+'px';
        img3.style.zIndex=3;

    }else if(count1==2){
        console.log('imgright3 first else done');
        window.clearInterval(r);
      //  count=0;
        count1=0;
        xxx[0].style.display='block';
    }
    //right5   4-5
    else if(parseFloat(img3.style.height)>300 && parseFloat(img3.style.left)<530 && count1!=4){
      hide();
        console.log('img right 5 fisrt if done');
        count1=3;
        img3.style.width=parseFloat( img3.style.width)-2+'px';
        img3.style.height=parseFloat(img3.style.height)-2+'px';
        img3.style.top=parseFloat( img3.style.top)+1+'px';
        img3.style.left=parseFloat(img3.style.left)+3+'px';
        img3.style.zIndex=1;

    }else if(count1==3){
        console.log('imgright5 first else done');
        window.clearInterval(r);
      //  count=0;
        count1=0;
    }

    //right2
    else if(parseFloat(img3.style.height)<400 && parseFloat(img3.style.left)<180 && count1!=5){
      hide();
        console.log('img right 2 fisrt if done');
        count1=4;
        img3.style.width=parseFloat( img3.style.width)+2+'px';
        img3.style.height=parseFloat(img3.style.height)+2+'px';
        img3.style.top=parseFloat( img3.style.top)-1+'px';
        img3.style.left=parseFloat(img3.style.left)+1+'px';
        img3.style.zIndex=2;

    }else if(count1==4){
        console.log('imgright2 first else done');
        window.clearInterval(r);
      //  count=0;
        count1=0;
    }

    //right1
    else if(parseFloat(img3.style.height)==300 && parseFloat(img3.style.left)>130 && count1!=6){
      hide();
        console.log('img right 1 fisrt if done');
        count1=5;
       // img3.style.width=parseFloat( img3.style.width)+2+'px';
       // img3.style.height=parseFloat(img3.style.height)+2+'px';
       // img3.style.top=parseFloat( img3.style.top)-1+'px';
        img3.style.left=parseFloat(img3.style.left)-8+'px';
        img3.style.zIndex=1;

    }else if(count1==5){
        console.log('imgright1 first else done');
        window.clearInterval(r);
      //  count=0;
        count1=0;
    }


    
    

}


function imgleft3(){

  
    //left2
    if(parseFloat(img3.style.height)>400 && parseFloat(img3.style.left)>180 && count2!=2){
        console.log('imgleft2 fisrt if done');
        hide();
        count2=1;
        img3.style.width=parseFloat( img3.style.width)-2+'px';
        img3.style.height=parseFloat(img3.style.height)-2+'px';
        img3.style.top=parseFloat( img3.style.top)+1+'px';
        img3.style.left=parseFloat(img3.style.left)-1+'px';
        img3.style.zIndex=2;
        

    }else if(count2==1){
        console.log('imgleft2 first else done');
        count2=0;
        window.clearInterval(l);
     //   count=1;
        
    }


    //left3
    else if(parseFloat(img3.style.height)<500 && parseFloat(img3.style.left)>230 && count2!=3 && parseFloat(img3.style.height)>=400){
      hide();
        console.log('imgleft3 fisrt if done');
        count2=2;
        img3.style.width=parseFloat( img3.style.width)+2+'px';
        img3.style.height=parseFloat(img3.style.height)+2+'px';
        img3.style.top=parseFloat( img3.style.top)-1+'px';
        img3.style.left=parseFloat(img3.style.left)-3+'px';
        img3.style.zIndex=3;

    }else if(count2==2){
        console.log('imgleft3 first else done');
        window.clearInterval(l);
        count2=0;
        xxx[0].style.display='block';
      //  count=1;
        
    }

    //left4
    else if(parseFloat(img3.style.height)<400 && parseFloat(img3.style.left)>380 && count2!=4 && count2!=5){
      hide();
        console.log('imgleft4 fisrt if done');
        count2=3;
        img3.style.width=parseFloat( img3.style.width)+2+'px';
        img3.style.height=parseFloat(img3.style.height)+2+'px';
        img3.style.top=parseFloat( img3.style.top)-1+'px';
        img3.style.left=parseFloat(img3.style.left)-3+'px';
        img3.style.zIndex=2;

    }else if(count2==3){
        console.log('imgleft4 first else done');
        window.clearInterval(l);
        count2=0;
      //  count=1;
        
    }

    //left1
    else if(parseFloat(img3.style.height)>300 && parseFloat(img3.style.left)>130){
      hide();
        console.log('imgleft1 fisrt if done');
        count2=4;
        img3.style.width=parseFloat( img3.style.width)-2+'px';
        img3.style.height=parseFloat(img3.style.height)-2+'px';
        img3.style.top=parseFloat( img3.style.top)+1+'px';
        img3.style.left=parseFloat(img3.style.left)-1+'px';
        img3.style.zIndex=1;

    }else if(count2==4){
        console.log('imgleft1 first else done');
        window.clearInterval(l);
        count2=0;
      //  count=1;
        
    }

    //left5
    else if(parseFloat(img3.style.height)==300 && parseFloat(img3.style.left)<530){
      hide();
        console.log('imgleft5 fisrt if done');
        count2=5;
        //img3.style.width=parseFloat( img3.style.width)-2+'px';
       // img3.style.height=parseFloat(img3.style.height)-2+'px';
       // img3.style.top=parseFloat( img3.style.top)+1+'px';
        img3.style.left=parseFloat(img3.style.left)+8+'px';
        img3.style.zIndex=1;

    }else if(count2==5){
        console.log('imgleft5 first else done');
        window.clearInterval(l);
        count2=0;
      //  count=1;
        
    }




}




//******i1********/
function imgright1(){
  
    
  //right4
  if(parseFloat(img1.style.height)>400 && parseFloat(img1.style.left)<380 &&countimg11!=2){
      countimg11=1;
     // if(parseFloat(img3.style.left)>=200){}
      console.log('img right 1 fisrt if done');
      img1.style.width=parseFloat( img1.style.width)-2+'px';
      img1.style.height=parseFloat(img1.style.height)-2+'px';
      img1.style.top=parseFloat( img1.style.top)+1+'px';
      img1.style.left=parseFloat(img1.style.left)+3+'px';
      img1.style.zIndex=2;

  }else if(countimg11==1){
      console.log('imgright4 first else done');
      window.clearInterval(img1r);
      //count=0;
      countimg11=0;
  }

  //right3
  else if(parseFloat(img1.style.height)<500 && parseFloat(img1.style.left)<230 && countimg11!=3 && countimg11!=4 && parseFloat(img1.style.height)>=400){
      console.log('rightttt 333333 yeaahhh');
      countimg11=2;
      img1.style.width=parseFloat( img1.style.width)+2+'px';
      img1.style.height=parseFloat(img1.style.height)+2+'px';
      img1.style.top=parseFloat( img1.style.top)-1+'px';
      img1.style.left=parseFloat(img1.style.left)+1+'px';
      img1.style.zIndex=3;

  }else if(countimg11==2){
      console.log('right 3333  done');
      window.clearInterval(img1r);
    //  count=0;
      countimg11=0;
      xxx[3].style.display='block';
  }
  //right5   4-5
  else if(parseFloat(img1.style.height)>300 && parseFloat(img1.style.left)<530 && countimg11!=4){
      console.log('img right 5 fisrt if done');
      countimg11=3;
      img1.style.width=parseFloat( img1.style.width)-2+'px';
      img1.style.height=parseFloat(img1.style.height)-2+'px';
      img1.style.top=parseFloat( img1.style.top)+1+'px';
      img1.style.left=parseFloat(img1.style.left)+3+'px';
      img1.style.zIndex=1;

  }else if(countimg11==3){
      console.log('imgright5 first else done');
      window.clearInterval(img1r);
    //  count=0;
      countimg11=0;
  }

  //right2
  else if(parseFloat(img1.style.height)<400 && parseFloat(img1.style.left)<180 && countimg11!=5){
      console.log('img right 2 fisrt if done');
      countimg11=4;
      img1.style.width=parseFloat( img1.style.width)+2+'px';
      img1.style.height=parseFloat(img1.style.height)+2+'px';
      img1.style.top=parseFloat( img1.style.top)-1+'px';
      img1.style.left=parseFloat(img1.style.left)+1+'px';
      img1.style.zIndex=2;

  }else if(countimg11==4){
      console.log('imgright2 first else done');
      window.clearInterval(img1r);
    //  count=0;
      countimg11=0;
  }

  //right1
  else if(parseFloat(img1.style.height)==300 && parseFloat(img1.style.left)>130 && countimg11!=6){
      console.log('img biiiiiiiiiiig right done');
      countimg11=5;
     // img3.style.width=parseFloat( img3.style.width)+2+'px';
     // img3.style.height=parseFloat(img3.style.height)+2+'px';
     // img3.style.top=parseFloat( img3.style.top)-1+'px';
      img1.style.left=parseFloat(img1.style.left)-8+'px';
      img1.style.zIndex=1;

  }else if(countimg11==5){
      console.log('img big right  else done');
      window.clearInterval(img1r);
    //  count=0;
      countimg11=0;
  }


  
  

}


function imgleft1(){


  //left2
  if(parseFloat(img1.style.height)>400 && parseFloat(img1.style.left)>180 && countimg12!=2){
      console.log('imgleft2 fisrt if done');
      countimg12=1;
      img1.style.width=parseFloat( img1.style.width)-2+'px';
      img1.style.height=parseFloat(img1.style.height)-2+'px';
      img1.style.top=parseFloat( img1.style.top)+1+'px';
      img1.style.left=parseFloat(img1.style.left)-1+'px';
      img1.style.zIndex=2;
      

  }else if(countimg12==1){
      console.log('imgleft2 first else done');
      countimg12=0;
      window.clearInterval(img1l);
   //   count=1;
      
  }


  //left3
  else if(parseFloat(img1.style.height)<500 && parseFloat(img1.style.left)>230 && countimg12!=3 && parseFloat(img1.style.height)>=400){
      console.log('imgleft3 fisrt if done');
      countimg12=2;
      img1.style.width=parseFloat( img1.style.width)+2+'px';
      img1.style.height=parseFloat(img1.style.height)+2+'px';
      img1.style.top=parseFloat( img1.style.top)-1+'px';
      img1.style.left=parseFloat(img1.style.left)-3+'px';
      img1.style.zIndex=3;

  }else if(countimg12==2){
      console.log('imgleft3 first else done');
      window.clearInterval(img1l);
      countimg12=0;
      xxx[3].style.display='block';
    //  count=1;
      
  }

  //left4
  else if(parseFloat(img1.style.height)<400 && parseFloat(img1.style.left)>380 && countimg12!=4 && countimg12!=5){
      console.log('imgleft4 fisrt if done');
      countimg12=3;
      img1.style.width=parseFloat( img1.style.width)+2+'px';
      img1.style.height=parseFloat(img1.style.height)+2+'px';
      img1.style.top=parseFloat( img1.style.top)-1+'px';
      img1.style.left=parseFloat(img1.style.left)-3+'px';
      img1.style.zIndex=2;

  }else if(countimg12==3){
      console.log('imgleft4 first else done');
      window.clearInterval(img1l);
      countimg12=0;
    //  count=1;
      
  }

  //left1
  else if(parseFloat(img1.style.height)>300 && parseFloat(img1.style.left)>130){
      console.log('imgleft1 fisrt if done');
      countimg12=4;
      img1.style.width=parseFloat( img1.style.width)-2+'px';
      img1.style.height=parseFloat(img1.style.height)-2+'px';
      img1.style.top=parseFloat( img1.style.top)+1+'px';
      img1.style.left=parseFloat(img1.style.left)-1+'px';
      img1.style.zIndex=1;

  }else if(countimg12==4){
      console.log('imgleft1 first else done');
      window.clearInterval(img1l);
      countimg12=0;
    //  count=1;
      
  }

  //left5
  else if(parseFloat(img1.style.height)==300 && parseFloat(img1.style.left)<530){
      console.log('imgleft5 fisrt if done');
      countimg12=5;
      //img3.style.width=parseFloat( img3.style.width)-2+'px';
     // img3.style.height=parseFloat(img3.style.height)-2+'px';
     // img3.style.top=parseFloat( img3.style.top)+1+'px';
      img1.style.left=parseFloat(img1.style.left)+8+'px';
      img1.style.zIndex=1;

  }else if(countimg12==5){
      console.log('imgleft5 first else done');
      window.clearInterval(img1l);
      countimg12=0;
    //  count=1;
      
  }




}



//*********i2**********/
function imgright2(){
  
    
  //right4
  if(parseFloat(img2.style.height)>400 && parseFloat(img2.style.left)<380 &&countimg21!=2){
      countimg21=1;
     // if(parseFloat(img3.style.left)>=200){}
      console.log('img right 1 fisrt if done');
      img2.style.width=parseFloat( img2.style.width)-2+'px';
      img2.style.height=parseFloat(img2.style.height)-2+'px';
      img2.style.top=parseFloat( img2.style.top)+1+'px';
      img2.style.left=parseFloat(img2.style.left)+3+'px';
      img2.style.zIndex=2;

  }else if(countimg21==1){
      console.log('imgright4 first else done');
      window.clearInterval(img2r);
      //count=0;
      countimg21=0;
  }

  //right3
  else if(parseFloat(img2.style.height)<500 && parseFloat(img2.style.left)<230 && countimg21!=3 && countimg21!=4 && parseFloat(img2.style.height)>=400){
      console.log('rightttt 333333 yeaahhh');
      countimg21=2;
      img2.style.width=parseFloat( img2.style.width)+2+'px';
      img2.style.height=parseFloat(img2.style.height)+2+'px';
      img2.style.top=parseFloat( img2.style.top)-1+'px';
      img2.style.left=parseFloat(img2.style.left)+1+'px';
      img2.style.zIndex=3;

  }else if(countimg21==2){
      console.log('right 3333  done');
      window.clearInterval(img2r);
    //  count=0;
      countimg21=0;
      xxx[4].style.display='block';
  }
  //right5   4-5
  else if(parseFloat(img2.style.height)>300 && parseFloat(img2.style.left)<530 && countimg21!=4){
      console.log('img right 5 fisrt if done');
      countimg21=3;
      img2.style.width=parseFloat( img2.style.width)-2+'px';
      img2.style.height=parseFloat(img2.style.height)-2+'px';
      img2.style.top=parseFloat( img2.style.top)+1+'px';
      img2.style.left=parseFloat(img2.style.left)+3+'px';
      img2.style.zIndex=1;

  }else if(countimg21==3){
      console.log('imgright5 first else done');
      window.clearInterval(img2r);
    //  count=0;
      countimg21=0;
  }

  //right2
  else if(parseFloat(img2.style.height)<400 && parseFloat(img2.style.left)<180 && countimg21!=5){
      console.log('img right 2 fisrt if done');
      countimg21=4;
      img2.style.width=parseFloat( img2.style.width)+2+'px';
      img2.style.height=parseFloat(img2.style.height)+2+'px';
      img2.style.top=parseFloat( img2.style.top)-1+'px';
      img2.style.left=parseFloat(img2.style.left)+1+'px';
      img2.style.zIndex=2;

  }else if(countimg21==4){
      console.log('imgright2 first else done');
      window.clearInterval(img2r);
    //  count=0;
      countimg21=0;
  }

  //right1
  else if(parseFloat(img2.style.height)==300 && parseFloat(img2.style.left)>130 && countimg21!=6){
      console.log('img biiiiiiiiiiig right done');
      countimg21=5;
     // img3.style.width=parseFloat( img3.style.width)+2+'px';
     // img3.style.height=parseFloat(img3.style.height)+2+'px';
     // img3.style.top=parseFloat( img3.style.top)-1+'px';
      img2.style.left=parseFloat(img2.style.left)-8+'px';
      img2.style.zIndex=1;

  }else if(countimg21==5){
      console.log('img big right  else done');
      window.clearInterval(img2r);
    //  count=0;
      countimg21=0;
  }


  
  

}



function imgleft2(){


  //left2
  if(parseFloat(img2.style.height)>400 && parseFloat(img2.style.left)>180 && countimg22!=2){
      console.log('imgleft2 fisrt if done');
      countimg22=1;
      img2.style.width=parseFloat( img2.style.width)-2+'px';
      img2.style.height=parseFloat(img2.style.height)-2+'px';
      img2.style.top=parseFloat( img2.style.top)+1+'px';
      img2.style.left=parseFloat(img2.style.left)-1+'px';
      img2.style.zIndex=2;

  }else if(countimg22==1){
      console.log('imgleft2 first else done');
      countimg22=0;
      window.clearInterval(img2l);
   //   count=1;
      
  }


  //left3
  else if(parseFloat(img2.style.height)<500 && parseFloat(img2.style.left)>230 && countimg22!=3 && parseFloat(img2.style.height)>=400){
      console.log('imgleft3 fisrt if done');
      countimg22=2;
      img2.style.width=parseFloat( img2.style.width)+2+'px';
      img2.style.height=parseFloat(img2.style.height)+2+'px';
      img2.style.top=parseFloat( img2.style.top)-1+'px';
      img2.style.left=parseFloat(img2.style.left)-3+'px';
      img2.style.zIndex=3;

  }else if(countimg22==2){
      console.log('imgleft3 first else done');
      window.clearInterval(img2l);
      countimg22=0;
      xxx[4].style.display='block';
    //  count=1;
      
  }

  //left4
  else if(parseFloat(img2.style.height)<400 && parseFloat(img2.style.left)>380 && countimg22!=4 && countimg22!=5){
      console.log('imgleft4 fisrt if done');
      countimg22=3;
      img2.style.width=parseFloat( img2.style.width)+2+'px';
      img2.style.height=parseFloat(img2.style.height)+2+'px';
      img2.style.top=parseFloat( img2.style.top)-1+'px';
      img2.style.left=parseFloat(img2.style.left)-3+'px';
      img2.style.zIndex=2;

  }else if(countimg22==3){
      console.log('imgleft4 first else done');
      window.clearInterval(img2l);
      countimg22=0;
    //  count=1;
      
  }

  //left1
  else if(parseFloat(img2.style.height)>300 && parseFloat(img2.style.left)>130){
      console.log('imgleft1 fisrt if done');
      countimg22=4;
      img2.style.width=parseFloat( img2.style.width)-2+'px';
      img2.style.height=parseFloat(img2.style.height)-2+'px';
      img2.style.top=parseFloat( img2.style.top)+1+'px';
      img2.style.left=parseFloat(img2.style.left)-1+'px';
      img2.style.zIndex=1;

  }else if(countimg22==4){
      console.log('imgleft1 first else done');
      window.clearInterval(img2l);
      countimg22=0;
    //  count=1;
      
  }

  //left5
  else if(parseFloat(img2.style.height)==300 && parseFloat(img2.style.left)<530){
      console.log('imgleft5 fisrt if done');
      countimg22=5;
      //img3.style.width=parseFloat( img3.style.width)-2+'px';
     // img3.style.height=parseFloat(img3.style.height)-2+'px';
     // img3.style.top=parseFloat( img3.style.top)+1+'px';
      img2.style.left=parseFloat(img2.style.left)+8+'px';
      img2.style.zIndex=1;

  }else if(countimg22==5){
      console.log('imgleft5 first else done');
      window.clearInterval(img2l);
      countimg22=0;
    //  count=1;
      
  }




}



//img4
function imgright4(){
  
    
  //right4
  if(parseFloat(img4.style.height)>400 && parseFloat(img4.style.left)<380 &&countimg41!=2){
      countimg41=1;
     // if(parseFloat(img3.style.left)>=200){}
      console.log('img right 1 fisrt if done');
      img4.style.width=parseFloat( img4.style.width)-2+'px';
      img4.style.height=parseFloat(img4.style.height)-2+'px';
      img4.style.top=parseFloat( img4.style.top)+1+'px';
      img4.style.left=parseFloat(img4.style.left)+3+'px';
      img4.style.zIndex=2;

  }else if(countimg41==1){
      console.log('imgright4 first else done');
      window.clearInterval(img4r);
      //count=0;
      countimg41=0;
  }

  //right3
  else if(parseFloat(img4.style.height)<500 && parseFloat(img4.style.left)<230 && countimg41!=3 && countimg41!=4 && parseFloat(img4.style.height)>=400){
      console.log('rightttt 333333 yeaahhh');
      countimg41=2;
      img4.style.width=parseFloat( img4.style.width)+2+'px';
      img4.style.height=parseFloat(img4.style.height)+2+'px';
      img4.style.top=parseFloat( img4.style.top)-1+'px';
      img4.style.left=parseFloat(img4.style.left)+1+'px';
      img4.style.zIndex=3;

  }else if(countimg41==2){
      console.log('right 3333  done');
      window.clearInterval(img4r);
    //  count=0;
      countimg41=0;
      xxx[1].style.display='block';
  }
  //right5   4-5
  else if(parseFloat(img4.style.height)>300 && parseFloat(img4.style.left)<530 && countimg41!=4){
      console.log('img right 5 fisrt if done');
      countimg41=3;
      img4.style.width=parseFloat( img4.style.width)-2+'px';
      img4.style.height=parseFloat(img4.style.height)-2+'px';
      img4.style.top=parseFloat( img4.style.top)+1+'px';
      img4.style.left=parseFloat(img4.style.left)+3+'px';
      img4.style.zIndex=1;

  }else if(countimg41==3){
      console.log('imgright5 first else done');
      window.clearInterval(img4r);
    //  count=0;
      countimg41=0;
  }

  //right2
  else if(parseFloat(img4.style.height)<400 && parseFloat(img4.style.left)<180 && countimg41!=5){
      console.log('img right 2 fisrt if done');
      countimg41=4;
      img4.style.width=parseFloat( img4.style.width)+2+'px';
      img4.style.height=parseFloat(img4.style.height)+2+'px';
      img4.style.top=parseFloat( img4.style.top)-1+'px';
      img4.style.left=parseFloat(img4.style.left)+1+'px';
      img4.style.zIndex=2;

  }else if(countimg41==4){
      console.log('imgright2 first else done');
      window.clearInterval(img4r);
    //  count=0;
      countimg41=0;
  }

  //right1
  else if(parseFloat(img4.style.height)==300 && parseFloat(img4.style.left)>130 && countimg41!=6){
      console.log('img biiiiiiiiiiig right done');
      countimg41=5;
     // img3.style.width=parseFloat( img3.style.width)+2+'px';
     // img3.style.height=parseFloat(img3.style.height)+2+'px';
     // img3.style.top=parseFloat( img3.style.top)-1+'px';
      img4.style.left=parseFloat(img4.style.left)-8+'px';
      img4.style.zIndex=1;

  }else if(countimg41==5){
      console.log('img big right  else done');
      window.clearInterval(img4r);
    //  count=0;
      countimg41=0;
  }


  
  

}


function imgleft4(){


  //left2
  if(parseFloat(img4.style.height)>400 && parseFloat(img4.style.left)>180 && countimg42!=2){
      console.log('imgleft2 fisrt if done');
      countimg42=1;
      img4.style.width=parseFloat( img4.style.width)-2+'px';
      img4.style.height=parseFloat(img4.style.height)-2+'px';
      img4.style.top=parseFloat( img4.style.top)+1+'px';
      img4.style.left=parseFloat(img4.style.left)-1+'px';
      img4.style.zIndex=2;
      

  }else if(countimg42==1){
      console.log('imgleft2 first else done');
      countimg42=0;
      window.clearInterval(img4l);
   //   count=1;
      
  }


  //left3
  else if(parseFloat(img4.style.height)<500 && parseFloat(img4.style.left)>230 && countimg42!=3 && parseFloat(img4.style.height)>=400){
      console.log('imgleft3 fisrt if done');
      countimg42=2;
      img4.style.width=parseFloat( img4.style.width)+2+'px';
      img4.style.height=parseFloat(img4.style.height)+2+'px';
      img4.style.top=parseFloat( img4.style.top)-1+'px';
      img4.style.left=parseFloat(img4.style.left)-3+'px';
      img4.style.zIndex=3;

  }else if(countimg42==2){
      console.log('imgleft3 first else done');
      window.clearInterval(img4l);
      countimg42=0;
      xxx[1].style.display='block';
    //  count=1;
      
  }

  //left4
  else if(parseFloat(img4.style.height)<400 && parseFloat(img4.style.left)>380 && countimg42!=4 && countimg42!=5){
      console.log('imgleft4 fisrt if done');
      countimg42=3;
      img4.style.width=parseFloat( img4.style.width)+2+'px';
      img4.style.height=parseFloat(img4.style.height)+2+'px';
      img4.style.top=parseFloat( img4.style.top)-1+'px';
      img4.style.left=parseFloat(img4.style.left)-3+'px';
      img4.style.zIndex=2;

  }else if(countimg42==3){
      console.log('imgleft4 first else done');
      window.clearInterval(img4l);
      countimg42=0;
    //  count=1;
      
  }

  //left1
  else if(parseFloat(img4.style.height)>300 && parseFloat(img4.style.left)>130){
      console.log('imgleft1 fisrt if done');
      countimg42=4;
      img4.style.width=parseFloat( img4.style.width)-2+'px';
      img4.style.height=parseFloat(img4.style.height)-2+'px';
      img4.style.top=parseFloat( img4.style.top)+1+'px';
      img4.style.left=parseFloat(img4.style.left)-1+'px';
      img4.style.zIndex=1;

  }else if(countimg42==4){
      console.log('imgleft1 first else done');
      window.clearInterval(img4l);
      countimg42=0;
    //  count=1;
      
  }

  //left5
  else if(parseFloat(img4.style.height)==300 && parseFloat(img4.style.left)<530){
      console.log('imgleft5 fisrt if done');
      countimg42=5;
      //img3.style.width=parseFloat( img3.style.width)-2+'px';
     // img3.style.height=parseFloat(img3.style.height)-2+'px';
     // img3.style.top=parseFloat( img3.style.top)+1+'px';
      img4.style.left=parseFloat(img4.style.left)+8+'px';
      img4.style.zIndex=1;

  }else if(countimg42==5){
      console.log('imgleft5 first else done');
      window.clearInterval(img4l);
      countimg42=0;
    //  count=1;
      
  }




}


//***img5****//
function imgright5(){
  
    
  //right4
  if(parseFloat(img5.style.height)>400 && parseFloat(img5.style.left)<380 &&countimg51!=2){
      countimg51=1;
     // if(parseFloat(img3.style.left)>=200){}
      console.log('img right 1 fisrt if done');
      img5.style.width=parseFloat( img5.style.width)-2+'px';
      img5.style.height=parseFloat(img5.style.height)-2+'px';
      img5.style.top=parseFloat( img5.style.top)+1+'px';
      img5.style.left=parseFloat(img5.style.left)+3+'px';
      img5.style.zIndex=2;

  }else if(countimg51==1){
      console.log('imgright4 first else done');
      window.clearInterval(img5r);
      //count=0;
      countimg51=0;
  }

  //right3
  else if(parseFloat(img5.style.height)<500 && parseFloat(img5.style.left)<230 && countimg51!=3 && countimg51!=4 && parseFloat(img5.style.height)>=400){
      console.log('rightttt 333333 yeaahhh');
      countimg51=2;
      img5.style.width=parseFloat( img5.style.width)+2+'px';
      img5.style.height=parseFloat(img5.style.height)+2+'px';
      img5.style.top=parseFloat( img5.style.top)-1+'px';
      img5.style.left=parseFloat(img5.style.left)+1+'px';
      img5.style.zIndex=3;

  }else if(countimg51==2){
      console.log('right 3333  done');
      window.clearInterval(img5r);
    //  count=0;
      countimg51=0;
      xxx[2].style.display='block';
  }
  //right5   4-5
  else if(parseFloat(img5.style.height)>300 && parseFloat(img5.style.left)<530 && countimg51!=4){
      console.log('img right 5 fisrt if done');
      countimg51=3;
      img5.style.width=parseFloat( img5.style.width)-2+'px';
      img5.style.height=parseFloat(img5.style.height)-2+'px';
      img5.style.top=parseFloat( img5.style.top)+1+'px';
      img5.style.left=parseFloat(img5.style.left)+3+'px';
      img5.style.zIndex=1;

  }else if(countimg51==3){
      console.log('imgright5 first else done');
      window.clearInterval(img5r);
    //  count=0;
      countimg51=0;
  }

  //right2
  else if(parseFloat(img5.style.height)<400 && parseFloat(img5.style.left)<180 && countimg51!=5){
      console.log('img right 2 fisrt if done');
      countimg51=4;
      img5.style.width=parseFloat( img5.style.width)+2+'px';
      img5.style.height=parseFloat(img5.style.height)+2+'px';
      img5.style.top=parseFloat( img5.style.top)-1+'px';
      img5.style.left=parseFloat(img5.style.left)+1+'px';
      img5.style.zIndex=2;

  }else if(countimg51==4){
      console.log('imgright2 first else done');
      window.clearInterval(img5r);
    //  count=0;
      countimg51=0;
  }

  //right1
  else if(parseFloat(img5.style.height)==300 && parseFloat(img5.style.left)>130 && countimg51!=6){
      console.log('img biiiiiiiiiiig right done');
      countimg51=5;
     // img3.style.width=parseFloat( img3.style.width)+2+'px';
     // img3.style.height=parseFloat(img3.style.height)+2+'px';
     // img3.style.top=parseFloat( img3.style.top)-1+'px';
      img5.style.left=parseFloat(img5.style.left)-8+'px';
      img5.style.zIndex=1;

  }else if(countimg51==5){
      console.log('img big right  else done');
      window.clearInterval(img5r);
    //  count=0;
      countimg51=0;
  }


  
  

}


function imgleft5(){


  //left2
  if(parseFloat(img5.style.height)>400 && parseFloat(img5.style.left)>180 && countimg52!=2){
      console.log('imgleft2 fisrt if done');
      countimg52=1;
      img5.style.width=parseFloat( img5.style.width)-2+'px';
      img5.style.height=parseFloat(img5.style.height)-2+'px';
      img5.style.top=parseFloat( img5.style.top)+1+'px';
      img5.style.left=parseFloat(img5.style.left)-1+'px';
      img5.style.zIndex=2;
      

  }else if(countimg52==1){
      console.log('imgleft2 first else done');
      countimg52=0;
      window.clearInterval(img5l);
   //   count=1;
      
  }


  //left3
  else if(parseFloat(img5.style.height)<500 && parseFloat(img5.style.left)>230 && countimg52!=3 && parseFloat(img5.style.height)>=400){
      console.log('imgleft3 fisrt if done');
      countimg52=2;
      img5.style.width=parseFloat( img5.style.width)+2+'px';
      img5.style.height=parseFloat(img5.style.height)+2+'px';
      img5.style.top=parseFloat( img5.style.top)-1+'px';
      img5.style.left=parseFloat(img5.style.left)-3+'px';
      img5.style.zIndex=3;

  }else if(countimg52==2){
      console.log('imgleft3 first else done');
      window.clearInterval(img5l);
      countimg52=0;
      xxx[2].style.display='block';
    //  count=1;
      
  }

  //left4
  else if(parseFloat(img5.style.height)<400 && parseFloat(img5.style.left)>380 && countimg52!=4 && countimg52!=5){
      console.log('imgleft4 fisrt if done');
      countimg52=3;
      img5.style.width=parseFloat( img5.style.width)+2+'px';
      img5.style.height=parseFloat(img5.style.height)+2+'px';
      img5.style.top=parseFloat( img5.style.top)-1+'px';
      img5.style.left=parseFloat(img5.style.left)-3+'px';
      img5.style.zIndex=2;

  }else if(countimg52==3){
      console.log('imgleft4 first else done');
      window.clearInterval(img5l);
      countimg52=0;
    //  count=1;
      
  }

  //left1
  else if(parseFloat(img5.style.height)>300 && parseFloat(img5.style.left)>130){
      console.log('imgleft1 fisrt if done');
      countimg52=4;
      img5.style.width=parseFloat( img5.style.width)-2+'px';
      img5.style.height=parseFloat(img5.style.height)-2+'px';
      img5.style.top=parseFloat( img5.style.top)+1+'px';
      img5.style.left=parseFloat(img5.style.left)-1+'px';
      img5.style.zIndex=1;

  }else if(countimg52==4){
      console.log('imgleft1 first else done');
      window.clearInterval(img5l);
      countimg52=0;
    //  count=1;
      
  }

  //left5
  else if(parseFloat(img5.style.height)==300 && parseFloat(img5.style.left)<530){
      console.log('imgleft5 fisrt if done');
      countimg52=5;
      //img3.style.width=parseFloat( img3.style.width)-2+'px';
     // img3.style.height=parseFloat(img3.style.height)-2+'px';
     // img3.style.top=parseFloat( img3.style.top)+1+'px';
      img5.style.left=parseFloat(img5.style.left)+8+'px';
      img5.style.zIndex=1;

  }else if(countimg52==5){
      console.log('imgleft5 first else done');
      window.clearInterval(img5l);
      countimg52=0;
    //  count=1;
      
  }




}








function start(){
    console.log('start done');
    if(count==0){
     //  for(var i =0;i<imglist.length;i++){
      //      img3=imglist[i];
            l = window.setInterval(imgleft3,10);
            img1l = window.setInterval(imgleft1,10);
            img2l = window.setInterval(imgleft2,10);
            img4l = window.setInterval(imgleft4,10);
            img5l = window.setInterval(imgleft5,10);
     //   }
        
        

    }else if(count==1){
        //count1=1;
  //    for(var i =0;i<imglist.length;i++){
   //    img3=imglist[i];
        r = window.setInterval(imgright3,10);
        img1r = window.setInterval(imgright1,10);
        img2r = window.setInterval(imgright2,10);
        img4r = window.setInterval(imgright4,10);
        img5r = window.setInterval(imgright5,10);
 //     }
        
    }

   
}
function left(){
    
    count=0;
    console.log('left, count '+count);
    window.clearInterval(auto);

}
function right(){
    count=1;
    console.log('left, count '+count);
    window.clearInterval(auto);

}


/***********************/













var dropDownMenu = document.getElementById('dropdown1');
//Search button color change
function colorActive(){
  dropDownMenu.style.background='none';
  dropDownMenu.style.backgroundColor='rgb(54, 106, 219)';
  
  console.log('acttive');
}
function colorInactive(){
  dropDownMenu.style.background='linear-gradient(to bottom, #c2eb2f 0%, #cabd04 100%)' ;
  //dropDownMenu.style.backgroundColor='red';
}

//var dropDownMenu = document.getElementsByClassName('drop');
function mouse1(){
  mouse=1;
}
function mouse0(){
  mouse=0;
}



function hide(){
    for(var n =0;n<5;n++){
    xxx[n].style.display='none';
}
}
hide();
xxx[0].style.display='inline';
const sliderimagelist=['file:///C:/Users/USER/Desktop/project/pics/beach.jpg','file:///C:/Users/USER/Desktop/project/pics/elephants.jpg','file:///C:/Users/USER/Desktop/project/pics/ella.jfif','file:///C:/Users/USER/Desktop/project/pics/waterfalls-sri-lanka-1.jpg','file:///C:/Users/USER/Desktop/project/pics/Nuwara-Eliya-Sri-Lanka.jpg',]

const newlist = [document.getElementById('front'),document.getElementById('right1'),document.getElementById('left1'),document.getElementById('right2'),document.getElementById('left2')]


//var frontImage = document.getElementById('front');
/*
var rightimage1 = document.getElementById('right1');*/
/*rightimage1.src=sliderimagelist[1];
frontimage.src=sliderimagelist[0];*/

var p = document.getElementById('pkk');

//Fron image slider functionality

 /*--------function nextInfoRight(){
  currentimage=newlist[0];
    if(currentimage.src==sliderimagelist[0]){
        hide();
        xxx[0].style.display='block';
   
    }else if(currentimage.src==sliderimagelist[1]){
        hide();
        xxx[1].style.display='block';
 
    }else if(currentimage.src==sliderimagelist[2]){
        hide();
        xxx[2].style.display='block';
     
    }else if(currentimage.src==sliderimagelist[3]){
        hide();
        xxx[3].style.display='block';
    
      
    }else if(currentimage.src==sliderimagelist[4]){
        hide();
        xxx[4].style.display='block';
       

    }

 }--------*/
 /*--------function nextInfoLeft(){
  currentimage=newlist[0];
   
    if(currentimage.src==sliderimagelist[0]){
        hide();
       
        xxx[0].style.display='block';
  
    }else if(currentimage.src==sliderimagelist[4]){
        hide();
        
        xxx[4].style.display='block';
    
    }else if(currentimage.src==sliderimagelist[3]){
        hide();
       
        xxx[3].style.display='block';
   
    }else if(currentimage.src==sliderimagelist[2]){
        hide();
     
        xxx[2].style.display='block';

    }else if(currentimage.src==sliderimagelist[1]){
        hide();
       
        xxx[1].style.display='block';
 

    }

 }------------*/
 //Slider Brightness change onmouseover
 function spotLight(){
  if(img1.style.height=='500px'){
    var frontimage = document.getElementById('img1');
  }else if(img2.style.height=='500px'){
    var frontimage = document.getElementById('img2');

  }else if(img3.style.height=='500px'){
    var frontimage = document.getElementById('img3');
    
  }else if(img4.style.height=='500px'){
    var frontimage = document.getElementById('img4');
    
  }else if(img5.style.height=='500px'){
    var frontimage = document.getElementById('img5');
    
  }
  console.log(frontimage);
    frontimage.style.filter= 'brightness(80%)';
    
 }
 function spotLightoff(){
  if(img1.style.height=='500px'){
    var frontimage = document.getElementById('img1');
  }else if(img2.style.height=='500px'){
    var frontimage = document.getElementById('img2');

  }else if(img3.style.height=='500px'){
    var frontimage = document.getElementById('img3');
    
  }else if(img4.style.height=='500px'){
    var frontimage = document.getElementById('img4');
    
  }else if(img5.style.height=='500px'){
    var frontimage = document.getElementById('img5');
    
  }
    //var frontimage = document.getElementById('front');
    frontimage.style.filter= 'brightness(100%)';
 }

 
 


//Slider button animations
//grow
leftSliderButton.style.fontSize=30+'px';
function leftButtonGrow(){
  if(parseFloat(leftSliderButton.style.fontSize)<45 && mouse==1){
    leftSliderButton.style.fontSize = parseFloat(leftSliderButton.style.fontSize)+1+'px';
   
  }else{
    window.clearInterval(t);
    
  }
 
}



function idunno(){
 
  if(parseFloat(leftSliderButton.style.fontSize)==30){
   
  t = window.setInterval(leftButtonGrow,10);
  
  }
 
}

//Shrink
function leftButtonShrink(){
  if(parseFloat(leftSliderButton.style.fontSize)>30){
    leftSliderButton.style.fontSize = parseFloat(leftSliderButton.style.fontSize)-1+'px';
  }else{
    window.clearInterval(y);
  }

}
function idunno1(){
  if(parseFloat(leftSliderButton.style.fontSize)>30){
  
   y= window.setInterval(leftButtonShrink,10);
  }
 
}


//Right slider button
//Grow
rightSliderButton.style.fontSize=30+'px';
function rightButtonGrow(){
  if(parseFloat(rightSliderButton.style.fontSize)<45 && mouse==1){
    rightSliderButton.style.fontSize = parseFloat(rightSliderButton.style.fontSize)+1+'px';
   
  }else{
    window.clearInterval(r);
    
  }
 
}



function idunno11(){
 
  if(parseFloat(rightSliderButton.style.fontSize)==30){
   
  r = window.setInterval(rightButtonGrow,10);
  
  }
 
}

//Shrink
function rightButtonShrink(){
  if(parseFloat(rightSliderButton.style.fontSize)>30){
    rightSliderButton.style.fontSize = parseFloat(rightSliderButton.style.fontSize)-1+'px';
  }else{
    window.clearInterval(u);
  }

}
function idunno22(){
  if(parseFloat(rightSliderButton.style.fontSize)>30){
  
   u= window.setInterval(rightButtonShrink,10);
  }
 
}


function autoRight(){
  r = window.setInterval(imgright3,10);
  img1r = window.setInterval(imgright1,10);
  img2r = window.setInterval(imgright2,10);
  img4r = window.setInterval(imgright4,10);
  img5r = window.setInterval(imgright5,10);
}

//geo,climate,flora topic animations
function topicSizeIncrease(){
  if(parseFloat(currentTopic.style.width)<270 && mouseOverRecognition==1){
    currentTopic.style.fontSize=parseFloat(currentTopic.style.fontSize)+1+'px'
    currentTopic.style.height=parseFloat(currentTopic.style.height)+1+'px';
    currentTopic.style.width=parseFloat(currentTopic.style.width)+2+'px';
    console.log('size increase');

  }else{
    window.clearInterval(topicSizeAnime1);
    console.log('size increase done');
  }

}
function topicSizeDecrease(){
  if(parseFloat(currentTopic.style.width)>250 && mouseOverRecognition==0){
    currentTopic.style.fontSize=parseFloat(currentTopic.style.fontSize)-1+'px'
    currentTopic.style.height=parseFloat(currentTopic.style.height)-1+'px';
    currentTopic.style.width=parseFloat(currentTopic.style.width)-2+'px';
    console.log('size decrease');
  }else{
    window.clearInterval(topicSizeDeAnime1);
    console.log('size decrease done');

  }

}
function topicIdentify1(){
  mouseOverRecognition=1;
  currentTopic=topicList[0];
  topicSizeAnime1 = window.setInterval(topicSizeIncrease,20);


}
function topicDeIdentify1(){
  mouseOverRecognition = 0;
  currentTopicDe = topicList[0];
  topicSizeDeAnime1 = window.setInterval(topicSizeDecrease,20);
}

function topicIdentify2(){
  console.log('identify 2');
  mouseOverRecognition=1;
  currentTopic=topicList[1];
  topicSizeAnime1 = window.setInterval(topicSizeIncrease,20);


}
function topicDeIdentify2(){
  console.log('Deidentify 2');
  mouseOverRecognition = 0;
  currentTopicDe = topicList[1];
  topicSizeDeAnime1 = window.setInterval(topicSizeDecrease,20);
}

function topicIdentify3(){
  console.log('identify 3');
  mouseOverRecognition=1;
  currentTopic=topicList[2];
  topicSizeAnime1 = window.setInterval(topicSizeIncrease,20);


}
function topicDeIdentify3(){
  console.log('Deidentify 3');
  mouseOverRecognition = 0;
  currentTopicDe = topicList[2];
  topicSizeDeAnime1 = window.setInterval(topicSizeDecrease,20);
}




 



//Event Listeners
/*rightSliderButton.addEventListener('click', slideRight);
rightSliderButton.addEventListener('click',nextInfoRight);


leftSliderButton.addEventListener('click', slideLeft);
leftSliderButton.addEventListener('click',nextInfoLeft);*/


leftSliderButton.addEventListener('mouseover', idunno);
//leftSliderButton.addEventListener('mouseout', leftButtonShrink);
leftSliderButton.addEventListener('mouseout', idunno1);
leftSliderButton.addEventListener('mouseover', mouse1);
leftSliderButton.addEventListener('mouseout', mouse0);

rightSliderButton.addEventListener('mouseover',idunno11);
rightSliderButton.addEventListener('mouseout',idunno22);
rightSliderButton.addEventListener('mouseover',mouse1);
rightSliderButton.addEventListener('mouseout',mouse0);

frontImageArea.addEventListener('mouseover',spotLight);
frontImageArea.addEventListener('mouseout',spotLightoff);
/*frontImage.addEventListener('mouseover',spotLight);
frontImage.addEventListener('mouseout', spotLightoff);*/

dropDownMenu.addEventListener('mouseover',colorActive);

dropDownMenu.addEventListener('mouseout',colorInactive);


//This loop is there for a reason
for(var i =0;i<5;i++){
    xxx[i].addEventListener('mouseover', spotLight);
}

//window.setInterval(slideRight,4000);
//window.setInterval(nextInfoRight,4000);




//window.setInterval(leftButtonGrow,50);


/******latest edt*****/
//---auto = window.setInterval(autoRight,3000);

buttonright.addEventListener('click', right);
buttonright.addEventListener('click', start);

buttonleft.addEventListener('click', left);
buttonleft.addEventListener('click', start);

geo.addEventListener('click',cloudidentify1);
climmate.addEventListener('click',cloudidentify2);
flora.addEventListener('click', cloudidentify3);

geographyTopic.addEventListener('mouseover',topicIdentify1);
geographyTopic.addEventListener('mouseout',topicDeIdentify1);

climateTopic.addEventListener('mouseover',topicIdentify2);
climateTopic.addEventListener('mouseout',topicDeIdentify2);

floraTopic.addEventListener('mouseover',topicIdentify3);
floraTopic.addEventListener('mouseout',topicDeIdentify3);

viewMore.addEventListener('mouseover',viewmoreHover);
viewMore.addEventListener('mouseout',viewmoreUnHover);
