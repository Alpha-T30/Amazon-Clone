import React from "react";
import Style from "./all.module.css";
import ReorderIcon from '@material-ui/icons/Reorder';

export default function All() {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.left}>
          <div className={Style.all}>
              <ReorderIcon />
              <div className={Style.alltext}>All</div></div>
          <span className={Style.items}> <p className={Style.txt}>Today's Deal</p> </span>
          <span className={Style.items}> <p className={Style.txt}>Customer Service</p> </span>
          <span className={Style.items}> <p className={Style.txt}>Gift Cards</p> </span>
          <span className={Style.items}> <p className={Style.txt}>Registry</p> </span>
          <span className={Style.items}> <p className={Style.txt}>Sell</p> </span>
   
        </div>
        <div className={Style.right}>
           <span className={Style.res}>Amazon's Response to</span>
           <span className={Style.covid}>Covid-19</span>
            
        </div>
      </div>
    </>
  );
}
