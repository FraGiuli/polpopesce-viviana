import "@/styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import AOS from "aos";
import { useEffect } from "react";

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
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}
