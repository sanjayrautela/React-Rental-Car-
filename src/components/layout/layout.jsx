import React, { Fragment } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import Routers from "../../routers/router";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;