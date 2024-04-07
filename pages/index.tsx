import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import books from '../public/books.jpeg'; 
import Info from "@/components/Info";
import Footer from "@/components/Footer";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Button from "@/components/Button";
=======
import Button from "@/components/button";
>>>>>>> Stashed changes
=======
import Button from "@/components/button";
>>>>>>> Stashed changes

export default function Home() {
  return (
      <main className="flex flex-col bg-black max-h-screen items-center justify-center">
      <div className="flex relative flex-col items-center justify-center translate-x-5">
        <Info />
      <div> 
        <Button />
      </div>
      </div>
      <div className="bottom-6 fixed"> 
      <Footer />
      </div>
    </main>
  );
}
