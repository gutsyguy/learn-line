import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Info from "@/components/Info";
import { Html, Head, Main, NextScript } from "next/document";



export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="">
        <Navbar/>
        <About />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
