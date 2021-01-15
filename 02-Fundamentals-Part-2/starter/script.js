'use strict'; // script mode
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');
*/

//Functions

// function logger() {
//     console.log("I am Rizwan");
// }
// logger(); // calling | runnig | invoking

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 3);
// console.log(appleOrangeJuice);

// function calcAge(birthYear) {
//     const age = 2020 - birthYear;
//     return age;
// }
// var age1 = calcAge(1996);
// console.log(age1);

//FUNCTION EXPRESSION
// function calcAge(birthYear) {
//     const age = 2020 - birthYear;
//     return age;
// }
// // ARROW FUNCTIONS 
// const calcAge3 = birthYear => 2020 - birthYear;
// var age3 = calcAge3(1994);
// console.log(age3);

// functions calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// Coding Challenge 01
// let calcAvg = (val1, val2, val3) => (val1 + val2 + val3) / 3;
// let dolphinAvg = calcAvg(4, 2, 7);
// let koalasAvg = calcAvg(2, 4, 7);
// console.log(`Average of Dolphin ${dolphinAvg} | Average of Koalas ${koalasAvg} `);

// function checkWinner(dolAvg, kolAvg) {
//     if (dolAvg > kolAvg && 2 * kolAvg <= dolAvg) {
//         console.log(`Team Dolphin is the WINNER`);
//     } else if (kolAvg > dolAvg && 2 * dolAvg <= kolAvg) {
//         console.log(`Team Koalas is the WINNER`);
//     } else if (dolAvg === kolAvg) {
//         console.log(`There is TIE`);
//     } else {
//         console.log(`NO team is WINNER`);
//     }
//     return;
// }
// checkWinner(dolphinAvg, koalasAvg);

// Introduction to Arrays
// const friends = ['sdk', 'anees', 'najeeb', 'zulfi'];
// console.log(friends);

// const years = new Array(2020, 2021, 2022);
// console.log(years);
// console.log(friends[0]);
// console.log(friends.length);

// friends[0] = 'Dojo';
// console.log(friends);

// const rizwan = ['rizo', 24, friends];
// console.log(rizwan);
// console.log(rizwan.length);

// Exercise c
// function calcAge(birthYear) {
//     return 2020 - birthYear;
// }
// const years1 = [1990, 1967, 2002, 2010, 2018];

// const age11 = (calcAge(years1[0]));
// const age12 = (calcAge(years1[1]));
// const age13 = (calcAge(years1[2]));

// const ages = [age11, age12, age13];
// console.log(ages);

// Basic Arrey operaions called arrey methods
// const friends = ['sdk', 'anees', 'najeeb', 'zulfi'];

// //Add elements 
// friends.push('zulfiAP'); //end of the arrey
// console.log(friends);
// friends.unshift('lala'); // start of the arrey
// console.log(friends);
// const pushReturn = friends.push(); // push/unshift function returns LENGTH of the new Arrey
// console.log(pushReturn);

// // Remove elements
// friends.pop(); // remove last element
// console.log(friends);
// const popReturn = friends.pop(); // pop function returns the popped values
// console.log(popReturn);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('sdk'));
// console.log(friends.indexOf('lala'));

// console.log(friends.includes('sdk'));
// console.log(friends.includes('lala'));

// if (friends.includes('lala')) {
//     console.log(`Ju Lala Ju`);
// } else {
//     console.log(`Larki Hath se Nekal gae hay`);
// }

// Coding Challenge 02
// function calcTip(bill) {
//     const tip1 = 0.15 * bill;
//     const tip2 = 0.20 * bill;
//     const tip = bill > 50 && bill < 300 ? (tip1) : (tip2);
//     console.log(`Your Bill is ${bill} and Tip is ${tip}, so Totall Bill is: ${(bill + tip)}`);
//     return tip + bill;
// }
// const bills = [125, 555, 44];
// const totalBillTip1 = calcTip(bills[0]);
// const totalBillTip2 = calcTip(bills[1]);
// const totalBillTip3 = calcTip(bills[2]);

// const totalBillTips = [totalBillTip1, totalBillTip2, totalBillTip3];
// console.log(totalBillTips);

// Objects 
// const rizwan = {
//     firstName: 'Rizwan',
//     lastName: 'Muhammad',
//     age: 2021 - 1996,
//     job: 'Entrepreneur',
//     friends: ['nasir', 'khan', 'jan']
// };
// console.log(rizwan);
// // Retrieving data from objest
// // dot notation
// console.log(rizwan.firstName + " " + rizwan.lastName);
// // bracket notation
// console.log(rizwan['firstName'] + ' ' + rizwan['lastName']);

// const interestedIn = prompt(`What do you want to know about Rizwan? 
// Choose fisrtName, lastName, age, job, friends`);
// console.log(rizwan[interestedIn]);

// if (rizwan[interestedIn]) {
//     console.log(rizwan[interestedIn]);
// } else {
//     console.log('Wrong Request');
// }

//rizwan.location = 'Gilgit';
//rizwan['insta'] = '@rizwan404';
//console.log(rizwan);

// //Challenge
// console.log(`${rizwan.firstName} has ${rizwan.friends.length} friends, 
// and his best friend is called ${rizwan.friends[0]}`);

// // Object Methods
// const rizwan = {
//     firstName: 'Rizwan',
//     lastName: 'Muhammad',
//     job: 'Entrepreneur',
//     birthYear: 1996,
//     friends: ['nasir', 'khan', 'jan'],
//     hasDriversLicense: false,

//     // calcAge: function (birthYear) { //Functions here are called function methods
//     //     return 2021 - birthYear;
//     // },
//     // calcAgeNew: function () { // Object Methods and this pointer
//     //     return 2021 - this.birthYear;
//     // },
//     // checkLicense: function () {
//     //     if (this.hasDriversLicense) {
//     //         return 'a';
//     //     } else {
//     //         return 'no';
//     //     }

//     // },
//     calcAgeUpdated: function () { // Object Methods and this pointer
//         this.ageRizwan = 2021 - this.birthYear;
//         return this.ageRizwan;
//     },
//     detailsRizwan: function () {
//         return this.detailsRiz = `${this.firstName} is a 
//         ${this.calcAgeUpdated()}-year old ${this.job}, 
//         and he has ${this.hasDriversLicense ? 'a' : 'no'} 
//         driver's license.`;
//     }
// };
// // console.log(rizwan);
// // console.log(rizwan.calcAge(1996));
// // console.log(rizwan.calcAge(rizwan.birthYear));
// // console.log(rizwan.calcAgeNew());

// //Challenge for object

// rizwan.detailsRizwan();
// console.log(rizwan.detailsRiz);


// // Challenge Number 03
// const Jonas = {
//     fullName: 'Jonas Khan',
//     mass: 64,
//     hieght: 1.69,
//     calcBMI: function () {
//         this.bmi = (this.mass) / this.hieght ** 2;
//         return this.bmi;

//     }
// }
// const Mark = {
//     fullName: 'Mark Karim',
//     mass: 64,
//     hieght: 2.69,
//     calcBMI: function () {
//         this.bmi = (this.mass) / this.hieght ** 2;
//         return this.bmi;

//     }
// }
// Mark.calcBMI();
// Jonas.calcBMI();
// if (Jonas.bmi > Mark.bmi) {
//     console.log(`${Jonas.fullName}'s BMI (${Jonas.bmi}) is Higher than ${Mark.fullName}'s BMI (${Mark.bmi}).`);

// } else {
//     console.log(`${Mark.fullName}'s BMI (${Mark.bmi}) is Higher than ${Jonas.fullName}'s BMI (${Jonas.bmi}).`);
// }


// Loops 
//FOR Loops
// for (let index = 1; index <= 10; index++) {
//     console.log(`Lifting Weight ${index}`);
// }

// const rizwan = [
//     'Rizwan',
//     'Muhammad',
//     2021 - 1996,
//     'Entrepreneur',
//     ['nasir', 'khan', 'jan'],
// ];
// const types = [];
// const typesPush = [];
// for (let i = 0; i < rizwan.length; i++) {
//     console.log(rizwan[i]);

//     types[i] = typeof rizwan[i];
//     typesPush.push(typeof rizwan[i]);

// }
// console.log(types);
// console.log(typesPush);

// const years = [2000, 2002, 2007, 2011];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);
// }
// console.log(ages);

//continue and break

// for (let i = 0; i < rizwan.length; i++) {
//     if (typeof rizwan[i] !== 'string') continue;
//     console.log(rizwan[i]);
// }

// for (let i = 0; i < rizwan.length; i++) {
//     if (typeof rizwan[i] == 'number') break;
//     console.log(rizwan[i]);
// }

// Loop Backward 
// const rizwan = [
//     'Rizwan',
//     'Muhammad',
//     2021 - 1996,
//     'Entrepreneur',
//     ['nasir', 'khan', 'jan'],
// ];
// for (let i = rizwan.length; i >= 0; i--) {
//     console.log(rizwan[i]);
// }

//Nested Loops
// const exercisrGym = [
//     'Run times',
//     'PushUps',
//     'SitUps'
// ];
// for (let i = 0; i < exercisrGym.length; i++) {
//     for (let run = 1; run < 4; run++) {
//         console.log(exercisrGym[i], ' ', run);
//     }
// }

//While Loops
// let index = 1;
// while (index <= 10) {
//     console.log(`Lifting Weight ${index}`);
//     index++;
// }

// let rollDice = Math.trunc(Math.random() * 6 + 1);
//  console.log(rollDice);

// while (rollDice !== 6) {
//     console.log(`You rolled a ${rollDice}`);
//     rollDice = Math.trunc(Math.random() * 6 + 1);
//     if (rollDice === 6) console.log(`Ended | Rolled ${rollDice}`)
// }


// Coding Challenge of the Section
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totalBill = [];

// function calcTip(bill) {
//     const tip1 = 0.15 * bill;
//     const tip2 = 0.20 * bill;
//     const tip = bill > 50 && bill < 300 ? (tip1) : (tip2);
//     return tip;
// }
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totalBill.push(bills[i] + tips[i]);
// }
// console.log(bills, tips, totalBill);

// //Bonus 
// function calcAvg(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAvg(totalBill));