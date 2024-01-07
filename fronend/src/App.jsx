import { useState } from 'react'
import './App.css'
import FormProduct from './components/FormProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateProduct from './components/UpdateProduct';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <h1>Form Product</h1>
      <Routes>
        <Route path='/' element={<FormProduct />} />
        <Route path='/edit/:id' element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
