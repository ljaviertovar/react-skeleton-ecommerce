import React from 'react'
import styled from 'styled-components'

import banner from '../assets/banner.jpg'

const BannerStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const Banner = () => {
    return (
        <BannerStyles>
            <img
                src= {banner}
                alt = 'banner'
            />
        </BannerStyles>
    )
}

export default Banner
