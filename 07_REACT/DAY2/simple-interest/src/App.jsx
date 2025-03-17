import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let calc_amount = 0

  return (
    <>
      <div className="container">
          <div className="overlay">
              <h1 className="heading">Simple Interest</h1>
              <p className="desc">Calculate your simple interst</p>
              <div className="box">
                  <p className="money">₹ <span>{calc_amount}</span></p>
                  <p className="desc">total simple interst</p>
              </div>

              <form action="" className="calculator">
                 <input type="number" placeholder='₹ Principle amount()' id="principal" className="amount_box" onChange = { (e) => {}}/>

                 <input type="number"  placeholder='Rate of Interest(%)'  id="" className="amount_box" onChange = { (e) => {}}/>

                 <input type="number" placeholder='Year (Yr)'  id="" className="amount_box" onChange = { (e) => {}}/>

                 <div className="button-wrap">
                   <button className="btn calculate">calculate</button>
                   <button className="btn reset">reset</button>
                 </div>
              </form>
          </div>
      </div>

    </>
  )
}

export default App
