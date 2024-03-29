import React from "react";
import { Container } from "reactstrap";
import MainHeader from "../../utils/MainHeader";
import ProgramsList from "../articles/components/ProgramsList";
import DonateBanner from "../../utils/DonateBanner";
import Introduction from "./components/Introduction";
import Header from "../../utils/Header";
import FeaturedStories from "./components/FeaturedStories";

const HomePage = () => {
  return (
    <>
      <Header
        title="HOPE FOR THE NATIONS"
        description="Blessing our communities with love and hope."
        background="../../../images/hero-image.jpg"
        className="jumbo-header"
        overlay={true}
        buttonText="See Our Programs"
      />
      <Container>
        <Introduction />
      </Container>
      <div className="banner-divider">
        <Header
          bannerTitle="What we do"
          description="All of our programs are open to communities in need from the children to the elder members. We believe we can make a difference in the lives of children, parents, grandparents and families, to break the circle of poverty in our community."
          background="../../../images/programs/hunger9.png"
          className="jumbo-header banner"
          overlay={true}
        />
      </div>
      <Container className="home-programs mx-auto">
        <MainHeader headerText="Our programs" />
        <ProgramsList />
      </Container>
      <div className="banner-divider">
        <Header
          bannerTitle="Who we serve"
          description="All of our programs are open to communities in need from the children to the elder members. We believe we can make a difference in the lives of children, parents, grandparents and families, to break the circle of poverty in our community."
          background="../../../images/kidseated.png"
          className="jumbo-header banner"
          overlay={true}
        />
      </div>
      <Container className="home-stories mx-auto">
        <MainHeader headerText="Meet Some Of Our Stories of Hope" />
        <FeaturedStories />
      </Container>
      <DonateBanner />
    </>
  );
};

export default HomePage;
