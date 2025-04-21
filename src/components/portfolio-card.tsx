export default function PortfolioCard(props: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative w-full h-auto overflow-hidden rounded-2xl shadow-lg group">
      <img
        className="w-full h-full object-cover"
        src={props.src}
        alt={props.alt}
      />
      <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-2xl font-bold opacity-100">{props.title}</p>
        <p className="text-sm opacity-100">{props.description}</p>
      </div>
    </div>
  );
}
