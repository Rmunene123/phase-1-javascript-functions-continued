function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
    console.log(`This Saturday, I want to ${activity}!`)
}
saturdayFun();
saturdayFun("bathe my dog"); 

function mondayWork(activity= "go to the office") {
    return `This Monday, I will ${activity}.`;
    console.log(`This Monday, I will ${activity}.`)
    
}
mondayWork();
mondayWork("work from home");

function wrapAdjective( msg = "You are *a hard worker*!") {
    const innerFunction = function (special = "special") {
        if(msg===`*`){
            return `You are ${msg}a hard worker${msg}!`;
        }else{
           return `You are ${msg}a dedicated programmer${msg}!`
        }
      
    };
    return innerFunction;
  }
