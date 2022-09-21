const sides = document.querySelectorAll(".side")
const Btn = document.querySelector("#btn")
const Msg = document.querySelector("#msg")


const hypotenuseValue = () => {
    let hypo = 0;
    let sum = 0;
    play = false;

    for (let i=0;i<sides.length;i++){
        if (sides[i].value) {
            play = true;
        }else{
            play=false;
        }

    }

    if (play){
    for (let i=0;i<sides.length;i++){
        
        sum = sum + (Number(sides[i].value))*(Number(sides[i].value))
       
        
    }   
     hypo = Math.sqrt(sum);
    Msg.innerHTML =`${hypo.toFixed(2)} units`
    }else{
        Msg.innerHTML = "Enter inputs"
    }

}


Btn.addEventListener("click", hypotenuseValue)