<<<<<<< HEAD
import { Link } from "react-router-dom"
import ItemDetailsPage from "../ItemDetailsPage/ItemDetailsPage"

const ProductRow = ({ id, title, brand, price, rating, handleProductRemove }) => {

  return (
    <tr>
      <td>
        <Link to={`/products/${id}`}>
          {title}
        </Link>
      </td>
      <td>{brand}</td>
      <td>{price}</td>
      <td>
        {rating > 4.5 ? '🟢' : '🔴'} {rating}
      </td>
      <td onClick={() => handleProductRemove(id)}>❌</td>
    </tr>
  )
=======
const ProductRow = ({ productInfo, deleteProduct }) => {

    return (
        <div className="ProductRow">
            <h3>{productInfo.title}</h3>
            <p>{productInfo.price}</p>
            <p>{productInfo.rating}</p>
            <p>{productInfo.brand === 'Apple' ? 'eres de la secta' : 'normal person'}</p>

            <button className="btn-delete" onClick={() => deleteProduct(productInfo.id)}><img src="./../../assets/dislike-icon.png" alt="dislike" /></button>
        </div>
    )
>>>>>>> 10f1c76d4c87c59a0a60c624f088d1d75febb344
}

export default ProductRow