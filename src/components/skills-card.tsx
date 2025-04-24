import Image from "next/image";

export default function SkillsCard(props: { src: string; alt: string }) {
  return (
    <div className="w-24 h-24 overflow-hidden relative">
      <Image
        fill
        className="w-full h-full object-contain"
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}
