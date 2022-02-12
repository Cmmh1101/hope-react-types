import React from "react";
import { UncontrolledCarousel } from "reactstrap";

interface Props {}

const Header = (props: Props) => {
  return (
    <>
      <UncontrolledCarousel
        items={[
          {
            altText: "this is a header",
            key: 1,
            src: "https://picsum.photos/id/123/1200/600",
          },
          {
            altText: "this is a header",
            key: 2,
            src: "https://picsum.photos/id/456/1200/600",
          },
          {
            altText: "Slide 3",
            key: 3,
            src: "https://picsum.photos/id/678/1200/600",
          },
        ]}
      />
    </>
  );
};

export default Header;
