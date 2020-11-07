// use this when on node environment
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function printByCity(res){
    res.forEach(element => {
        let xhr = new XMLHttpRequest();
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+element.capital+"&appid=6c360035b5fae1cb8401b1550ec27084";
        xhr.open("GET",url,true);
        xhr.send();
        xhr.onload = function(){
            if (xhr.status != 200) { // analyze HTTP status of the response
                console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
              }
              else{
                  result = JSON.parse(xhr.responseText);
                  console.log(element.capital+" - "+result.weather[0].main+", "+result.main.temp);
              }
        }
    });
    document.getElementById("1").innerHTML = "Done ! Check browser console";
}
function printByCord(res){
    res.forEach(element => {
        let xhr = new XMLHttpRequest();
        let url = "https://api.openweathermap.org/data/2.5/weather?lat="+element.latlng[0]+"&lon="+element.latlng[1]+"&appid=6c360035b5fae1cb8401b1550ec27084";
        xhr.open("GET",url,true);
        xhr.send();
        xhr.onload = function(){
            if (xhr.status != 200) { // analyze HTTP status of the response
                console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
              }
              else{
                  result = JSON.parse(xhr.responseText);
                  console.log(element.latlng+" - "+result.weather[0].main+", "+result.main.temp);
              }
        }
    });
    document.getElementById("1").innerHTML = "Done ! Check browser console";
}
    function fetch(type){
        console.clear();
        document.getElementById("1").innerHTML = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.eu/rest/v2/all",true);
    xhr.send();
    xhr.onload=function(){
        if (xhr.status != 200) { // analyze HTTP status of the response
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
          } else { // show the result
            let res = JSON.parse(xhr.responseText);
            if(type===1)
            printByCity(res);
            else
            printByCord(res);
          }
    }
}