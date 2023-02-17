import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function NotFound() {
  return (
    <div>
      <Container>
        <Row className='justify-content-center mt-5'>
          <Col xs="2">
            <h5 style={{ color: "red" }}>not Found</h5>
            <h1 style={{ color: "red", width: "100px" }}>404</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
