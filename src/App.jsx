import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import fetchProducts from './assets/productos'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartContext, CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:tipodepasta' element={<ItemListContainer/>}/>
          <Route path='/item/:pasta' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='*' element={<h1>Catastrophic failure</h1>}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
