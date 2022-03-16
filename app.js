const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
let userAnswers = [];
const resultDiv = document.querySelector('.result');
const resultSpan = document.querySelector('span');
const inputs = document.querySelectorAll('input');



//FORM EVENT LISTENER
form.addEventListener('submit', e => {
  let score = 0;
  //create array of user input
    inputs.forEach(input => {
    if (input.checked) userAnswers.push(input.id)});

  //compare correctAnswers to userAnswers
    userAnswers.forEach((answer, index) => {
      if (correctAnswers[index] === answer)score += 25;
    });

  //unhide div and add display score
  resultDiv.classList.remove('d-none');
  scrollTo(0,0);
  e.preventDefault();

  //score animation
  let output = 0; //score incrementer
    const timer = setInterval(() => {
      resultSpan.innerText = `${output}%`;  
        if (output === score){
          clearInterval(timer);
        } else {
          output++;
        }
    }, 30);
    
});


