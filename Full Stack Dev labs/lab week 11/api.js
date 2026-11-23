import axios from "axios"

// use the create axios instance as a connection
// to our base URL for the router
// POST / PUT / DELETE but this will only return
// success or failure and will not truly change
// the fake API
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export default api