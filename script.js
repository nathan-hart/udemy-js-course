/*  Function Statements and Expressions */

// Function expression:  always produces a value/result
// var whatDoYouDo = function (job, firstName) {
//   switch (job) {
//     case "driver":
//       return firstName + " teaches drivers";
//     case "coder":
//       return firstName + " teaches coders";
//     case "surfer":
//       return firstName + " teaches surfers";
//     default:
//   }
// };

// console.log(whatDoYouDo("coder", "Nate"));

// Function declaration: does not immediately return a value
// function whatDoYouDo(job, firstName) {}

/* Arrays */

// var names = ["john", "jane", "mark"];
// var years = new Array(1990, 1969, 1945);

// console.log(names[0]);

// // Different daya types in one array:
// var nate = ["Nate", "Hart", 1991, "rider"];

// nate.push("mtb");
// nate.unshift("Mr.");
// console.log(nate);

// nate.pop();
// nate.shift();
// console.log(nate);

// console.log(nate.indexOf(27)); // result is -1;
// // very useful for seeing if value exists in array

// var isCoder =
//   nate.indexOf("coder") !== -1 ? "Nate is a coder" : "Nate is not a coder";

// console.log(isCoder);

/* Coding Challenge 3 */

var bills = [124, 48, 268];

var tips = [];
var addedTips = [];
bills.forEach((billValue) => {
  if (billValue < 50) {
    var twentyPercent = 0.2 * billValue;
    var addedTwenty = twentyPercent + billValue;
    tips.push(twentyPercent);
    addedTips.push(addedTwenty);
  } else if (billValue >= 50 && billValue < 200) {
    var fifteenPercent = 0.15 * billValue;
    var addedFifteen = fifteenPercent + billValue;
    tips.push(fifteenPercent);
    addedTips.push(addedFifteen);
  } else {
    var tenPercent = 0.1 * billValue;
    var addedTen = tenPercent + billValue;
    tips.push(tenPercent);
    addedTips.push(addedTen);
  }
});
console.log(tips);
console.log(addedTips);