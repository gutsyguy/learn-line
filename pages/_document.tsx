import Navbar from "@/components/Navbar";
import About from "@/components/About";
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="">
        <Navbar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
