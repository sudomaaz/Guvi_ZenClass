// rotate array k times
var a=[1,2,3,4,5,6],k=3;
(()=>{for(let i=1;i<=k;i++)a.unshift(a.pop());console.log(a);})();