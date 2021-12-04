import React from 'react'
import styled from 'styled-components'
import Filters from '../components/Filters'
import Gallery from '../components/Gallery'

const MainPlpStyles = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 2rem;
    .plp-filters {
        flex: 2;
    }
    .plp-gallery {
        flex: 6;
    }
`

const Plp = () => {
    return (
        <MainPlpStyles>
        <div className='plp-filters'>
            <Filters />
        </div>
        <div className='plp-gallery'>
            <Gallery />
        </div>
        </MainPlpStyles>
    )
}

export default Plp
