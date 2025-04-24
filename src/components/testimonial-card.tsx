import Image from "next/image";

export default function TestimonialCard(props: {
  src: string;
  alt: string;
  testimonial: string;
  name: string;
  title?: string;
}) {
  return (
    <div className="bg-gray-700 rounded-2xl flex flex-col items-center justify-center h-full relative lg:mt-10 mt-20">
      <div className="relative w-32 h-32">
        <Image
          fill
          className=" object-cover rounded-full mb-4 absolute top-0 -translate-y-1/2"
          src={props.src}
          alt={props.alt}
        />
      </div>

      <div className="px-10 lg:pb-5 pb-10 relative lg:-mt-10 -mt-10">
        <p className="text-justify text-sm">{props.testimonial}</p>
        <p className="pt-3 text-xl text-orange-theme font-bold">{props.name}</p>
        <p className="text-gray-400 font-semibold">{props.title}</p>
      </div>
    </div>
  );
}
