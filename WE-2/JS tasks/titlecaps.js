// convert each word to title case
var a = ["hello","my","name","is","maaz"];
(()=>{var b=a.map(item=>item[0].toUpperCase()+item.slice(1));console.log(b);})();