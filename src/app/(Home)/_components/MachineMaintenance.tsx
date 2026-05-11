import Picture from "@src/components/picture/Picture";
import { speaker } from "@public/images";
import { Globe, Instagram, Twitter, ArrowRight } from "lucide-react";
import { journalbg } from "@public/images";

export default function MachineMaintenance() {
  const features = [
    {
      title: "HAND-ASSEMBLED",
      description:
        "Each unit is meticulously tuned by master acoustic engineers.",
      icon: "✦",
    },
    {
      title: "AEROSPACE GRADE MATERIALS",
      description:
        "Utilizing lightweight carbon fiber and surgical-grade titanium.",
      icon: "⌘",
    },
    {
      title: "PROPRIETARY WAVEGUIDES",
      description:
        "Creating a soundstage that mimics the physics of a live concert hall.",
      icon: "◉",
    },
  ];

  const testimonials = [
    {
      quote:
        "The Zenith Pro doesn't just play music; it creates a spatial dimension I've never experienced in headphones before.",
      name: "JULIAN THORNE",
      role: "AUDIO PHILE MAGAZINE",
    },
    {
      quote:
        "They have successfully bridged the gap between scientific precision and emotional warmth.",
      name: "ELENA MORETTI",
      role: "SOUND ARCHITECTURE",
    },
    {
      quote:
        "The Monolith towers are not just speakers, they are pieces of high-performance sculpture.",
      name: "MARCUS VANE",
      role: "LUXURY TECH DIGEST",
    },
  ];

  return (
    <>
      <section className="bg-[#0D0E0F] text-white min-h-screen flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-7xl   px-6 py-12 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Side */}
            <div className="relative flex justify-center lg:justify-start">
              {/* Placeholder Image */}
              <div className="relative w-[280px] sm:w-[340px] md:w-[420px]">
                <div className="aspect-[4/3] rounded-xl shadow-2xl flex items-center justify-center">
                  <Picture className="" alt="speaker" src={speaker} />
                </div>

                {/* Floating Card */}
                <div className=" hidden md:block absolute -bottom-10 left-0 sm:left-8 bg-gradient-to-r from-[#2a220d] via-[#1a1609] to-[#0d0d0d] border border-yellow-700/20 px-6 py-6 w-[220px] sm:w-[260px] backdrop-blur-sm opacity-80 shadow-2xl">
                  <h3 className="text-4xl font-serif text-[#d4af37]">0.001%</h3>

                  <p className="mt-2 text-[11px] tracking-[0.25em] text-zinc-300 uppercase">
                    Total Harmonic Distortion
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <p className="text-[#c8a74e] uppercase tracking-[0.35em] text-xs font-semibold mb-5">
                Our Craft
              </p>

              <h2 className="text-4xl font-playfair sm:text-5xl lg:text-6xl leading-tight text-white">
                Beautiful and fast
              </h2>

              <p className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
                Every product is a testament to the of speed and well structured
                design.
              </p>

              {/* Features */}
              <div className="mt-10 divide-y divide-zinc-800 border-t border-b border-zinc-800">
                {features.map((feature, index) => (
                  <div key={index} className="py-6 flex items-start gap-4">
                    <div className="text-[#c8a74e] text-lg mt-1">
                      {feature.icon}
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base tracking-[0.2em] font-semibold text-white uppercase">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-zinc-400 text-sm sm:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#121414] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto  px-6 py-16 sm:px-10 lg:px-20">
          {/* Header */}
          <div className="text-center">
            <p className="text-[#c8a74e] uppercase tracking-[0.35em] text-[11px] font-semibold">
              The Critical Consensus
            </p>

            <h2 className="mt-4 font-playfair text-4xl sm:text-5xl text-zinc-100">
              Resonance &amp; Acclaim
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-[#1B1C1C] border border-zinc-800 px-8 py-10 min-h-[420px] flex flex-col justify-between transition duration-300 hover:border-zinc-700"
              >
                <div>
                  {/* Stars */}
                  <div className="text-[#c8a74e] tracking-[0.2em] text-sm">
                    ★★★★★
                  </div>

                  {/* Quote */}
                  <p className="mt-8 font-playfair text-3xl leading-[1.45] italic text-zinc-100">
                    “{item.quote}”
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-12">
                  <h4 className="text-sm tracking-[0.2em] font-semibold text-zinc-100 uppercase">
                    {item.name}
                  </h4>

                  <p className="mt-2 text-[11px] tracking-[0.2em] text-zinc-500 uppercase">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        {/* Newsletter Section */}
        <section className="relative overflow-hidden border-y border-zinc-900">
          {/* Background */}
          <div className="absolute inset-0 z-0 opacity-10">
            <Picture
              src={journalbg}
              alt="Laptop keyboard — top-notch accessories backdrop"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-28">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#c8a74e] uppercase tracking-[0.35em] text-[11px] font-semibold">
                Private Listening Journal
              </p>

              <h2 className="mt-5 font-playfair text-5xl sm:text-6xl text-zinc-100 leading-tight">
                Join the Journal
              </h2>

              <p className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Receive exclusive access to private events, early product
                launches, and editorial insights crafted for modern audiophiles.
              </p>

              {/* Newsletter Form */}
              <form className="mt-12">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl rounded-3xl sm:rounded-full p-3 sm:p-2 max-w-2xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-transparent px-4 sm:px-5 py-4 text-sm text-white placeholder:text-zinc-500 outline-none w-full"
                  />

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c8a74e] hover:bg-[#d6b766] text-black text-xs tracking-[0.25em] uppercase font-semibold px-6 sm:px-7 py-4 rounded-2xl sm:rounded-full transition duration-300"
                  >
                    Subscribe
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
