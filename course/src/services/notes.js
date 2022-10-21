import axios from "axios";

const baseUrl = `http://localhost:3001/persons`

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(responce => responce.data)
}

const create = (object) => {
    const request = axios.post(baseUrl, object)
    return request.then(responce => responce.data)
}

const httpdelete = (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(responce => responce.data)
}


export default {
    getAll,
    create,
    httpdelete
}