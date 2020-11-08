// prints sum of all numbers in array
var a=[1,2,3,4,5];
(()=>{var b = a.reduce((acc,item)=>{acc+=item;return acc;},0);console.log(b);})();