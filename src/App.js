import PersonForm from "./components/PersonForm";
import './App.css'
import PersonList from "./components/PersonList";
import {Stack} from "react-bootstrap";
import {useEffect, useState} from "react";
import {fetchAllPersons} from "./services";


function App() {
    const [persons, setPersons] = useState([])
    const [currentPerson, setCurrentPerson] = useState()
    useEffect(() => {
        const getData = async () => {
            const response = await fetchAllPersons()
            setPersons(response)
        }
        getData()
    }, []);

    return (
        <Stack gap={4} className="container">
            <PersonForm currentPerson={currentPerson} setCurrentPerson={setCurrentPerson}/>
            <PersonList data={persons} setCurrentPerson={setCurrentPerson}/>
        </Stack>
    );
}

export default App;
