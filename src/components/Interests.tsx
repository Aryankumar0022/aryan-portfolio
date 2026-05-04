import FadeIn from "./motion/FadeIn";

export default function Interests() {
  return (
    <section id="interests" className="py-10 md:py-14">


      <FadeIn>
        <div className="text-center mb-8">
          <h2 className="section-title">Beyond Code</h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="glass-card p-7 md:p-10 max-w-[800px] mx-auto text-center">
          <p className="text-[20px] leading-[1.85] body-text">
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
