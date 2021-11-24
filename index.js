// Code your solution in this file!

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}
const  returnLastTwoDrivers = drivers1 => drivers1.slice(-2);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
    return function  multiplier(fare){
       return  num * fare;
    }
}
const fareDoubler = fare => fare *2 ;
const fareTripler = fare1 => fare1 *3;

function selectDifferentDrivers(arrayOfDrivers, drivers3){
    return drivers3(arrayOfDrivers);
}