//1 instance creation
const http = new XMLHttpRequest()
const URL = `https://jsonplaceholder.typicode.com`;

//2. call open method
http.open('GET',`${URL}/todos`)

http.send() // since we are using GET method we can skip the parameters of GET
console.log(http.readyState)

let tbody = document.getElementById('table-content')

http.onreadystatechange = () =>{
    console.log(http.readyState)  // changes from 1 to 4

    if(http.readyState ==4){
        // console.log('data')
        console.log(http.status)
        if(http.status >=200 && http.status <=300){
            console.log('success')

            const fulldata = JSON.parse(http.responseText);
            fulldata.forEach( (data) => {
                    tbody.innerHTML += `
                        <tr>
                            <td class="text-center">${data.userId}</td>
                            <td class="text-center">${data.id}</td>
                            <td class="ps-2">${data.title}</td>
                            <td class="text-center">${data.status?'completed':'Incomplete'}</td>
                        </tr>
                    `
                    });

        }
    }
}
// this is a self invoking function

// console.log(http.readyState)
if(http.readyState ==4){
    console.log('data')
    console.log(http.status)
    if(http.status >=200 && http.status <=300){
        console.log('success')
    }
}