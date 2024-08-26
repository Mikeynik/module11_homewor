function funcName(){
    const arr = [1,2,1]
  let even = 0
  let odd = 0
  let zero = 0
  arr.forEach((element)=>{
    if(typeof element === "number"){
      if (element!==0){
        if(element % 2 === 0){
          console.log("четное")
          even++
        }
        else{
          console.log("нечетное")
          odd++
        }
      }
      else{
        zero++
      }
    }
  })
  console.log("четные: ", even)
  console.log("нечетные: ", odd)
  console.log("нули: ", zero)
  }
  funcName()