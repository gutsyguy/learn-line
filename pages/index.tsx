import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative flex-col bg-black min-h-screen">
      <div className="flex relative">
        <Navbar />
     </div>
     <div className="fixed justify-items-center"> 
        <About />
      </div>
    </main>
  );
}
