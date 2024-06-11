import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import {collection, addDoc} from 'firebase/firestore'
import db from "../firebase/dbfirebase"
import popup from '../sweetalert'

const Checkout = () => {
    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const [dni, setDni] = useState()
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState()
    const [nOrden, setNOrden] = useState()

    const {cart, total, deleteCart} = useContext(CartContext)

    const nav = useNavigate()

    const send = e => {
        e.preventDefault()
        addDoc(collection(db, 'pedidos'), {
            buyer: {nombre, mail, dni, direccion, telefono},
            pedido: cart,
            total: total(),
        }).then(ref => setNOrden(ref.id))
    }

    useEffect(() => {
        if (nOrden) popup('Gracias por tu compra', `Número de orden: ${nOrden}`, false, () => {
            deleteCart()
            nav('/')
        })
    }, [nOrden])

    return (
        <div className="checkout">
            <h1>Datos Personales</h1>
            <form onSubmit={send}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id='nombre' onInput={e => setNombre(e.target.value)}/>
                <label htmlFor="mail">Mail</label>
                <input type="text" id='mail' onInput={e => setMail(e.target.value)}/>
                <label htmlFor="dni">DNI</label>
                <input type="text" id='dni' onInput={e => setDni(e.target.value)}/>
                <label htmlFor="direccion">Dirección</label>
                <input type="text" id='direccion' onInput={e => setDireccion(e.target.value)}/>
                <label htmlFor="telefono">Teléfono</label>
                <input type="text" id='telefono' onInput={e => setTelefono(e.target.value)}/>
                <button type='submit'>Finalizar pedido</button>
            </form>
        </div>
    )
}

export default Checkout