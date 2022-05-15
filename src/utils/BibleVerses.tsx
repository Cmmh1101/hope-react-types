import React from "react";
import verses from "../../src/bibleVerses";

interface Props {}

const BibleVerses = (props: Props) => {
  return (
    <div>
      {verses.map((ver, i) => {
        return (
          <div key={i}>
            <p>{ver.verse}</p>
            <span>{ver.reference}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BibleVerses;
