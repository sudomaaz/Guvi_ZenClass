var object = {name: "RajiniKanth", age: 33, hasPets : false};
function printAllValues(obj) {
    // your code here
    let a =[];
    Object.values(obj).forEach(element => {
        a.push(element);
    });
    return a;
   }
   console.log(printAllValues(object));