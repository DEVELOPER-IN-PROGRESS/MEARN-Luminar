import React from 'react'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Watchhistory() {
  return (
    <>
        <div className="container">
          <div className="my-5 d-flex justify-content-between">
             <h5 className=''>Watch history</h5>
             <h5 className='d-flex align-items-center justify-content-center column-gap-3'>
                <Link className="text-decoration-none" to={'/home'}>
                  <span className="d-none d-md-block">Back to Home </span>
                </Link>
                <FontAwesomeIcon icon={faHouse} />
             </h5>
          </div>

          {/* or use table-responsive*/}
          <div className="container overflow-x-auto">
            <table className="watch-table mx-auto table table-bordered border-dark">
                <thead>
                    <tr >
                      <th className="p-3  text-center">Sl :No</th>
                      <th className="p-3  text-center">Caption</th>
                      <th className="p-3  text-center">Url</th>
                      <th className="p-3  text-center">Timestamp</th>
                      <th className="p-3  text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className=" py-2 text-center">dummy</td>
                    <td className=" py-2 text-center">dummy</td>
                    <td className=" py-2 text-center"><Link className="text-decoration-none" to={""}>
                            dummy
                        </Link></td>
                    <td className=" py-2 text-center">dummy</td>
                    <td className=" py-2 text-center">dummy</td>
                    </tr>
                </tbody>
            </table>
          </div>

        </div>
    </>
  )
}

export default Watchhistory