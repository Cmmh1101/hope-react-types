import React from "react";
import { IArticleData } from "../../../models/IArticlesData";
import articlesData from "../../../articlesData";
import {
  Button,
  Card,
  CardDeck,
  CardGroup,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const ProgramsList = () => {
  return (
    <div>
      <Row>
        <Col xs={12} className="d-flex flex-wrap">
          {articlesData.map((article) => {
            return (
              <Col
                xs={12}
                md={4}
                key={article.title}
                className="d-flex justify-content-center align-items-center flex-column my-3"
              >
                <img src={article.icon} alt={article.title} className="my-3" />
                <h4 className="my-3">{article.title}</h4>
                <p>{article.content.toString().substring(0, 100)}...</p>
                <Button color="primary" className="my-3">
                  Learn More
                </Button>
              </Col>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default ProgramsList;
