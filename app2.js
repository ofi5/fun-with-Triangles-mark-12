const Quizform = document.querySelector(".quizForm")
const Btn = document.querySelector('#btn')
const Msg = document.querySelector("#msg")

correctAnswers = ["obtuse","isosceles"]

function checkAnswers() {
    
    let score = 0; 
    let index = 0;
    const formResults = new FormData(Quizform);
    
    for(let value of formResults.values()){
        if ( value === correctAnswers[index]){
            score = score + 1
        }
        index = index + 1
    }
    Msg.innerHTML = (`You Scored ${score}`)
}

Btn.addEventListener("click", () => checkAnswers())