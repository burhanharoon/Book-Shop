import "tailwindcss/tailwind.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "/assets/styles/app.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
