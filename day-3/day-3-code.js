const fs = require('fs')

//Read input.txt, then convert to buffer, then to text
const inputBuffer = fs.readFileSync('index.txt')
const inputString = inputBuffer.toString()
const input = inputString.split('\n')

const start = input[0][0]
const step1 = input[1][3]

//Count trees

function countTrees(arr) {
    let x = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][x] === '#') {
            console.log('Got one!', arr[i][x],'position: ', x)
            count++
        }
        if (x > arr[i].length) {
            //31             30 --> 1
            x = 3 - Math.abs((arr[i].length - x) - 1)
            console.log('GOING OVER: ', x)
        }
        console.log('line: ', i, arr[i])
        console.log('at position: ', x, arr[i][x])
        x+=3
    }
    console.log(count)
}

countTrees(input)
// console.log(input)
// console.log(input[0], input[1], step1)