var actual = {foo: 5, bar: 6};
var expected1 = {foo: 5, bar: 6};
var expected2 = {foo: 6, bar: 5};
function assertObjectsEqual(actual, expected, testName){
 // your code here
 let assert = "Passed";
 if(Object.keys(actual).length===Object.keys(expected).length){
     for(let key in actual){
         if(actual[key]!==expected[key]){
             assert="FAILED ["+testName+"] Expected "+JSON.stringify(actual)+" , but got "+JSON.stringify(expected);
             break;
         }
     }
     return assert;
 }
}
console.log(assertObjectsEqual(actual,expected1,"myTest1"));
console.log(assertObjectsEqual(actual,expected2,"myTest2"));
