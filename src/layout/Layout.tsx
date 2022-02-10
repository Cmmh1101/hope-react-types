import React from "react";
import TopNavbar from "./components/Navbar";

interface Props {}

const Layout = (props: Props) => {
  return (
    <>
      <TopNavbar />
      <main>
        <h1>Main content router</h1>
      </main>
    </>
  );
};

export default Layout;
