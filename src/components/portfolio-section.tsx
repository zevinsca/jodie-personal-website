import PortfolioCard from "./portfolio-card";

export default function PortfolioSection() {
  return (
    <main className="mx-auto container pt-16 px-16" id="portfolio-section">
      <p className="text-center "></p>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-1/2 h-1 my-8 bg-gray-700 border-0 dark:bg-gray-700" />
        <span className="absolute px-10 font-medium text-orange-theme -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-[#121212] text-4xl">
          Portofolio
        </span>
      </div>
      <div className="grid grid-cols-2 gap-5 pt-10 px-5">
        <PortfolioCard
          src="/portfolio/geovision.png"
          alt="Geovision Website"
          title="Geovision Indonesia"
          description="Website company profile"
        />
        <PortfolioCard
          src="/portfolio/pt-intinya.png"
          alt="PT Intinya Website"
          title="PT Intinya Teknologi"
          description="Website company profile"
        />
        <PortfolioCard
          src="/portfolio/toysnhobbies.png"
          alt="Toys n Hobbies Website"
          title="Toys n Hobbies"
          description="Website company profile"
        />
        <PortfolioCard
          src="/portfolio/baleton.png"
          alt="Baleton Website"
          title="Baleton Flowerchef"
          description="Website company profile"
        />
      </div>
    </main>
  );
}
