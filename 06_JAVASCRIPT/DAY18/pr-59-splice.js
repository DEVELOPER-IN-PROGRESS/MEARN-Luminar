let cars = ['mercedes','bugatti','audi','tesla','ford','koeneissegg','maserati']
console.log(cars)

cars.splice(4,1);

console.log(`MOdified array ${cars}`)

//to remove item from the end of array
cars.splice(-2,1)
console.log(cars)

//to add some elements inplace after deleting an item

cars.splice(-1,1,'mitsubishi')
console.log(cars)
cars.splice(-1,1,'abarth','toyota')
console.log(cars)

//pushing into mid index without deleting anything
cars.splice(3,0,'lykan ')
console.log(cars)

// includes() method -
ispresent = cars.includes('porsche')
console.log(ispresent)

//indexOf
idx = cars.indexOf('tesla')
console.log({idx})

//Slice method

x = cars.slice(0,4)
console.log(x)

// slice negative indexing
y = cars.slice(-2,)
console.log({y})