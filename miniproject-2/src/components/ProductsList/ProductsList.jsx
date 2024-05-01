import ProductRow from "../ProductRow/ProductRow"
import ProductData from "../ProductsList/products.json"
import { useState } from "react"


const ProductsList = () => {

    const [products, setProducts] = useState(ProductData)

    const deleteProduct = productIdToDelete => {
        const filteredProducts = products.filter(eachProduct => eachProduct.id != productIdToDelete)
        setProducts(filteredProducts)
    }

    return (
        <div className="ProductsList">
            <div>
                <h2>Product</h2>
                <h2> Price </h2>
                <h2> Rating </h2>
                <h2> Brand </h2>

            </div>

            <hr />
            {

                products.map(product => {
                    return <ProductRow productInfo={product} key={product.id} deleteProduct={deleteProduct} />
                })
            }
        </div>

    )
}

export default ProductsList