import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import books from '../public/books.jpeg'; 
import Info from "@/components/Info";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Head from "next/head";
import { ReactElement } from "react";
import type { NextPage } from "next";

const Home = () => {
  return(
      <div className="flex flex-col bg-black items-center justify-center basis-3">
      <div className="flex absolute flex-col items-center justify-center -translate-y-15 translate-x-4">
        <Info />
      </div>
      <div className="bottom-5 fixed"> 
      <Footer />
      </div>
    </div>
  )
}

export default Home

