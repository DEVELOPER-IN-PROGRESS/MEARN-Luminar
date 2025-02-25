let a = [10,11,12,13,14]

squares = a.map(num => num**2 )
console.log(squares)

//w.a.p to print cubes of all numbers in given array using map

cubes = a.map(num => num**3)
console.log(`Cubes of the array numbers are [${cubes}]`)

/* w.a.p to return a new array with elements based on following condition
if num greater than or equal to 13 decrement by 1
else increment by 1
*/

changed = a.map(num => num>=13?--num:++num )
// if there is no return statement we get undefined

console.log(changed)