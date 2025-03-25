import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
import Subcategory from '../components/Subcategory'

function Home() {
  return (
    <>
    <div className="container d-flex justify-content-between my-4">
          <Add/>
          <Link to={'/watchhistory'} className="text-decoration-none">
            <h5 className='fs-4  text-dark d-flex justify-content-center align-items-center text-light'>
            <span className="d-none d-lg-block">Watch History</span>
            <FontAwesomeIcon className="ms-3" icon={faClockRotateLeft} />
            </h5>
          </Link >
    </div>

    <div className="conatainer-fluid p-3">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-90 col-xl-8">
                <View/>
          </div>
          <div className="col-12 col-md-3 col-lg-3 col-xl-4">
              <Category />
              <Subcategory />
          </div>
        </div>
    </div>
    </>
  )
}

export default Home