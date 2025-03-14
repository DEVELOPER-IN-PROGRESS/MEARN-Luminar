import React from 'react';

export default function Register(){
    function getName(e){
        console.log(e.target.value);
    }

    function getEmail(e){
        console.log(e.target.value);
    }

    function getPassword(e){
        console.log(e.target.value);
    }
    return(
        <>
        <div className="container my-5">
            <form className="w-50 d-flex rounded-3 flex-column align-items-center shadow mx-auto border border-dark p-3">
                <h2 className="my-2 text-info">Register form</h2>
                <input type="text" placeHolder="Full Name" className="text-dark form-control mb-3" onChange={ (event) => { getName(event) }} />

                <input type="text" placeHolder="email" className="text-dark form-control mb-3" onChange={ (event) => { getEmail(event) }} />

                <input type="" placeHolder="Password"  className="text-dark form-control mb-3" onChange={ (event) => { getPassword(event) }} />
            </form>
        </div>

        </>
    );
}

