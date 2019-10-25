let runningTotal = 0;
let buffer = '0';  //keep track of user insert numbers.String because everything is a string in the dom
let previousOperator;  //keep track the last thing is pressed.
const screen = document.querySelector('.screen');

document.querySelector(".calc-buttons").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
});

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
      handleSymbol(value);
    } else {
      handleNumber(value);
    }
    rerender();
  }
  
  function handleNumber(value) {
    if (buffer === "0") {
      buffer = value;
    } else {
      buffer += value;
    }
  }

function handleSymbol(value){
    switch(value) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            previousOperator = null;
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
        case "←":
            if(buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
            default:
                handleMath(value);
                break;
    }
}

function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if(runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;
    buffer = "0";
}


function flushOperation(intBuffer) {
    if(previousOperator === "+") {
        runningTotal += intBuffer;
    } else if (previousOperator === "-") {
        runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

function rerender(){
    screen.innerText = buffer;
}





















// const redSquare = document.querySelector('.red-square');
// redSquare.style.backgroundColor = 'limegreen';


// const elementsToChange = document.querySelectorAll('.js-target');
// for (let i = 0; i < elementsToChange.length; i++) {
//   const currentElement = elementsToChange[i];
//   currentElement.innerText = "Modified by JavaScript!";
// }

// // events
// const button = document.querySelector('.event-button');
// button.addEventListener('click', function(){
//     alert('Hey!');
// });


// // const input = document.querySelector('.input-to-copy');
// // const paragraph = document.querySelector('.p-to-copy-to');

// // input.addEventListener("keyup", function(){
// //     paragraph.innerText = input.value;
// // });


// const input = document.querySelector('.color-input');
// const paragraph = document.querySelector('.color-box');

// input.addEventListener("change", function() {
//   paragraph.style.backgroundColor  = input.value;
// });



// const monthlyRent = 500;

// const yearlyRent = monthlyRent * 12;
// console.log(yearlyRent);


// const firstName = "Bob";
// const lastName = "Holt";

// const sentence = "Hello " + firstName + " " + lastName + "! How are you?";
// const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you?`;

// console.log(sentence);
// console.log(sentenceWithTemplate);


// const character = 'a';
// const timesToRepeat = 50;
// let answer = '';

// for (let i = 0; i <= timesToRepeat; i++){
// 	answer += character;	
// }
// console.log(answer);



// const myHomeCity = "Salt Lake City";
// const myHomeState = "Utah";
// const myHomeCountry = "USA";

// function logOutYourHome(city, state, country) {
//     console.log(`You are from ${city}, ${state}, ${country}.`);
// }

// logOutYourHome(myHomeCity, myHomeState, myHomeCountry);