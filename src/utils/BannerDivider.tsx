import React from "react";
import MainHeader from "./MainHeader";

interface Props {
  className?: string;
  bannerText: string;
  bannerContent: string;
}

const BannerDivider = ({ bannerText, className, bannerContent }: Props) => {
  return (
    <div className={className}>
      <MainHeader
        headerText={bannerText}
        className=""
        subText={bannerContent}
      />
    </div>
  );
};

export default BannerDivider;
