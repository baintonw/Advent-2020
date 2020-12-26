//Advent of Code 2020 - Day 2
const fs = require('fs')

//functions
function createMinMax(string) {
    string.split('-').forEach(char => numbers.push(parseInt(char)))
}

function splitSecond(arr) {
    let i = 0;
    while(i < arr.length) {
        arr[i].split(' ', 1)
        console.log(arr[i])
        i++
    }
}

function checkAllPaswords(arr) {
    for(let i = 0; i < arr.length; i++) {
        let line = arr[i]
        let min = arr[i][0]
        let max = arr[i][1]
        let password = arr[i][3]
        console.log(password)
    }
}

//Take the input and convert it to a string
let text = fs.readFileSync("./input.txt")
let textString = text.toString()

// Input
const inputArr = textString.split('\n')
const splitArr1 = []
inputArr.forEach(line => splitArr1.push(line.split('-')))

const cleanedArr = []

splitArr1.forEach(el => cleanedArr.push([el[0], ...el[1].split(' ')]))

// console.log(cleanedArr)
checkAllPaswords(cleanedArr)