import { FaStar } from "react-icons/fa"
import { products } from "../Constants/todoList"
import { useCart } from "../Providers/CartProvider"

const ProductList = () => {

    const { cartList, setCartList } = useCart()

    const addToCart = (product) => {
        const index = cartList.findIndex((item) => item.id === product.id)
        if (index === -1) {
            product.quantity = 1
            setCartList([...cartList, product])
        } else {
            const res = cartList.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            setCartList(res)
        }
    }

    const removeFromCart = (removeId) => {
        const response = cartList.filter(product => product.id !== removeId)
        setCartList(response)
    }

    const handleQuantity = (operator, id) => {
        const product = cartList.find(item => item.id === id)
        if (product.quantity === 1 && operator === "-") {
            return removeFromCart(id)
        }
        const res = cartList.map(item => {
            if (item.id === id) {
                return { ...item, quantity: operator === "+" ? item.quantity + 1 : item.quantity - 1 }
            }
            return item
        })
        setCartList(res)
    }

    return <div className="">
        <div className="d-flex justify-content-center gap-2 flex-wrap mt-4">
            {
                products.map(product => {

                    const discountPrice = product.price - (product.price * product.discountPercentage / 100)

                    return <div key={product.id} style={{width: "15rem"}} className="bg-light p-2">
                        <div className="position-relative">   
                            <img src={product.thumbnail} alt={product.title} style={{ width: "15rem" }} />
                            <div className="position-absolute top-0 end-0 text-success">{product.discountPercentage}%</div>
                        </div>
                        <div>
                            <h5 className="text-truncate">{product.title}</h5>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className={`${product.rating <2 ? "text-danger" : product.rating >= 2 && product.rating < 4 ? "text-warning" : "text-success"} d-flex align-items-center gap-1`}><FaStar /> {product.rating}</div>
                                <div className="d-flex flex-column">
                                    <s className="text-secondary">${product.price}</s>
                                    <b>${discountPrice.toFixed(2)}</b>
                                </div>
                            </div>
                            <button onClick={() => addToCart(product)} className="btn mt-2 btn-success rounded w-100">Add To Cart</button>
                        </div>
                    </div>
                })
            }
        </div>
        <div className="my-5">
            <h4 className="text-center">Cart</h4>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
                {
                    cartList.map(product => {
                        return <div key={product.id} style={{width: "15rem"}} className="bg-light p-2">
                            <div>   
                                <img src={product.thumbnail} alt={product.title} style={{width: "15rem"}}/>
                            </div>
                            <div>
                                <h5 className="text-truncate">{product.title}</h5>
                                <div>${product.price}</div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="w-25 h-25 bg-success border-0 text-light fs-4" onClick={() => handleQuantity("-", product.id)}>-</button>
                                    <div>{product.quantity}</div>
                                    <button className="w-25 h-25 bg-success border-0 text-light fs-4" onClick={() => handleQuantity("+", product.id)}>+</button>
                                </div>
                                <button onClick={() => removeFromCart(product.id)} className="btn btn-danger rounded mt-2 w-100">Remove From Cart</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default ProductList