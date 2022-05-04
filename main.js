//ques 1
alert("Hello World");
alert("Hello Arya");

//ques 2
const daysInYear = 365.25;
const daysInWeek = 7;
const yearsInLifetime = 80;

const weeksInLifetime = (daysInYear / daysInWeek) * yearsInLifetime;
document.getElementById("week").innerHTML = `Average weeks in lifetime: ${weeksInLifetime}`;

//ques 3
let greeting = 'hello';
let name = 'world';

alert(`${greeting} ${name}`);


let greet = 'Hello World'
let newGreet = greet.replace(/l/g,'1').replace(/o/g,'0');
document.getElementById("regex").innerHTML = newGreet;



let str = 'A coding device!';

function reverseString(str){
    let newStr = '';
    for (let i = str.length - 1; i >=0; i--) {
        newStr += str[i];  
    }
    return newStr;
}
document.getElementById("reverse").innerHTML = `Reverse String: ${reverseString(str)}`;

//ques 6
let firstNo = Number(prompt("first number(larger):"));
let secondNo = Number(prompt("second number(larger):"));
alert(`Larger: ${firstNo >= secondNo ? firstNo : secondNo}`);

//ques 7
let firstNum = Number(prompt("first number(ascending):"));
let secondNum = Number(prompt("second number(ascending):"));
let ascendingStr = firstNum <= secondNum ? `${firstNum} , ${secondNum}` : `${secondNum} , ${firstNum}`;
alert(`Ascending order: ${ascendingStr}`); 

//ques 8

let ans = ''
for (let index = 0; index <= 20; index++) {
    if(index %3 ===0){
        ans+= `${index} `;
    }
    
}
document.getElementById("loop").innerHTML = ans;

