const inputs = document.querySelectorAll(".unit");
const display = document.querySelector(".outputCurrent");
const cut = document.getElementById("cut");


inputs.forEach(unit =>{
unit.addEventListener("click", ()=>{

    // For display
    const running = () => {
        display.append(unit.textContent);
    }
    
    if(display.textContent.length <= 9){
        running();
    }
   
    let look = display.textContent;

    
    if(unit.textContent === "C"){
       
        let p = ()=>{

    //    console.log(cut.innerHTML.slice(0,-2));

    //       return cut.innerHTML.slice(0,-1).replace(cut.innerHTML.length - 2, "")
        }

        display.textContent = display.textContent.slice(0,-2) ;

    }else if(unit.textContent === "AC"){
        display.textContent = '';
    }


     //    Percentage
     if(display.textContent.includes("%")){
        const percentage = look => {
         let g = look.slice(0,-1).split("%");

         return Number(g)/100;
         
        }
         let ans = percentage(look)
        //  console.count(ans)
        display.textContent = ans;
       } 

// EQUALS
   if(unit.textContent === "=" ){
    // ADDITION
       if(display.textContent.includes("+")){
        const addition = look => {
         let g = look.slice(0,-1).split("+");
        //  console.log(g);
         let p = 0;
         for (const j of g){
             p += Number(j)
         }
         return p
        }
         let ans = addition(look)
        //  console.log(ans.textContent.slice(0,4));
         console.log(ans.toFixed(1));
        display.textContent = ans.toFixed(1);    
       }  
       
    //    SUBTRACTON
       if(display.textContent.includes("-")){
        const subtraction = look => {
         let g = look.slice(0,-1).split("-");
         let w = g.slice(1)
         let p = Number(g[0]);
         
         for(const j of w){
             p -= Number(j)
         }
         return p
        }
         let ans = subtraction(look)
        display.textContent = ans;
       } 
       
    //    MULTIPLICATION
    if(display.textContent.includes("⨯")){
        const multiplication = look => {
         let g = look.slice(0,-1).split("⨯");
         let w = g.slice(1)
         let p = Number(g[0]);
         
         for(const j of w){
             p *= Number(j)
         }
         return p
        }
         let ans = multiplication(look)
        display.textContent = ans;
       } 

    //    DIVISION
        if(display.textContent.includes("÷")){
        const division = look => {
         let g = look.slice(0,-1).split("÷");
         let w = g.slice(1)
         let p = Number(g[0]);
         
         for(const j of w){
             p /= Number(j)
         }
         return p
        }
         let ans = division(look)
        //  console.count(ans)
        display.textContent = ans.toFixed(4);
       } 
       
}


    })

    })

// look.includes("+")
//        let jk = look.split("+");
//        console.log(jk);
//        let p = 0;




// let jk = look.split("+");
// let y = 0;
//  for (const k of jk){
//    y += k
//  }