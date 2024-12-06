import { useCart } from "../Providers/CartProvider"
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"
import { api } from "../axios"
import NavBar from "./Nav"

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

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <div className="">
        <NavBar />
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
    </div>
}

export default ProductList