import React from "react";
import MainHeader from "./MainHeader";

interface Props {
  className?: string;
  bannerText: string;
  bannerContent?: string;
  imgSrc: string;
  altText: string;
}

const BannerDivider = ({
  bannerText,
  bannerContent,
  imgSrc,
  altText,
}: Props) => {
  return (
    <>
      <MainHeader
        headerText={bannerText}
        subText={bannerContent}
        customClass="banner-divider-text-color"
      />
      <div className="banner-image-container">
        <img className="banner-image" src={imgSrc} alt={altText} />
      </div>
      <div className="banner-image-overlay" />
    </>
  );
};

export default BannerDivider;
