import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/esm/Form';

function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="category-wrap me-2">
          <h3 className="fs-4 mb-4">Category</h3>
          <Button onClick={handleShow} variant="warning" className="w-100 py-2 rounded-3 border-0">Add Category</Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-warning">Add Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className='border border-2 border-dark rounded-3 px-3 py-4'>
                <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                  <Form.Control placeholder='Enter Category Name' as="textarea" rows={2} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="warning" onClick={handleClose}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>

      </div>
    </>
  )
}

export default Category