import Table from 'react-bootstrap/Table';
import React, { useState } from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import { } from 'react-router-dom';

export default function Home() {
    let arr = ["Uzbekistin", "japon", "Iroq", "Eron", "China", "Russia", "Dubai", "Jizzax", "Paris", "Gretsia"]
    const [value, SetValue] = useState("")
    return (
        <div>
            <Container>
                <Row className=' justify-content-center mt-5'>
                    <Col xs={6}>
                        <Form.Group >
                            <Form.Control placeholder="Enter email" onChange={(e)=> SetValue(e.target.value)
                            } />
                        </Form.Group>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arr.filter((res)=>{
                                    return res.toLocaleLowerCase() === "" ? value : res.toLocaleLowerCase().includes(value)
                                }).map((item, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{index +1}</td>
                                                <td>{item}</td>
                                            </tr>
                                        </>
                                    )
                                 })} 
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
