import React from 'react'
import "./allproduct.css"
import ProductRow from '../ProductRow/productrow'
import Product from '../Product/Product'
import ProductSlider from '../ProductCarousal/ProductSlider';
import TDCarousal from '../3DCarousal/3DCarousal';
export default function AllProduct({position}) {
    return (
         <div className="test">
        
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
               
                < ProductRow></ProductRow>
                < TDCarousal></TDCarousal>
                < TDCarousal></TDCarousal>
               
                
         </div>
    )
}
