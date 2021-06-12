import { ThemeProvider } from "@material-ui/core";
import "@styles/globals.css";
import theme from "UI/themes/theme";
import Head from "next/Head";
import Header from "UI/components/surfaces/Header/Header";
import Footer from "UI/components/surfaces/Footer/Footer";
import { AppContainer } from "UI/styles/pages/_app.style";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>e-WipeSimple</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/fonts/ws-icons/css/wipesimple-icons.css"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
