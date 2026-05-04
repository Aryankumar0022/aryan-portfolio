import FadeIn from "./motion/FadeIn";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-10 md:py-14">


      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
        </div>
      </FadeIn>

      {/* Two-column layout: photo left, text right */}
      <div className="max-w-[1060px] mx-auto">
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
            <div className="space-y-5 text-[20px] leading-[1.85] body-text text-center md:text-left">
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
                  className="btn-outline inline-flex items-center gap-4 px-15 py-6 text-2xl"
                >
                  View Resume
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
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
