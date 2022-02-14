import React, { useState } from "react";
import { IArticleData } from "../../models/IArticlesData";
import articlesData from "../../../articlesData";
import BannerDivider from "../../utils/BannerDivider";

const ProgramsListPage = () => {
  const [articles] = useState<IArticleData[]>();
  return (
    <div>
      <BannerDivider
        bannerText="Programs list page"
        imgSrc="https://media.istockphoto.com/photos/team-teamwork-business-join-hand-together-concept-power-of-volunteer-picture-id1017183652?k=20&m=1017183652&s=612x612&w=0&h=G3MUs6fliJ_R_Tj2B_G4mGH1RvWdVjgXnhzokGuaFxI="
        altText="team huddle"
      />
      <ProgramsListPage />
    </div>
  );
};

export default ProgramsListPage;
