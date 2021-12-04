import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.div`
    width: 100%;
    .menu {
        width: 90%;
        margin: auto;
    }
`

const Header = () => {
    return (
        <HeaderStyles>
            <div className='menu'>
                menu
            </div>
        </HeaderStyles>
    )
}

export default Header
