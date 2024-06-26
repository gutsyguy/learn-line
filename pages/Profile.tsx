import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import books from '../public/books.jpeg'; 
import Info from "@/components/Info";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Head from "next/head";
import Widget from "@/components/widget";
import UserWidget from "@/components/UserWidget";
import { useState, useRef } from 'react';
import UserProfile from "@/components/UserProfile";

const Profile = () => {
  
  return(
      <div className="flex flex-col bg-black items-center justify-center basis-3">
      <div className="flex absolute flex-col items-center justify-center ">
        <div className="flex relative"> 
            <UserProfile />
        </div>
      </div>
      <div className="bottom-5 fixed"> 
      <Footer />
      </div>
    </div>
  )
}

export default Profile