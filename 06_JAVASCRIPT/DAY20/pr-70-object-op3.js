weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]

let wdd = {}

// weatherData.forEach( (dist) => dist.district in op_district_data?
//     op_district_data[dist.district][weather] > dist[weather] &&
//     op_district_data[dist.district][weather] = dist[weather]
//     :
//      )

/*
for( obj of weatherData ){
    // {district:'Thrissur',weather:32}
    console.log( obj )

    if( obj.district in op_dist_data ){
        // console.log(obj.district)
        console.log('here',  op_dist_data[obj.district].weather  )


        if( op_dist_data[obj.district] > obj.weather ){
            op_dist_data[obj.district] = obj.weather

            console.log(op_dist_data[obj[district]])
        }
    }else{
        console.log(obj.district)
        op_dist_data[ obj.district ] = obj.weather

        console.log(op_dist_data)
    }
}

console.log(op_dist_data)

*/

for(let data of weatherData){
    district = data.district
    temperature = data.weather
    if( district in wdd ){
        prevTemp = wdd[district]
        if(temperature > prevTemp){
            wdd[district] = temperature
        }
    }else{
        wdd[district] = temperature
    }
}

console.log(wdd)

wdd = {}

for( obj of weatherData ){
    // {district:'Thrissur',weather:32}
    // console.log( obj )

    if( obj.district in wdd ){
        // console.log(obj.district)
        // console.log('here',  wdd[obj.district].weather  )

        if( wdd[obj.district] < obj.weather ){
            wdd[obj.district] = obj.weather

            // console.log(wdd[obj[district]])
        }

        // ternary
        //wdd[obj.district] = wdd[obj.district] < obj.weather ? obj.weather : wdd[obj.district]

    }else{
        // console.log(obj.district)
        wdd[ obj.district ] = obj.weather
        // console.log(wdd)
    }
}

console.log(wdd)


// method 2
wdd = {}
weatherData.forEach( (dist) => dist.district in wdd ?
    wdd [ dist.district ] =  dist.weather > wdd[dist.district] ? dist.weather : wdd[dist.district]
    : wdd [dist.district] = dist.weather
    )
console.log(wdd)