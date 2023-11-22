import React, {useEffect, useState} from 'react';
import {Card, Col, Form, Row, Button} from "react-bootstrap";
import {addPerson, editPerson} from "../../services";

const PersonForm = ({currentPerson, setCurrentPerson}) => {

    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: name,
            last_name: lastName,
            email: email,
            address: address
        }
        if (data) {
            if (currentPerson) {
                await editPerson(currentPerson.id, data).then(() => {
                    window.location.reload();
                })
            } else {
                await addPerson(data).then(() => {
                    window.location.reload();
                })
            }
        }
    }

    const handleCleanForm = () => {
        setName('')
        setLastName('')
        setEmail('')
        setAddress('')
        setCurrentPerson()
    }

    useEffect(() => {
        if (currentPerson) {
            setName(currentPerson.name)
            setLastName(currentPerson.last_name)
            setEmail(currentPerson.email)
            setAddress(currentPerson.address)
        }
    }, [currentPerson]);

    return (
        <Card style={{
            padding: 10
        }}>
            <Form id='personForm' onSubmit={handleFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control placeholder="Nome" name="name" value={name} onChange={e => {
                            setName(e.target.value)
                        }}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSobrenome">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control placeholder="Sobrenome" name="last_name" value={lastName} onChange={e => {
                            setLastName(e.target.value)
                        }}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={e => {
                        setEmail(e.target.value)
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control placeholder="Endereço" name="address" value={address} onChange={e => {
                        setAddress(e.target.value)
                    }}/>
                </Form.Group>

                <Row>
                    <Col>
                        <Button variant="outline-danger" type="button" onClick={handleCleanForm}>
                            Cancelar
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Salvar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default PersonForm;