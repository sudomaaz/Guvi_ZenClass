    function fetch1(){
    /* use this when on node environment
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    */
   document.getElementById("1").innerHTML = "";
   console.clear();
    try{
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    xhr.send();
    xhr.onload=function(){
        let res = [];
        if (xhr.status != 200) { 
            throw new Error("Network Error occured");
          } else { 
            res=JSON.parse(xhr.responseText);
            console.log(res.filter(elem=>elem.region==='Asia').map(elem=>elem.name));
          document.getElementById("1").innerHTML = "Done ! Check browser console";
          }
       }
     }
     catch(e){
        document.getElementById("1").innerHTML = "Some error occured. Try again";
        console.log(e.message);
     }
}
function fetch2(){
  /* use this when on node environment
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  */
 document.getElementById("1").innerHTML = "";
 console.clear();
  try{
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://restcountries.eu/rest/v2/all");
  xhr.send();
  xhr.onload=function(){
      let res = [];
      if (xhr.status != 200) { 
          throw new Error("Network Error occured");
        } else { 
          res=JSON.parse(xhr.responseText);
          console.log(res.filter(elem=>elem.population<200000).map(function(elem){
            let b ={};
            b.name = elem.name;
            b.population = elem.population;
            return b;
         }));
        document.getElementById("1").innerHTML = "Done ! Check browser console";
        }
     }
   }
   catch(e){
      document.getElementById("1").innerHTML = "Some error occured. Try again";
      console.log(e.message);
   }
}


function fetch3(){
  /* use this when on node environment
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  */
 document.getElementById("1").innerHTML = "";
 console.clear();
  try{
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://restcountries.eu/rest/v2/all");
  xhr.send();
  xhr.onload=function(){
      let res = [];
      if (xhr.status != 200) { 
          throw new Error("Network Error occured");
        } else { 
          res=JSON.parse(xhr.responseText);
          let ans =[]
          res.forEach(element => {
            let b={};
            b.name=element.name;
            b.capital=element.capital;
            b.flag=element.flag;
            ans.push(b);
          });
          console.log(ans);
        document.getElementById("1").innerHTML = "Done ! Check browser console";
        }
     }
   }
   catch(e){
      document.getElementById("1").innerHTML = "Some error occured. Try again";
      console.log(e.message);
   }
}

function fetch4(){
  /* use this when on node environment
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  */
 document.getElementById("1").innerHTML = "";
 console.clear();
  try{
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://restcountries.eu/rest/v2/all");
  xhr.send();
  xhr.onload=function(){
      let res = [];
      if (xhr.status != 200) { 
          throw new Error("Network Error occured");
        } else { 
          res=JSON.parse(xhr.responseText);
          console.log("Total population :",res.reduce((tot,ele)=>tot+=ele.population,0).toLocaleString());
        document.getElementById("1").innerHTML = "Done ! Check browser console";
        }
     }
   }
   catch(e){
      document.getElementById("1").innerHTML = "Some error occured. Try again";
      console.log(e.message);
   }
}

function fetch5(){
  /* use this when on node environment
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  */
 document.getElementById("1").innerHTML = "";
 console.clear();
  try{
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://restcountries.eu/rest/v2/all");
  xhr.send();
  xhr.onload=function(){
      let res = [];
      if (xhr.status != 200) { 
          throw new Error("Network Error occured");
        } else { 
          res=JSON.parse(xhr.responseText);
          console.log("Asia's population :",res.filter(elem=>elem.region==='Asia').reduce((tot,ele)=>tot+=ele.population,0).toLocaleString());
        document.getElementById("1").innerHTML = "Done ! Check browser console";
        }
     }
   }
   catch(e){
      document.getElementById("1").innerHTML = "Some error occured. Try again";
      console.log(e.message);
   }
}

function fetch6(){
  /* use this when on node environment
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    */
   document.getElementById("1").innerHTML = "";
   console.clear();
    try{
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    xhr.send();
    xhr.onload=function(){
        let res = [];
        if (xhr.status != 200) { 
            throw new Error("Network Error occured");
          } else { 
            res=JSON.parse(xhr.responseText);
            console.log(res.filter(elem=>elem.currencies[0].code==='USD').map(elem=>elem.name));
          document.getElementById("1").innerHTML = "Done ! Check browser console";
          }
       }
     }
     catch(e){
        document.getElementById("1").innerHTML = "Some error occured. Try again";
        console.log(e.message);
     }
}