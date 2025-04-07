import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
        <Container className="">
          <Row className='align-items-center justify-content-center mt-4'>
            <Col md={6}>
              <h3>Welcome to Media <span className="text-warning">Player</span></h3>
              <p className='mt-4' style={{ fontSize:'18px', textAlign:'justify',}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt, adipisci hic, inventore praesentium voluptatum velit consequuntur quidem odit repellat, cupiditate nam modi. Corporis minima a inventore obcaecati beatae dolore.</p>

              <Link to={'/home '}>
                <button className="btn btn-warning p-2 btn-rounded">Get Started</button>
              </Link>
            </Col>
            <Col mb={5} md={6} className="justify-content-center d-flex">
                  <img src="https://i.gifer.com/embedded/download/9hHa.gif" alt="beats image" className="img-fluid w-50" />
            </Col>
          </Row>

          <Row className="mt-5 px-4">

          <h3 className="text-center my-4 text-light">Features</h3>
          <Col md={2}></Col>
          <Col md={8}>
            <Row className="align-items-center justify-content-center gx-3 col-gap-3">
                <Col sm={4}  className="mb-2 mb-md-3">
                    <div className="card bg-dark p-2">
                      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2c0Z240N3JiemlqZG0xN2F5cW1nY2g5b3N5ZWlycG85cW5mZmkyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41YkTerskSbtDBIc/giphy.gif" alt="" className="img-fluid" />
                        <h3 className="card-title text-light mb-0 mt-3 fs-4">Card Title</h3>
                        <p className="text-light mt-1 text-start" style={{ fontSize:'18px' }}>
                            Welcome to our custom made media player built with react and bootstrap
                        </p>
                    </div>
                </Col>
                <Col sm={4} className="mb-2 mb-md-3">
                  <div className="card bg-dark p-2">
                    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnYyMTdra2N1dW1rcW1hZWVkN3g2bGMxa3U4MGZwbHl6Y2F6ejZ3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YpvxZKD0WIUl1MTQru/giphy.gif" alt="" className="img-fluid" />
                      <h3 className="card-title text-light mb-0 mt-3 fs-4">Card Title</h3>
                      <p className="text-light mt-1 text-start" style={{ fontSize:'18px' }}>
                          Welcome to our custom made media player built with react and bootstrap
                      </p>
                  </div>
                </Col>
                <Col sm={4} className="mb-2 mb-md-3">
                  <div className="card bg-dark p-2">
                    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTNlaDcwa2ZpYzliMDRhNDJvajBnd3NjZjF2MDQxY282eGVhaWl1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ysFusT3RDLTTW/giphy.gif" alt="" className="img-fluid" />
                      <h3 className="card-title text-light mb-0 mt-3 fs-4">Card Title</h3>
                      <p className="text-light mt-1 text-start" style={{ fontSize:'18px' }}>
                          Welcome to our custom made media player built with react and bootstrap
                      </p>
                  </div>
                </Col>
            </Row>
          </Col>
          <Col md={2}></Col>
          </Row>
      {/*

        Bootstrap based card

          <Card style={{}} className="">
            <Card.Body>
                <Card.Img />
                <Card.Title>Card Title</Card.Title>
                <Card.Text></Card.Text>
            </Card.Body>
          </Card>

      */}
        </Container>

        <Container className="mt-4">
           <Row className="p-2 p-md-2 align-items-stretch justify-content-center border border-light border-2 rounded-2">
                <Col sm={12} md={6}>
                    <h3 className="text-warning fs-3">
                        Simple fast and Powerful
                    </h3>
                    <p className="mb-2" style={{color:'#FFFFFF'}}>
                      <span className="fs-4">Play Everything</span>
                     provident minus dolorem esse quas voluptates nesciunt? Dignissimos praesentium labore molestias debitis cum!
                    </p>
                    <p className="mb-2" style={{color:'#FFFFFF'}}>
                      <span className="fs-4">Try Everything</span>
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam dicta, error dolores sequi voluptatum dolorum suscipit tenetur
                    </p>
                    <p className="mb-2" style={{color:'#FFFFFF'}}>
                      <span className="fs-4">Play Everything</span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam dicta, error dolores sequi voluptatum dolorum suscipit tenetur
                    </p>
                </Col>
                <Col sm={12} md={6} className="mt-4 mt-lg-0">
                    <iframe width="100%" height="514" src="https://www.youtube.com/embed/pn6M7_L1JbQ?si=j0Lbj9AsyRwTL081" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen >
                    </iframe>
                </Col>
           </Row>
        </Container>
    </>
  )
}

export default Landing