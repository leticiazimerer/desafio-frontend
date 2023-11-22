const base64 = require('base-64')

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN
const API_USER = process.env.REACT_APP_API_USER
const API_PASSWORD = process.env.REACT_APP_API_PASSWORD


const DEFAULT_API_URL = `${API_DOMAIN}/persons`
let auth_header = `Basic ${base64.encode(`${API_USER}:${API_PASSWORD}`)}`

export const fetchAllPersons = async () => {
    const response = await fetch(
        `${DEFAULT_API_URL}/`,
        {
            headers: new Headers({
                'Authorization': auth_header
            })
        }
    )
    const fetchedTasks = await response.json()
    return fetchedTasks['persons']
}

export const deletePerson = async (person_id) => {
    const response = await fetch(
        `${DEFAULT_API_URL}/${person_id}`,
        {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': auth_header
            })
        }
    )
    return response.status;
}

export const addPerson = async (data) => {
    const response = await fetch(
        `${DEFAULT_API_URL}/`,
        {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': auth_header
            }),
            body: JSON.stringify(data)
        }
    )
    return response.status;
}


export const editPerson = async (person_id, data) => {
    const response = await fetch(
        `${DEFAULT_API_URL}/${person_id}`,
        {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': auth_header
            }),
            body: JSON.stringify(data)
        }
    )
    return response.status;
}