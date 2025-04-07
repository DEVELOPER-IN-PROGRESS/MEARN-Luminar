import React,{useEffect,useState} from 'react'
import Videocard from './Videocard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { allVideosApi } from '../services/allApi';
import { getAllCategoryApi , updateCategoryApi } from '../services/allApi';

function View({addVideoStatus, patchCategory , setPatchCategory }) {

  const [allVideo , setAllVideo ] = useState([])
  const [ deleteVideoStatus , setDeleteVideoStatus] = useState({})
  const [everyCategory, setEveryCategory] = useState([])

  const getAllVideo = async () => {
	let result = await allVideosApi();
	if(result.status >=200 && result.status <300){
		setAllVideo(result.data)
	}

 }

  useEffect(()=>{
	getAllVideo()
  },[addVideoStatus,deleteVideoStatus,patchCategory])

useEffect(()=>{
  async function fetch_cat(){
    const result = await getAllCategoryApi();
    console.log({result},'cat update')
    if(result.status >=200 && result.status<300){
      setEveryCategory(result.data)
    }
  }
  fetch_cat()
},[patchCategory])


// console.log(allVideo)

  const viewDrag = (e) => {
    //
     e.preventDefault();
     console.log('default prevention')
  }

  const viewDrop = async (e) => {
    // debugger;
    // console.log(video,'drop') // undefined
    const res = JSON.parse(e.dataTransfer.getData("VideoDetails"))
    console.log({res})

    // let cid = res.category

    for(let i = 0 ; i < everyCategory.length ;i++){
        let catgId = everyCategory[i].id ;

        if(everyCategory[i].category == res.category){
          console.log(everyCategory[i].allvideos, 'videos')
          let resallVideo =  everyCategory[i].allvideos.filter( (item) => ( item.caption != res.caption && item.id != res.id  ))
          console.log(resallVideo)

          let reqBody = {...everyCategory[i], allvideos: resallVideo}
          console.log(reqBody)

          const result  = await updateCategoryApi( catgId , reqBody )
          console.log(result)

          if(result.status >= 200 && result.status <300){
              setPatchCategory(!patchCategory)
              console.log('set state')
          }
          break;
        }
    }
  }

  return (
    <>
        <h5>All Videos</h5>
        <div className="container-fluid mt-5" droppable="true" onDragOver={(e)=>{viewDrag(e)}} onDrop={(e)=>{viewDrop(e)}}>
            <Row className='justify-content-start column-gap-2 ps-lg-2 '>
		{
		allVideo?.length > 0?

                 allVideo.map( (video,idx) => (
                <Col key={`col-${idx}`} sm={12} md={3} className="" lg={3}>
                        <Videocard key={`card-${idx}`} setDeleteVideoStatus={setDeleteVideoStatus} video={video}/>
                </Col>))
		:
		<Col className="d-flex justify-content-center align-items-center flex-column">
		   <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" alt="no videos uploaded"/>
       <p className="text-center text-danger">No video's added</p>
		</Col>
                }
            </Row>
        </div>

    </>
  )
}

export default View
