import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/RootLayout/Header";
import { Footer } from "../components/RootLayout/Footer";

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
