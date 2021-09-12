import React, { useRef, useState } from "react";
import Product from "../Product/Product";
import Style from "./productSlider.module.scss";
import CaroPro from "../CaurosalProduct/CaroPro";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useEffect } from "react";

export default function ProductSlider() {
  const [scrollPosition, setSPosition] = useState(0);
  const scrollRef = useRef();

  const move = (direction) => {
    (direction === "next") & (scrollPosition <= scrollRef.current.scrollWidth)
      ? setSPosition(scrollRef.current.scrollLeft + window.innerWidth)
      : (direction === "previous") & (scrollRef.current.scrollLeft > 0) &&
        setSPosition(scrollRef.current.scrollLeft - window.innerWidth);
  };
  const getdata = () => {
    console.log("Left>>>>>", scrollRef.current.scrollLeft);
  };

  useEffect(() => {
    scrollRef.current.scrollLeft = scrollPosition;
  }, [scrollPosition]);
  return (
    <div className={Style.main}>
      <span>
        Best Seller <a href="f">Shop Now</a>
      </span>
      <div onScroll={getdata} ref={scrollRef} className={Style.slider}>
        <div
          onClick={() => {
            move("previous");
          }}
          className={`${Style.arrow} ${Style.previous}`}
        >
          <ArrowBackIos style={{ fontSize: "30px" }}></ArrowBackIos>
        </div>
        <div
          onClick={() => {
            move("next");
          }}
          className={`${Style.arrow} ${Style.next}`}
        >
          <ArrowForwardIos style={{ fontSize: "30px" }}></ArrowForwardIos>
        </div>

        <div className={Style.item}>
          <CaroPro></CaroPro>
          <CaroPro></CaroPro>
          <CaroPro></CaroPro>
          <CaroPro></CaroPro>
          <CaroPro></CaroPro>
          <CaroPro></CaroPro>
          <CaroPro></CaroPro>
          <CaroPro></CaroPro>
          <CaroPro></CaroPro>
          <CaroPro></CaroPro>
          <CaroPro></CaroPro>
          <CaroPro></CaroPro>
          
        </div>
      </div>
    </div>
  );
}
