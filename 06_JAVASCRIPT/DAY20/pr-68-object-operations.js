var car = {
    name: 'Baleno',
    model: 'Hatch back',
    manufaturer: 'maruthi',
    price: "10lakh",
}

//display the car name and the manufacturer name
console.log(`Car: ${car.name} \n Manufacturer:: ${car.manufaturer}`)

//check "model" key is present in the object if present print the value
for(let key in car){
    if (key == 'model'){
        console.log(`Model ${car['model']}`)
        break;
    }
}

//or
'model' in car && console.log(`Model :: ${car['model']}`);

//add "variant" key to the car object with value as "Manual"
car['variant'] = ['Manual']

//insert another value to "automatic" to variant key
car.variant.push('automatic')
console.log(car)

//add 'color' key to the object with value as "red", "yellow" ,"white"
car['color'] = []
car['color'].push('red','yellow','white')

console.log(car)
