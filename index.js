function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
  return function(param="special"){
      return `You are ${flair}${param}${flair}!`
  }
}

const Calculator = {
  add: function(){ return 1 + 3 },
  subtract: function(){ return 1 - 3 },
  multiply: function(){ return 1 * 3 },
  divide: function(){ return 10 / 5 }
}

function actionApplyer(int, arrayOfFunctions){
  return arrayOfFunctions.reduce((acc, currValue) => {
      acc = currValue(acc)
      return acc
  }, int)
}
