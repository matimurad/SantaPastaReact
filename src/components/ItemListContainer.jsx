import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import db from "../firebase/dbfirebase"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState()

    const categoria = useParams().tipodepasta

    useEffect(() => {
        let ref = collection(db, 'items')
        if (categoria) ref = query(ref, where('category', '==', categoria))

        getDocs(ref).then(res => {
            const data = res.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setItems(data)
        })
    }, [categoria])

    return (
        <div className='contenido'>
            {items && <ItemList items={items}/>}
        </div>
    )
}
export default ItemListContainer