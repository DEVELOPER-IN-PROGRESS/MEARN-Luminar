// Write a program to swap between two given numbers
let num1 = 60 , num2 = 40 , temp;

console.log(`num1 = ${num1} and num2 = ${num2}`)
temp = num1
num1 = num2
num2 = temp

console.log(`After Swap num1 = ${num1} and num2 = ${num2}`)

console.log('without temporary variable')
num1 = num1 + num2
num2 = num1 - num2
num1 = num1 - num2
console.log(`After Swap num1 = ${num1} and num2 = ${num2}`)