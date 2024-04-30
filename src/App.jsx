import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import fetchProducts from './assets/productos'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<ItemListContainer products={products}/>}/>
        <Route path='/categoria/:tipodepasta' element={<ItemListContainer products={products}/>}/>
        <Route path='/item/:pasta' element={<ItemDetailContainer products={products}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
