import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

const SingleProductView = () => {

    const { product_id } = useParams()
    const [product, setProduct] = useState(null)
    const [currentImage, setCurrentImage] = useState("")

    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`https://dummyjson.com/products/${product_id}`)
            setProduct(data)
            setCurrentImage(data.images[0])
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [product_id])

    if (!product_id) {
        return <Navigate to={"/products"}/>       
    }

    return (
        <Fragment>
            {
                product && <div className='d-flex gap-2 mt-3'>
                    <div className='w-100 d-flex'>
                        <div className='d-flex flex-column'>
                            {
                                product.images.map((image, index) => {
                                    return <img key={index} src={image} alt='others' width={60} style={{cursor: "pointer"}} onMouseEnter={() => setCurrentImage(image)}></img>
                                })
                            }
                        </div>
                        <img src={currentImage} alt={product.title} className='w-100'/>
                    </div>
                    <div className='w-100'>
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <div className='d-flex gap-2'>
                            <s className='text-secondary'>${product.price}</s>
                            <b className='text-success'>${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</b>
                        </div>
                    </div>
                </div>
            }
        </Fragment>  
    )
}

export default SingleProductView
