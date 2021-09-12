import React from "react";
import { Carousel } from "3d-react-carousal";
import Product from "../Product/Product";

import "./d3.scss"
import ProductRow from '../ProductRow/productrow';
import BigProduct from "../BigProductRow/BigProduct";

export default function TDCarousal() {
  let slides = [
     <BigProduct></BigProduct>,
     <BigProduct></BigProduct>,
     <BigProduct></BigProduct>,
  ];
  return (
    <div className="d3">
      <Carousel slides={slides}   interval={1000} />
    </div>
  );
}
