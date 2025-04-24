import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-[#212121]">
        <div className="container mx-auto lg:pt-10 pt-10 lg:pb-20 pb-16">
          <nav className="grid place-items-center px-20">
            <Image src="/nav/logo-zj.png" alt="" className="h-12 w-auto " />
            <ul className="flex lg:flex-row flex-col lg:gap-10 gap-5 text-center pt-10">
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
          </nav>
          <div className="flex justify-center items-center gap-4 py-10 text-orange-theme">
            <Link
              href="https://github.com/zevinsca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/zevinsca-jodie-baab04138/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://instagram.com/zevinsca_jodie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </Link>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5">
            <div className="flex gap-5">
              <Mail />
              <Link
                href="mailto:zevinsca@gmail.com"
                className="hover:underline"
              >
                zevinsca@gmail.com
              </Link>
            </div>
            <div className="flex gap-5">
              <Phone />
              <Link
                href="https://wa.me/6289660537845"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                0896-6053-7845
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
