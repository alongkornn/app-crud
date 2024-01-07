import axios from 'axios';

export const remove = async (id) => {
    await axios.delete('app-crud-psi.vercel.app/product/' + id)
}

export const create = async (data) => {
    await axios.post('app-crud-psi.vercel.app/product', data)
}



