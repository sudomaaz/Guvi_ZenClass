// remove duplicates from an array

(function(){var b = a.reduce((acc,item)=>{
   if(!acc[item])
   acc[item]=1;
   else
   acc[item]++;
    return acc;
},{});var c=[];for(let [key,val] of Object.entries(b)){if(val===1)c.push(key);}console.log(c);})(a=[1,1,1,2,2,2,3,4,5,5,6,7,7,8]);