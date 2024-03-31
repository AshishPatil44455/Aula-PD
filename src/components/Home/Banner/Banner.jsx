// import React from "react";

// import "./Banner.scss";
// import BannerImg from "../../../assets/banner-img.png";

// const Banner = () => {
//     return (
//         <div className="hero-banner">
//             <div className="content">
//                 <div className="text-content">
//                     <h1>SALES</h1>
//                     <p>
//                         Convallis interdum purus adipiscing dis parturient
//                         posuere ac a quam a eleifend montes parturient posuere
//                         curae tempor
//                     </p>
//                     <div className="ctas">
//                         <div className="banner-cta">Read More</div>
//                         <div className="banner-cta v2">Shop Now</div>
//                     </div>
//                 </div>
//                 <img className="banner-img" src={BannerImg} />
//             </div>
//         </div>
//     );
// };

// export default Banner;

import React, { useState, useEffect } from "react";
import "./Banner.scss";

const Banner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    {
      image: require("../../../assets/banner-img1.png"),
      text: "Enhance Your Gaming Experience",
    },
    {
      image: require("../../../assets/banner-img2.png"),
      text: "Comfortable With Bluetooth  ",
    },
    // Add more banners here as needed
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentBannerIndex + 1) % banners.length;
      setCurrentBannerIndex(nextIndex);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentBannerIndex, banners.length]);

  const changeBanner = (index) => {
    setCurrentBannerIndex(index);
  };

  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Sales</h1>
          <p>{banners[currentBannerIndex].text}</p>
          <div className="ctas">
            <div
              className="banner-cta"
              onClick={() =>
                changeBanner((currentBannerIndex + 1) % banners.length)
              }
            >
              Read More
            </div>
            <div
              className="banner-cta v2"
              onClick={() =>
                changeBanner((currentBannerIndex + 1) % banners.length)
              }
            >
              Shop Now
            </div>
          </div>
        </div>
        <img
          className="banner-img"
          src={banners[currentBannerIndex].image}
          alt={`Banner ${currentBannerIndex}`}
        />
      </div>
    </div>
  );
};

export default Banner;
