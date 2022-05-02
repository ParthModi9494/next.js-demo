import "../styles/globals.css";
import Navbar from "../components/ui/Navbar/Navbar";
import Footer from "../components/ui/Footer/Footer";
import { Fragment } from "React";

function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <nav>
        <Navbar className="navbar"></Navbar>
      </nav>
      <main className="main">
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer className="footer"></Footer>
      </footer>
    </div>
  );
}

export default MyApp;
