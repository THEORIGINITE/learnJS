// /// Data types
// //primitive data types

// let   a = null
// let b = "string"
// let c = BigInt("785864") + BigInt("654")
// let d = Symbol("i amhd")

// console.log(a,b,c,d)
// console.log(typeof(c))

// const myobject ={
//     mytitle: "string"
//     , desc: "hjdjgfdgh"

// }
// console.log(myobject.desc.charAt(4-1))

// Q1
// let a  = "string"
// Q2
// let b = a + 1
// console.log(typeof(b));

//Q3done
// const constyantobject ={
//     name: " Raju",
//     class:9,
//     roll:45
// }

//constyantobject ="ajkjhds" {you can't assign a constant , a new value}

//but keys or value inside the object can be changed or added let us seee hoe?

// change

// >> constyantobject["name"] = "manish"
//console.log(constyantobject);>>> {name:"manish" , class: 9 , roll:45}

//addding key

// constyantobject["friend"]= "Manas"
// console.log(constyantobject); >>
// { name: ' Raju', class: 9, roll: 45, friend: 'Manas' }

//removing

// delete constyantobject.name
// console.log(constyantobject); >> {clas:9,roll:45}

//Q5

// const dictionary ={
//     espionage:"spy",
//     intruder:"not invited",
//     shrilly:"unpleasent sound",
//     lavishly:"in a great amount",
//     resillience:"ability to recover"
// }

// console.log(dictionary.espionage);

// ---------------------------------------------------------------
// Operators
//  /// Arithematic Operators
// let a =78
// let b= 89
//add

// console.log(a+b); >> 167

// subtract

// console.log(a-b); >> -11

//divide

// console.log(a/b); >> 0.8764044943820225 {it will evaluate it in float unlike C-lang }

//multiply
// console.log(a*b); >> 6942

//exponent
// b=3 { decreasing b's value to have a simple result}
// console.log(a**b);>> 78x78x78 = 474552

// to know remainder

// console.log(b%a); >> 11

//increment ******most importatnt

//   console.log("a++" , a++);  {
//     message: " it will increment a by 1 but will not print in the console at this time , therefor you'll se 78 but if you'll console it aggain you'll get 80 "
//   }

// >>78
//   console.log("++a" , ++a);  {
//     message:"it will increment a by 1 and will print the incremented number  at the same time  therefore uou'll see 80 in the console "
//   }
//   >>80

//decrement

//   console.log("a--",a--);{
//     message:"it will decrement  a by1 but will not print the decremented number , if you'' do a console log agin to see a you'll se the decremented number"
//   }

// >>78
//   console.log(a); >> 77

//   console.log("--a",--a);{
//     message:"it will decrement  a by 1 but and  will  print the decremented number , therefore at the same time you'll se the decremented number without doing conole.log again"
//   }
//   >>77

//  console.log(a);  >>77

//// Asignment operators

// let asssignmentOperator = 1

// +=

// asssignmentOperator += 5  {" assignmemtOpt = assignmentOpt + 5"}
// console.log(asssignmentOperator);
// -= x-y

// *=x*y
//  /=x/y

// **= x**y

//  Comparison Operator
//  let w = 1

//  let r = "1"
//  let p = 12

//  let q = 15
//console.log( "w == r" , w==r) // >>true
//console.log( "w === r" , w===r); // is it really same both in type and magnitude >>false
//console.log( "w != r" , w!=r); // is w it not equal to r >> false >>magnitude same
//console.log( "w !== r" , w!==r); // is w really not equal to r in both type and magnitude >> true
// console.log(" p > q" , p > q); >> false
// console.log(" p < q" , p < q); >> true
// console.log(" p >! q" , p >! q); >> true , because it is asking -- is p not greater than q ? ans : yes
// console.log(" p <! q" , p <! q); >> false , because it is asking -- is p not less  than q ? ans : no

/// ternary Operator ?

/// LOGICAL OPERATORS

// && { if both oprends are true >> true ,
// if either of the oprends is false >>false ,
// if both oprends are false >> false}

// let a = 4
// let b ="4"

// console.log( a == b && a ===b  );  >> False . because although a is equal to b in magnitude but a is not equal to b in data type, one is number and another is string
// console.log( a == b && b == a); >> true , because both oprends are same in magnitude

//or  >> ||

// { if either of the oprends is true >> true else false}

// console.log( a == b || a ===b  ) >> true , because although type of b is not equal to a but a is equal to b in magnitude
// console.log( a === b || a === b  ) >> false , because no oprends is returning true

// ! not
// console.log(!false); >> true
// console.log(!true); >> false

// typeof
//   let a ="string"
//   let b = 90
//   let c = true

// console.log(typeof(a) ,typeof(b),typeof(c)); >> string number boolean

// -----------------------------------------------------------------------

// Conditional expressions
// var prompt = require("prompt");
// prompt.start();
// console.log("I will now ask you for your rating.");
// prompt.get(["rating"], function(err, res){

//     if(4 < res.rating){
//         console.log(res.rating ,"nice to see that you'are enjoying our application.")
//     }else if( res.rating <= 0){
//      console.log("Sorry for any problem which we have ever put you into .");
//     }
//     else{
//         console.log(res.rating,"thanks for your feedback , we will try to improve")
//     }

// });

//SWITCH CASE

//The switch statement is used to perform different actions based on different conditions.

// let day;
// let DayDate;
// let month;

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;

//   case 1:
//     day = "Monday";
//     break;

//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thurday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }

// switch (new Date().getMonth()) {
//   case 0:
//     month = "January";
//     break;
//   case 1:
//     month = "February";
//     break;
//   case 2:
//     month = "March";
//     break;

//   case 3:
//     month = "April";
//     break;
//   case 4:
//     month = "May";
//     break;
//   case 5:
//     month = "June";
//     break;
//   case 6:
//     month = "July";
//     break;
//   case 7:
//     month = "August";
//     break;
//   case 8:
//     month = "September";
//     break;
//   case 9:
//     month = "October";
//     break;
//   case 10:
//     month = "November";
//     break;
//   case 11:
//     month = "December";
//     break;
// }


// DayDate = new Date().getDate()

// let finalDate 
// finalDate = `${day},${DayDate}th ${month}`
// console.log(finalDate);