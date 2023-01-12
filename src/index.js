module.exports = function toReadable (number) {
//  let zero = ['zero'];
 let numToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
 let tenths = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
 let hundred = ['hundred'];

//  0 - 19
if(number < 20){
    return `${numToTwenty[number]}`
 }
//  20, 30, 40, etc.
if(number >= 20 && number < 100 && number % 10 === 0){
    return `${tenths[number/10]}`
 }
// 20 - 100
if(number > 20 && number < 100 && number % 10 !== 0){
    return `${tenths[Math.floor(number/10)]} ${numToTwenty[number % 10]}`
 }
// 100, 200, 300, etc.
if(number > 99 && number < 1000 && number % 100 === 0) {
    return  `${numToTwenty[number/100]} ${hundred[0]}`
 }
// 120, 130, 140, etc.
if(number > 99 && number < 1000 && number % 100 !== 0 && number % 10 === 0) {
    return  `${numToTwenty[Math.floor(number/100)]} ${hundred[0]} ${tenths[(number % 100) / 10]}`
 }
//  hundred + 1-19
if(number > 100 && number < 1000 && number % 100 !== 0 && number % 10 !== 0 && number % 100 < 20) {
    return  `${numToTwenty[Math.floor(number/100)]} ${hundred[0]} ${numToTwenty[number % 100]}`
} 
// hundred + 20-99
 if(number > 99 && number < 1000 && number % 100 !== 0 && number % 10 !== 0 && number % 100 > 19) {
    return  `${numToTwenty[Math.floor(number/100)]} ${hundred[0]} ${tenths[Math.floor((number % 100)/10)]} ${numToTwenty[number % 10]}`
 }
}
