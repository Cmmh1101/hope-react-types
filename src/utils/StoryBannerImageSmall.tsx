import React from "react";

interface Props {
  image: string | undefined;
  altText: string | undefined;
}

const StoryBannerImageSmall = ({ image, altText }: Props) => {
  return (
    <div className="col-md-4 px-0 custom-shadow" style={{ height: "350px" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectPosition: "center bottom",
        }}
        src={image}
        alt={altText}
      />
    </div>
  );
};

export default StoryBannerImageSmall;
