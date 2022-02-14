import React from "react";
import { IArticleData } from "../../../models/IArticlesData";
import articlesData from "../../../../articlesData";
import articles from "../../../../articlesData";

const ProgramsList = () => {
  return (
    <div>
      {articles.map((art) => {
        <h1 key={art.name}>{art.title}</h1>;
      })}
    </div>
  );
};

export default ProgramsList;
