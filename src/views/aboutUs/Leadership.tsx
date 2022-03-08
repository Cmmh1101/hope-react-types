import React from "react";
import { Col, Container, Row } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
import MainHeader from "../../utils/MainHeader";

interface Props {}

const Leadership = (props: Props) => {
  return (
    <>
      <div className="banner-divider mb-5">
        <BannerDivider
          className="banner-content"
          bannerText="LEADERSHIP"
          bannerContent="Who We Are"
          imgSrc="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
          altText="kids receiving lunch"
        />
      </div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center mb-5">
          <Col xs={12}>
            <MainHeader headerText="Leadership" />
          </Col>
          <Col
            xs={12}
            md={6}
            className="about-img-container mb-5 d-flex justify-content-center align-items-center"
          >
            <img
              src="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
              alt="kids eating placeholder text"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className="mb-5 d-flex justify-content-center align-items-center"
          >
            <p>
              Aqui va a ir una descripcion de la fundadora, familia, historia y
              que incentivo a formar la orgnizacion Aqui va a ir una descripcion
              de la fundadora, familia, historia y que incentivo a formar la
              orgnizacion Aqui va a ir una descripcion de la fundadora, familia,
              historia y que incentivo a formar la orgnizacion.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Leadership;
