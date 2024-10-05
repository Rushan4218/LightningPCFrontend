import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/RootLayout/Header";
import { Footer } from "../components/RootLayout/Footer";
import { TopHeader } from "../components/RootLayout/TopHeader";

const RootLayout: React.FC = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="mx-10 sm:mx-20 lg:mx-32 xl:mx-40 2xl:mx-60">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
