import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/test.png";

const Banner = () => {
    return (
      <div className="hero-banner">
        <div className="content">
          <div className="text-content">
            <h1>SALES</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus molestiae ratione reprehenderit nemo provident
              blanditiis fugit veniam odio sit, voluptates quod placeat hic
              fuga, debitis est, magnam aperiam iure? Hic.
            </p>
            <div className="ctas">
              <div className="banner-cta">Read More</div>
              <div className="banner-cta v2">Shop Now</div>
            </div>
          </div>
          <img className="banner-img" src={BannerImg} alt="" />
        </div>
      </div>
    );
};

export default Banner;
