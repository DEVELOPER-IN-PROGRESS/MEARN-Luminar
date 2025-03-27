import React from 'react'
import Videocard from './Videocard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { allVideosApi } from '../services/allApi';

function View() {
  return (
    <>
        <h5>All Videos</h5>
        <div className="container-fluid mt-5">
            <Row className='justify-content-start column-gap-2 ps-lg-2 '>
                <Col sm={12} md={3} className="" lg={3}>
                        <Videocard/>
                </Col>
                <Col sm={12} md={3} className="" lg={3}>
                        <Videocard/>
                </Col>
                <Col sm={12} md={3} className="" lg={3}>
                        <Videocard/>
                </Col>
                <Col sm={12} md={3} className="" lg={3}>
                        <Videocard/>
                </Col>
            </Row>
        </div>

    </>
  )
}

export default View
