import { Col } from "reactstrap";
import verses from "../../src/bibleVerses";

const BibleVerses = () => {
  const totalVerses = verses.length;
  const activeVerses = verses[Math.floor(Math.random() * totalVerses)];
  console.log(activeVerses);

  return (
    <Col xs={12} md={10} className="donate-verse-img mb-5 mb-md-0">
      <Col xs={2}>
        <img
          src="../../images/bibleSun.png"
          alt="bible"
          className="bible-image"
        />
      </Col>

      <Col xs={10} className="verse">
        <p>{activeVerses.verse}</p>
        <span>{activeVerses.reference}</span>
      </Col>
    </Col>
  );
};

export default BibleVerses;
