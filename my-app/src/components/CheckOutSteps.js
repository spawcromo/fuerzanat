import React from 'react'

export const CheckOutSteps = (props) => {
    return (
        <div className="checkout-steps">

            <div className={props.step1 ? 'active': ''}>Ingresar</div>
            <div className={props.step2 ? 'active': ''}>Envío</div>
            <div className={props.step3 ? 'active': ''}>Pago</div>
            <div className={props.step4 ? 'active': ''}>Place Order</div>


            
        </div>
    )
}
