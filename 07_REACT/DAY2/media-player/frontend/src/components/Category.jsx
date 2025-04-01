import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/esm/Form';
import { addCategoryApi } from '../services/allApi'
import { ToastContainer , toast } from 'react-toastify';

function Category() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState("")

  const handleReset = () => {
    setCategoryName("")
  }

  const handleClose = () => {
    setShow(false);
    handleReset();
  }

  const addNewCategory = async() => {
    console.log(categoryName)

    if(categoryName){

      const reqBody = {
        category: categoryName,
        allvideos: []
      }

      const  result = await addCategoryApi(reqBody)

      if(result?.status >199 && result?.status <300){
        toast.success("Category Added Successfully")
        handleClose()
      }else{
        toast.error("something went wrong")
        handleReset()
      }
    }
    else{
      toast.error("Please Add a Category Name")
    }

  }

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
                  <Form.Control placeholder='Enter Category Name' value={categoryName} onChange={(e)=>{setCategoryName(e.target.value)}} as="textarea" rows={2} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={()=>handleReset()}>
                Cancel
              </Button>
              <Button variant="warning"  onClick={() =>{ addNewCategory()}} >
                Add
              </Button>
            </Modal.Footer>
          </Modal>
      <ToastContainer position='top-right' theme="dark" autoClose={2500} />
      </div>
    </>
  )
}

export default Category