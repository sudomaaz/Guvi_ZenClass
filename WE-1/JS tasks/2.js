var object = {name: "RajiniKanth", age: 33, hasPets : false};
function printAllKeys(obj) {
    // your code here
    let a =[];
    Object.keys(obj).forEach(element => {
        a.push(element);
    });
    return a;
   }
   console.log(printAllKeys(object));