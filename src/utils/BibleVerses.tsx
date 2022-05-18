import { Col } from "reactstrap";
import verses from "../../src/bibleVerses";

const BibleVerses = () => {
  const totalVerses = verses.length;
  const activeVerses = verses[Math.floor(Math.random() * totalVerses)];
  console.log(activeVerses);

  return (
    <Col xs={12} className="donate-verse-img mb-5 mb-md-0">
      <Col xs={12} className="verse order-lg-2">
        <p>{activeVerses.verse}</p>
        <span>{activeVerses.reference}</span>
      </Col>
      {/* <Col
        xs={12}
        lg={2}
        className="d-flex order-lg-1 align-items-center justify-content-center"
      >
        <img
          src="../../images/bibleSun.png"
          alt="bible"
          className="bible-image"
        />
      </Col> */}
    </Col>
  );
};

export default BibleVerses;
