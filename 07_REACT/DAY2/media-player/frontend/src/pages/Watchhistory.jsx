import React from 'react'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { getAllHistory } from '../services/allApi'
import { useEffect , useState } from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import { deleteVideoFromHistory } from '../services/allApi'

function Watchhistory() {
  const [historyState , setHistoryState] = useState([])
  const [deleteStatus,setDeleteStatus] = useState(false)

  const fetchHistory =  async () => {
    const result = await getAllHistory()
    console.log(result)
    if(result?.status >=200 && result?.status <300){
      setHistoryState(result.data)
    }
  }

  const deleteVideo = async (idx) => {
    const result = await deleteVideoFromHistory(idx);
    // console.log(result)
    if(result.status >199 && result.status<300){
        setDeleteStatus(!deleteStatus)
        // fetchHistory() //not a best practise should be called in useEffect
    }
  }

  useEffect(() => {
    fetchHistory()
  },[deleteStatus])

  return (
    <>
        <div className="container">
          <div className="my-5 d-flex justify-content-between">
             <h5 className=''>Watch history</h5>
             <h5 className='d-flex align-items-center justify-content-center column-gap-3'>
                <Link className="text-decoration-none" to={'/home'}>
                  <span className="d-none d-md-block">Back to Home </span>
                </Link>
                <FontAwesomeIcon icon={faHouse} />
             </h5>
          </div>

          {/* or use table-responsive*/}
          <div className="container overflow-x-auto">
           { historyState.length != 0?
            <table className="watch-table mx-auto table table-bordered border-dark">
                <thead>
                    <tr >
                      <th className="p-3  text-center">Sl :No</th>
                      <th className="p-3  text-center">Caption</th>
                      <th className="p-3  text-center">Url</th>
                      <th className="p-3  text-center">Timestamp</th>
                      <th className="p-3  text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
		          {
                    historyState?.length > 0  && historyState.map( (video,idx) => (
                      <tr key={`history-row-${idx}`}>
                        <td className=" py-2 text-center">{idx+1}</td>
                        <td className=" py-2 text-center">{video.caption}</td>
                        <td className=" py-2 text-center">
                            <Link className="text-decoration-none" to={`${video.embedLink}`} target="_blank">
                                {video.caption}
                            </Link>
                        </td>
                        <td className=" py-2 text-center">{video.time}</td>
                        <td className=" py-2 text-center">
                        <Button variant="danger" onClick={() => { deleteVideo(video?.id)}} >
                            <FontAwesomeIcon icon={faTrashCan}  />
                        </Button>
                        </td>
                      </tr>
                    ))
		          }
                </tbody>
            </table>
            :
             <p className="text-danger text-center fs-3">No History Found!</p>
            }
          </div>

        </div>
    </>
  )
}

export default Watchhistory
