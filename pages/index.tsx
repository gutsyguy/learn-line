import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import books from '../public/books.jpeg'; 
import Info from "@/components/Info";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const Home = () => {
  return (
      <main className="flex flex-col bg-[#FFFDCA] max-h-screen items-center justify-center">
      <div className="flex relative flex-col items-center justify-center translate-y-15 translate-x-3">
        <Info />
      </div>
      <div className="bottom-6 fixed"> 
      <Footer />
      </div>
    </main>
  );
}

export default Home