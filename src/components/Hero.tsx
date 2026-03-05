import { Film } from "lucide-react";
import heroVhs from "@/assets/hero-vhs-player.jpg";
import heroUsb from "@/assets/hero-usb.jpg";
import heroCamcorder from "@/assets/hero-camcorder.jpg";
import heroDvd from "@/assets/hero-dvd.jpg";
import heroCassette from "@/assets/hero-cassette.jpg";

const cards = [
  { img: heroDvd, rotate: -24, translate: "-60px", z: 1 },
  { img: heroUsb, rotate: -12, translate: "-20px", z: 2 },
  { img: heroCamcorder, rotate: 0, translate: "0px", z: 3 },
  { img: heroCassette, rotate: 12, translate: "-20px", z: 2 },
  { img: heroVhs, rotate: 24, translate: "-60px", z: 1 },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Large faded background icon */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 opacity-[0.04]">
        <Film className="w-[500px] h-[500px] text-foreground" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-6">
        {/* Logo icon */}
        <div className="mb-8">
          <Film className="w-8 h-8 text-primary" />
        </div>

        {/* Fan-spread cards */}
        <div className="relative flex items-end justify-center mb-12 h-[280px] md:h-[340px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="absolute w-40 h-52 md:w-52 md:h-72 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-110 hover:!z-20 cursor-pointer group"
              style={{
                transform: `rotate(${card.rotate}deg) translateY(${card.translate})`,
                zIndex: card.z,
                left: `calc(50% - ${(2 - i) * (window.innerWidth < 768 ? 70 : 90)}px - ${window.innerWidth < 768 ? 80 : 104}px)`,
              }}
            >
              <img
                src={card.img}
                alt="Media format"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight mb-6">
          Convert Your Old Tapes{" "}
          <span className="text-gradient">to Digital</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-10 leading-relaxed">
          Bring your memories back to life. We convert VHS, MiniDV, Hi8, cassette
          tapes, and camcorder recordings into modern digital formats.
        </p>

        {/* CTA Button */}
        <button className="group flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-card/60 backdrop-blur-sm text-foreground font-semibold text-lg hover:border-primary/50 hover:neon-glow-cyan transition-all duration-300">
          Start Your Conversion
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
