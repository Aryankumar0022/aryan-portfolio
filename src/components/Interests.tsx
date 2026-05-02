import FadeIn from "./motion/FadeIn";

export default function Interests() {
  return (
    <section id="interests" className="py-16 md:py-24">
      <hr className="section-divider mb-16 md:mb-24" />

      <FadeIn>
        <div className="text-center mb-8">
          <span className="section-label justify-center">Beyond Code</span>
          <h2 className="section-heading">
            Things that keep
            <br />
            me <span className="text-accent italic">curious</span>.
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="glass-card p-7 md:p-10 max-w-[800px] mx-auto text-center">
          <p className="text-[15px] leading-[1.9] body-text">
            Beyond software, I spend time reading about{" "}
            <span className="font-medium text-accent">space exploration</span>,{" "}
            <span className="font-medium text-accent">aerodynamics</span>, and the
            long arc of how engineering disciplines borrow from one
            another. There&apos;s a thread between good ML research and the
            physics of flight — both demand you respect what you don&apos;t
            yet understand.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6 pt-6 border-t border-line/30">
            {["Space", "Aerodynamics", "Physics", "Engineering History", "Flight"].map((tag) => (
              <span key={tag} className="skill-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
