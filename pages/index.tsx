import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import books from '../public/books.jpeg'; 
import Info from "@/components/Info";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative flex-col space-y-2">
      <div className="flex relative">
        <Navbar />
      </div>
  <div className="fixed justify-items-center"> 
    <About />
  </div>
    <div className="flex static">
      <Image
      src="/books.png"
      width={120}
      height={120}
      alt="Books"
      />
      <Info />
   </div>
  <div className="fixed">
      <Footer />
  </div>
    </main>
  );
}
