import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <>
      <Navbar className="bg-transparent">
        <Container>
          <Navbar.Brand className="text-warning fs-4">
            <FontAwesomeIcon icon={faVideo} beat className="me-3"/>
             Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header