const Angles = document.querySelectorAll('.angle')
 const msg = document.querySelector("#msg")
const BTN = document.querySelector("#btn")
let play;
function angleCalculator() {

    for (let i=0;i<Angles.length;i++){
        if (Angles[i].value) {
            play = true;
        }else{
            play=false;
        }

    }
    if (play) {
    let sum=0;
    for (let i=0; i<Angles.length;i++) {
        sum = sum + (Number(Angles[i].value))
    }
    console.log(sum)

    if (sum == 180) {
        msg.innerHTML = "It sa Triangle"
    }else{
        msg.innerHTML = "No ta Triangle"
    }
}else{

    msg.innerHTML = "Enter inputs"
}
}

BTN.addEventListener("click", ()=> angleCalculator())