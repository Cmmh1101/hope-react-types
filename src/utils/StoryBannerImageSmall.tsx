import React from "react";

interface Props {
  image: string | undefined;
  altText: string | undefined;
}

const StoryBannerImageSmall = ({ image, altText }: Props) => {
  return (
    // <div
    //   className="col-12 col-md-4 px-0 custom-shadow"
    //   style={{ width: '100%', height: '500px' }}
    // >
      <img
      className="story-banner-small-img"
        style={{
          width: "100%",
          height: "300px",
          objectPosition: "center bottom",
        }}
        src={image}
        alt={altText}
      />
    // </div>
  );
};

export default StoryBannerImageSmall;
