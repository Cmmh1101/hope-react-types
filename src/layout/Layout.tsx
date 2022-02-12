import React from "react";
import HomePage from "../views/homepage/HomePage";
import TopNavbar from "./components/TopNavbar";

interface Props {}

const Layout = (props: Props) => {
  return (
    <>
      <TopNavbar />
      <main>
        <HomePage />
      </main>
    </>
  );
};

export default Layout;
