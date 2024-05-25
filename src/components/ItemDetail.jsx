import ItemCount from './ItemCount.jsx'

const ItemDetail = ({ product }) => {
    return (
        <>
            <h1>{product.name}</h1>
            <div>
                <img src='' alt={product.name} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas in quisquam beatae voluptatem qui id voluptatibus odit accusantium similique est, corrupti dignissimos dolorem dolor eius ea deserunt ut alias.</p>
            </div>
            <p>${product.price}</p>
            <ItemCount product={product}/>
        </>
    )
}

export default ItemDetail