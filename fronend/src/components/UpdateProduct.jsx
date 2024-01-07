import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material';

function UpdateProduct() {
  const [data, setData] = useState({
    name: '',
    datail: '',
    price: ''
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    load(params.id);
  }, [])
  
  const load = async (id) => {
    await axios.get('http://localhost:8080/product/' + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }

  const handleChange = (event) => {
    setData({
        ...data,
        [event.target.name]: event.target.value,
    })
}

const handleSubmit = async (event) => {
  event.preventDefault(); 
  await axios.put('http://localhost:8080/product/' + params.id, data)
    .then((res) => {
      navigate('/');  
    })
    .catch((err) => console.log(err));
    
}

  
  return (
    <div>
      <h2>Edit Form</h2>
      <form>
              <div>
                <TextField
                    onChange={(e) => handleChange(e)}
                    id="outlined-basic"
                    variant="outlined"
                    name='name'
                    type='text'
                    value={data.name}
                />
            </div>
              <br />
            <div>
                <TextField
                    onChange={(e) => handleChange(e)}
                    id="outlined-basic"
                    variant="outlined"
                    name='detail'
                    type='text'
                    value={data.detail}
                    />
            </div> 
              <br />
            <div>
                <TextField
                    onChange={(e) => handleChange(e)}
                    id="outlined-basic"
                    variant="outlined"
                    name='price'
                    type='text'
                    value={data.price}
                />
            </div>
              <br />
              <Button onClick={e => handleSubmit(e)}>Submit</Button>
          </form>
    </div>
  )
}

export default UpdateProduct