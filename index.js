//-------------Assigment 1--------//
//______________________________________________________________________________

//1- Write a program that allow to user enter number then print it

//___________________________________________________________________________________
// function printAnumber() {
//   var num1= +window.prompt('Enter a number:')
//   console.log('The number is:',num1);
// }
// printAnumber()
//_____________________________________________________________________________________

//2- Write a program that take number from user then
// print yes if that number can divide by 3 and 4 otherwise print no
//
//_____________________________________________________________________________________
// function threefourCoMultipuls() {
//   var num2= +window.prompt('Enter a number:')
//   if (num2 % 3 == 0 && num2 % 4 == 0) {
//     console.log('Yes');
//   }
//   else {
//     console.log('No');
//   }

// }
// threefourCoMultipuls()
//_____________________________________________________________________________________

// 3 - Write a program that allows the user to insert 2 integers then print the max

//___________________________________________________________________________________________
//   var a = window.prompt('Enter the first number:')
//   var b = window.prompt('enter the second number:')
//   var c = "equal"
//   if (a > b) {
//     return a;
//   }
//   else if (a < b) {
//     return b;
//   }
//   else {
//     return c;
//   }
// }
// console.log(maxNum());
//_____________________________________________________________________________________

//4- Write a program that allows the user to insert an integer then print negative
//if it is negative number otherwise print positive.
 
//____________________________________________________________________________________
// function sign(a) {
//     var a = window.prompt('Enter an Integer:')
//     if (a < 0) {
//       console.log('negative')
//     }
//     else if (a > 0) {
//       console.log('positive');
//     }
//     else {
//       console.log('zero');
//     }
//   }
//   sign()

//_________________________________________________________

//5- Write a program that take 3 integers from user
// then print the max element and the min element.

//__________________________________________________________________
// function largestSmalest(a, b, c) {
//   var a = +prompt("Enter first number:");
//   var b = +prompt("Enter second number:");
//   var c = +prompt("Enter third number:");
//   var max = 0;
//   var min = 0;
//   if ((a >= b) && (a >= c)) {
//     max = a;
//     if (b <= c) {
//       min = b;
//     } else {
//       min = c;
//     }
//   } else if ((b >= a) && (b >= c)) {
//     max = b;
//     if (a <= c) {
//       min = a;
//     } else {
//       min = c;
//     }
//   } else {
//     max = c;
//     if (a <= b) {
//       min = a;
//     } else {
//       min = b;
//     }
//   }
//   console.log(a ,b ,c);
//   console.log("The largest number is " + max);
//   console.log("The smalest number is " + min);
// }

// largestSmalest();
//__________________________________________________

//6- Write a program that allows the user to insert integer number
// then check If a number is oven or odd

//____________________________________________________________________
// function evenOrOdd(a) {
//   var a = +prompt('enter an integer');
//   if (a % 2 == 0) {
//      console.log('even');
//   } else {
//     console.log('odd');
//   }

// }
// evenOrOdd()
//_________________________________________________________________

//8 - Write a program that take character from user then if it is vowel
//chars(a, e, I, o, u) then print vowel otherwise print consonant
//__________________________________________________________________
// function vowel() {
//   var x = prompt("enter a character:");
//   if (
//     x === "a" ||
//     x === "A" ||
//     x === "e" ||
//     x === "E" ||
//     x === "i" ||
//     x === "I" ||
//     x === "o" ||
//     x === "O" ||
//     x === "u" ||
//     x === "U"
//   ) {
//     console.log("vowel");
//   } else {
//     console.log("consonant");
//   }
// }
// vowel();
// ___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//-------------------------Q9_-------------------------------------
// _____________________________________________________________________________________
// var x = +prompt('Enter an integer number:')
// for (i = 0; i <= x; i++){
//   console.log(i);
// }
//____________________________________________________________________________________________
//----------------------Q10------------------------------------------------------------------
//____________________________________________________________________________________________
// var x = +prompt('Enter an integer number:')
// for (i = 1; i <= 12; i++){
//   console.log(i +'*'+ x + '='+ i*x);
// }
//________________________________________________________________________________________________
// -----------------------Q11------------------------------------------------------------------------
//_________________________________________________________________________________________________
// var x = +prompt('Enter a number:');
// for (i = 1; i <= x; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// _____________________________________________________________________________________________________
// __--------------------------------------------Q12--------------------------------------------------------
//_______________________________________________________________________________________________________
// var x = +prompt('Enter a number');
// var y = +prompt('Enter the power');
// console.log(x ** y);
//_________________________________________________________________________________________________________
//-------------------------------------------------Q13-------------------------------------------------------
//-________________________________________________________________________________________________________
// var full = 500;
// var a = +prompt("enter 1st mark from 100"),
//   b = +prompt("enter 2nd mark"),
//   c = +prompt("enter third mark"),
//   d = +prompt("enter fourth mark"),
//   e = +prompt("enter fifth mark");
// var total = a + b + c + d + e;
// var average = total / 5;
// var percentage = total / full * 100
// console.log('total =' + total);
// console.log('average =' + average);
// console.log('percentage =' + percentage + '%');
//____________________________________________________________________________________________
//---------------------------------------------Q15----------------------------------------------
//____________________________________________________________________________________________
// var month = +prompt('enter the month :');
// switch (month) {
//   case 1:
//     console.log('Dayes in Jan =31 days ');
//     break;
//   case 2:
//     console.log('Dayes in Feb =28 days ');
//     break;
//   case 3:
//     console.log('Dayes in march =31 days ');
//     break;
//   case 4:
//     console.log('Dayes in April =30 days ');
//     break;
//   case 5:
//     console.log('Dayes in may =31 days ');
//     break;
//   case 6:
//     console.log('Dayes in Jun =30 days ');
//     break;
//   case 7:
//     console.log('Dayes in Julay =31 days ');
//     break;
//   case 8:
//     console.log('Dayes in Aug =31 days ');
//     break;
//   case 9:
//     console.log('Dayes in sep =30 days ');
//     break;
//   case 10:
//     console.log('Dayes in Oct =31 days ');
//     break;
//   case 11:
//     console.log('Dayes in Nov  =30 days ');
//     break;
//   case 12:
//     console.log('Dayes in Dec =31 days ');
//     break;
//   default:
//     console.log("enter the number off month from 1 to 12");

// }
//____________________________________________________________________________________________
//----------------------------------Q14------------------------------------------------
//____________________________________________________________________________________
// var a = +prompt("enter 1st mark from 100"),
//   b = +prompt("enter 2nd mark"),
//   c = +prompt("enter third mark"),
//   d = +prompt("enter fourth mark"),
//   e = +prompt("enter fifth mark");
// var total = a + b + c + d + e;
// var percentage = total / 500 * 100
// if (percentage >= 90) {
//   console.log('Grade A');
// } else if (percentage >= 80) {
//   console.log('Grade B');
// } else if (percentage >= 70) {
//   console.log('Grade C');
// }else if (percentage >= 60) {
//   console.log('Grade D');
// }else if (percentage >= 40) {
//   console.log('Grade E');
// }else{
//   console.log('Grade F');
// }

//______________________________________________________________________________________--
//------------------------------------------------Q-15----------------------------------------
//_________________________________________________________________________________________________
// var month = +prompt('enter the month :');
// switch (month) {
//   case 1:
//     console.log('Dayes in month =31 days ');
//     break;
//   case 2:
//     console.log('Dayes in month =28 days ');
//     break;
//   case 3:
//     console.log('Dayes in month =31 days ');
//     break;
//   case 4:
//     console.log('Dayes in month =30 days ');
//     break;
//   case 5:
//     console.log('Dayes in month =31 days ');
//     break;
//   case 6:
//     console.log('Dayes in month =30 days ');
//     break;
//   case 7:
//     console.log('Dayes in month =31 days ');
//     break;
//   case 8:
//     console.log('Dayes in month =31 days ');
//     break;
//   case 9:
//     console.log('Dayes in month =30 days ');
//     break;
//   case 10:
//     console.log('Dayes in month =31 days ');
//     break;
//   case 11:
//     console.log('Dayes in month =30 days ');
//     break;
//   case 12:
//     console.log('Dayes in month =31 days ');
//     break;
//   default:
//     console.log("enter the number off month from 1 to 12");

// }
//___________________________________________________________________________________
//16- Write a program to check whether an alphabet is vowel or consonan
//___________________________________________________________________________________
// var x = prompt('enter a character:')
// switch (x) {
//   case 'a':
//   case 'A':
//   case 'e':
//   case 'E':
//   case 'o':
//   case 'O':
//   case 'I':
//   case 'i':
//   case 'u':
//   case 'U':
//     console.log('vowel');
//     break;
//   default:
//     console.log('consonant');
//     break;
// }
//______________________________________________________________________________________________

//17- Write a program to find maximum between two numbers

//______________________________________________________________________________________________
// var x = +prompt("enter the first num:");
// var y = +prompt("enter the sec num:");
// switch (x > y) {
//   case true:
//     console.log(x);
//     break;
//   case false:
//     console.log(y);
//     break;

//   default:
//     console.log("invalid value");
//     break;
// }
//_______________________________________________________________________________________

//18- Write a program to check whether a number is even or odd

//_______________________________________________________________________________________
// var x = +prompt('enter a number');
// switch (x % 2) {
//   case 0:
//     console.log('even');
//     break;
//   case 1:
//     console.log('odd');
//     break;
// }
//________________________________________________________________________________________

//19- Write a program to check whether a number is positive or negative or zero

//______________________________________________________________________________________
// var x =+prompt('enter a number');
// switch (x>0 ) {
//   case true:
//     console.log('+ve');
//     break;
//   case false:
//     switch (x < 0) {
//       case true:
//         console.log('-ve');
//         break;
//       case false:
//         console.log('zero');
//         break;
//     }

// }
//______________________________________________________________________________________

//20- Write a program to create Simple Calculator

//_________________________________________________________________________________________
// var number1 = +prompt("enter a 1st number");
// var operator = prompt("enter operator( + , - , * , / )");
// var number2 = +prompt("enter a 1st number");
// switch (operator) {
//   case "+":
//     console.log(number1 + "+" + number2 + "=" + (number1 + number2));
//     break;
//   case "-":
//     console.log(number1 + "-" + number2 + "=" + (number1 - number2));
//     break;
//   case "*":
//     console.log(number1 + "*" + number2 + "=" + number1 * number2);
//     break;
//   case "/":
//         if (number2 == 0) {
//             console.log(' denominator is zero');
//             break;
//     }
//     console.log(number1 + "/" + number2 + "=" + number1 / number2);
//     break;
// }
