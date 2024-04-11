import Axios from 'axios'

const baseUrl = "https://localhost:7004/api/customers"

// Hae kaikki asiakkaat backendistä
const getAll = () => {
    const request = Axios.get(baseUrl)
    return request.then(response => response.data)
}

export default {getAll}
