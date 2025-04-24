export default function TestimonialCard(props: {
  src: string;
  alt: string;
  testimonial: string;
  name: string;
  title?: string;
}) {
  return (
    <div className="bg-gray-700 rounded-2xl flex flex-col items-center justify-center h-full relative lg:mt-10 mt-20">
      <img
        className="w-32 h-32 object-cover rounded-full mb-4 absolute top-0 -translate-y-1/2"
        src={props.src}
        alt={props.alt}
      />
      <div className="px-10 lg:pt-16 pt-24 lg:pb-5 pb-10 relative">
        <p className="text-justify text-sm">{props.testimonial}</p>
        <p className="pt-3 text-xl text-orange-theme font-bold">{props.name}</p>
        <p className="text-gray-400 font-semibold">{props.title}</p>
      </div>
    </div>
  );
}
