import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { useCart } from '../Providers/CartProvider'

const CartPage = () => {

    const { cartList, setCartList } = useCart()
    const [grandTotalAmt, setGrandTotalAmt] = useState(0)

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

    const getGrandTotal = () => {
        const res = cartList.reduce((sum, product) => {
            const discountPrice = product.price - (product.price * product.discountPercentage / 100)
            return sum + (discountPrice * product.quantity)
        }, 0)
        setGrandTotalAmt(res.toFixed(2))
    }

    useEffect(() => {
        getGrandTotal()
    }, [cartList])

    const removeFromCart = (removeId) => {
        const response = cartList.filter(product => product.id !== removeId)
        setCartList(response)
    }

    return (
        <div className="my-5">
            <h4 className="text-center">Cart</h4>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
                {
                    cartList.map(product => {

                        return <ProductCard key={product.id} product={product} cart={true} handleQuantity={handleQuantity}>
                            <button onClick={() => removeFromCart(product.id)} className="btn btn-danger rounded mt-2 w-100">Remove From Cart</button>
                        </ProductCard>
                    })
                }
            </div>
            <div className="text-center mt-5 fs-2">Grand Total: ${grandTotalAmt}</div>
        </div>
    )
}

export default CartPage
