import React from "react";
import BannerDivider from "../../utils/BannerDivider";
import ProgramsList from "./components/ProgramsList";

const ProgramsListPage = () => {
  return (
    <div>
      <div className="banner-divider">
        <BannerDivider
          bannerText="Programs list page"
          imgSrc="https://media.istockphoto.com/photos/team-teamwork-business-join-hand-together-concept-power-of-volunteer-picture-id1017183652?k=20&m=1017183652&s=612x612&w=0&h=G3MUs6fliJ_R_Tj2B_G4mGH1RvWdVjgXnhzokGuaFxI="
          altText="team huddle"
        />
      </div>

      <ProgramsList />
    </div>
  );
};

export default ProgramsListPage;
