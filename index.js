// Code your solution in this file!
let driver = [ 'Antonia', 'Nuru', "Amari","Mo"]


const returnFirstTwoDrivers = (drivers)=>driver.slice(0,2); 

const returnLastTwoDrivers = (drivers)=> drivers.slice(2)

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

// selectingDrivers[0]
selectingDrivers[1]


function createFareMultiplier(fare) {
    return (arg)=> arg*5;
}

function fareDoubler(fare) {
    return fare*2
}

function fareTripler(fare) {
    return fare*3
}

function selectDifferentDrivers(arrayOfDrivers, func) {
return func(arrayOfDrivers)
}