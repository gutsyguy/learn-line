import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Info from "@/components/Info";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex-col justify-center content-center">
        <Navbar/>
        {/* <About /> */}
        {/* <div className="flex flex-col justify-center items-center"> */}
        {/* <Info />
        <Button /> */}
         {/* </div>  */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
