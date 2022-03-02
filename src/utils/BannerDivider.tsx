import React from "react";
import { Col, Container, Row } from "reactstrap";
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
      <Container>
        <Row>
          <Col xs={12} className="mx-auto">
            <MainHeader
              headerText={bannerText}
              subText={bannerContent}
              customClass="banner-divider-text-color"
            />
          </Col>
        </Row>
      </Container>

      {/* <MainHeader
        headerText={bannerText}
        subText={bannerContent}
        customClass="banner-divider-text-color"
      /> */}
      <div className="banner-image-container">
        <img className="banner-image" src={imgSrc} alt={altText} />
      </div>
      <div className="banner-image-overlay" />
    </>
  );
};

export default BannerDivider;
