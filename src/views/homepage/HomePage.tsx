import React from "react";
import { Container } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
import Header from "./components/Header";
import Introduction from "./components/Introduction";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <Header />
      <Container>
        <Introduction />
      </Container>
      <BannerDivider
        bannerText="food for the hungry kids program"
        className="banner-divider"
        bannerContent="banner content"
      />
    </>
  );
};

export default HomePage;
