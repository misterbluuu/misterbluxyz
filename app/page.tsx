"use client";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col items-center px-8 py-20 space-y-32">
      {/* Background shapes (non-overlapping, bright, opaque) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[5%] left-[5%] w-[35vw] h-[35vw] bg-green-400 rotate-[10deg] rounded-full opacity-90"></div>
        <div className="absolute top-[50%] right-[10%] w-[30vw] h-[30vw] bg-blue-400 rotate-[-12deg] rounded-3xl opacity-90"></div>
        <div className="absolute bottom-[5%] left-[50%] w-[40vw] h-[40vw] bg-yellow-400 rotate-[8deg] rounded-full opacity-90"></div>
      </div>

      {/* Halftone overlay */}
      <div className="absolute inset-0 halftone-overlay animate-grain"></div>

      {/* Title */}
      <h1 className="glitch-text mb-4 relative z-10">misterblu.xyz</h1>

       {/*<div className="section-box">
          <div className="section-title-sticker">TL:DR</div>
          <p>
            this project is a love letter to making. it’s for the people who carry a quiet fire inside them. i want to help them burn brightly.
          </p>
        </div>
*/}

      {/* Sections */}
      <section className="relative z-10 max-w-4xl text-lg leading-relaxed font-display space-y-24">
        <div className="section-box">
          <div className="section-title-sticker">Context</div>
          <p>
            Startups and major companies throw out large amounts of perfectly good hardware that fail to pass strict quality control standards
             for their specific products. While software is easily accessible to anyone, hardware can be much harder to come by—especially for 
             those with limited resources. Let’s face it: there are far more software engineers than hardware engineers today. The issue isn’t 
             that hardware doesn’t exist—it’s that there’s no effective system to get it into the hands of people who can create something unique
              from it. We already have a massive global waste problem, so why make it worse by discarding perfectly functional products?
          </p>
        </div>

        <div className="section-box">
          <div className="section-title-sticker">About Me</div>
          <p>
              What I love most in the world is getting people excited about robotics. I’ve often been told
            my passion and enthusiasm for robotics is contagious. I love makerspaces and the communities that 
            form around them—they represent creativity, problem-solving, and collaboration at its best. I also
            love art and believe that you can’t be an exceptional engineer without being, in some way, an artist.
            Creativity doesn't just fuel innovation. It's the source of it.</p>
           
            <p> I’m frustrated by our “when in doubt, throw it out" culture. It creates waste and causes perfectly good parts to 
            end up in landfills. I believe in reimagining how we source and use hardware, taking inspiration from software
            pioneers who built open, accessible ecosystems that empowered millions. The next generation of innovators should
            be tackling hardware issues with the same accessibility and community spirit that defined the early internet and AI revolutions.
          </p>
        </div>

        <div className="section-box">
          <div className="section-title-sticker">Mission</div>
          <p>
            I’m not looking to just start a company—I’m looking to start a movement.
             Coding has become easier than ever before, allowing anyone to build software.
              What we need now is to make hardware just as accessible. By rethinking how we 
              handle discarded hardware, we can empower creators, students, and engineers to
              innovate without barriers.
          </p>
        </div>

         <div className="section-box">
          <div className="section-title-sticker">Act I: The Small Stuff</div>
          <p>
          *wip*
          </p>
        </div>

        <div className="section-box">
        <div className="section-title-sticker">Act II: The Bigger Picture</div>
          <p>
           *wip*
          </p>
        </div>

         <div className="section-box">
          <div className="section-title-sticker">Act III: For the Future</div>
          <p>
            *wip*
          </p>
        </div>

        <div className="section-box">
         <div className="section-title-sticker">Goals</div>
          <p>
           My goals are simple:</p>
            <ul>
            <li>Reduce manufacturing waste.</li>

            <li>Provide affordable hardware to people who want to create—especially students and makers
            who can’t afford expensive equipment.</li>

            <li>Get people excited about robotics and hands-on engineering.</li>

            <li>Elevate hardware learning to the same level of accessibility as software education.</li>

            <li>Change the way we view waste by showing how discarded components can become tools for innovation.</li>

            <li>Reimagine education, encouraging schools and communities to integrate hands-on hardware creation into their environments.</li>
</ul>

        </div >

       
      </section>

      {/* Style block */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;700&family=Press+Start+2P&display=swap");

        .font-display {
          font-family: "Chakra Petch", sans-serif;
        }

        .section-title {
          font-family: "Press Start 2P", cursive;
          font-size: 1.2rem;
          color: #39ff14;
          text-shadow: 0 0 6px #39ff14, 0 0 12px #39ff14;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        /* --- Halftone overlay --- */
        .halftone-overlay {
          background-image: radial-gradient(circle, rgba(0, 0, 0, 0.85) 1px, transparent 1px),
            radial-gradient(circle, rgba(0, 0, 0, 0.85) 1px, transparent 1px);
          background-size: 10px 10px, 5px 5px;
          background-position: 0 0, 2.5px 2.5px;
          mix-blend-mode: multiply;
          opacity: 0.6;
          pointer-events: none;
        }
        @keyframes grain {
          0% {
            transform: translate(0, 0);
            opacity: 0.65;
          }
          25% {
            transform: translate(-1%, 0.6%);
            opacity: 0.6;
          }
          50% {
            transform: translate(0.6%, -1%);
            opacity: 0.68;
          }
          75% {
            transform: translate(1%, 0.6%);
            opacity: 0.62;
          }
          100% {
            transform: translate(0, 0);
            opacity: 0.65;
          }
        }
        .animate-grain {
          animation: grain 6s infinite linear;
        }

        /* --- Main Glitch Title --- */
        .glitch-text {
          position: relative;
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 900;
          color: #39ff14;
          text-transform: lowercase;
          letter-spacing: 2px;
          text-align: center;
          text-shadow: 0 0 10px #39ff14, 0 0 30px #39ff14;
          -webkit-text-stroke: 3px black;
          animation: glitch 2s infinite;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: "misterblu.xyz";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          -webkit-text-stroke: 3px black;
          color: #39ff14;
          background: transparent;
          overflow: hidden;
        }

        .glitch-text::before {
          text-shadow: -3px 0 cyan;
          animation: glitchTop 2s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          text-shadow: 3px 0 magenta;
          animation: glitchBottom 1.8s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% {
            transform: none;
          }
          15% {
            transform: skew(0.5deg, 0.5deg);
          }
          30% {
            transform: translate(2px, -1px) skew(-0.5deg);
          }
          45% {
            transform: translate(-2px, 1px);
          }
          60% {
            transform: none;
          }
          75% {
            transform: skew(0.5deg, -0.5deg);
          }
          100% {
            transform: none;
          }
        }
        @keyframes glitchTop {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
            transform: translate(0);
          }
          25% {
            clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
            transform: translate(-3px, -2px);
          }
          50% {
            clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
            transform: translate(2px, 2px);
          }
          75% {
            clip-path: polygon(0 0, 100% 0, 100% 25%, 0 25%);
            transform: translate(-1px, 1px);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
            transform: translate(0);
          }
        }
        @keyframes glitchBottom {
          0% {
            clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
            transform: translate(0);
          }
          25% {
            clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%);
            transform: translate(3px, 2px);
          }
          50% {
            clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
            transform: translate(-2px, -1px);
          }
          75% {
            clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
            transform: translate(2px, -2px);
          }
          100% {
            clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
            transform: translate(0);
          }
        }
      `}</style>
    </main>
  );
}
