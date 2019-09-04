// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(accent="*"){
    return function(arg="special"){
        return `You are ${accent}${arg}${accent}!`
}
}

const Calculator = {
    add: function(){
        return 1 + 3;
    },
    subtract: function(){
        return 1 - 3;
    },
    multiply: function(){
        return 1 * 3;
    },
    divide: function(){
        return 10 / 5;
    }
}

function actionApplyer(int, arr){
    let start = int
    for (let i = 0; i < arr.length; i++){
        start = arr[i](start)
    }
    return start
}