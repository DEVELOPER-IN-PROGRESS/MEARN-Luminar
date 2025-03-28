import React,{useEffect,useState} from 'react'
import Videocard from './Videocard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { allVideosApi } from '../services/allApi';

function View() {

  const [allVideo , setAllVideo ] = useState([])

  const getAllVideo = async () => {
	const result = await allVideosApi();
	if(result.status >=200 && result.status <300){
		setAllVideo(result.data)
	}
  }

  useEffect(()=>{
	getAllVideo()
  })

// console.log(allVideo)

  return (
    <>
        <h5>All Videos</h5>
        <div className="container-fluid mt-5">
            <Row className='justify-content-start column-gap-2 ps-lg-2 '>
		{
		allVideo?.length > 0?

                 allVideo.map( (video,idx) => (
                <Col key={`col-${idx}`} sm={12} md={3} className="" lg={3}>
                        <Videocard key={`card-${idx}`} video={video}/>
                </Col>))
		:
		<Col className="d-flex justify-content-center align-items-center flex-column">
		   <img src="" alt="no videos uploaded"/>
		</Col>
                }
            </Row>
        </div>

    </>
  )
}

export default View
