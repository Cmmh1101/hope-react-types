import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1 className="text-danger">App using reactstrap</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
