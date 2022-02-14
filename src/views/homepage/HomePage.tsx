import React from "react";
import { Container } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
import MainHeader from "../../utils/MainHeader";
import ProgramsList from "../articles/ProgramsListPage";
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
          bannerContent="All of our programs are open to communities in need from the children to the elder members. We be;eive we can make a difference in the lives of children, parents, grandparents and families, to break the circle of poverty in our community."
          imgSrc="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
          altText="kids receiving lunch"
        />
      </div>
      <Container>
        <MainHeader headerText="Our programs" />
        <ProgramsList />
      </Container>
    </>
  );
};

export default HomePage;
