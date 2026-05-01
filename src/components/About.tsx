import FadeIn from "./motion/FadeIn";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <hr className="section-divider mb-16 md:mb-24" />

      <FadeIn>
        <span className="section-label">About Me</span>
        <h2 className="section-heading mb-10">
          A curious mind with
          <br />
          a love for <span className="text-accent italic">craft</span>.
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-[1fr_240px] gap-10 md:gap-16 items-start">
        <FadeIn delay={0.05}>
          <div className="space-y-5 text-[15px] leading-[1.85] text-ink/80">
            <p>
              I&apos;m a software engineer drawn to problems where mathematics,
              perception, and engineering overlap — most often in machine
              learning and computer vision.
            </p>
            <p>
              My work tends to start with curiosity rather than a brief.
              I like building things that are small, sharp, and quietly
              useful — and rewriting them until they feel inevitable.
            </p>
            <p className="text-muted">
              Outside of work, I read about aerodynamics, propulsion, and
              the slow craft of getting things off the ground. There&apos;s
              something about the rigor behind flight that mirrors what
              I love about good engineering.
            </p>
          </div>
        </FadeIn>

        {/* Photo */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-accent/6 blur-xl scale-105" />
              <div className="absolute -inset-1.5 rounded-xl border border-accent/10 rotate-1" />
              <Image
                src="/images/aryan-about.jpg"
                alt="Aryan Kumar"
                width={220}
                height={280}
                className="relative img-frame object-cover w-[200px] h-[260px] md:w-[220px] md:h-[280px] -rotate-1"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
