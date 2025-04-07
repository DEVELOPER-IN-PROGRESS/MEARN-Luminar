import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/esm/Form';
import { addCategoryApi , getAllCategoryApi , deleteCategoryApi, updateCategoryApi } from '../services/allApi'
import { ToastContainer , toast } from 'react-toastify';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import VideoCard from './Videocard'


function Category({patchCategory,setPatchCategory}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addCategoryStatus , setAddCategoryStatus] = useState(false)
  const [deleteToggle , setDeleteToggle] = useState(false);
  const [categoryUpdate, setCategoryUpdate ] = useState(false);

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
        // or just set the state with result.data
        setAddCategoryStatus(!addCategoryStatus)
      }else{
        toast.error("something went wrong")
        handleReset()
      }
    }
    else{
      toast.error("Please Add a Category Name")
    }
  }

  const getAllCategory = async() => {
    const result = await  getAllCategoryApi()
    // console.log(result)

    if(result.status >199 && result.status < 300){
        setAllCategory(result.data)
    }
  }

  const deleteCategory = async (idx) => {
    console.log(idx)
    const result = await deleteCategoryApi(idx)
    // console.log(result)

    if(result.status >199 && result.status < 300){
      setDeleteToggle(!deleteToggle)
    }
  }

  const videoOver = (e) => {
    e.preventDefault();
    // console.log('default prevent')
  }

  const videoDrop = async (e,categoryDetails) => {
    // console.log(e,categoryDetails)
    const videoDetails = JSON.parse(e.dataTransfer.getData('videoDetails'))
    // console.log({categoryDetails})

    if(  categoryDetails.allvideos.find(  item =>  item.id ==  videoDetails.id )){
      toast.error('video already added to cetegory')
    }else{
      categoryDetails.allvideos.push(videoDetails)
      console.log(categoryDetails.allvideos)

      const result = await updateCategoryApi(categoryDetails.id, categoryDetails)
      // console.log(result)
      if(result.status >=200 && result.status<300){
        setCategoryUpdate(!categoryUpdate);
        setPatchCategory(!patchCategory);
      }
    }
  }

  useEffect(()=>{
    getAllCategory();
  },[addCategoryStatus,deleteToggle,categoryUpdate,patchCategory])

  const categoryVideoDrag  = (e,category,video) => {
      // console.log(e,{category})
      debugger;
      const pass = {...video,category}
      console.log({pass});
      const data = e.dataTransfer.setData("VideoCardDetails",JSON.stringify())
      console.log(data);
  }

console.log({patchCategory})

  return (
    <>
      <div className="category-wrap me-2">
          <h3 className="fs-4 mb-4">Category</h3>

          {
            allCategory?.length >0 ?

            allCategory.map( (item,idx) =>
                (
                  <div key={`Category-${idx}`} className="sub-wrap overflow-y-auto border-light border-2 border rounded-2 p-2 mt-3"
                  droppable="true" onDragOver={(e)=> videoOver(e)} onDrop={(e)=>{videoDrop(e, item) }}>
                      <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-5 m-0">{item.category}</p>
                          <Button onClick={()=>{deleteCategory(item?.id)}} variant="danger" className=''>
                              <FontAwesomeIcon  icon={faTrashCan} />
                          </Button>
                      </div>
                      <div className="song-name p-2 rounded-3 bg-secondar  mt-3">
                          {/*  */
                            item?.allvideos?.map((video,idx)=> (
                              <VideoCard key={`category-video-${idx}`}
                              // draggable="true" onDragStart={(e)=>{categoryVideoDrag(e,item?.category,video)}}
                              video={video} isPresent={true} category={item?.category} categoryId={item?.id} />
                            ))
                          }
                      </div>
                  </div>
                )
            )
            :
            <p className='text-danger mt-3 text-center'> No categories added</p>
          }

          <Button onClick={handleShow} variant="warning" className="mt-3 w-100 py-2 rounded-3 border-0">Add Category</Button>
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
