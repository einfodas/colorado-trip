import { tripMeta } from "@/data/trip-data";

export default function Hero() {
  return (
    <div className="relative w-full h-[50vh] min-h-[320px] md:h-[60vh] overflow-hidden">
      <img
        src="/colorado-trip/images/graduation-hero.jpg"
        alt="Graduation celebration at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <h1 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-white leading-tight">
          {tripMeta.title}
        </h1>
        <p className="text-sm md:text-base font-medium text-white/80 mt-2 tabular-nums">
          {tripMeta.dates}
        </p>
        <p className="text-lg md:text-xl font-semibold text-white mt-1">
          {tripMeta.duration}
        </p>
      </div>
    </div>
  );
}
