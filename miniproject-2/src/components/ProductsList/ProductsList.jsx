<<<<<<< HEAD
import { useState } from "react"
import ProductRow from "../ProductRow/ProductRow"
import productsData from './../../data/products.json'

import './ProductsList.css'
import { Link } from "react-router-dom"

const ProductsList = () => {

  const [products, setProducts] = useState(productsData)

  const handleProductRemove = (productIdToDelete) => {
    const productsAfterDeletion = products.filter(eachProduct => eachProduct.id != productIdToDelete)
    setProducts(productsAfterDeletion)
  }

  return (
    <div className="ProductsList">
      <h1>Productos</h1>
      <hr />

      <table>

        <thead>
          <tr>
            <th>Artículo</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Puntuación</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(eachProduct => {
              return (

                <ProductRow
                  {...eachProduct}
                  handleProductRemove={handleProductRemove}
                  key={eachProduct.id}
                />

              )
            })
          }
        </tbody>
      </table>

    </div>
  )
=======
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
>>>>>>> 10f1c76d4c87c59a0a60c624f088d1d75febb344
}

export default ProductsList