import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";

import { Provider } from "react-redux";
import store, { _persistStore } from "@/redux-toolkit/store";
import { PersistGate } from "redux-persist/integration/react";
import MuiThemeProvider from "@/mui-theme/MuiThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import HomeLayout from "@/layout/HomeLayout";
import App from "next/app";

const queryClient = new QueryClient();
// consistant layout akane add korte pri
// Kono theme provider akane add korte pari
// Ata server & clinet side both side accesable

export default function CustomApp({ Component, pageProps, ...rest }: AppProps) {
  console.log(pageProps, rest, Component, "pageprops");
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate persistor={_persistStore}>
          <MuiThemeProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <HomeLayout>
              <Component {...pageProps} />
            </HomeLayout>

            <ReactQueryDevtools initialIsOpen={false} />
          </MuiThemeProvider>
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  );
}

CustomApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);

  return {
    ...ctx,
    test: "NABIN",
  };
};
