import React from "react";
import { Container } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
import Header from "./components/Header";
import Introduction from "./components/Introduction";

interface Props {}

const HomePage = (props: Props) => {
  const bannerStyles = {};
  return (
    <>
      <Header />
      <Container>
        <Introduction />
      </Container>
      <div className="banner-divider">
        <BannerDivider
          className="banner-content"
          bannerText="food for the hungry kids program"
          bannerContent="banner content"
          imgSrc="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
          altText="kids receiving lunch"
        />
      </div>
    </>
  );
};

export default HomePage;
