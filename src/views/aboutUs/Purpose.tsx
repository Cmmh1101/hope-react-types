import React from "react";
import BannerDivider from "../../utils/BannerDivider";
import DonateInterPages from "../../utils/DonateInterPages";
import FollowUs from "../../utils/FollowUs";

interface Props {}

const Purpose = (props: Props) => {
  return (
    <>
      <div className="banner-divider mb-5">
        <BannerDivider
          className="banner-content"
          bannerText="PURPOSE"
          bannerContent="Who We Are"
          imgSrc="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
          altText="kids receiving lunch"
        />
      </div>
      <DonateInterPages />
      <FollowUs />
    </>
  );
};

export default Purpose;
