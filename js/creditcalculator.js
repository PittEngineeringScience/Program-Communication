
// let termcreditsum,subsum;
// let i,q,lenn,len;
// const term = document.querySelectorAll("ul.Term");
// for (i = 0, len = term.length; i < len; i++) {
    
    
    
//     const cre = document.querySelector("term[i]>.credit");
//     for (q = 0, lenn = cre.length; q < lenn; q++) {
//         subsum[i] = subsum[i] + cre[q];
      
//     }
// 	console.log(subsum[i])
//   }
let subsum,sub;
  var term = document.getElementsByClassName("Term"), q, lenn;
  console.log(term);

  for (q = 0, lenn = term.length; q < lenn; q++) {

    let cre = term[q].getElementsByClassName("credit"),m,lennn;
    console.log(cre);
    for (m = 0, lennn = cre.length; m < lennn; m++) {
     sub = cre[m].getElementsByClassName("credit").innerText,m,lennn;
        
        console.log(sub);
        document.getElementById(value).innerText=sub;
    }
	
  }
