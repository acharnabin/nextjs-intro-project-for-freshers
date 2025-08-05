import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import store, { _persistStore } from "@/redux-toolkit/store";
import { PersistGate } from "redux-persist/integration/react";
import MuiThemeProvider from "@/mui-theme/MuiThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import HomeLayout from "@/layout/HomeLayout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
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
