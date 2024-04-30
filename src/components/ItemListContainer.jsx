import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    const [categoriaItem, setCategoriaItem] = useState(props.products)

    const categoria = useParams().tipodepasta ? useParams().tipodepasta : null

    useEffect(() => {
        if(props.products) {
            if (categoria) setCategoriaItem(props.products.filter(product => product.category == categoria))
            else setCategoriaItem(props.products)
        }
    }, [props, categoria])

    return (
        <div className='contenido'>
            <ItemList products={categoriaItem}/>
        </div>
    )
}
export default ItemListContainer