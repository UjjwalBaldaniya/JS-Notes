// ------------------------------------ var, let, const ------------------------------------ //
// -> var is the functional scope
// -> let, const is a block scope

const blockAndFunctionalScope = () => {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
  }
  console.log("a:", a);
  console.log("b:", b); //  ReferenceError: b is not defined
  console.log("c:", c); // ReferenceError: b is not defined
};

// blockAndFunctionalScope();

// This error will occur because let and const are a block scope, so It will not working outside the block
// scope, Now we if statement that is block scope

// ------------------------------------ hosting ------------------------------------ //

// hoisting has two types 1.function hoisting 2. variable hoisting

// 1.function hoisting
// hoist();
function hoist() {
  console.log("hoisting");
}
// This is a tradition function declaration, and function hoisting is working fine with it

// hoist1(); // ReferenceError: Cannot access 'hoist1' before initialization
const hoist1 = () => {
  console.log("hoisting ES6+");
};
// we are not accessing the ES6 arrow function before initialization

// 2. variable hoisting
// console.log("a1:", a1);
var a1 = 10;
// if we are typing to console/get this value before initialization then in var case getting "undefined"

// console.log("b1:", b1); // ReferenceError: Cannot access 'b1' before initialization
let b1 = 20;
// console.log("c1:", c1); // ReferenceError: Cannot access 'b1' before initialization
const c1 = 30;
// in (let, const) variable hoisting we are not accessing the value before initialization

// ------------------------------------ Data Types ------------------------------------ //

// 1. primitive
// -> primitive data types is immutable
// -> Number, null, string, symbol, bigint, boolean, null

// 2. non-primitive
// -> non-primitive data types is mutable
// -> object, array, function

// ------------------------------------ Higher-Order function ------------------------------------ //

// Takes another function as an argument/parameter, or Returns a function as a result

const dummy = [1, 2, 3, 4, 5];
const dummyMap = dummy.map(function (data) {
  return data * 2;
});
