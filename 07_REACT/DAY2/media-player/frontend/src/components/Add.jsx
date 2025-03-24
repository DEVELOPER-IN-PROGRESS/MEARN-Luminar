import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Form from 'react-bootstrap/Form';


export default function Add(){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(
	 <>
		<h4 className="fs-4 text-light">Upload New Video
			<FontAwesomeIcon onClick={handleShow} className='ms-3' icon={faCloudArrowUp} />
		</h4>

		<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
		  		<FontAwesomeIcon icon={faFilm} />
			Upload Videos
		  </Modal.Title>
        </Modal.Header>
        <Modal.Body >
			<p className="mt-1 fs-5">Please fill the dollowing details</p>
			<Form className='border  p-3  rounded-2'>

				<Form.Control className="mb-3" type="text" placeholder="Video Caption" />
				<Form.Control className="mb-3" type="text" placeholder="Video Image" />
				<Form.Control className="mb-3" type="text" placeholder="Video Url" />

			</Form>
		</Modal.Body>
        <Modal.Footer>
          <Button className="me-2" variant="secondary" onClick={handleClose}>
				Reset
          </Button>
          <Button  variant="warning" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
	 </>
	)
}
