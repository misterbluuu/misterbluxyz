import { Cpu, Rocket, Wrench, Recycle, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function TLDR() {
  // Load fonts dynamically via CSS if not included globally
  useEffect(() => {
    const link1 = document.createElement("link");
    link1.href =
      "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
    link1.rel = "stylesheet";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.href =
      "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600&display=swap";
    link2.rel = "stylesheet";
    document.head.appendChild(link2);
  }, []);

  const sections = [
    {
      title: "CONTEXT",
      icon: <Recycle className="w-6 h-6 text-cyan-300" />,
      color: "from-emerald-500/40 to-cyan-500/40",
      text: (
        <>
          Companies throw out a lot of perfectly good hardware. I want to
            create infrastructure to get this hardware into the hands of people who will rebuild it into something amazing
          instead of letting it go to waste.
        </>
      ),
    },
    {
      title: "MISSION",
      icon: <Rocket className="w-6 h-6 text-emerald-300" />,
      color: "from-cyan-500/40 to-emerald-500/40",
      text: (
        <>
          I’m not looking to start a company—I’m looking to start a movement. Coding has become
          easier than ever before, allowing anyone to build software. What we need now is to make
          hardware just as accessible. By rethinking how we handle discarded hardware, we can empower
          creators, students, and engineers to innovate without barriers.
        </>
      ),
    },
  ];

  const acts = [
    {
      title: "ACT I — Start Small (Local)",
      color: "from-cyan-600/40 to-emerald-500/40",
      icon: <Cpu className="w-6 h-6 text-emerald-300" />,
      bullets: [
        "Offer junk removal/startup cleanouts to recover hardware that would be trashed.",
        "Create makerspace partnerships to reuse parts collaboratively on a wider scale.",
        "Host hardware hackathons in the Bay Area using solely recycled parts to spark interest.",
      ],
      extra: ["🤖 Trashy Robot Fight Club", "🏎️ Robot/Car Obstacle Course"],
    },
    {
      title: "ACT II — Scaling Up",
      color: "from-emerald-600/40 to-cyan-500/40",
      icon: <Globe className="w-6 h-6 text-cyan-300" />,
      bullets: [
        "Partner with companies to create build boxes and project kits out of recurring hardware waste.",
        "Expand beyond the Bay Area to reach new communities.",
        "Build an online network to connect makerscompanies to save discarded hardware.",
      ],
    },
    {
      title: "ACT III — Hardware Revolution",
      color: "from-cyan-700/40 to-emerald-600/40",
      icon: <Wrench className="w-6 h-6 text-emerald-300" />,
      bullets: [
        "Launch tools for hobbyist and professional hardware creators.",
        "Offer online resources and free courses for learners.",
        "Deploy hardware dropboxes and pickup points worldwide.",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10 p-8 md:p-12 max-w-5xl mx-auto text-gray-100 font-[Chakra_Petch]">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text 
          bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 font-[Press_Start_2P]"
        >
          where yesterday’s tech meets today’s makers
        </h1>
        <p className="text-lg text-cyan-300 font-[Chakra_Petch]">
          hardware innovation doesn’t need new materials — it needs a new mindset
        </p>
      </motion.div>

      {/* SECTIONS + ACTS COMBINED FOR CONSISTENT SPACING */}
      <div className="flex flex-col gap-10">
        {/* SECTION CARDS */}
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className={`relative border border-cyan-400/30 rounded-2xl p-6 md:p-8 
              bg-gradient-to-br ${sec.color} backdrop-blur-md shadow-[0_0_20px_#00ffc855] 
              hover:shadow-[0_0_30px_#00ffe055] transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              {sec.icon}
              <h2 className="text-2xl font-bold text-cyan-200 font-[Press_Start_2P] tracking-tight">
                {sec.title}
              </h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-emerald-100">
              {sec.text}
            </p>
          </motion.div>
        ))}

        {/* ACT CARDS */}
        {acts.map((act, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
            className={`border border-emerald-400/30 rounded-2xl p-8 
              bg-gradient-to-br ${act.color} shadow-[0_0_20px_#00ffc855] 
              hover:shadow-[0_0_35px_#00ffe055] transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              {act.icon}
              <h2 className="text-2xl font-[Press_Start_2P] text-emerald-200">
                {act.title}
              </h2>
            </div>
            <ul className="list-disc list-inside text-lg md:text-xl space-y-2 text-emerald-100">
              {act.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            {act.extra && (
              <div className="bg-gray-900/40 border border-cyan-400/30 rounded-xl p-4 mt-4">
                <h3 className="text-cyan-300 font-semibold mb-2">
                  Hackathon Ideas:
                </h3>
                <ul className="list-disc list-inside text-emerald-100">
                  {act.extra.map((x, k) => (
                    <li key={k}>{x}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
