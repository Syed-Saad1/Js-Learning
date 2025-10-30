// console.log("Mr:Saad");

// let Car_Name = "Civic Rs ";
// let Car_title = "This Car is Honda Company This is Very Bestest Car!";
// let Car_Price = "10,100,000 ";
// let Car_Color = "Black";
// let Car_Model = 2025;
//  Car_title = "North America, the top trims for the 2025 model year are the Sport Touring Hybrid, Civic Si, and Type R.";
// let Array = [Car_Name, Car_title, Car_Price, Car_Color, Car_Model];
// let Array1 = [Car_Name, Car_title, Car_Price, Car_Color, Car_Model];

// console.table(Array);

// let string = "Saad";
// let number = 16;
// let bolean =true;
// let null1 = null;
// let undefind;

// let Array2 =[string,number,bolean,null1,undefind];
// console.log( Array2);

// let score = true;
// console.log(typeof (score));

// let value = Number(score);
// console.log(typeof value);
// console.log( value);

// let loggedin = "";
// let boliean = Boolean(loggedin);

// console.log(boliean)

// let number = 384;
// let strnum = String(number);
// console.log(strnum);
// console.log(typeof strnum);

// let num = 2983;
// let negative = -num;
// console.log(negative);

// let name1 = "Syed Saad ";
// let name2 = "Raza  ";
// let name3 = "Furqan Shafaq ";

// let final = name1 + name2 + name3;

// console.log(final);

// console.log(2+2);
// console.log(2-2);
// console.log(2**2);
// console.log(2%2);
// console.log(2/2);

// console.log("4" + 6);
// console.log(10 + "6");
// console.log(10 + 10 + "6");
// console.log("10" + 10 + 27);

// console.log((3 + 34)+ 56 * 34 / 56 % 34);

// console.log(true);
// console.log(+true);
// console.log(+"");

// let num1,num2,num3

// num1 = num2 = num3 = 2+2;

// let final = num1 + num2 * num3;

// console.log(final);

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log("9" === "9");
// console.log(2 != 1);

// console.log("5" > 3);
// console.log("05" > 3);

// Primitive Data Types

// This is Seven Types

// 1: String ( " " )
// 2: Number (Simplle num )
// 3: Boolean ( true / false )
// 4: null (empty)
// 5: undefind (declare ha but define nhi ha )
// 6: symbol (kesi bhi value Ko Uniqe Bana ta ha )
// 7: BigInt (ya Koi Syntefic Value Ya Bari Values Ka Liya Use Hota Ha)

// (Non-Primitive) Data Types

// This is Three Types

// 1: Array
// 2: Object
// 3: Functions

// let score = 1234;
// let temperature = null;
// let userEmail;
// let id = Symbol('123');
// console.log(id);

// let bignum = 7584795549995543;
// console.log(bignum);

// let orgname = "Saad Raza";
// let savename = orgname;
// savename = "SFA Institute";
// console.log(orgname);
// console.log(savename);

// let User1 = {
//     Name: "Syed Sarim",
//     Email: "sarim2@gmail.com",
//     Id: 13322,
// };

// let User2 = User1;

// User2.Name = "Syed Saad Raza";
// User2.Email = "syedsaadfurqan10@gmail.com"

// console.log(User1.Name);
// console.log(User2.Name);


// [Primative] Data type: Jitna Ha Ya Sara (Stack Memory) Ma Jata ha or ya Jaise Ap Koi Update karta ha to woh is  ki Copy  Data Ha....
// [Non-Primative] Data type: Jitna Ha Ya Sara (Heap Memory) Ma Jata ha or yaaise Ap Koi Update karta ha to woh original ka Refrences  Data Ha....

// let name = "Saad Raza "
// let Repo = 22;
// console.log(`Hello I am ${name} and My Github Repo is ${Repo} Thanks `);


// const name = new String(`Saad-Raza-Syed-Furqan`)
// console.log(name[3])
// console.log(name.__proto__);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(10));
// console.log(name.indexOf(`F`));


// const newstr = name.substring(1, 13)
// console.log(newstr);

// const extre = "  SAAD   ";
// console.log(extre);
// console.log(extre.trim());

// const url = "https://syedsaad1.com/saad%20raza";
// console.log(url);

// console.log(url.replace(`%20` , `_`));

// console.log(name.split(`-`));

// const score = 235;
// console.log(score);

// const balance = new Number(3284);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(5));

// const othernumber = 8.99;
// console.log(othernumber.toPrecision(1));

// const num = 1247346;
// console.log(num.toLocaleString(`en-PK`));
// console.log(num.toLocaleString(`en-PK`));

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.55));// Ya Hamesha (.) Ka Bad Wali valure .5 sa Plus Hogi to Ya Jaise 4.6 ha to ya 5 da ga Agar is sa nicha hogi to 4 da ga..
// console.log(Math.ceil(4.1)); // ya hamesh Apna Sa top wali value laga Jaise (4.1) to ya (5) da ga..
// console.log(Math.floor(4.9)); // ya hamesh Apna Sa down wali value laga Jaise (4.9) to ya (4) da ga..


// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10) +1);

// const min = 100;
// const max = 200;

// console.log(Math.floor(Math.random() * (min - min + 1) ) + max);

// let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());
// console.log(date.toJSON());
// console.log(typeof date);


// let Customdate = new Date(2026, 3 , 28)
// console.log(Customdate.toDateString());

// let Customdate = new Date (2020, 3 , 23 , 1 ,34)
// console.log(Customdate.toDateString());

// let Customdate = new Date ("2022-3-23")
// console.log(Customdate.toLocaleString());

// let Date1 = Date.now();
// console.log(Date1);
// console.log(Customdate.getTime());
// console.llog(newdate.getHours());
// console.log(newdate.getMonth() + 1);
// consog(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

// let newdate = new Date()
// console.log(newdate);
// console.ole.log(newdate.getMinutes());
// console.log(newdate.getDay());

// newdate.toLocaleString('default' , {
//     weekday: "narrow"
// })

// let firstname = "SAAD RAZA"
// let lastname = "FURQAN "
// let FnalName = (`My First Name is ${firstname} and My Full Name is ${firstname + lastname} `)

// console.log(FnalName.toLowerCase())