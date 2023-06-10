import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <ToastContainer 
        position="bottom-right"
        hideProgressBar={true}
        autoClose={3000}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme="dark"

      />
    </SessionProvider>
  );
}
