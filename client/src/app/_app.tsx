import Head from "next/head";
import { Fragment } from "react";
import { AppProps } from "next/app";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";


function MyApp({ Component, pageProps }: AppProps) {

    const wallets = [new PetraWallet()];
  return (
    <Fragment>
      <Head>
        <title>APT-Reelfy</title>
        <meta name="description" content="Apt reelfy" />
      </Head>
      <div className="background">
        <div>
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
          <Component {...pageProps} />
          </AptosWalletAdapterProvider>
        </div>
      </div>
    </Fragment>
  );
}

export default MyApp;
