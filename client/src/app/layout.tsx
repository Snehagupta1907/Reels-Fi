"use client";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const wallets = [new PetraWallet()];
  return (
    <html lang="en">
      <body className="bg-dark-3">
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
          <Sidebar>
          {children}
          </Sidebar>
        </AptosWalletAdapterProvider>
      </body>
    </html>
  );
}
