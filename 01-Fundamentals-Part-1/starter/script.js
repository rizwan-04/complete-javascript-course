/*
let js = 'amazing';
if (js == 'amazing') alert('JS is FUN');
console.log(40 + 49);
let firstName = "jonas";
console.log(js);
console.log(firstName);
let age = 24;
let myAge = true;
let children;
console.log(typeof true);
console.log(typeof age);
console.log(typeof children);
console.log(typeof myAge);
myAge = 'NO';
console.log(myAge);
console.log(typeof myAge);
console.log(typeof null);

const thisYear = 2021;
console.log(thisYear - 1996);

const firstName = 'Rizwan';
const lastName = 'Muhammad';
console.log(firstName + ' ' + lastName);

const now = 2021;
const ageAli = now - 1991;
const ageKhan = now - 2018;

console.log(ageAli > ageKhan);
const averageAge = (ageAli + ageKhan) / 2;
console.log(averageAge);
*/

// coding Challenge

/*
const massOfMark = 78;
const massOfJohn = 92;
const hieghtOfMark = 1.69;
const hieghtOfJohn = 1.95;

const BMIMark = massOfMark / (hieghtOfMark * hieghtOfMark);
const BMIJohn = massOfJohn / hieghtOfJohn ** 2;

console.log('BMI of Mark ', BMIMark);
console.log('BMI of John ', BMIJohn);

console.log(markHigherBMI = BMIMark > BMIJohn);
*/
/*
const firstName = 'Rizwan';
const job = 'entrepreneur';
const birthYear = 1996;
const thisYear = 2021;

//Simple Strings
const rizwan = "I'm " + firstName + ' a ' + (thisYear - birthYear) + ' years old ' + job;
console.log(rizwan);

//Templete Strings using back ticks
const rizwanNew = `I'm ${firstName}, a ${thisYear - birthYear} years old ${job} ! `;
console.log(rizwanNew);
// Multiline Strings
console.log(`Hello!
How are you?`);
*/

// Decision Making using Conditional Statements
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Lala can Start her Driving Lesson !`);
}
else {
    const yearLeft = 18 - age;
    console.log(`Lala Come after ${yearLeft} years for the Liscence`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
// Challenge 2
const massOfMark = 78;
const massOfJohn = 92;
const hieghtOfMark = 1.69;
const hieghtOfJohn = 1.95;

const BMIMark = massOfMark / (hieghtOfMark * hieghtOfMark);
const BMIJohn = massOfJohn / hieghtOfJohn ** 2;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is Higher than John's BMI (${BMIJohn})`);


} else {
    console.log(`John's BMI (${BMIJohn}) is Higher than Mark's BMI (${BMIMark})`);
}
*/

// Type Conversion
// const inputYear = '1990';
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(Number("Kahn")); // Invalid Number

// console.log(String(18));

// Type Coercion 
// console.log('I am ' + 23 + ' years old.');
// console.log('I am 23 years old.');
// const age = 23;
// console.log(`I am ${age} years old.`);
// console.log('I am ' + age + ' years old.');
// console.log('23' - '10' - 3);
// console.log('23' > '22')

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

//5 Falsy Values: 0, '' , undefined , null , NaN
// Everything else is a Truthy Value

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean('ali'));
// console.log(Boolean({}));

// const money = 9;
// if (money) {
//     console.log(`Don't Spend it`);
// } else {
//     console.log(`Get a Job baby`);
// }

// let myVar = 0;
// if (myVar) {
//     console.log(`Variable is Defined`);
// } else {
//     console.log(`Variable is Undefined`);
// }

//Strict and Loose Equality Operator
// else if blocks 
// const age = '18'; //check with 18, 19, and 17
// if (age === 18) { // === strict equility does not perform coercion
//     console.log(`You just became an adult`);
// } else if (age > 18) {
//     console.log(`You are an Adult`);
// } else if (age == 18) { // == loosely equality
//     console.log(`You are Loosely Adult`);
// }
// else {
//     console.log(`You are UnderAge`);
// }
// promting a pop up
// const favNum = prompt("What's your favourite Number?");
// console.log(favNum, typeof (favNum));

// Boolean Logic
/*
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense && hasGoodVision);

if (hasGoodVision && hasDriversLicense && !isTired) {
    console.log(`Sarah Should Drive.`);
} else {
    console.log(`Someone else should drive.`);
}
*/

// Coding Challenge
/*
const score1Dolphin = 197;
const score2Dolphin = 197;
const score3Dolphin = 197;

const score1Koalas = 197;
const score2Koalas = 197;
const score3Koalas = 197;

const avgDolphin = (score1Dolphin + score2Dolphin + score3Dolphin) / 3;
const avgKoalas = (score1Koalas + score2Koalas + score3Koalas) / 3;

if (avgDolphin > avgKoalas && avgDolphin >= 100) {
    console.log(`Dolphin team is the winner`);
}
else if (avgDolphin < avgKoalas && avgKoalas >= 100) {
    console.log(`Koalas team is the winner`);
}
else if (avgKoalas === avgDolphin && avgDolphin > 100) {
    console.log(`There is Draw :( `);
}
else {
    console.log(`No team is Winner`);
}
*/

// The Switch Statement
/*
const day = 'wednesday';
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to the coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
    default:
        console.log('Not a valid day')
        break;
}
*/

// Statements and Expressions
// const ageNew = 23;
// // ageNew >= 18 ? console.log('I like to drink wine') :
// //     console.log('I like to drink water');

// const drink = ageNew >= 18 ? 'Wine' : 'Water';
// console.log(ageNew, drink);

//Coding Challege 04
/*
const bill = 400;
const tip1 = 0.15 * bill;
const tip2 = 0.20 * bill;
const tip = bill > 50 && bill < 300 ? (tip1) : (tip2);
console.log("Your Tip is ", tip);
*/

