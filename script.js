// let message;

// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }


// const login = prompt('Enter Name')
//     (login == "Emplyess") ? alert("Hello") : (login == "Director") ? alert("Greetings") : (login == "") ? alert("no Login") : alert("")
// const count = 0;
// const text = "";

// const qty = count || 42;
// const message = text || "hi!";
// console.log(qty); // 42 and not 0
// console.log(message); // "hi!" and not ""
// function printMagicIndex(arr) {
//     console.log(printMagicIndex?.[42]);
// }

// printMagicIndex([0, 1, 2, 3, 4, 5, 42]); // undefined
// printMagicIndex(); // undefined; if not using ?., this would throw
// const temp = obj.first;
// const nestedProp =
//   temp === null || temp === undefined ? undefined : temp.second;

// const data = {
//     name: "ujjwal",
//     surname: "baldaniya",
//     education: {
//         school: 'ipsavani',
//         roll_no: 7
//     }
// }
// console.log(data?.education?.school)

// let name
// const surname = "baldaniya"

// console.log(name ?? surname)

// const obj = {
//     name: "ujjwal",
//     surname: "baldaniya",
//     fullName: function () {
//         return this.name + ' ' + this.surname;
//     }
// }
// console.log(obj.fullName())

// const data = new Date()
// console.log(data)

// const array1 = [1, 0, 2, 3, 4];
// const array2 = [3, 5, 6, 7, 8, 13];
// const s = []
// console.log(array2.map((element, index) => element + array1[index]))
// for (let i = 0; i < array2.length; i++) {
//     console.log(array1[i]  + array2[i])
// }

// const Sample = [NaN, 0, 15, false, -22, '', undefined, 47, null]
// const nn = []
// Sample.forEach((element) => {
//     if (element !== "" && element !== null && element !== undefined && element !== false && element !== 0) {
//         nn.push(element)
//     }
// })
// console.log(nn)

// var library = [
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 }
// ];
// const rr = library.map((element) => element.title)
// console.log(rr.sort())

// const qq = library.filter((element)=> element.title )
// console.log(qq.sort())

// const as = [1, [2], [3, [[4]]], [5, 6]]
// console.log(as.flat(Infinity))

// const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// color.map((element, index) => {
//     console.log(`${index + 1}First Choice is${element}`)
// })

// const arry = [1, 2, 1, 3, 4, 3, 5];

// const aa = arry.filter((element, index) => arry.indexOf(element) !== index)
// console.log(aa)




// ====================================  Array Method ==================================== //
// ====================================  Array Method ==================================== //

let arr = [1, 2, 0, 6, -5, 4, -7, 8, 9]
let arr1 = ["a", "b", "d", "c"]
let arr2 = "ujjwal baldaniya"
const array = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
]

// const result = arr.filter((data)=>data==2)
// const result = arr.find((data)=> data > 2)
// const result = arr.reduce((a, b) => a + b, 0)
// const result = arr.sort((a,b)=>b-a)
// const result = arr.concat(...array)
// const result = arr.map((data) => data * 2)
// const result = array.forEach((element) => {
//     let sentence = element.name
//     console.log(sentence)
// })
// const result = arr.every()
// const result = array.filter((namea) => namea.name.includes('jo'))
// const result = arr2.split("").reverse().join("")
// const result = arr2.indexOf("u")
// const result = arr.findIndex()
// const result = arr.find((name)=> name>5)
// const result = arr1.fill("a")
// const result = arr.push(10)
// const result = array.slice(2)
// const result = arr.splice(2,8,33)
// const result = array[0].name
// for (let i = 0; i <= array.length; i++) {
//     console.log(array[i])
// }
// array.forEach(num => console.log(num.name))
// const result = arr.sort((a, b) => a - b)

// const result = array.forEach((value,index,a)=> console.log(value,index,a))
// const result = arr.filter((name)=> name>5)
// const result= arr.every((value)=> value<19)
// const result = arr.find((value) => value > 1)
// console.log(result)
// const result = arr.findIndex((value) => value > 1)
// console.log(result)

// const myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(','))
// console.log(myColor.join('*'))

// const num = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// console.log(num.sort((a,b)=>a-b))

// var arr11 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// ====================================   ================================== //
// ================================  Que - 1 ======================================= //
// ====================================   ======================================= //

// const swape = (str) => {
//     let result = []
//     let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let LOWER = 'abcdefghijklmnopqrstuvwxyz';
//     let str1 = [];
//     let a = str.split("")
//     a.forEach(element => {
//         if (element !== " ") {
//             return str1.push(element)
//         }
//     });
// console.log(str1)
// let upper1 = UPPER.split("")
// console.log(upper1)
// let lower1 = LOWER.split("")
// console.log(lower1)

// for (let i = 0; i < str1.length; i++) {
//     for (let j = i; j < upper1.length; j++) {
//         if (upper1[j].includes(str1[i])) {
//             return result.push(str1[i].toLowerCase())
//         }
//     }
// }
// console.log(result)

// for (let i = 0; i < str.length; i++) {
//     if (UPPER.includes(str[i])) {
//         result.push(str[i].toLowerCase())
//     } else if (LOWER.includes(str[i])) {
//         result.push(str[i].toUpperCase())
//     } else {
//         result.push(str[i])
//     }
// }
// console.log(result.join(''))

// for (let i = 0; i < str.length; i++) {
//     // debugger
//     // console.log(str[i])
//     if (UPPER.includes(str[i]) !== UPPER) {
//         let a = str[i].toUpperCase()
//         result.push(a)
//     } else if (LOWER.includes(str[i]) !== -1) {
//         let b = str[i].toLowerCase()
//         result.push(b)
//     } else {
//         return str[i]
//     }
// }
// }
// swape("Hii ujjwal")


// let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
// let store = []
// const strName = "The Tagline is top ten company"

// for (let i = 0; i < strName.length; i++) {
//     if (upperCase.includes(strName[i])) {
//         store.push(strName[i].toLowerCase())
//     } else if (lowerCase.includes(strName[i])) {
//         store.push(strName[i].toUpperCase())
//     } else {
//         store.push(strName[i])
//     }
// }
// console.log(store.join(""))


// ====================================   ======================================= //
// ================================= Que - 2 ====================================== //
// ====================================   ======================================= //

// const enter = "The Tagline is top ten company";
// const enter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz";
// const enter1 = enter.split(" ").join("")
// for (let i = 0; i < enter1.length; i++) {
//     let res = enter1[i].charCodeAt()
//     document.write(res + " ")
// }
// document.write("<br>" + enter)

// ================================= Switch Case ================================= //

// const date = new Date().getDay()
// console.log(date)
// if (date == 0) {
//     console.log("Today is Sunday")
// }
// else if (date == 1) {
//     console.log("Today is Monday")
// }
// else if (date == 2) {
//     console.log("Today is TuesDay")
// }
// else if (date == 3) {
//     console.log("Today is Wednesday")
// }
// else if (date == 4) {
//     console.log("Today is Thursday")
// }
// else if (date == 5) {
//     console.log("Today is Friday")
// }
// else if (date == 6) {
//     console.log("Today is Saturday")
// }
// else {
//     console.log("Enter Valid Number")
// }

// console.log((date == 0) ? "sunday" : (date == 1) ? "monday" : (date == 2) ? "tuesday" : (date == 3) ? "wednesday" : (date == 4) ? "thursday" :
//     (date == 5) ? "friday" : (date == 6) ? "saturday" : "nan")

// switch (date) {
//     case 5:
//         console.log("friday swich")
//         break;

//     default:
//         break;
// }

// ================================= Date Method ================================= //

// const myFunc = () => {
//     let date = new Date()
//     document.write(date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds())
// }
// myFunc()
// setTimeout(myFunc, 1000)

// const func = () => {
//     let date = new Date()
//     document.getElementById("demo").innerHTML = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()
//     console.log(date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds())
// }
// setInterval(func, 1000)

// const hi = () => {
//     alert('Hello')
// }
// setTimeout(hi, 5000)
// setInterval(() => {
//     alert("ujjwal")
// }, 5000);

// ================================= Object w3 Resource ================================= //

// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// Object.keys(student).forEach(element => console.log(student[element]))

// ================================= set Interval & Set TimeOut ================================= //

// alert("hello upper")
// setTimeout(() => {
//     alert('hello')
// }, 3000);
// alert("hello down")

// setInterval(() => {
//     alert('hello')
// }, 4000);

// ================================= Optional chaining (?.) ================================= //
//in optional chaining use in api, when api call there give response after some time so we use ?. because 1st argument api will take some time and that time api will run so api value is null / unidifine., so that time function not given error or stop exicute code ?. return undifine value and code is runing.  

const obj1 = {
    name: "Hardik",
    surname: "Gundaraniya",
    address: {
        state: "gujrat",
        city: "surat",
        country: "india"
    }
}
const obj2 = {
    name: "ujjwal",
    surname: "baldaniya",
    address: {
        state: "gujrat",
        city: "surat",
        country: "india"
    }
}

// console.log(obj1?.address?.city)
// console.log(obj1 ?? obj2)

// ================================= Object key-value Delete ================================= //
let object = {
    name: "ujjwal",
    surname: "baldaniya",
    roll_no: 11
}

// delete object.name
// console.log(object)

// let { name, ...resting } = object
// console.log(resting)

// Reflect.deleteProperty(object, 'roll_no');
// console.log(object)

// ================================= Object inside use map method ================================= //

let object1 = { a: 1, b: 2, c: 3, d: 4 }
let maping = []
// for (const key in object1) {
//     maping.push(object1[key])
// }
// maping.forEach((element) => console.log(element * 8))

// let result11 = maping.map((element) => {
//     return element * 7
// })
// console.log(result11)

// console.log(Object.values(object1).map((element) => element * 7))

// ***********

// Object.keys(object1).forEach((element) => object1[element] *= 7)
// console.log(object1)

// Object.keys(object1).map((element) => {
//     return object1[element] *= 7
// })
// maping.push(object1)
// console.log(maping)

let result = Object.entries(object1).flatMap(element => element)
console.log(result)
// Object.entries(object1).map((element) => object1[element] *= 10)
// maping.push(object1)
// console.log(maping)

// console.log(Object.entries(object1))

// const obj = { a: 1, b: 2, c: 3, d: 4 };
// const array = Object.values(obj);

// console.log(array);

// const obj = { a: 1, b: 2, c: 3, d: 4 };
// const array = Object.entries(obj);

// console.log(array);

// const array = [['a', 1], ['b', 2], ['c', 3], ['d', 4]];
// const flattenedArray = array.flatMap(entry => entry);

// console.log(flattenedArray);












