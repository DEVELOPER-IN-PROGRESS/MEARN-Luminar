import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { videoAddApi , allVideosApi } from '../services/allApi';
import { ToastContainer , toast } from 'react-toastify'

export default function Add(){

  const [show, setShow] = useState(false);
  const [videoDetails, setvideoDetails] = useState({
	caption:"", image:"", embedLink:""
  })

  const handleUpload = async () => {
	const {caption, image , embedLink}  = videoDetails;
	if(!image || !caption|| !embedLink){
		alert('Please fill all the details')
	}
	else{
		//API call towards the
		let url = embedLink

		let embedkey = ''
		if(url.startsWith('https://youtu.be')){
			embedkey = url.slice(17,28)
		}
		else if ( url.startsWith('https://www.youtube')  ){
			embedkey = url.slice(32,43)
		}
		else{

		}

		let link = `https://www.youtube.com/embed/${embedkey}`
		const res = await videoAddApi({caption , image , embedLink:link })
		console.log(res)
		if(res.status >=200 && res.status < 300){
			toast.success('Video added')
			handleClose()
		}else{
			toast.error('Something went wrong')
			handleReset()
		}
	}
  }

  const handleClose = () => {
	 setShow(false);
	 handleReset(); // reset fields when we close the modal
 }

 const handleReset = () => {
	setvideoDetails({ caption:"", image:"", embedLink:""})
  }


const handleShow = () => {
	setShow(true);
}
//   console.log({videoDetails})

return(
	 <>
		<h4 className="fs-4 text-dark d-flex justify-content-center align-items-center">
			<span className="d-none d-lg-block">Upload New Video</span>
			<FontAwesomeIcon onClick={handleShow} className='ms-3' icon={faCloudArrowUp} />
		</h4>

		<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title  className="">
			<span className="">Upload Videos</span>
		  	<FontAwesomeIcon className="ms-2" icon={faFilm} />
		  </Modal.Title>
        </Modal.Header>
        <Modal.Body >
			<p className="mt-1 fs-5">Please fill the dollowing details</p>
			<Form className='border  p-3  rounded-2'>

				<Form.Control className="mb-3" type="text" value={videoDetails.caption} onChange={(e)=>{setvideoDetails({...videoDetails, caption:e.target.value }) }} placeholder="Video Caption" />
				<Form.Control className="mb-3" type="text" value={videoDetails.image} onChange={(e)=>{setvideoDetails({...videoDetails, image:e.target.value})  }} placeholder="Video Image" />
				<Form.Control className="mb-3" type="text" value={videoDetails.embedLink} onChange={(e)=>{setvideoDetails({...videoDetails, embedLink:e.target.value })  }} placeholder="Video Url" />

			</Form>
		</Modal.Body>
        <Modal.Footer>
          <Button className="me-2" variant="secondary" onClick={ ()=> { handleReset() }}>
				Reset
          </Button>
          <Button  variant="warning" onClick={ () => { handleUpload() }}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

	  <ToastContainer position='top-right' theme="dark" autoClose={2500} />
	 </>
	)
}
