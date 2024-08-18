"use client";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

// import { PetraWallet } from "petra-plugin-wallet-adapter";
// import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
// import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import DataContextProvider from "@/context/DataContext";
import toast, { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  mantaSepoliaTestnet
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const config = getDefaultConfig({
  appName: 'Reels_Fi',
  projectId: '87106bd465234d097b8a51ba585bf799',
  chains: [mainnet, polygon, optimism, arbitrum, base,mantaSepoliaTestnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const wallets = [new PetraWallet()];
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className="bg-dark-3">
      <Toaster position="top-right" reverseOrder={false} />
      {/* <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}> */}
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
        <Header />
          <Sidebar>
            <DataContextProvider>{children}</DataContextProvider>
          </Sidebar>
          </RainbowKitProvider>
          </QueryClientProvider>
          </WagmiProvider>
        {/* </AptosWalletAdapterProvider> */}
      </body>
    </html>
  );
}
