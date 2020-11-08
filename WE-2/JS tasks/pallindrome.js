// prints all the pallindromes
(function(){var b = a.reduce((acc,item)=>{
let val = item.toString();
let i=0,j=val.length-1;
while(i<=j){
    if(val[i]!==val[j])
    return acc;
    i++;j--;
}
acc.push(item);
return acc;
},[]);console.log(b);})(a = [12,11,33,45,678,121,"pop"]);