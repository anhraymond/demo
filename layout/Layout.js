import React from 'react'
import HeaderComponent from './Header'
import FooterComponent from './Footer'

const Header = (props) => {
    return (
        <>
            <HeaderComponent categories={props.categories} />
                <main>
                    {props.children}
                </main>
            <FooterComponent />
        </>
    )
}

export default Header