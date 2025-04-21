import SkillsCard from "./skills-card";

const SkillItems = ({ src, alt }: { src: string; alt: string }) => (
  <div className="bg-gray-700 rounded-2xl py-5 flex items-center justify-center">
    <SkillsCard src={src} alt={alt} />
  </div>
);

export default function MySkillsSection() {
  return (
    <section className="mx-auto container pt-16 px-16" id="my-skills-section">
      <p className="text-4xl text-center text-gray-200 pt-20">My Skills</p>
      <div className="grid grid-cols-10">
        <hr className="w-36 h-1 bg-orange-theme border-0 rounded-sm my-5 col-start-5"></hr>
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-3 lg:gap-10 gap-3 py-10">
        <SkillItems src="/skills/css.png" alt="CSS Logo" />
        <SkillItems src="/skills/html.png" alt="HTML Logo" />
        <SkillItems src="/skills/js.png" alt="JS Logo" />
        <SkillItems src="/skills/react.png" alt="React Logo" />
        <SkillItems src="/skills/php.png" alt="PHP Logo" />
        <SkillItems src="/skills/wordpress.png" alt="Wordpress Logo" />
      </div>
    </section>
  );
}
