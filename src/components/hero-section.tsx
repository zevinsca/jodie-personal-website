import { Linkedin, Github, Instagram } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="mx-auto container min-h-screen pt-16" id="hero-section">
      <div className="grid grid-cols-2">
        <div>
          <div>
            <p className="text-xl text-gray-500 pt-20">
              Hey there! I’m
              <br />
              <span className="text-orange-theme text-7xl font-bold py-5 block">
                Zevinsca Jodie
              </span>
            </p>
            <p className="text-white text-3xl">Front-End Web Developer</p>
            <p className="text-gray-500 text-lg pt-5">
              Passionate about developing modern, responsive websites with clean
              and efficient code using HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="flex gap-4 py-10 text-orange-theme">
            <Github />
            <Linkedin />
            <Instagram />
          </div>
          <div className="flex gap-10 py-10">
            <button className="bg-orange-theme px-5 py-3 rounded-2xl">
              Contact Me
            </button>
            <button className="bg-transparent border border-gray-500 text-gray-500 px-5 py-3 rounded-2xl border-2">
              Download CV
            </button>
          </div>
        </div>
        <div>
          {/* <img
            style={{ height: "100%", objectFit: "cover" }}
            className="hero-img"
            src=""
            alt=""
          /> */}
        </div>
      </div>
    </section>
  );
}
