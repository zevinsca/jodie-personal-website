export default function ExperienceSection() {
  return (
    <section id="experience-section" className="">
      <div className="lg:pt-32 pt-20"></div>
      <div className="relative bg-[#212121] text-white ">
        <div className="container mx-auto ">
          <h2 className="lg:text-5xl text-3xl font-bold text-center -mt-5 lg:-mt-6 absolute lg:px-0 px-10">
            Experience
          </h2>

          <div className="grid lg:grid-flow-col lg:grid-rows-3 lg:gap-x-10 gap-x-3 text-white px-10 lg:px-16 pt-8 pb-10 lg:pt-16 lg:pb-20">
            <div className="lg:col-span-2 flex items-center justify-center">
              <p className="corner-only lg:corner-only-lg flex items-center justify-center text-lg lg:text-xl font-bold px-3 lg:py-5 py-3">
                2022 - Present
              </p>
            </div>
            <div className="lg:col-span-2 row-span-2 items-center hidden lg:block">
              <div className="mx-auto h-[250px] min-h-[1em] w-1 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            </div>

            <div className="lg:row-span-1 flex items-center lg:mt-0 mt-5 lg:border-l-0 border-l-3 border-white/30">
              <h3 className="lg:text-3xl text-2xl font-semibold pl-5 lg:pl-0 lg:pt-0 pt-5">
                Freelance Front-End Web Developer
              </h3>
            </div>
            <div className="row-span-2 flex items-center ">
              <div className="lg:border-l-0 border-l-3 border-white/30 pl-5 lg:pl-0 lg:pb-0 pb-5">
                <p className="text-gray-400 lg:text-xl text-lg lg:pt-0 pt-2">
                  Self-Employed
                </p>
                <p className="lg:pt-3 pt-2 lg:text-base text-sm lg:text-left text-justify">
                  As a self-employed front-end web developer, I work with small
                  businesses, creatives, and e-commerce brands on a project
                  basis to build and maintain modern, responsive websites. I
                  specialize in crafting clean, user-friendly interfaces using
                  HTML, Tailwind CSS, and basic JavaScript. My work focuses on
                  translating design concepts into functional front-end code,
                  optimizing for mobile responsiveness and performance, and
                  providing ongoing updates or improvements as needed. I aim to
                  create engaging, accessible digital experiences that align
                  with each client's brand and business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
