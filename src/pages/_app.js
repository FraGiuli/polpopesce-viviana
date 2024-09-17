import "@/styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import AOS from "aos";
import { useEffect } from "react";
import Script from "next/script"; // Importa il componente Script

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    type: "light", // it could be "light" or "dark"
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Provider store={store}>
      <NextUIProvider theme={theme}>
        {/* Configurazione di Iubenda */}
        <Script id="iubenda-config" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "siteId": 3761588,
              "cookiePolicyId": 39911099,
              "lang": "it"
            };
          `}
        </Script>

        {/* Script di autoblocco Iubenda */}
        <Script
          strategy="beforeInteractive"
          src="https://cs.iubenda.com/autoblocking/3761588.js"
        />

        {/* Script di supporto di Iubenda */}
        <Script
          strategy="beforeInteractive"
          src="https://cdn.iubenda.com/cs/gpp/stub.js"
        />

        {/* Script principale Iubenda */}
        <Script
          strategy="beforeInteractive"
          src="https://cdn.iubenda.com/cs/iubenda_cs.js"
          async
        />

        {/* Il resto della tua app */}
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}
