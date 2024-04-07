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
      <main className="static flex flex-col space-y-2 bg-black min-h-screen items-center justify-center">
      <div className="flex flex-row static items-center justify-center space-x-2 space-y-2">
        <Image
          src="/books.png"
          width={120}
          height={120}
          alt="Books"
        />
        {/* <Info /> */}
      </div>
      <div className="bottom-6 fixed"> 
      <Footer />
      </div>
    </main>

  );
}
