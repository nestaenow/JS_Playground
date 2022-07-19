//normal switch statement
// switch (prompt("What is the weather like?")) {
//     case 'rainy':
//         console.log("Remember to bring an umbrella.");
//         break;
//     case 'sunny':
//         console.log("Dress lightly");
//         break;
//     case 'cloudy':
//         console.log("Go outside");
//         break;
//     default:
//         console.log("Unknown weather type!");
//         break;
// }

//Back to School Udacity
// change the value of `education` to test your code
const education = "Bachelor's degree";

// set the value of this based on a person's education
let salary = 0;

// your code goes here
switch (education){
  case 'no high school diploma':
  	salary += 25636;
  	break;
  case 'high school diploma':
  	salary += 35256;
  	break;
  case "Associate's degree":
  	salary += 41496;
  	break;
  case "Bachelor's degree":
  	salary += 59124;
  	break;
  case "Master's Degree":
  	salary += 69732;
  	break;
  case 'Professional degree':
  	salary += 89960;
  	break;
  case 'Doctoral degree':
  	salary += 84396;
  	break;
  default:
  	salary += 0;
}
console.log('In 2015, a person with ' + education + ' earned an average of ' + salary.toLocaleString("en-US") + '/year.')
//toLocaleString is a method that returns a string with language-sensitive representation