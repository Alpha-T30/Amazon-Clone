import React from "react";
import Style from "./Header.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { useState } from "react";

export default function Header() {
  const [focused,setFocused] = useState(false)
  return (
    <div className={Style.header}>
      <img
        src= "./images/amazonLogo.png"
        alt=""
        className={Style.logo}
      />
      <div className={Style.deliveredto}>
        <LocationOnOutlinedIcon />
        <div className={Style.deliver}>
          <span className={Style.to}>Deliver to</span>
          <span className={Style.bd}>Bangladesh</span>
        </div>
      </div>
      <div className={focused?`${Style.searchbar} ${Style.searchfocus}`:Style.searchbar}>
        <div className={Style.dropdown}>
          <span className={Style.all}>All</span>
          <ArrowDropDownIcon
            style={{
              fontSize: "20px",
            }}
          />
        </div>

        <input onBlur={()=>{setFocused(false)}} onFocus={()=>{setFocused(true)}} className={Style.inp} type="text" />
        <div className={Style.searchicon}>
          <SearchIcon
            style={{
              fontSize: "30px",

              color: "black",
            }}
          ></SearchIcon>
        </div>
      </div>
      <div className={Style.language}>
        {/* <span className={Style.flag}> 🏴‍☠️ </span> */}
        <img className={Style.flagimg} src="./images/usaflag.jpg" alt="" />
        <ArrowDropDownIcon style={{
          marginLeft:"-2px" 
          , marginTop:"7px",
          fontSize:"20px"
        }}></ArrowDropDownIcon>

      </div>
      <div className={Style.signin}>
          <span className={Style.sign}>Hello,Sign in</span>
          <div className={Style.listdiv}>
            <span className={Style.list}>
              Account & Lists
            
            </span>
            <ArrowDropDownIcon  style={{
          marginLeft:"-7px" 
          , marginTop:"4px",
          fontSize:"16px",
          color:"#ececec"
        }}></ArrowDropDownIcon>
          </div>

      </div>
      <div className={Style.signin}>
          <span className={Style.sign}>
            Returns
          </span>
          <span className={Style.list}>
             & Orders
          </span>
      </div>
      <div className={Style.cartdiv}>
      <div className={Style.cartcounter}>3</div>
        <img className={Style.cart} src="./images/cart.png" alt="" />
        
        <span className={Style.cartname}>Cart</span>

      </div>
    </div>
  );
}
