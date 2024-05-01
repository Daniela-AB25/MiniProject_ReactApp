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
}

export default ProductRow