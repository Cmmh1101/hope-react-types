import React from "react";
import BannerDivider from "../../utils/BannerDivider";

interface Props {}

const Contact = (props: Props) => {
  return (
    <>
      <div className="banner-divider mb-5">
        <BannerDivider
          className="banner-content"
          bannerText="CONTACT US"
          bannerContent=""
          imgSrc="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
          altText="kids receiving lunch"
        />
      </div>
    </>
  );
};

export default Contact;
