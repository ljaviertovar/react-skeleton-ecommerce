import React from 'react'
import styled from 'styled-components'

const GalleryStyles = styled.div`
.gallery__grid {
    margin: 1.5rem 0;
}
.gallery__title {
    font-size: 2rem;
    padding: 1rem;
    text-align: center;
}
.gallery__section {
min-width: 200px;
width: 260px;
}
`

const Gallery = () => {
    return (
        <GalleryStyles>
            <h2 className='gallery__title'>Featured Products</h2>
            <div className='gallery__grid'>
                <section className='gallery__section'>
                    <article>
                        <div>
                            <img
                                src=''
                                alt=''
                            />
                        </div>
                        <h3>title</h3>
                        <h4>category</h4>
                        <h3>price</h3>
                        <div>
                            <button>Add to card</button>
                            <button>Buy</button>
                        </div>
                    </article>
                </section>
            </div>
        </GalleryStyles>
    )
}

export default Gallery
