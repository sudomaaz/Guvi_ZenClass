  // Getting input via STDIN
  const readline = require("readline");

  const inp = readline.createInterface({
    input: process.stdin,
    output : process.stdout
  });

  const userInput = [];

  inp.on("line", (data) => {
    userInput.push(data);
  });

  inp.on("close", () => {
    //start-here
    //Your code goes here … replace the below line with your code logic
    function pre(i){
      return ((i===')' || i==='(')?-1:i==='^'?2:(i==='+' || i==='-')?0:1);
    } 
    function isOp(i){
      return (i==='(' || i===')' || i==='+' || i==='-' || i==='*' || i==='/' || i==='^')?1:0;
    }
    function rev(a){
      var ans="";
      for(let i of a){
        if(i===')')
        i='(';
        else if(i==='(')
        i=')';
        ans=i+ans;
      }
      return ans;
    }
    var ist = userInput[0];
    ist = rev(ist);
    var s=[];
    var res="";
    for(let i of ist){
        let v = isOp(i);
        if(v===1){
            if(i==='(' || s.length===0)
            s.unshift(i);
            else{
              let p = pre(i);
              //
              while(s.length>0 && s[0]!=='(' && pre(s[0])>=p){
                  let op = s.shift();
                  if(op!==')')
                  res+=op;
              }
              if(i===')' && s[0]==='(')
              s.shift();
              if(i!==')')
              s.unshift(i);
            }
        }
        else
        res+=i;
    }
    while(s.length>0){
      let op = s.shift();
      if(op!=='(' && op!==')')
      res+=op;
    }
    //end-here
    //console.log(res);
    console.log(rev(res));
  });

