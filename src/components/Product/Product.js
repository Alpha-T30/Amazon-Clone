import React from "react";
import Style from "./product.module.scss";

export default function Product({forRow}) {
  return (
    <div className={!forRow?Style.product : `${Style.product} ${Style.forRow}`}>
      <div className={Style.top}>
          <span>Computers & Accessories</span>
          
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
        alt=""
      />

      <a   href="k">Show More</a>
    </div>
  );
}
