import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { FaStar } from 'react-icons/fa'

const GalleryStyles = styled.div`
    .gallery__grid {
        display: grid;
        gap: 2rem;
        grid-auto-flow: dense;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
        justify-content: center;
    }
    .gallery__title {
        font-size: 2rem;
        padding: 1rem;
        text-align: center;
    }

    .item {
        min-width: 200px;
        width: 260px;
        margin: auto;
        border: 3px solid var(--gray-1);
        padding: 1rem;
    }
    .item__btn {
        display: flex;
        justify-content: space-between;
        button {
            font-size: 1.125rem;
            background-color: var(--gray-1);
            padding: 0.2rem 0.5rem;
            height: 3rem;
            border-radius: 8px;
            font-weight: bolder;
        }
    }
    .item-img {
        width: 140px;
        height: 140px;
        margin: auto;
        margin-bottom: 1rem;
        img {
            object-fit: contain;
        }
    }
    .item-title {
        font-size: 1rem;
        height: 82px;
        text-align: center;
        margin-bottom: 1rem;
    }
    .item-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .item-rating {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
    }
    .item__btnadd {
        border: 2px solid var(--red-1);
        color: var(--red-1)
    }
    .item-price{
        font-size: 2.5rem;
        color: var(--blue-1);
        text-align: center;
        margin-bottom: 1rem;
    }
    .item__btnbuy {
        border: 2px solid var(--red-1);
        background-color: var(--red-1)!important;
        color: var(--gray-1);
    }
`

const Gallery = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products/category/electronics/')
            .then(({ data }) => {
                setProducts(data)
            })

    }, [])


    return (
        <GalleryStyles>
            <h2 className='gallery__title'>Featured Products</h2>
            <div className='gallery__grid'>

                {products &&
                    products.map(product => {
                        return (
                            <section key={product.id}>
                                <article className='item'>
                                    <div className='item-img'>
                                        <img
                                            src={product.image}
                                            alt=''
                                        />
                                    </div>
                                    <h3 className='item-title'>{product.title}</h3>
                                    <div className='item-info'>
                                        <span>{product.category}</span>
                                        <div className='item-rating'>
                                            <span>{product.rating.rate}</span>
                                            <span><FaStar fill='yellow'/></span>
                                        </div>
                                    </div>
                                    <h3 className='item-price'>${product.price}</h3>
                                    <div className='item__btn'>
                                        <button className='item__btnadd'>Add to card</button>
                                        <button className='item__btnbuy'>Buy now</button>
                                    </div>
                                </article>
                            </section>
                        )
                    })
                }
            </div>
        </GalleryStyles>
    )
}

export default Gallery
