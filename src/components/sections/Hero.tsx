"use client";

import Button from "@/components/ui/Button";
import Typewriter from "@/components/ui/Typewriter";
import {
  heroStatement,
  personalInfo,
  resumePdfFilename,
  resumePdfPath,
} from "@/lib/resume-data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-65px)] flex-col justify-center overflow-hidden px-6 py-24"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover grayscale"
          src="/video.mp4"
        />
        <div className="absolute inset-0 bg-white/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="flex flex-col-reverse items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
              Portfolio
            </p>
            <h1 className="text-4xl font-light tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
              {personalInfo.name}
            </h1>
            <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
              {personalInfo.title}
            </p>
            <div className="mt-10 max-w-2xl">
              <Typewriter
                text={heroStatement}
                className="text-base leading-relaxed text-neutral-600 sm:text-lg"
              />
            </div>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button href="/resume" variant="primary">
                View Resume
              </Button>
              <Button
                href={resumePdfPath}
                download={resumePdfFilename}
                variant="secondary"
              >
                Download Resume PDF
              </Button>
              <Button href="#contact" variant="ghost">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="shrink-0 self-center lg:self-auto">
            <div className="relative flex h-64 w-56 items-center justify-center overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/60 shadow-[0_0_40px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,0,0,0.12)] sm:h-72 sm:w-64 lg:h-80 lg:w-72">
              <span className="text-6xl font-light tracking-[0.15em] text-neutral-400 sm:text-7xl">
                MT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
