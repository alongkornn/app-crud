import axios from 'axios';

export const remove = async (id) => {
    await axios.delete('http://localhost:8080/product/' + id)
}

export const create = async (data) => {
    await axios.post('http://localhost:8080/product', data)
}



