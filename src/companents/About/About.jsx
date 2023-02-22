import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
const img = require("../img/potu.jpg")

export default function About() {

    const [today, setToday] = useState([])
    const [value, SetValue] = useState("")

    const FetchingData = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        return res
    }
    useEffect(() => {
        FetchingData().then(res => setToday(res.data))
    }, [])

    console.log(value)
    return (
        <Container>
            <Row className='justify-content-center'>
                <Form.Group >
                    <Form.Control placeholder="Enter email" onChange={(e)=>SetValue(e.target.value)} />
                </Form.Group>
                {today.filter((res) =>{
                    console.log(res.name);
                    return res.name.toLocaleLowerCase() === "" ? value : res.name.toLocaleLowerCase().includes(value)
                }).map((val) => {
                    return (
                                <Col style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <div style={{ width: '350px', height: '650px', background: 'grey', margin: '10px' }} key={val.id}>
                                    <img style={{ width: "300px" }} src={img} alt="" />
                                    <h2 className='sde'> {val.name}</h2>
                                    <p>  {val.email}</p>
                                    <Button variant="primary">Submit</Button>
                                </div>
                                </Col>
                            )
                        })
                     } 
            </Row>
        </Container>
    )
}
