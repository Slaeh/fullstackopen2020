import React from "react";
import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => { 
    return axios.get(baseUrl)
}

const create = newObject => { 
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => { 
    return axios.post(`${baseUrl}/${id}`, newObject)
}

export default { 
    getAll: getAll, 
    create: create,
    update: update
}