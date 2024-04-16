import Axios from 'axios'

const baseUrl = "https://localhost:7004/api/customers"

// Hae kaikki asiakkaat backendistä
const getAll = () => {
    const request = Axios.get(baseUrl)
    return request.then(response => response.data)
}

const addNew = (object) => {
    const request = Axios.post(baseUrl, object)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = Axios.delete(baseUrl + "/" + id)
    return request.then(response => response.data)
}

const edit = (object) => {
    const request = Axios.put(baseUrl + "/" + object.customerId, object)
    return request.then(response => response.data)
}


export default {getAll, addNew, remove, edit}

