var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 arr.forEach(e=>{
     newObject[e[0]] = e[1];
 });
 return newObject;
}
console.log(fromListToObject(arr));