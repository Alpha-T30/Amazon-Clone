import React from 'react'; 
import Style from "./productrow.module.scss"
import Product from '../Product/Product';

export default function ProductRow() {
    return (
        <div className={Style.row}>
           
            < Product forRow={true}></Product>
            < Product forRow={true}></Product>
            
             
        </div>
    )
}
