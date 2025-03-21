import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon  }  from '@fortawesome/react-fontawesome' ;
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faInstagram , faXTwitter ,faSquareFacebook ,faSquareWhatsapp , faLinkedin }  from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <>
      <footer className='mt-5'>
          <Container>
              <Row className='justify-content-center align-items-center'>
                <Col sm={12} md={8} xl={4} className='mb-2 mb-lg-0'>
                   <h3 className="text-warning text-start">
                      <FontAwesomeIcon icon={faVideo} beat className="me-3"/>
                      Media Player
                   </h3>
                   <p className="text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis iusto quidem possimus dolor quisquam laborum. Porro, quidem minus odio nulla dolore, voluptatem reiciendis a nemo provident voluptate, recusandae tenetur ad.
                   </p>
                </Col>
                <Col  className="d-md-block d-lg-none " md={12}></Col>
                <Col sm={12} md={6} xl={2} className='mb-2 mb-lg-0'>
                    <ul className="list list-unstyled">
                      Pages
                      <li className="footer-links">Landing Page</li>
                      <li className="footer-links">Home Page</li>
                      <li className="footer-links">Watch history </li>
                    </ul>
                </Col>
                <Col sm={12} md={6} xl={2}>
                    <ul className="list list-unstyled">
                      Guides
                      <li className="footer-links">React</li>
                      <li className="footer-links">React Boostrap</li>
                      <li className="footer-links">Material UI</li>
                    </ul>
                </Col>
                <Col sm={12} md={6} xl={4}>
                  <div className="contact mb-4">
                      <Form className="rounded-3 d-flex align-items-center justify-content-center column-gap-3">
                          <Form.Control type="email" placeholder="Email Id" />
                          <Button className="bg-warning text-light rounded-3" variant="primary" type="submit">Subscribe</Button>
                      </Form>
                      <div className="d-flex mt-4  align-items-center justify-content-between">
                          <FontAwesomeIcon className="fs-4 mx-3" icon={faXTwitter}  />
                          <FontAwesomeIcon className="fs-4 mx-3" icon={faInstagram} />
                          <FontAwesomeIcon className="fs-4 mx-3" icon={faSquareFacebook} />
                          <FontAwesomeIcon className="fs-4 mx-3" icon={faSquareWhatsapp} />
                          <FontAwesomeIcon className="fs-4 mx-3" icon={faLinkedin} />
                      </div>
                  </div>
                </Col>
              </Row>
          </Container>
      </footer>
    </>
  )
}

export default Footer ;

