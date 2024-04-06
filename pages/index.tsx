import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex relative">
        <Navbar />
     </div>
  <div className="fixed justify-center"> 
    <About />
  </div>

    </main>
  );
}
