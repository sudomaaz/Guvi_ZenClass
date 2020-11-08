// prints median of two sorted arrays
var a=[1,2,3,4,5],b=[6,7,8,9,10];
(()=>{var c=a.concat(b).sort((x,y)=>x-y);var mid=parseInt(c.length/2);var ans=c.length%2===0?parseInt((c[mid-1]+c[mid])/2):c[mid];console.log(ans);})();