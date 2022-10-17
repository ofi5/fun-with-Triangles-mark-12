const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const Btn = document.querySelector("#btn");
const Msg = document.querySelector("#msg");

const calculateArea = () => {
  if (side1.value === "" || side2.value === "") {
    Msg.innerHTML = "Enter Input";
  }else if(side1.value<0 || side2.value<0) {
    Msg.innerHTML = "Enter Positive Values"
  
  } else {
    let sum = 1;


    sum =   (Number(side1.value) * Number(side2.value))/2;
    supe = "2";
    Msg.innerHTML = `${sum.toFixed(2)} unit${supe.sup()} `;
  }
};
Btn.addEventListener("click", calculateArea);
