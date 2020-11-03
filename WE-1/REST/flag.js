function print(res){
    res.forEach(element => {
        console.log(element["name"]," - ",element["flag"]);
    });
    document.getElementById("1").innerHTML = "Done ! Check browser console";
}
    function fetchFlag(){
    /* use this when on node environment
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    */
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    xhr.send();
    xhr.onload=function(){
        let res = [];
        if (xhr.status != 200) { // analyze HTTP status of the response
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
          } else { // show the result
            res=JSON.parse(xhr.responseText);
            print(res);
          }
    }
}