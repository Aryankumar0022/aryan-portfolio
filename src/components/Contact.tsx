"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import FadeIn from "./motion/FadeIn";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setSending(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setSending(false);

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn>
          <h2 className="text-5xl font-bold text-center mb-16">
            Get In Touch
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <FadeIn>
            <div className="space-y-8">
              <p className="text-2xl leading-relaxed text-gray-600">
                I'm always open to interesting conversations,
                collaborations, and new opportunities.
                Drop me a line — I read everything and reply to most things.
              </p>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-gray-200 space-y-8"
            >

              {/* Name */}
              <div>
                <label className="block mb-2 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none resize-none focus:border-green-600"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={sending}
                className="bg-green-700 hover:bg-green-800 transition text-white font-semibold px-8 py-4 rounded-2xl"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {/* Status */}
              {status === "success" && (
                <p className="text-green-700 font-medium">
                  Message sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 font-medium">
                  Failed to send message.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );

  return (
    <section id="contact" className="py-10 md:py-14">
      <FadeIn>
        <h2 className="section-title mb-10 text-center">Get In Touch</h2>
      </FadeIn>

      {/* ── Two-column grid ── */}
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 px-6">
        {/* ── LEFT: Info + Socials ── */}
        <FadeIn delay={0.05}>
          <div className="flex flex-col justify-center h-full">
            <p className="text-[18px] leading-[1.85] text-muted mb-8">
              I&apos;m always open to interesting conversations, collaborations,
              and new opportunities. Drop me a line — I read everything and
              reply to most things.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {/* Email */}
              <a
                href="mailto:aryankmar966@gmail.com"
                className="group flex items-center h-[52px] glass-card rounded-[26px] px-[16px] transition-all duration-500 ease-out hover:px-5 hover:shadow-lg hover:-translate-y-1 hover:border-accent/40"
              >
                <span className="text-muted group-hover:text-accent transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[220px] group-hover:opacity-100 group-hover:ml-3 transition-all duration-500 ease-out font-sans font-medium whitespace-nowrap text-ink text-[13px]">
                  aryankmar966@gmail.com
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919350147596"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center h-[52px] glass-card rounded-[26px] px-[16px] transition-all duration-500 ease-out hover:px-5 hover:shadow-lg hover:-translate-y-1 hover:border-[#25D366]/40"
              >
                <span className="text-muted group-hover:text-[#25D366] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 group-hover:ml-3 transition-all duration-500 ease-out font-sans font-medium whitespace-nowrap text-ink text-[13px]">
                  +919350147596
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/arya_65kd/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center h-[52px] glass-card rounded-[26px] px-[16px] transition-all duration-500 ease-out hover:px-5 hover:shadow-lg hover:-translate-y-1 hover:border-[#E1306C]/40"
              >
                <span className="text-muted group-hover:text-[#E1306C] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
                  </svg>
                </span>
                <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 group-hover:ml-3 transition-all duration-500 ease-out font-sans font-medium whitespace-nowrap text-ink text-[13px]">
                  aryan_65kd
                </span>
              </a>

              {/* X */}
              <a
                href="https://x.com/callmewhensleep"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center h-[52px] glass-card rounded-[26px] px-[16px] transition-all duration-500 ease-out hover:px-5 hover:shadow-lg hover:-translate-y-1 hover:border-[#1DA1F2]/40"
              >
                <span className="text-muted group-hover:text-[#1DA1F2] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </span>
                <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 group-hover:ml-3 transition-all duration-500 ease-out font-sans font-medium whitespace-nowrap text-ink text-[13px]">
                  
                </span>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* ── RIGHT: Contact Form ── */}
        <FadeIn delay={0.15}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form glass-card p-6 md:p-8 rounded-[20px] flex flex-col gap-5"
          >
            {/* Name */}
            <div className="contact-field">
              <input
                type="text"
                name="from_name"
                id="contact-name"
                required
                placeholder=" "
                className="contact-input"
              />
              <label htmlFor="contact-name" className="contact-label">Name</label>
            </div>

            {/* Email */}
            <div className="contact-field">
              <input
                type="email"
                name="from_email"
                id="contact-email"
                required
                placeholder=" "
                className="contact-input"
              />
              <label htmlFor="contact-email" className="contact-label">Email</label>
            </div>

            {/* Message */}
            <div className="contact-field">
              <textarea
                name="message"
                id="contact-message"
                required
                placeholder=" "
                rows={4}
                className="contact-input contact-textarea"
              />
              <label htmlFor="contact-message" className="contact-label">Message</label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="btn-primary self-start mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </>
              )}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <p className="text-[14px] text-accent font-medium flex items-center gap-2 animate-fade-in">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-[14px] text-red-500 font-medium flex items-center gap-2 animate-fade-in">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                Failed to send. Please try again.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

