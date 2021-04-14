import React from 'react'

export const Nav = () => {
    return (
        <div className="nav">
            
            <img id="logo" alt="logo" className='animate__animated animate__backInDown' src="../img/logo.png" />

            <ul className="animate__animated animate__backInRight animate__delay-2s">
                <li><a href="#"><img src="../img/user.png" /></a></li>
                <li><a href="#"><img src="../img/cart.png"/></a></li>
            </ul>




        </div>
    )
}
