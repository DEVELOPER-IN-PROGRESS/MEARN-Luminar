import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container , Row , Col  } from 'react-bootstrap'
import { useSelector , useDispatch } from 'react-redux';
import { increment , reset ,  decrement } from './redux/counterSlice';
import {useState } from 'react'

function App() {
    const count = useSelector( (state) => state.counterReducer.value)
    const dispatch = useDispatch()

    const [range , setRange] = useState('')
    console.log(range)
  return (
    <>
      <Container className="container-custom">
        <Row className='w-100'>
          <Col md={4}>

          </Col>
          <Col md={4}>
              <div className="p-3 rounded-light bg-light p-3 rounded rounded-3">
                <h1 className="text-primary fs-2 text-center">
                  Counter Application
                </h1>

                <h2 id="result" className="text-center my-3">
                  { count }
                </h2>

                <div className="d-flex mt-4 align-items-center justify-content-between">

                   <button className="btn btn-success p-3" onClick={()=> dispatch(increment(Number(range)))}>Increment</button>
                   <button className="btn btn-danger p-3" onClick={()=> dispatch(reset())}>Reset</button>
                    <button className="btn btn-warning p-3" onClick={()=> dispatch(decrement(Number(range)))}>Decrement</button>
                </div>
                <input type="text" value={range} placeholder='range' className="form-control mt-4" onChange={(e)=>{setRange(e.target.value)}} />
              </div>
          </Col>
          <Col md={4}>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
