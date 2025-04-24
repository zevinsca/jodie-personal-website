import { Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="mx-auto container min-h-screen lg:pt-32 pt-28"
      id="hero-section"
    >
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="order-2 lg:order-1 lg:px-0 px-10">
          <div className="">
            <p className="text-xl text-gray-500 lg:pt-20 pt-5">
              Hey there! I’m
              <br />
              <span className="text-orange-theme lg:text-7xl text-5xl font-bold lg:py-5 py-3 block">
                Zevinsca Jodie
              </span>
            </p>
            <p className="text-white lg:text-3xl text-2xl">
              Front-End Web Developer
            </p>
            <p className="text-gray-500 lg:text-lg text-base pt-5">
              Passionate about developing modern, responsive websites with clean
              and efficient code using HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="flex gap-4 lg:py-10 py-8 text-orange-theme">
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
          <div className="flex lg:gap-10 lg:py-10 gap-5 py-5">
            <button className="bg-orange-theme px-5 py-3 rounded-2xl">
              Contact Me
            </button>
            <Link href="/hero/zevinsca_jodie_cv.pdf" download className="w-fit">
              <button className="bg-transparent border-gray-500 text-gray-500 px-5 py-3 rounded-2xl border-2 cursor-pointer">
                Download CV
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:order-2 order-1">
          <div className="relative h-[50vh] lg:h-[70vh] w-full">
            <Image
              fill
              // style={{ height: "70vh", objectFit: "cover" }}
              className="lg:pt-10 pt-5 grayscale-75 lg:px-0 px-10 object-cover"
              src="/hero/main-photo.jpg"
              alt="Main Photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
