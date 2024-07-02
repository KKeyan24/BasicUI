/*Basic Print Methods*/

document.write('Document.write method');
console.log('Console Print');
function welcome() {
    window.alert('Windows Alert')
    document.getElementById('print').innerHTML = 'Print By DIV ID';
}

/* Variables Decleration*/

var a = 10;  // variable as numbers
let b = "Hi"; // variable as string
let c = true; // variable as boolean
const array = [1, "two", true]; //variable as array
const obj = {name:'Rahul',age:20}; //variable as object
const date = new Date("2024-06-28"); //variable as data
let d = null;
let e = undefined;
let arrayOject = [{ name:'Karthi', age:'30'}]; //variable as Array of Objects

/*Functions*/
let x = myFunction(127, 67);
console.log(x)
function myFunction(a, b) {
  return a * b;
}

/*String and Methods*/
let text = 'Single Quotes';
let text1 = "Double Quotes";
let text2 = `Template Literals`;
let text3 = "      Javascript strings are primitive and immutable         ";
let text4 = text3.trim();
let text5 = 'Javascript strings are primitive strings and immutable strings'
//Methods
console.log (text.toUpperCase())
console.log (text1.toLowerCase())
console.log (text2.length)
console.log (text3.trim().length, text3.length)
console.log (text3.trimStart().length, text3.length)
console.log (text3.trimEnd().length, text3.length)
console.log (text3.charAt(20))
console.log (text4.slice(15, 25))
console.log (text4.substring(10, 27))
console.log (text4.substr(10, 21))
console.log (text5.replace("strings", "words"))
console.log (text5.replaceAll("strings", "words"))

/*Array and Methods */