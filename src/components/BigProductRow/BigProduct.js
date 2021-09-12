import React from 'react'
import CaroPro from '../CaurosalProduct/CaroPro';
import "./Bigproduct.scss"
export default function BigProduct() {
    return (
        <div className='big'>
            <h2>Best Man's Product</h2>
            <div className="products">
                <CaroPro></CaroPro>
                <CaroPro></CaroPro>
                <CaroPro></CaroPro>
                <CaroPro></CaroPro>
            </div>
             
        </div>
    )
}
