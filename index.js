let num = [0,0,0,1,0,1,0];
let total = 0;
let zero = num.filter((item)=>{
    if ( item == 0) 
    total++ ;
});
console.log(total);


let arr = new Array(2,3,4,5,6,7,8);
console.log(arr);
let even = arr.filter((a)=>{
    return a % 2 == 0;
});
console.log(even);
console.log(even.length);

let odd = arr.filter((b)=>{
    return b % 2 != 0;
});
console.log(odd);
console.log(odd.length);


let str = "Ribhu";
// let vowel = /[aeiou]/gi;
// let result = str.match(vowel);
// console.log(result.length);

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    console.log( count);
}
countVowel(str);