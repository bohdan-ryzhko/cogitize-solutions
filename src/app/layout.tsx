import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { PropsWithChildren } from 'react';
import { Providers } from '@/redux';
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cogitize solutions test task by Bohdan Ryzhko',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="colored"
            transition={Slide}
          />
        </Providers>
      </body>
    </html>
  )
}
