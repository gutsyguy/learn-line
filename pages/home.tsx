import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import books from '../public/books.jpeg'; 
import Info from "@/components/Info";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className="relative flex-col space-y-2 bg-[#FFFDCA] min-h-screen">
      <div className="flex relative">
     </div>
     <div className="fixed justify-items-center"> 
        <About />
      </div>
    </main>
  );
}

export default Home