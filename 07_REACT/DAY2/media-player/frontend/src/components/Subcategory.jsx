import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SubCategory() {
  return (
    <div className="sub-wrap border-light border-2 border rounded-2 p-2 mt-3">
        <div className="d-flex align-items-center justify-content-between">
            <p className="fs-5 m-0">Tamil songs</p>
            <Button variant="danger" className=''>
                 <FontAwesomeIcon icon={faTrashCan} />
            </Button>
        </div>
        <div className="song-name p-2 rounded-3 bg-secondary mt-3">
            Naa ready tha
        </div>
    </div>
  )
}

export default SubCategory