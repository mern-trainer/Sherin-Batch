import { Fragment } from "react"
import { FaStar } from "react-icons/fa"

const ProductCard = ({ product, children, cart, handleQuantity }) => {

    const discountPrice = product.price - (product.price * product.discountPercentage / 100)

    return <div key={product.id} style={{width: "15rem"}} className="bg-light p-2">
        <div className="position-relative">   
            <img src={product.thumbnail} alt={product.title} style={{ width: "15rem" }} />
            <div className="position-absolute top-0 end-0 text-success">{product.discountPercentage}%</div>
        </div>
        <div>
            <h5 className="text-truncate">{product.title}</h5>
            {
                cart ? <Fragment>
                    <div>
                        <div className="d-flex justify-content-between">
                            <div>Price:</div>
                            <div>${discountPrice.toFixed(2)}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Total:</div>
                            <div>{product.quantity}x${discountPrice.toFixed(2)} = ${(product.quantity * discountPrice).toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <button className="w-25 h-25 bg-success border-0 text-light fs-4" onClick={() => handleQuantity("-", product.id)}>-</button>
                        <div>{product.quantity}</div>
                        <button className="w-25 h-25 bg-success border-0 text-light fs-4" onClick={() => handleQuantity("+", product.id)}>+</button>
                    </div>
                </Fragment> : <div className="d-flex justify-content-between align-items-center">
                    <div className={`${product.rating <2 ? "text-danger" : product.rating >= 2 && product.rating < 4 ? "text-warning" : "text-success"} d-flex align-items-center gap-1`}><FaStar /> {product.rating}</div>
                    <div className="d-flex flex-column">
                        <s className="text-secondary">${product.price}</s>
                        <b>${discountPrice.toFixed(2)}</b>
                    </div>
                </div>
            }
            {children}
        </div>
    </div>
}

export default ProductCard