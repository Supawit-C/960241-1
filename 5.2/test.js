var x1 = 10;
if (x1 === 10) {
    var y1 = 100;
    console.log(y1); // 100
}
console.log(y1); // 100


var x2 = 10;
if (x2 === 10) {
    var y2 = 100;
    console.log(y2); // 100
}
console.log(y2); // 100


var x3 = 10;
if (x3 === 10) {
    let y3 = 100;
    console.log(y3); // 100
}
//console.log(y3); //เกิด Error (ReferenceError) เพราะ let ใช้งานได้แค่ในปีกกา {}


let myArray1 = [1, 2, 3];
myArray1.forEach(element => {
    console.log(element); // 1, 2, 3
});


let myArray2 = [1, 2, 3];
for (const iterator of myArray2) {
    console.log(iterator); // 1, 2, 3
}

let dog = { name: "Yoyo", color: "black", age: 2 };
for (const k in dog) {
    console.log(k); // name, color, age
}

const numbersOne1 = [1, 2, 3];
const numbersTwo1 = [4, 5, numbersOne1];
console.log(numbersTwo1); // [4, 5, [1, 2, 3]]


const numbersOne2 = [1, 2, 3];
const numbersTwo2 = [4, 5, ...numbersOne2];
console.log(numbersTwo2); // [4, 5, 1, 2, 3]


function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2, 3, 4)); // 10