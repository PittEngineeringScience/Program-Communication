// eslint-disable-next-line no-unused-vars
import Commette from "./Advisory.js";

const button = document.querySelector(".smartbutton");

window.addEventListener('load', (event) => {
 
let q;
for (q = 0; q < Commette.length; q++) {
  const content2 = `
            
            
  <div class="gridcontainer20">
  <img src="${Commette[q].photo}" alt="Advisory commette member" style = "max-width:120px; max-height:140px;justify-self:center;align-self:center"></img>
  <p style="align-self:center"> <span style="font-family: 'Pattaya', sans-serif; font-size: 13px;color:white;">Category:${Commette[q].category}<br>Name:${Commette[q].name}<br>affiliate:${Commette[q].affi}<br>E-mail:${Commette[q].mail}<span></p>
  </div>
  <div class="blockg"></div>
`;
const main2 = document.querySelector(".maincontent");
let Newpeople2 = document.createElement("div");

Newpeople2.innerHTML = content2;

main2.append(Newpeople2);
}

});


button.addEventListener("click", (event) =>{
  let filter1, td, i;
  let input = document.getElementById("myInput");
  filter1 = input.value.toUpperCase();
  


  const content1 = `
            
            <div>
            
              
              
              
              
            </div>
          `;
          
          let Newpeople1 = document.querySelector(".maincontent");
          Newpeople1.innerHTML = content1;
  if (filter1 ==='')
  {
    
 
      let q;
      for (q = 0; q < Commette.length; q++) {
        const content2 = `
                  
                  
        <div class="gridcontainer20">
        <img src="${Commette[q].photo}" alt="Advisory commette member" style = "max-width:120px; max-height:140px;justify-self:center;align-self:center"></img>
        <p style="align-self:center"> <span style="font-family: 'Pattaya', sans-serif; font-size: 13px;color:white;">Category:${Commette[q].category}<br>Name:${Commette[q].name}<br>affiliate:${Commette[q].affi}<br>E-mail:${Commette[q].mail}<span></p>
        </div>
        <div class="blockg"></div>
      `;
      const main2 = document.querySelector(".maincontent");
      let Newpeople2 = document.createElement("div");
      
      Newpeople2.innerHTML = content2;
      
      main2.append(Newpeople2);
      }
      
      

    
  }
  else
  {
    var counter = 0;
  for (i = 0; i < Commette.length; i++) {
    td = Commette[i].name;
    if (td) {
      //let txtValue = td.value.toUpperCase();//.textContent || td.innerText;
      if (td.toUpperCase().indexOf(filter1) > -1) {
        const content = `
            
            
            <div class="gridcontainer20">
            <img src="${Commette[i].photo}" alt="Advisory commette member" style = "max-width:120px; max-height:140px;justify-self:center;align-self:center"></img>
            <p style="align-self:center"> <span style="font-family: 'Pattaya', sans-serif; font-size: 13px;color:white;">Category:${Commette[i].category}<br>Name:${td}<br>affiliate:${Commette[i].affi}<br>E-mail:${Commette[i].mail}<span></p>
            </div>
            <div class="blockg"></div>
          `;
        const main = document.querySelector(".maincontent");
        counter++;
        let Newpeople = document.createElement("div");
        Newpeople.classList.add("coolstyling");
        Newpeople.innerHTML = content;

        main.append(Newpeople);
      }
      
    }
  }
  if(counter===0)
  {
    const content5 = `
            
    <div style="height:300px;">
    <p>No match found.</p>
      
      
      
      
    </div>
  `;
  
  let Newpeople5 = document.querySelector(".maincontent");
  Newpeople5.innerHTML = content5;
  }
}
  console.log(`The index of the first "${filter1}" name is "${counter}"`)





})

//press enter to trigger the event

myInput.addEventListener("keyup", (event) =>{
  if (event.keyCode === 13) {
    document.querySelector(".smartbutton").click();

  }


})



