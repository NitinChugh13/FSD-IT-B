const number = [1,2,3,4,5,6,7];
const newNumber = number.filter((num) => num>5);
const newNumber1 = number.filter((num) => num % 2 == 0 );
console.log(newNumber);
console.log(newNumber1);

const number1 = number.map((num)=>num*2);
console.log(number1); 

const sum = number.reduce((num1,num2) => num1+num2);
console.log(sum);