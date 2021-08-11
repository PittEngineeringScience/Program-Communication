//redpill section

let textbox1 = document.getElementById("textbox1");
let box2 = document.getElementById("box2");
let text,text1,text2;
const posX = document.querySelector(".posX span");
const posY = document.querySelector(".posY span");
function updown(text,target,seds){
   setTimeout(function(){ 
//     target.classList.add('showdown1');
//     target.innerHTML= text;
//     setTimeout(function(){ 
        
//         console.log('hello')
//         target.classList.add('showup1');
//         console.log('hello')
// },220)
        target.classList.add('showdown1'); 
        target.classList.remove('showup1'); 
            setTimeout(function(){
                target.innerHTML= text;
                target.classList.add('showup1');
                target.classList.remove('showdown1');
            },1200)
},seds)// seds:When this program begin
console.log("hello")  
}


function rotatexfade(text,target,seds){
    setTimeout(function(){ 
 
         target.classList.add('showdown1'); 
         target.classList.remove('rotatex'); 
         target.classList.remove('showup1'); 
             setTimeout(function(){
                 target.innerHTML= text;
                 target.classList.add('rotatex');
                 target.classList.remove('showdown1');
             },1200)
 },seds)
 console.log("hello")  
 }

 window.onload = (event) => {
    
    text1=`<P id="textbox1" style="font-size:26px;">Hi, My name is Shengye Dong, the developer of this website. I would like to thank all the following entities for providing awesome resources!</p>`;
    
        
        updown(text1,textbox1,'0');

        text2=`<P id="textbox1" style="text-align:center;font-size:45px;">W3Schools Online Web Tutorials</p>`;
    
        
        updown(text2,textbox1,'4000');

        let text3 = `<P id="textbox1" style="text-align:center;font-size:45px;">MDN Web Docs</p>`

        updown(text3,textbox1,'7000');

        let text4 = `<P id="textbox1" style="text-align:center;font-size:45px;">Stack Overflow Community</p>`

       updown(text4,textbox1,'10000');

       let text5 = `<P id="textbox1" style="text-align:center;font-size:45px;">jQuery`

       updown(text5,textbox1,'13000');

       let text6 = `<P id="textbox1" style="text-align:center;font-size:45px;">Bootstrap`


       updown(text6,textbox1,'16000');
   
       let text7 = `<P id="textbox1" style="text-align:center;font-size:45px;">Particle.js`

      updown(text7,textbox1,'19000');

      let text8 = `<P id="textbox1" style="text-align:center;font-size:45px;">Google charts/Google Map Service`

       updown(text8,textbox1,'21000');


let text9 = `

<li id="textbox1" style="text-align:center;font-size:20px;">
    <ul>Thank you!</ul>
    <ul>W3Schools Online Web Tutorials</ul>
    <ul>MDN Web Docs</ul>
    <ul>Stack Overflow Community</ul>
    <ul>jQuery</ul>
    <ul>Bootstrap</ul>
    <ul>Particle.js</ul>
    <ul>Google Charts/Google Map Service</ul>
    </li>



`
updown(text9,textbox1,'24000');
  


}


// initial.addEventListener("click", function( event ) {

//     let boxx1 = `<img style="height:160px;;width:auto;" src="picture/Smile_Image.png"></img>`

//     rotatexfade(boxx1,box2,'0')

//     let boxx2 = `<img style="height:160px;;width:auto;" src="picture/Pitt1890to1909.jpg"></img>`

//     rotatexfade(boxx2,box2,'6000')

//     let boxx3 = `<img style="height:160px;;width:auto;" src="picture/Benedum_Hall.jfif"></img>`

//     rotatexfade(boxx3,box2,'12000')
// })



const mousePosition = (event) => {
    posX.innerText = event.pageX;
    posY.innerText = event.pageY;
  };

  window.addEventListener("mousemove", mousePosition, false);

