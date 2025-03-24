import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Videocard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card className="mt-3 mt-lg-2" style={{ }}>
      <Card.Img  onClick={handleShow} variant="top" src="https://preview.redd.it/23fn7ji6t96d1.png?width=640&crop=smart&auto=webp&s=1911ba13a7fca17eaf18954c2f3ea8f9165fb879" />
      <Card.Body className='d-flex align-items-center justify-content-between'>
        <Card.Text  >Card Text</Card.Text>
        <Button variant="danger">
            <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/6LD30ChPsSs?autoplay=1" title="The Life of Ram Video Song | 96 | Vijay Sethupathi, Trisha | Govind Vasantha | C. Prem Kumar" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard