//var placeContainer = document.createElement('div');
const containerList =[];
const infoContainerList = [];
const imageList = [];
const headingList = [];
const paragraphList = [];
var paragraphs = document.getElementsByTagName('p');
var heading = document.getElementsByTagName('h1');
var images = document.getElementsByTagName('img');
console.log(images.length);

for(var i =0;i<images.length;i++){
    containerList.push(document.createElement('div'));
    document.body.appendChild(containerList[i]);
    containerList[i].style.position='absolute';
    containerList[i].style.height='340px';
    containerList[i].style.width='900px';
    containerList[i].style.left='0px';
    containerList[i].style.zIndex=1;
    containerList[i].style.top=110+i*370+'px';
    containerList[i].style.backgroundColor='rgb(228, 228, 57)';
    containerList[i].style.borderRadius='30px';

    infoContainerList.push(document.createElement('div'));
    document.body.appendChild(infoContainerList[i]);
    infoContainerList[i].style.position='absolute';
    infoContainerList[i].style.height='240px';
    infoContainerList[i].style.width='500px';
    infoContainerList[i].style.left='390px';
    infoContainerList[i].style.zIndex=1;
    infoContainerList[i].style.top=200+i*370+'px';
    infoContainerList[i].style.backgroundColor='#209120';
    infoContainerList[i].style.borderRadius='30px';

    imageList.push(images[i]);
    imageList[i].style.position='absolute';
    imageList[i].style.height='230px';
    imageList[i].style.width='350';
    imageList[i].style.left='20px';
    imageList[i].style.zIndex=2;
    imageList[i].style.top=205+i*370+'px';

    headingList.push(heading[i]);
    headingList[i].style.position='absolute';
   // imageList[i].style.height='200px';
   // imageList[i].style.width='350';
   headingList[i].style.left='15px';
    headingList[i].style.zIndex=2;
    headingList[i].style.top=110+i*370+'px';

   paragraphList.push(paragraphs[i]);
   paragraphList[i].style.position='absolute';
    paragraphList[i].style.left='410px';
    paragraphList[i].style.height='200px';
    paragraphList[i].style.zIndex=2;
    paragraphList[i].style.top=195+i*370+'px';

}
console.log(paragraphList.length);
for(var i =0;i<containerList.length;i++){
    
}


/*placeContainer.style.height = '300px';
placeContainer.style.width='900px';
placeContainer.style.left='380px';
placeContainer.style.backgroundColor='green';
placeContainer.style.top='10px';
placeContainer.style.position='absolute';
placeContainer.style.zIndex=100;*/
/*document.body.appendChild(placeContainer);
console.log(placeContainer.style.backgroundColor);*/
