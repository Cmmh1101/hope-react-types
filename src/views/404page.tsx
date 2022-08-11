import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const NotFoundPage = () => {
  return (
    <Container className="not-found-page">
      <Row>
        <Col xs={12} className="not-found-img">
          <img src="../../../images/not-found.svg" alt="not found" />
        </Col>
        <Col xs={12} className="not-found-text">
          <h4>Page not found</h4>
          <Link to="/">Home</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
