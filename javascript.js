const inputs = document.querySelectorAll(".unit");
const display = document.querySelector(".outputCurrent");

inputs.forEach(unit =>{
unit.addEventListener("click", ()=>{

    const running = () => {
        display.append(unit.textContent);
    }

    // LIMIT INPUT FIELD
    if(display.textContent.length <= 9){
        running();
    }
   
    let look = display.textContent;

    // CLEAR AND CLEAR ALL
    if(unit.textContent === "C"){
        let p = (textContent)=>{
         let  w = textContent.slice(0, -2);
          return w
        }
        display.textContent = p(display.textContent); 
    }else if(unit.textContent === "AC"){
        display.textContent = '';
    }

    // PERCENTAGE
    if(unit.textContent === "%"){
        let g = look.slice(0,-1).split("%");
        let w = g/100
        let str = `${w}`
        if(str.length > 9){
            display.textContent = w.toFixed(8);
        }else{
            display.textContent = w;
        } 
    }


   if(unit.textContent){

      if(display.textContent.includes("=")){
        let g = look.slice(0,-1);
        display.textContent = g;
      }


    // ADDITION
       if(display.textContent.includes("+") && unit.textContent === "=" ){
        const addition = look => {
         let g = look.slice(0,-1).split("+");
         let p = 0;
         for (const j of g){
             p += Number(j)
         }
         return p
        }
         let ans = addition(look)
         let str = `${ans}`
        if(str.length > 9){
            display.textContent = ans.toFixed(9);
        }else{
            display.textContent = ans;
        } 
       }  
       
    //    SUBTRACTON
       if(display.textContent.includes("-") && unit.textContent === "=" ){
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
         let str = `${ans}`
         if(str.length > 9){
             display.textContent = ans.toFixed(9);
         }else{
             display.textContent = ans;
         } 
       } 
       
    //    MULTIPLICATION
    if(display.textContent.includes("⨯") && unit.textContent === "=" ){
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
         let str = `${ans}`
        if(str.length > 9){
            display.textContent = ans.toFixed(9);
        }else{
            display.textContent = ans;
        } 
       } 

    //    DIVISION
        if(display.textContent.includes("÷") && unit.textContent === "=" ){
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
         let str = `${ans}`
        if(str.length > 9){
            display.textContent = ans.toFixed(8);
        }else{
            display.textContent = ans;
        }
       } 
   }
    })
    })

