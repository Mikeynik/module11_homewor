function outputNumberEverySec(num1, num2){
  
  let progress = num1;
  let intervalId = setInterval (function(){
    
    if (progress <= num2){
      console.log(progress);
      progress++;
    } 
    
    else clearInterval(intervalId);
  }, 1000);
  
}

outputNumberEverySec(5,15);
