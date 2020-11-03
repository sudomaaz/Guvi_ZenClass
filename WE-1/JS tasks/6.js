var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    //Your code
    let a ={};
    arr.forEach(e => {
        a= {};
        e.forEach(b=>{
           a[b[0]] = b[1];
        });
        tranformEmployeeList.push(a);
    });
    
    return tranformEmployeeList;
   }
   console.log(transformEmployeeData(array));