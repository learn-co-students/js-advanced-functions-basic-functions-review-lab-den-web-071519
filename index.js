// Your code here
const saturdayFun = (activity='roller-skate') => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity='go to the office') => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (highlight='*') => {
    return (adjective='great') => {
        return `You are ${highlight}${adjective}${highlight}!`
    }
}

const Calculator = {
    add: (a,b) => {
        return a + b
    },
    subtract: (a,b) => {
        return a - b
    },
    multiply: (a,b) => {
        return a * b
    },
    divide: (a,b) => {
        return a / b
    }
}

const actionApplyer = (integer, functions) => {
    let a = integer
    
    for(let i = 0; i < functions.length; i++) {
        a = functions[i](a)
    }

    return a
}