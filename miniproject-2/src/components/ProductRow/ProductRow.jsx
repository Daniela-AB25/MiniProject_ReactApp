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
}

export default ProductRow