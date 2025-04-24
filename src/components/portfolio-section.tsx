import PortfolioCard from "./portfolio-card";

export default function PortfolioSection() {
  return (
    <section
      className="mx-auto container lg:pt-16 pt-10 lg:pb-24 pb-12 lg:px-16 px-10"
      id="portfolio-section"
    >
      <p className="text-center "></p>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-1/2 h-1 my-8 bg-gray-700 border-0 dark:bg-gray-700" />
        <span className="absolute px-10 font-medium text-orange-theme -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-[#121212] text-4xl">
          Portofolio
        </span>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pt-10 lg:px-5 px-0">
        <PortfolioCard
          href="https://geovision.id"
          src="/portfolio/geovision.png"
          alt="Geovision Website"
          title="Geovision Indonesia"
          description="Built a WordPress site for geovision.id to present company services. Customized theme and setup resulted in a clean, responsive profile."
        />
        <PortfolioCard
          href="https://ptintinyateknologi.com"
          src="/portfolio/pt-intinya.png"
          alt="PT Intinya Website"
          title="PT Intinya Teknologi"
          description="Developed ptintinyateknologi.com using PHP to display services and products. Delivered a fast, structured company profile."
        />
        <PortfolioCard
          href="https://toysnhobbies.id"
          src="/portfolio/toysnhobbies.png"
          alt="Toys n Hobbies Website"
          title="Toys n Hobbies"
          description="Created toysnhobbies.id with PHP to highlight products for hobbyists. Simple, dynamic layout improved visibility."
        />
        <PortfolioCard
          href="https://baletonflowerchef.com"
          src="/portfolio/baleton.png"
          alt="Baleton Website"
          title="Baleton Flowerchef"
          description="Designed baletonflowerchef.com using PHP, JS, and Tailwind. Focused on elegant UI and smooth user experience."
        />
      </div>
    </section>
  );
}
