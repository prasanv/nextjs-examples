import Nav from "../comps/nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav>
        <Component {...pageProps} />
      </Nav>
    </div>
  );
}

export default MyApp;
