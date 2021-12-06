import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'

const MainPlpStyles = styled.div`
    width: 100%;
    margin-bottom: 8rem;
    .plp-banner {
        width: 100%;
    }
    .plp-gallery {
        width: 70%;
        margin: auto;
    }
`

const Plp = () => {

    return (
        <MainPlpStyles>
            <div className='plp-banner'>
                <Banner />
            </div>
            <div className='plp-gallery'>
                <Gallery />
            </div>
        </MainPlpStyles>
    )
}

export default Plp
