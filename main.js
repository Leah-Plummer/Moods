const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []
for(const number of hours){
    if(number < 7){
        grumpyHours.push(number)
    } else {
        happyHours.push(number)
    }


}

console.log(`I was grumpy on ${grumpyHours.length} days.`)
console.log(`I was happy on ${happyHours.length} days.`)