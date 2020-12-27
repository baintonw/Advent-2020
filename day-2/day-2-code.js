//Advent of Code 2020 - Day 2
const fs = require('fs')

//functions
//create min and madx elements for each line of data
function createMinMax(string) {
    string.split('-').forEach(char => numbers.push(parseInt(char)))
}

//split each line in data array for a second time --> [min, max, char, password]
function splitSecond(arr) {
    let i = 0;
    while(i < arr.length) {
        arr[i].split(' ', 1)
        console.log(arr[i])
        i++
    }
}

//check all passwords to see if they have at least the passed in min, max of a specific char in given password
function checkAllPaswords(arr) {
    let validPasswords = 0;
    for(let i = 0; i < arr.length; i++) {
        let line = arr[i]
        let min = arr[i][0]
        let max = arr[i][1]
        let char = arr[i][2]
        char = char.replace(':','')
        let password = arr[i][3]
        console.log(min, max, char, password)
        console.log(char.replace(':',''))
        if (hasAtLeast(min, char, password) && hasAtMost(max, char, password)) {
            console.log('VALID')
            console.log(min, max, char, password)
            validPasswords++

        } else {
            // console.log('FALSE')
            console.log(min, max, char, password)

        }
        
    }
    console.log(validPasswords)
}

//Check second criteria for passwords - does the given character appear at only one of the (1 indexed) locations for each password?
function checkPosition(first, second, char, password) {
    let i = 0
    let position1 = first - 1
    let position2 = second - 1

    let match1 = false
    let match2 = false

    while (i < password.length) {
        if (char === password[i] && i === position1) {
            match1 = true
        }
        if (char === password[i] && i === position2) {
            match2 = true
        }
        i++
    }

    if (match1 && !match2) {
        console.log('TRUE')
        return true
    }
    if (match2 && !match1) {
        console.log('true')
        return true
    }
    console.log('FALSE')
    return false
        
}

//Check all passwords based on second criteria
function checkPasswordsPos(arr) {
    let validPasswords = 0;
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i]
        let min = arr[i][0]
        let max = arr[i][1]
        let char = arr[i][2]
        char = char.replace(':','')
        let password = arr[i][3]
        if(checkPosition(min, max, char, password)) {
            validPasswords++
        }
        console.log(line)
    }

    console.log(validPasswords)

}
//string as at least amount of x char
function hasAtLeast(amount, char, string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++
        }
    }
    if (count >= amount) {
        return true
    }
    return false
}
//string has at most amount of y char
function hasAtMost(amount, char,  string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++
        }
    }
    if (count > amount) {
        return false
    }
    return true
}

// console.log(!!hasAtLeast(1, 'a', 'apple'))
// hasAtMost(4, 'a', 'aaaple')

//Take the input and convert it to a string
let text = fs.readFileSync("./input.txt")
let textString = text.toString()

// Input
const inputArr = textString.split('\n')
const splitArr1 = []
inputArr.forEach(line => splitArr1.push(line.split('-')))

const cleanedArr = []

splitArr1.forEach(el => cleanedArr.push([el[0], ...el[1].split(' ')]))

//Solution 1
// checkAllPaswords(cleanedArr)
//Solution 2
checkPasswordsPos(cleanedArr)