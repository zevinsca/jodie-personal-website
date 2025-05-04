"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="">
      {/* Desktop Navigation */}
      <nav className="md:block hidden py-5 font-lato fixed left-0 right-0 top-0 bg-[#212121] z-50">
        <div className="flex justify-between items-center px-20">
          <div className="relative h-12 w-12">
            <Image fill src="/nav/logo-zj.png" alt="logo zevinsca jodie" />
          </div>
          <ul className="flex gap-10">
            <li>
              <Link href="#hero-section" className="font-lato">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about-me-section">About Me</Link>
            </li>
            <li>
              <Link href="#my-skills-section">Skills</Link>
            </li>
            <li>
              <Link href="#portfolio-section">Portfolio</Link>
            </li>
            <li>
              <Link href="#experience-section">Experience</Link>
            </li>
            <li>
              <Link href="#testimonial-section">Testimonial</Link>
            </li>
          </ul>
          <Link href="#contact-section">
            <button className="bg-orange-theme px-5 py-3 rounded-xl flex items-center justify-center w-fit cursor-pointer">
              Contact Me
            </button>
          </Link>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <nav className="block md:hidden py-5 font-lato fixed left-0 right-0 top-0 bg-[#212121] z-50 ">
        <div className="px-5 flex justify-between items-center relative">
          <div className="relative h-12 w-12">
            <Image fill src="/nav/logo-zj.png" alt="logo zevinsca jodie" />
          </div>
          <button className="flex sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>

          {isOpen && (
            <ul className="flex flex-col border-t border-white absolute left-0 top-full w-full bg-black z-40 px-5 py-10 gap-5 text-center mt-3">
              <li>
                <Link href="#hero-section" className="font-lato">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about-me-section">About Me</Link>
              </li>
              <li>
                <Link href="#my-skills-section">Skills</Link>
              </li>
              <li>
                <Link href="#portfolio-section">Portfolio</Link>
              </li>
              <li>
                <Link href="#experience-section">Experience</Link>
              </li>
              <li>
                <Link href="#testimonial-section">Testimonial</Link>
              </li>
              <li className="bg-orange-theme px-5 py-3 rounded-xl flex items-center justify-center w-fit mx-auto">
                <button>
                  <Link href="#contact-section">Contact Me</Link>
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

{
  /* <ul className="flex gap-10">
            <li>
              <Link href="#hero-section" className="font-lato">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about-me-section">About Me</Link>
            </li>
            <li>
              <Link href="#my-skills-section">Skills</Link>
            </li>
            <li>
              <Link href="#portfolio-section">Portfolio</Link>
            </li>
            <li>
              <Link href="#experience-section">Experience</Link>
            </li>
            <li>
              <Link href="#testimonial-section">Testimonial</Link>
            </li>
          </ul>
          <button>Contact Me</button> */
}
