// code your solution here
function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}
let wrapAdjective = function(style="*") {

    return function(adjective="special") {

      return `You are ${style}${adjective}${style}!`;

    }
}