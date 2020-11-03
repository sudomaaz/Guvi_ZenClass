var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
 newObject = {};
 let a = arr[arr.length-1].split(" ");
 newObject[arr[0]] = a[1];
 return newObject;
}
console.log(transformFirstAndLast(arr)); //