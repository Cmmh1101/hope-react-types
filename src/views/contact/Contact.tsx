import React from "react";
import { Col, Container, Row } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
import DonateInterPages from "../../utils/DonateInterPages";
import FollowUs from "../../utils/FollowUs";
import MainHeader from "../../utils/MainHeader";
import GoogleMap from "./components/GoogleMap";

interface Props {}

const Contact = (props: Props) => {
  return (
    <>
      <div className="banner-divider inner-page-hero mb-5">
        <BannerDivider
          className="banner-content"
          bannerText="CONTACT US"
          bannerContent=""
          imgSrc="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
          altText="kids receiving lunch"
        />
      </div>
      <Container>
        <Row>
          <MainHeader headerText="Contact Details" />
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center flex-wrap"
          >
            <Col xs={12} md={6}>
              <GoogleMap />
            </Col>
            <Col xs={12} md={6}>
              <h6>Hours</h6>
              <p>9 am to 5 pm Monday - Friday</p>
              <h6>Locations</h6>
              <p>Memphis, TN - Caracas, Venezuela.</p>
              <h6>Contact us</h6>
              <p>
                Phone: <a href="tel:+1555-555-1212">+1(901)555-5555</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:support@example.com, subject=Mail from our Website">
                  Send Email
                </a>
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
      <DonateInterPages />
      <FollowUs />
    </>
  );
};

export default Contact;
