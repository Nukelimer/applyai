"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import HeroSection from './heroSection';
import AboutTheApp from './aboutTheApp';
import AppFeatures from './appFeatures';
import Pricing from './pricing';
import Testimonials from './testimonials';
import Faq from './faq';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Helmet from "react-helmet"
import AOS from 'aos';
import 'aos/dist/aos.css';
//import {Typewriter} from 'react-simple-typewriter'; Delete Instalation of react-simple-typewriter

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    
    return (
    <div className= "relative min-h-screen    ">
        <div className="absolute inset-0 h-full w-full bg-purple bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:10rem_4rem] z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_350px_at_100%_300px,rgba(213,197,255,.25),transparent)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_350px_at_10%_200px,rgba(186,255,236,.25),transparent)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_350px_at_10%_800px,rgba(244,233,193,.5),transparent)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_350px_at_100%_800px,rgba(194,244,230,.25),transparent)]">

            

        <div className="mx-auto h-18 px-4 sm:px-6 lg:px-8 z-10 fixed w-full bg-gray-50">
            <nav className="flex justify-between items-center h-16 border-b border-gray-200">
                         <Image src="/Logo.png" height={120} width={120} alt="logo" />

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
                        {isMenuOpen ? <IoIosClose size="28" /> : <IoIosMenu size="28" />}
                    </button>
                </div>

                <div className="hidden md:flex justify-center flex-1 mr-8  ">
                    <Link href="#Home" className="text-gray-700 hover:text-black mx-8">Home</Link>
                    <Link href="#AboutTheApp" className="text-gray-700 hover:text-black mx-8">About</Link>
                    <Link href="#AppFeatures" className="text-gray-700 hover:text-black mx-8">Features</Link>
                    <Link href="#Pricing" className="text-gray-700 hover:text-black mx-8">Pricing</Link>
                    <Link href= "#Testimonials" className="text-gray-700 hover:text-black mx-8">Testimonials</Link>
                    <Link href= "#Faq" className="text-gray-700 hover:text-black mx-8">FAQ</Link>
                </div>

                <div className="hidden md:block shrink-0">
                    {/* <Link href="/sign-in">
                        <Button className="bg-[#5422DD] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</Button>
                    </Link> */}
                </div>
            </nav>

            {isMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl md:hidden">
                    <Link href="#Home" className="block px-4 py-2 text-lg hover:underline">Home</Link>
                    <Link href="#AboutTheApp" className="block px-4 py-2 text-lg hover:underline">About</Link>
                    <Link href="#AppFeatures" className="block px-4 py-2 text-lg hover:underline">Services</Link>
                    <Link href="#Pricing" className="block px-4 py-2 text-lg hover:underline scroll-">Contact</Link>
                    <Link href="#Testimonials" className="block px-4 py-2 text-lg hover:underline">Testimonials</Link>
                    <Link href="#Faq" className="block px-4 py-2 text-lg hover:underline">FAQ</Link>
                </div>
                
            )}
              <div className="relative z-10">
       
      </div>
        </div>
            </div>
        </div>
        </div>
        </div>
        
        <div className='relative'>
        
        <div id ="Home"> <HeroSection /></div>
        <div id ="AboutTheApp"><AboutTheApp /></div>
        <div id ="AppFeatures"><AppFeatures /></div>
        <div id ="Pricing"><Pricing/></div>
        <div id='Testimonials'><Testimonials/></div>
        <div id='Faq'><Faq/></div>
        </div>
        </div>
    );
};

export default Navbar;
