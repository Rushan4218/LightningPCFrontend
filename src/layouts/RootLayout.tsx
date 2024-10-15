import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../sections/RootLayout/Header";
import { Footer } from "../sections/RootLayout/Footer";

const RootLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
