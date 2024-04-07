import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import books from '../public/books.jpeg'; 
import Info from "@/components/Info";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Head from "next/head";
import UserWidget from "@/components/UserWidget";
import Widget from "@/components/widget";
import { useState, useRef } from 'react';
import Link from "next/link";

const Home = () => {
  const [show, setShow] = useState(true);
  const ref = useRef(null);
  
  return(
      <div className="flex flex-col bg-black items-center justify-center basis-3">
      <div className="flex absolute flex-col items-center justify-center ">
            {/* <h1 className="text-center mb-10 w-1/4 text-black py-4 rounded-3xl bg-amber-200">
              <Link href = "/quiz">Get Started</Link>
            </h1> */}
        <div className="flex relative"> 
          <Widget />
           {/* <UserWidget /> */}
        </div>
      </div>
      <div className="bottom-5 fixed"> 
      <Footer />
      </div>
    </div>
  )
}

export default Home

