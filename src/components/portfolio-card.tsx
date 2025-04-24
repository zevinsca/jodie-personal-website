import Link from "next/link";

export default function PortfolioCard(props: {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div>
      {/* Desktop view */}
      <Link
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-auto overflow-hidden rounded-2xl shadow-lg group lg:block hidden"
      >
        <img
          className="w-full h-full object-cover"
          src={props.src}
          alt={props.alt}
        />
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-3xl font-bold opacity-100">{props.title}</p>
          <p className="text-base opacity-100 pt-3 px-10">
            {props.description}
          </p>
        </div>
      </Link>
      {/* Mobile view */}
      <Link
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-auto overflow-hidden rounded-2xl shadow-lg group block lg:hidden"
      >
        <img
          className="w-full h-full object-cover"
          src={props.src}
          alt={props.alt}
        />
        <div className="bg-gray-600 text-gray-300 py-5">
          <p className="text-xl px-10 font-bold opacity-100  text-center">
            {props.title}
          </p>
          <p className="text-sm opacity-100 pt-3 px-10 text-justify ">
            {props.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
