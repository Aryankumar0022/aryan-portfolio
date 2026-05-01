import FadeIn from "./motion/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <hr className="section-divider mb-16 md:mb-24" />

      <FadeIn>
        <span className="section-label">Get In Touch</span>
        <h2 className="section-heading mb-6">
          Let&apos;s build something
          <br />
          <span className="text-accent italic">together</span>.
        </h2>
      </FadeIn>

      <FadeIn delay={0.05}>
        <p className="text-[15px] leading-[1.85] text-muted max-w-[480px] mb-10">
          I&apos;m always open to interesting conversations, collaborations,
          and new opportunities. Drop me a line — I read everything and
          reply to most things.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a href="mailto:hello@aryankumar.dev" className="btn-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Say hello
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-[13px] text-muted/60">
          Or email me directly at{" "}
          <a href="mailto:hello@aryankumar.dev" className="link-hover text-accent font-medium">
            hello@aryankumar.dev
          </a>
        </p>
      </FadeIn>
    </section>
  );
}
