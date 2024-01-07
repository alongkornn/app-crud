import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { create, remove } from '../functions/product';
import { Link } from 'react-router-dom';
import { Button, TextField, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function FormProduct() {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({});


    useEffect(() => {
        // code
        loadData();

    }, []);

    const loadData = async () => {
        await axios.get('app-crud-psi.vercel.app/product')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        create(form)
            .then((res) => loadData())
            .catch((err) => console.log(err))
    }

    const handleRemove = async (id) => {
        remove(id)
            .then((res) => {
                console.log(res);
                loadData();
        }).catch((err) => console.log(err));
    }
    
  return (
      <div>
        
        <form>
            <div>
                <TextField
                    onChange={(e) => handleChange(e)}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name='name'
                    type='text'
                />
            </div>
              <br />
            <div>
                <TextField
                    onChange={(e) => handleChange(e)}
                    id="outlined-basic"
                    label="Detail"
                    variant="outlined"
                    name='detail'
                    type='text'
                    />
            </div> 
              <br />
            <div>
                <TextField
                    onChange={(e) => handleChange(e)}
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    name='price'
                    type='text'
                />
            </div>
              <br />
              <Button onClick={e => handleSubmit(e)}>Submit</Button>
        </form>
        <br />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align='center'>Number</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Detail</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Action</TableCell>
                    <TableCell align="center">Edit</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {data ? data.map((item, index) => (
                        <TableRow key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='center'>{index + 1}</TableCell>
                            <TableCell align='center'>{item.name}</TableCell>
                            <TableCell align="center">{item.detail}</TableCell>
                            <TableCell align="center">{item.price}</TableCell>
                            <TableCell onClick={() => handleRemove(item._id)}
                                align="center">
                                <DeleteIcon color='error'/>
                            </TableCell>
                            <TableCell align="center">
                                <Link to={'/edit/' + item._id}>
                                    <EditIcon color="primary"/>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                        : null
                    }
                </TableBody>
            </Table>
              </TableContainer>
        
    </div>
  )
}

export default FormProduct