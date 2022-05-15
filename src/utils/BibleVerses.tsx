import React from "react";
import verses from "../../src/bibleVerses";

// interface Verse {
//   reference?: string;
//   verse?: string;
// }

const BibleVerses = () => {
  //   const [newVerse, setNewVerse] = useState<Verse>();
  const totalVerses = verses.length;
  const activeVerses = verses[Math.floor(Math.random() * totalVerses)];
  console.log(activeVerses);

  //   useEffect(() => {
  //     const totalVerses = verses.length;
  //     const activeVerses = verses[Math.floor(Math.random() * totalVerses)];
  //     setNewVerse(activeVerses);
  //   }, []);

  return (
    <div>
      <p>{activeVerses.verse}</p>
      <span>{activeVerses.reference}</span>
    </div>
  );
};

export default BibleVerses;
