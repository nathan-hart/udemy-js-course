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

// var bills = [124, 48, 268];

// var tips = [];
// var addedTips = [];
// bills.forEach((billValue) => {
//   if (billValue < 50) {
//     var twentyPercent = 0.2 * billValue;
//     var addedTwenty = twentyPercent + billValue;
//     tips.push(twentyPercent);
//     addedTips.push(addedTwenty);
//   } else if (billValue >= 50 && billValue < 200) {
//     var fifteenPercent = 0.15 * billValue;
//     var addedFifteen = fifteenPercent + billValue;
//     tips.push(fifteenPercent);
//     addedTips.push(addedFifteen);
//   } else {
//     var tenPercent = 0.1 * billValue;
//     var addedTen = tenPercent + billValue;
//     tips.push(tenPercent);
//     addedTips.push(addedTen);
//   }
// });
// console.log(tips);
// console.log(addedTips);

/* Objects and properties */
// Object literal method
// var nate = {
//   firstName: "Nate",
//   lastName: "Hart",
//   birthYear: 1991,
//   familyMembers: ["jase", "sam", "dave"],
//   job: "coder",
//   isMarried: true
// }

// console.log(nate.firstName)
// console.log(nate["lastName"])

// nate.job = "designer";
// console.log(nate.job)

// // new object syntax
// var jane = new Object();
// jane.name = "Jane";
// jane.birthYear = 1997
// jane.lastName = "smith"

// console.log(jane)

/* Objects and Methods */

// var nate = {
//   firstName: "Nate",
//   lastName: "Hart",
//   birthYear: 1991,
//   familyMembers: ["jase", "sam", "dave"],
//   job: "coder",
//   isMarried: true,
//   calcAge: function () {
//     //function expression to create METHOD within "Nate" var
//     // Only objects can have functions, arrays can't
//     var d = new Date();

//     this.age = d.getFullYear() - this.birthYear; // this allow us to access the property within the object
//   },
// };
// nate.calcAge();

// console.log(nate.age);

// /* Coding Challenge 4 */
// var john = {
//   firstName: "John",
//   height: 192,
//   weight: 92,
//   bmiCalc: function () {
//     this.bmi = this.weight / (this.height * this.height);
//     return this.bmi;
//   },
// };
// var mark = {
//   firstName: "Mark",
//   height: 162,
//   weight: 85,
//   bmiCalc: function () {
//     this.bmi = this.weight / (this.height * this.height);
//     return this.bmi;
//   },
// };

// function fatGuy() {
//   if (john.bmiCalc() > mark.bmiCalc()) {
//     return "John is the fattest with bmi of " + john.bmi;
//   } else {
//     return "Mark is the fattest with bmi of " + mark.bmi;
//   }
// }
// console.log(fatGuy());

/* Loops and iteration */

// //FOR LOOPS
// var nate = ["Nate", "Hart", 1991, "rider"];

// for (var i = nate.length - 1; i >= 0; i--) {
//   // STARTING ITERATION; CONDITION; COUNTER UPDATE
//   console.log(nate[i]);
// }

// for (var i = 0; i < nate.length; i++) {
//   if (typeof nate[i] === "number") break;
//   console.log(nate[i]);
// }

// WHILE LOOPS
// i = 0;
// while (i < nate.length) {
//   console.log(nate[i]);
//   i++;
// }

var restaurants = {
  bills: [124, 48, 268, 180, 42],
  billCalculator: function () {
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) {
        tip = this.bills[i] * 0.2;
        total = this.bills[i] + tip;
        this.tips.push(tip);
        this.totals.push(total);
      } else if (this.bills[i] >= 50 && i < 200) {
        tip = this.bills[i] * 0.15;
        total = this.bills[i] + tip;
        this.tips.push(tip);
        this.totals.push(total);
      } else {
        tip = this.bills[i] * 0.1;
        total = this.bills[i] + tip;
        this.tips.push(tip);
        this.totals.push(total);
      }
    }
  },
  tips: [],
  totals: [],
}
restaurants.billCalculator()
console.log(restaurants.tips, restaurants.totals)



var marksBills = [77, 375, 110, 45];
var tips = [];

for (var i = 0; i < marksBills.length; i++) {
  if (marksBills[i] < 100) {
    tip = marksBills[i] * 0.2;
    total = marksBills[i] + tip;
    tips.push(tip);
    // totals.push(total);
  } else if (marksBills[i] >= 100 && i < 200) {
    tip = marksBills[i] * 0.10;
    total = marksBills[i] + tip;
    tips.push(tip);
    // totals.push(total);
  } else {
    tip = marksBills[i] * 0.25;
    total = marksBills[i] + tip;
    tips.push(tip);
    // totals.push(total);
  }
}
console.log(tips)
function averageTips(tipsArray) {
  let totalTips = 0;
  for (i = 0; i < tipsArray.length; i++) {
    totalTips = totalTips + tipsArray[i]
  }
  return totalTips / tipsArray.length;
}

console.log(averageTips(tips), averageTips(restaurants.tips))
whoTippedMore() {
  
}






