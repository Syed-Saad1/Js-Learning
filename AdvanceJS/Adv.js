// Array 

// const Arr = [1, 2, 3, 4, 5];
// console.log(Arr);

// const Arr2 = ["SAAD ", " RAZA"]
// console.log(Arr2[1]);

// const diffsyntax = new Array(" SAAD ", 3, true, undefined);
// console.log(diffsyntax);

// // Array Methods

// Arr2.push("Syed Furqan")                // << This Method Is Add in Array but Add in last Value....  
// Arr2.pop()                             // << This Method Is Remove in Array but Remove in last Value....  
// Arr2.unshift(465)                     // << This Method Is Add in Array but Add in First Value....  
// Arr2.shift()                         // << This Method Is Remove in Array but Remove in First Value....  
// console.log(Arr2); 
// console.log(Arr.includes(2));      // This Method is Find Array Values........ 

// const myarray = Arr.join()
// console.log(Arr);
// console.log(typeof myarray);


// // Slice & Splice

// console.log( " A " , Arr);

// const MyA1 = Arr.slice(1 ,3)
// console.log(MyA1);

// console.log( " B " , Arr);

// let myn2 = Arr.splice(1 , 3)
// console.log(myn2);

const Muslim_heros = ["Abu-Bakar sidiq "  , " Umar-e-Farooq " , "osman Ghani" ," Mola Ali "];
const Pakistani_heros = ["Qaid-e-Azam"  , "Allama Iqal" , "liaqat Ali Khan" ," Dr : Abdul Qader"];

// Muslim_heros.push(Pakistani_heros)
// console.log(Muslim_heros);
// console.log(Muslim_heros[3][1]);

// const Murch_Heros = Muslim_heros.concat(Pakistani_heros)
// console.log(Murch_Heros);

// const new_syn = [...Muslim_heros , ...Pakistani_heros];
// console.log(new_syn[5]);

// const Array_Murch_Synatx = [1 , 2 , 3 , 4 ,5, [6 , 7 ,8 ,9 ] , 10 , 11 , [12 , 13 , 14, [15 , 16 ,17 ,18]] ]
// const Add = Array_Murch_Synatx.flat(Infinity);
// console.log(Add);

// console.log(Array.isArray("Saad")); // this is Make Array But it's a not Array
// console.log(Array.from("Saad")); // this is Make Array But it's a  Array

// console.log(Array.from({name : "Saad"})); // This is intersting Syntax

// let name = "Saad";
// let Score = 234;
// let Progress = "First";

// console.log(Array.of(name , Score , Progress));


// object Js

// Singletone          (Koi Bhi Cinstructor sa banata ha to ek hi tarha ka object banta ha)

Object.create          // << This Syntax is obj Singletone this is called Constructor and this is make single tone..

//Object Literals      (Ya Object Ko Declare karna ka tarika ha )

const sym = Symbol("key1")

const detail = {           // << This Syntax is obj letrals......
    name : "Syed Saad Raza",
    "Full Name" : "Syed Saad Raza Furqan", 
    Age : 16,
    [sym] : "My Key 1",
    Location : "Karachi",
    email : "syedsaadfurqan10@gmail.com",
    isloggedin : true,
};

console.log(detail.email);
console.log(detail["Full Name"]);
console.log( detail[sym]);