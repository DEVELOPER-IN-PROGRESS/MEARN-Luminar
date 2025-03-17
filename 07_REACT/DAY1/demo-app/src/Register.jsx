import React from 'react';
import { useState } from 'react';

export default function Register(){

    const [name , changeName ] = useState('Neal');

    const [color, setColor ] = useState({
        color1: 'Red' ,
        color2: 'Green',
        color3: 'Blue',
    })

    const change = (data) => {
        // console.log(color);

        /*This won't work as the above state object is being replaced with only yellow thus
           replacing the whole object than part of the object */
        // setColor({  color2: data});

        /*Now this would give us the correct data by replacing in the value we want to
        change and by keeping the rest of the properties intact*/
        // setColor({color1: 'Red' ,  color2: data , color3: 'Blue',});

        // The above method would work but this is much more of a standard approach
        setColor({...color , color2: data });
    }

    const [userDetails , setUserDetails ] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [newArray, setNewArray] = useState([
        {username:"max",age: 27},
        {username:"neal",age: 20},
        {username:"manu",age: 22},
        {username:"alen",age: 24},
    ])

    const getDetail = (e) => {
        let value = e.target.value ;
        let key = e.target.id ;
        let obj = {}

        // New Object creation This one works foolproof

        Object.keys(userDetails).map( k => obj[k]= userDetails[k] )
        obj[key] = value;
        setUserDetails({...obj})
        console.log(obj)

        /*
        // Not sure why this don't work , creates a new key instead of overwriting
        // creates a new key , key variable is declared but not used
        setUserDetails({...userDetails, key:value })
        console.log({userDetails})
        */

        // another optimized method
        //
        // setUserDetails({...userDetails, [key]:value })
        console.log(userDetails)
    }

    return(
        <>
        <div className="container my-5">
            <form className="w-50 d-flex rounded-3 flex-column align-items-center shadow mx-auto border border-dark p-3">
                <h2 className="my-2 text-info">Register form</h2>
                <input type="text" placeHolder="Full Name"  id="username" className="text-dark form-control mb-3" onChange={ (e) => { setUserDetails({...userDetails, username: e.target.value })}} />

                <input type="text" placeHolder="email" id="email" className="text-dark form-control mb-3" onChange={ (e) => { setUserDetails({...userDetails, email: e.target.value})}} />

                <input type="" placeHolder="Password" id="password" className="text-dark form-control mb-3" onChange={ (e) => { setUserDetails({...userDetails, password: e.target.value})}} />
            </form>
        </div>

        <h6 className="text-center text-danger fs-2 my-3">Employee:: {name}</h6>
        <button className="btn btn-info" onClick={ () =>{ changeName('Elliot') } }>change name </button>

        <ol className='fs-3 mx-auto my-3 '>
            { Object.keys(color).map( key => <li>{ color[key]}</li>)}
        </ol>

        <button className="btn btn-success" onClick={ () => change('Yellow') }>Change Color</button>

        <p className='text-center fs-3 my-3'>the input  user Details are:: </p>
        <ul>
            {
              (userDetails.email && userDetails.username && userDetails.password) &&
             Object.keys(userDetails).map( key => <li>{key}::{userDetails[key]}</li> )
             }
        </ul>

        <table>
            <thead>
                <th>Sl no</th>
                <th>username</th>
                <th>Age</th>
            </thead>
            <tbody>
                {
                    newArray.map( (item,index) =>
                    ( <tr>
                    <td>{index+1}</td>
                    <td>{item.username}</td>
                    <td>{item.age}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>

        </>
    );
}

