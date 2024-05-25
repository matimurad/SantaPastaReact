import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.jsx'
import db from '../firebase/dbfirebase.js'
import { doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const id = useParams().pasta

    useEffect(() => {
        getDoc(doc(db, 'items', id)).then(res => setProduct({id: res.id, ...res.data()}))
    }, [])

    return (
        <div className='type'>
            {product && <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer