import React from "react";
import { Outlet } from "react-router-dom";

import LingoSetuHeader from "./Discover";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      

      {/* Page Content */}
      <Outlet />

      {/* Footer sab pages par */}
      <Footer />
    </>
  );
}