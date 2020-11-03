var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
   function task1and2(){
       cat["height"] = 23 ;
       cat["weight"] = 2;
       cat["name"] = "Fluffyy";
   }
   function task3(){
       console.log("Below are friends activities");
       cat["catFriends"].forEach(e => {
           console.log(e.activities);
       });
   }
   function task4(){
    cat["catFriends"].forEach(e => {
        console.log(e.name);
    });
   }
   function task5(){
    let sum=0;
    cat["catFriends"].forEach(e => {
        sum+=e.weight;
    });
    console.log("Total friends weight is ",sum);
}
function task6(){
   var t = cat.activities.length;
   cat["catFriends"].forEach(e => {
    t+=e.activities.length;
});
   console.log("Total activities are: ",t);
}
function task7and8(){
    cat.catFriends[0].activities.push("eat","play");
    cat.catFriends[1].activities.push("eat","play");
    cat.catFriends[0].furcolor="black";
}
task1and2();
task3();
task4();
task5();
task6();
task7and8();
task3();