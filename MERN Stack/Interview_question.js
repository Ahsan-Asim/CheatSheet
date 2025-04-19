//code if suer give 4 return 5 and if give 5 return 4
// function takeInput(val){
//   const obj={
//     4:5,
//     5:4,
  
//   }
  
//   return obj.val;


// }


// function ReturnVal(val){
//   return takeInput(val);
// }

// let value = ReturnVal(5);
// console.log(value);


//Below is code to make the given string max(241->421)
function makeMax(val){
  
  let stringVal=val.toString().split('');
  console.log(typeof(stringVal));
  let min=-1000;

  for(let i=0;i<stringVal.length-1;i++){
    for(let j=i+1;j<stringVal.length-1;j++){
      if(stringVal[i]<stringVal[j]){
        min=stringVal[i];
        console.log(min);
        console.log(stringVal);

        stringVal[i]=stringVal[j];
        stringVal[j]=min;
        console.log(stringVal);


      }
    }



  }
  return stringVal.join('');
}

let result =makeMax(241);
console.log(result);