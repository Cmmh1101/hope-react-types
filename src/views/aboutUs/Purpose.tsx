import React from "react";
import { Col, Container, Row } from "reactstrap";
import DonateBanner from "../../utils/DonateBanner";
import FollowUs from "../../utils/FollowUs";
import Header from "../../utils/Header";
import HighlightMessage from "../../utils/HighlightMessage";
import MainHeader from "../../utils/MainHeader";

const Purpose = () => {
  return (
    <>
      <Header
        titleWIthEffect="who we are"
        bannerTitle="Purpose"
        background="../../../../images/voluntarios.jpg"
        className="jumbo-header text-center"
        overlay={true}
      />
      <Container>
        <Row>
          <MainHeader headerText="Mission" />
          <Col xs={12} tag="article">
            <div className="col-xs-12 ml-md-3 mb-5 float-right">
              <img
                style={{ width: "100%" }}
                className="custom-shadow"
                src="../../../../images/programs/entrepreneurship.png"
                alt=""
              />
            </div>
            <p>
              Hope for the Nations is a non-profit, Christian organization. We
              count on a ministry of ambassadors that serves children, older
              people, and families in Venezuela’s most impoverished area. As we
              help them, we bring the gospel nurturing not only with physical
              needs but we spiritual needs as well.
            </p>
            <p>
              Our purpose is to transform lives and communities through the Word
              of God. We created a different sustainable program to allow them
              to participate and grow as they become independent. Our mission is
              to serve disadvantaged communities while we show the love of God.
              We began our work formerly in 2018. In 2020 we started with a
              series of sustainable programs to bring solutions while bringing
              God’s Hope.
            </p>
            <p>
              Our organization started catering to the elderly; we provided
              meals for the homeless and families with a lack of food; we also
              provided clothes and shoes. In Venezuela’s rural zones, we are
              developing and expanding sustainable programs such as community
              gardens, chicken coops, and fish farming to teach, train, and help
              the community be sustainable.
            </p>
          </Col>
          <HighlightMessage
            text="We plant the seed in them, and we hope this seed flourish and give back their fruits. All these projects aim to help people be sustainable because we do not want to treat the problem; we are looking for long-term solutions.
"
          />
        </Row>
      </Container>
      <DonateBanner />
      <FollowUs />
    </>
  );
};

export default Purpose;
