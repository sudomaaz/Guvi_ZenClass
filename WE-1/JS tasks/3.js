var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
 // your code here
 let a = [];
 for(let b of Object.entries(obj)){
    a.push(b);
 }
 return a;
}
console.log(convertListToObject(obj));