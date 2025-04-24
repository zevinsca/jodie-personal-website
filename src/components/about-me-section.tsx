export default function AboutMeSection() {
  return (
    <section
      className="mx-auto container pt-10 lg:px-0 px-10"
      id="about-me-section"
    >
      <div className="pt-16">
        <p className="col-span-1 lg:text-6xl text-4xl text-orange-theme border-l-3 lg:py-8 py-5 pl-8 h-full flex items-center border-white mb-3 font-lato">
          About Me
        </p>
        <div className="grid lg:grid-cols-8 gap-7 items-stretch">
          <p className="lg:col-start-2 lg:col-span-7 lg:py-10 py-7 text-gray-400 lg:text-base text-sm text-justify px-10 h-full bg-[#1b1b1b] rounded-l-3xl border-orange-theme border-r-3">
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
