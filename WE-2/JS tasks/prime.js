//prints array of prime;
(function(){var b=a.reduce((acc,item)=>{
   if(item===2)
   acc.push(item);
   if(item%2===0)
   return acc;
   else{
       for(let i=3;i*i<=item;i+=2){
           if(item%i===0)
           return acc;
       }
       acc.push(item);
   } 
   return acc;
},[]);console.log(b);})(a = [2,4,6,3,5,7,11,12,14,16,19,25]);