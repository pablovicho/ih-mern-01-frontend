//axios es una librería para que podamos hacer llamadas api a un servidor. El postman de React

import axios from "axios"

const axiosClient  = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL //es necesario que se llame REACT_APP_ y el nombre de la propiedad
})

export default axiosClient