import React from "react";
import { Container, Jumbotron } from "reactstrap";

interface Props {
  background: string;
  title: string;
  titleWIthEffect?: string;
  description: string;
  buttonText?: string;
  className?: string;
}

const Header = ({
  background,
  title,
  titleWIthEffect,
  buttonText,
  description,
  className,
}: Props) => {
  return (
    <Jumbotron
      fluid
      style={{ backgroundImage: `url(${background})` }}
      className={className}
    >
      <Container fluid>
        <span>{titleWIthEffect}</span>
        <h1 className="display-3">{title}</h1>
        <p className="lead">{description}</p>
        <button>{buttonText}</button>
      </Container>
    </Jumbotron>
  );
};

export default Header;
