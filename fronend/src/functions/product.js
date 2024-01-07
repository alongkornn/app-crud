import axios from 'axios';

export const remove = async (id) => {
    await axios.delete('app-crud-chi.vercel.app/product/' + id)
}

export const create = async (data) => {
    await axios.post('app-crud-chi.vercel.app/product/', data)
}



