import React from "react";
import { Col } from "reactstrap";

interface Props {
  image: string | undefined;
  altText: string | undefined;
}

const StoryBannerImageSmall = ({ image, altText }: Props) => {
  return (
    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center flex-wrap p-0 mt-3 mt-md-0">
<img
      className="custom-shadow"
        style={{
          width: "98%",
          height: "500px",
          objectPosition: "center top",
          objectFit: 'cover',
          borderRadius: '5px'
        }}
        src={image}
        alt={altText}
      />
    </Col>
  );
};

export default StoryBannerImageSmall;
