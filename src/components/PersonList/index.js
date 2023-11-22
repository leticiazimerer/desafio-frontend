import React from 'react';
import {Button, Card, Stack, Table} from "react-bootstrap";
import {MdDelete} from "react-icons/md";
import {FaEdit} from "react-icons/fa";
import {deletePerson} from "../../services";

const PersonList = ({data, setCurrentPerson}) => {

    const DeletePersonButton = ({person_id}) => {
        const handleDelete = async () => {
            await deletePerson(person_id).then(() => {
                window.location.reload();
            })
        }
        return (
            <Button variant="outline-danger" size="sm" onClick={handleDelete}>
                <MdDelete/>
            </Button>
        )
    }

    const EditPersonButton = ({person_id}) => {
        const handleDelete = async () => {
            setCurrentPerson(
                data.filter(person => person.id === person_id)[0]
            )
        }
        return (
            <Button variant="outline-info" size="sm" onClick={handleDelete}>
                <FaEdit/>
            </Button>
        )
    }

    return (
        <Card>
            <Table striped hover>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Endereço</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {data && data?.map(person =>
                    <tr key={person.id}>
                        <td>{person.name} {person.last_name}</td>
                        <td>{person.email}</td>
                        <td>{person.address}</td>
                        <td>
                            <Stack gap={1} direction="horizontal">
                                <DeletePersonButton person_id={person.id}/>
                                <EditPersonButton person_id={person.id}/>
                            </Stack>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Card>
    );
};

export default PersonList;