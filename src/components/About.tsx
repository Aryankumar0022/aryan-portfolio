import FadeIn from "./motion/FadeIn";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <hr className="section-divider mb-16 md:mb-24" />

      <FadeIn>
        <div className="text-center mb-12">
          <span className="section-label justify-center">About Me</span>
          <h2 className="section-heading">
            A curious mind with
            <br />
            a love for <span className="text-accent italic">craft</span>.
          </h2>
        </div>
      </FadeIn>

      {/* Two-column layout: photo left, text right */}
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-10 md:gap-14 items-center">
          {/* Photo — left side */}
          <FadeIn delay={0.05}>
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-accent/6 blur-xl scale-105" />
                <div className="absolute -inset-1.5 rounded-xl border border-accent/10 rotate-1" />
                <Image
                  src="/images/aryan-about.jpg"
                  alt="Aryan Kumar"
                  width={360}
                  height={440}
                  className="relative img-frame object-cover w-[320px] h-[400px] md:w-[360px] md:h-[440px] -rotate-1"
                />
              </div>
            </div>
          </FadeIn>

          {/* Text — right side */}
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-[15px] leading-[1.85] body-text text-center md:text-left">
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

              {/* View Resume */}
              <div className="pt-3 flex justify-center md:justify-start">
                <a
                  href="https://drive.google.com/file/d/your-resume-id/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  View Resume
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
