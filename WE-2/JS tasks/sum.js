// prints sum of all numbers in array
(function(){var b = a.reduce((acc,item)=>{acc+=item;return acc;},0);console.log(b);})(a=[1,2,3,4,5]);