import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for single memory preservation",
    features: [
      "Up to 2 VHS Tapes",
      "Digital Download",
      "Standard Restoration",
      "7 Day Turnaround"
    ],
    popular: false
  },
  {
    name: "Family Bundle",
    price: "$99",
    description: "Best for digitizing your family archives",
    features: [
      "Up to 8 VHS or MiniDV Tapes",
      "USB Drive Included",
      "Advanced AI Upscaling",
      "Priority Processing"
    ],
    popular: true
  },
  {
    name: "Legacy Collection",
    price: "$249",
    description: "Complete archival for your entire history",
    features: [
      "Up to 25 Tapes & Reels",
      "Premium Archival Hard Drive",
      "Museum-Grade Restoration",
      "Private Viewing Gallery"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-primary font-bold mb-4"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            Choose Your <span className="text-gradient">Conversion Package</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Transparent pricing for museum-grade digitization. No hidden fees, just pure memories preserved forever.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                pkg.popular 
                  ? "bg-muted/50 border-primary/50 shadow-[0_0_30px_hsl(var(--neon-cyan)/0.15)] scale-105 z-20" 
                  : "bg-background border-border hover:border-primary/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold">{pkg.price}</span>
                  <span className="text-muted-foreground">/pkg</span>
                </div>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  pkg.popular 
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.4)]" 
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
