import { useCart } from "../Providers/CartProvider"
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"
import { api } from "../axios"

const ProductList = () => {

    const { cartList, setCartList } = useCart()
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(-1)
    const [isLoading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const limit = 30
            const skip = (currentPage - 1) * limit
            const { data: result } = await api.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            if (totalPage === -1) {
                setTotalPage(Math.ceil(result.total / limit))
            }
            setProducts(result.products)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [currentPage])

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

    const getGrandTotal = () => {
        const res = cartList.reduce((sum, product) => {
            const discountPrice = product.price - (product.price * product.discountPercentage / 100)
            return sum + (discountPrice * product.quantity)
        }, 0)
        return res.toFixed(2)
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

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <div className="">
        <div className="d-flex justify-content-center gap-2 flex-wrap mt-4">
            {
                products.map(product => {

                    return <ProductCard product={product} key={product.id}>
                        <button onClick={() => addToCart(product)} className="btn mt-2 btn-success rounded w-100">Add To Cart</button>
                    </ProductCard>
                })
            }
        </div>
        <div className="d-flex gap-4 justify-content-center mt-5 mb-3">
            {
                totalPage > -1 && new Array(totalPage).fill(0).map((_, index) => index + 1).map(page => {
                    return <button key={page} onClick={() => setCurrentPage(page)} className="btn d-flex justify-content-center align-items-center btn-success rounded-circle" style={{width: "30px", height: "30px"}}>{page}</button>
                })
            }
        </div>
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
            <div className="text-center mt-5 fs-2">Grand Total: ${getGrandTotal()}</div>
        </div>
    </div>
}

export default ProductList