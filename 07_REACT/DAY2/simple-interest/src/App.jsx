import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import './App.css'

function App() {
  const [ pnr , setPnr ]  = useState({
      principal:"",
      rate:"",
      year:"",
  })

  const [isPrincipal, setIsPrincipal] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const [ interest , setInterest] =  useState("");

  const validate = (e) =>{
      // console.log(e)

      const { name , value } = e.target;

      console.log(value)

      /*
      if( isNaN(Number(value))){
          return
      }
      */
      let reg = '^[0-9]*$'

      // console.log(value, value.match(reg) )

      /*
        if(value.match(reg)){
            setPnr({...pnr, [name]:value })
        }
      */

      //invalid input check
      if(value.match(reg)){

        switch(name){
          case 'principal' :
                         setIsPrincipal(true)
                         break
          case 'rate' : setIsRate(true)
                         break
          case 'year':  setIsYear(true)
                        break
        }
        setPnr({...pnr, [name]:value })

      }else{
        switch(name){
          case 'principal' :
                         setIsPrincipal(false)
                         break
          case 'rate' : setIsRate(false)
                         break
          case 'year':  setIsYear(false)
                        break
      }
      setPnr({...pnr, [name]:value })
    }
  }

  const handleCalculate = () => {
     let simpleInterest =  (pnr.principal*pnr.year*pnr.rate)/100 ;

     if(isNaN(simpleInterest))
        return

      setInterest(simpleInterest);
  }

  const handleReset = () =>{
    setPnr({ principal:"",
      rate:"",
      year:"",})

      setIsPrincipal(true)
      setIsRate(true)
      setIsYear(true)
      setInterest("");
  }

  console.log(pnr)

  return (
    <>
      <div className="container">
          <div className="overlay">
              <h1 className="heading">Simple Interest</h1>
              <p className="desc">Calculate your simple interst</p>
              <div className="box">
                  <p className="money">₹ <span>{ interest }</span></p>
                  <p className="desc">total simple interst {}</p>
              </div>

              <div className="mb-3">
                <TextField value={pnr.principal} id="outlined-basic" name="principal" onChange={(e) => { validate(e) }} className="w-100" label="Principal Amount" variant="outlined" />
                   { !isPrincipal && <span className="text-danger">Invalid Input</span> }
              </div>
              <div className="mb-3">
                <TextField value={pnr.rate}  id="outlined-basic" name="rate" onChange={(e) => { validate(e) }} className="w-100" label="Rate of Interest(%)" variant="outlined" />
                  { !isRate && <span className="text-danger">Invalid Input</span> }
              </div>
              <div className="mb-3">
                <TextField value={pnr.year}  id="outlined-basic" name="year" onChange={(e) => { validate(e) }} className="w-100" label="Year (Yr)" variant="outlined" />
                  {  !isYear && <span className="text-danger">Invalid Input</span> }
              </div>
              <div className="mb-3"></div>

              <div className="d-flex align-items-center justify-content-center gap-3">
                 <Button variant="contained" onClick={ () => { handleCalculate() }} className="p-3 w-50" color="success">
                    Calculate
                </Button>
                <Button variant="outlined" onClick={ () => { handleReset() }} className="p-3 w-50">
                    Reset
                </Button>
                 </div>

              {/*
              <form action="" className="calculator">
                 <input type="number" placeholder='₹ Principle amount()' id="principal" className="amount_box" onChange = { (e) => {}}/>

                 <input type="number"  placeholder=''  id="" className="amount_box" onChange = { (e) => {}}/>

                 <input type="number" placeholder='Year (Yr)'  id="" className="amount_box" onChange = { (e) => {}}/>


              </form>
              */}
          </div>
      </div>

    </>
  )
}

export default App
