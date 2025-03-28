import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState , useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';


function Videocard({video}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card className="mt-3 mt-lg-2" style={{}}>
      <Card.Img  onClick={handleShow} variant="top" className='img-fluid' style={{height:'250px'}} src={`${video?.image}`} />
      <Card.Body className='d-flex align-items-center justify-content-between'>
        <Card.Text>{ video?.caption }</Card.Text>
        <Button variant="danger">
            <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="300" src={`${video?.embedLink}?autoplay=1`} title={`${video?.caption}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard
