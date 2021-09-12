import React from 'react'
import Style from './home.module.scss'
import Header from '../../components/NavBar/header';
import All from '../../components/LineAfterNavBar/All';
import Slider from '../../components/Slider/Slider';
import AllProduct from '../../components/AllProducts/AllProducts';
export default function Home() {
    return (
        <div className={Style.home}>
        <div className={Style.upperSection}>
          <Header></Header>
          <All></All>
          <Slider></Slider>
        </div>
        <div className={Style.lowerSection}>
          <AllProduct></AllProduct>
        </div>
      </div>
    )
}
