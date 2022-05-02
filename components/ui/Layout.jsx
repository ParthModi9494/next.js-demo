import { Fragment } from "React";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <main>{props.children}</main>
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;
