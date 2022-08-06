import React from "react";
import { Container, Jumbotron } from "reactstrap";

interface Props {
  background: string;
  title?: string;
  titleWIthEffect?: string;
  description: string;
  buttonText?: string;
  className?: string;
  bannerTitle?: string;
  overlay: boolean;
}

const Header = ({
  background,
  title,
  titleWIthEffect,
  buttonText,
  description,
  className,
  bannerTitle,
  overlay,
}: Props) => {
  return (
    <Jumbotron
      fluid
      style={{ backgroundImage: `url(${background})` }}
      className={`${className} p-5`}
    >
      <Container
        fluid
        className={title ? "flex-end-container" : "header-container"}
      >
        {titleWIthEffect && <span>{titleWIthEffect}</span>}
        {title && <h1 className="display-3">{title}</h1>}
        {bannerTitle && <h3>{bannerTitle}</h3>}
        {description && <p className="lead">{description}</p>}
        {buttonText && <button>{buttonText}</button>}
      </Container>
      {overlay && <div className={title ? "hero-overlay" : "banner-overlay"} />}
    </Jumbotron>
  );
};

export default Header;
