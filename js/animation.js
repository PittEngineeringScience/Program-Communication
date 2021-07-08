
let test2 = document.getElementById("test2");
let test3 = document.getElementById("test3");
test2.addEventListener("mouseenter", function( event ) {
  
  test2.classList.add('frame111');
  setTimeout(function(){ test2.setAttribute("src", "images/Robot-SD.png"); 
       test2.classList.add('frame222'); 
       test2.classList.remove('frame111'); 
     }, 150);
     test2.classList.remove('frame222'); 
     
     //text section
     test3.classList.remove('frame222');
     test3.classList.add('frame111');
     setTimeout(function(){ 
       test3.innerHTML=`
        <p style="background-color: #06121c;color:white;font-size:15px;text-align: left;margin:0;padding:0;"> We must look back, and smile, at perils past.</p>


     `; 

     test3.classList.add('frameflip'); 
      
     
    
     test3.classList.remove('frame111');
   }, 150);

   
})



test2.addEventListener("mouseout", function( event ) {
  
  test2.classList.remove('frame222'); 
  test2.classList.add('frame111');
  setTimeout(function(){ test2.setAttribute("src", "images/shengye.png"); 
       test2.classList.add('frame222'); 
    
     }, 150);


     //text section
     test3.classList.add('frame111');
     test3.classList.remove('frameflip'); 
     
     setTimeout(function(){ 
       test3.innerHTML=`
       <p style="margin: 7px 0px">Shengye Dong</p>
       <p style="margin: 7px 0px">Engineering Science Program Student Support</p>
       <p style="margin: 7px 0px"><a href="mailto:SHD85@pitt.edu" style="text-decoration:none;color:;">Email: SHD85@pitt.edu</a></p>
        

     `; 
     
     test3.classList.add('frame222'); 
     test3.classList.remove('frame111');
     
   }, 150);
   
})










































// let pic2 = document.getElementById("test");

// pic.addEventListener("mouseover", function( event ) {
//   pic.classList.remove('frame222');
//   pic.classList.add('frame111');
  
   
  
// })

// pic1.addEventListener("mouseout", function( event ) {
 
//   pic.classList.remove('frame111');
//   pic.classList.add('frame222');
  
   
  
// })
// test2.addEventListener("mouseenter", function( event ) {
//      //pic.classList.remove('frame222');
     
//      test2.classList.add('frameflip');

//      //test2.addEventListener("animationed",()=>{
//       setTimeout(function(){ test2.setAttribute("src", "images/Robots-SD.jpg"); 
//       test2.classList.add('frameflip1'); 
    
//     }, 355);
   
      
//     setTimeout(function(){

//       test2.addEventListener("mouseleave", function( event ) {
//         //pic.classList.remove('frame222');
//         test2.classList.add('frameflip2');
        
      
//         //test2.addEventListener("animationed",()=>{
//          setTimeout(function(){ test2.setAttribute("src", "images/shengye.png"); 
//          test2.classList.add('frameflip3'); }, 355);
         
        
            
           
         
            
                 
         
           
           //test2.classList.remove('frameflip1');
           //test2.classList.add('frameflip1');
      
      
        //})
       
      
//       })
      
         
//       }, 700);
         
//       setTimeout(function(){     
//         test2.classList.remove('frameflip');
//         test2.classList.remove('frameflip1');
        
      
//       }, 1055);
//       test2.classList.remove('frameflip2');
//       test2.classList.remove('frameflip3');
// })
