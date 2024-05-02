import './../ItemDetailsPage/ItemDetailsPage.css'

import productsData from './../../data/products.json'
import { useParams } from 'react-router-dom'

const ItemDetailsPage = () => {

  const { product_id } = useParams(productsData)
  console.log(product_id)
  const productProfile = productsData.find(eachProduct => eachProduct.id == product_id)

  return (
    <div className="ItemDetailsPage">
      <h1>Producto: {productProfile.title}</h1>
      <h3>Descripción: {productProfile.description}</h3>
      <h3>Precio: {productProfile.price}</h3>
      <h3>Descuento: {productProfile.discountPercentage}</h3>
      <h3>Marca: {productProfile.brand}</h3>

    </div>
  )
}

export default ItemDetailsPage