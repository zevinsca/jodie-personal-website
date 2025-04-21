export default function AboutMeSection() {
  return (
    <section className="mx-auto container pt-10" id="about-me-section">
      <div className="">
        <p className="col-span-1 text-6xl text-orange-theme border-l-3 py-8 pl-8 h-full flex items-center border-white mb-3 font-lato">
          About Me
        </p>
        <div className="grid lg:grid-cols-8 gap-7 items-stretch">
          <p className="col-start-2 col-span-7 py-10 text-gray-400 text-base text-justify px-10 h-full bg-[#1b1b1b] rounded-l-3xl border-orange-theme border-r-3">
            Hi, I’m a front-end developer with about 2 years of experience. I
            focus mainly on building responsive layouts using HTML and Tailwind
            CSS.
            <br />
            <br />
            I'm still getting the hang of JavaScript, back-end stuff, and coding
            fundamentals — but I’m constantly learning and trying to improve
            with each project I work on.
            <br />
            <br />I enjoy turning designs into clean, functional websites and
            paying attention to the little details that make a layout feel
            polished.
            <br />
            <br />
            When I’m not coding, I’m probably tweaking styles, watching
            tutorials, or experimenting with layouts just for fun.
          </p>
        </div>
      </div>
    </section>
  );
}
