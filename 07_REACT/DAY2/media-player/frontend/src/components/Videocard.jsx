import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState , useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi , addToWatchHistory } from '../services/allApi'

function Videocard({video,setDeleteVideoStatus , isPresent , category }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const addVideoToHistory = async() => {
        const date = new Date()
        const timestamp = new Intl.DateTimeFormat("en-GB",{
          year:'numeric', month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'
        }).format(date)

        console.log(timestamp)

        let caption = video?.caption
        let url = video?.embedLink ;
        const result = await addToWatchHistory({caption ,url , time:timestamp})
        console.log(result);


    }

    const handleShow = () => {
      setShow(true)
      addVideoToHistory()
    };

    const handleDelete = async (id) => {
      //  console.log('delete button')
       const result = await deleteVideoApi(id)
       console.log({result})
       if(result.status >=200 && result.status < 300){
        setDeleteVideoStatus(result.data)
       }
    }

  const videoDrag = (e,video) => {
    // console.log(e)
    console.log(video)

    e.dataTransfer.setData("VideoDetails",JSON.stringify({...video , category}))

  }

  return (
    <>
    <Card className="mt-3 mt-lg-2" style={{}}  draggable onDragStart={(e)=>{videoDrag(e,video)}}>
    { !isPresent && <Card.Img  onClick={()=>{handleShow()}} variant="top" className='img-fluid' style={{height:'250px'}} src={`${video?.image}`} />}
      <Card.Body className='d-flex align-items-center justify-content-between'>
        <Card.Text>{ video?.caption }</Card.Text>
        {
          !isPresent &&
        <Button variant="danger" onClick={() => {handleDelete(video?.id)}} >
            <FontAwesomeIcon icon={faTrashCan}  />
        </Button> }
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
