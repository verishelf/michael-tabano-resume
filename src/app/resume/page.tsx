import Link from "next/link";
import {
  personalInfo,
  aboutSummary,
  experience,
  skills,
  resumePdfFilename,
  resumePdfPath,
} from "@/lib/resume-data";

export const metadata = {
  title: `Resume | ${personalInfo.name}`,
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 print:bg-white">
      <div className="border-b border-neutral-200 bg-neutral-50 print:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-sm text-neutral-600 transition-colors hover:text-black"
          >
            ← Back to Portfolio
          </Link>
          <a
            href={resumePdfPath}
            download={resumePdfFilename}
            className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium transition-colors hover:border-neutral-500"
          >
            Download PDF
          </a>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-12 print:py-8">
        <header className="border-b border-neutral-300 pb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="mt-2 text-sm text-neutral-600">{personalInfo.title}</p>
          <p className="mt-2 text-sm text-neutral-600">
            {personalInfo.location}
          </p>
          <p className="mt-1 text-sm text-neutral-600">{personalInfo.phone}</p>
        </header>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Professional Summary
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            {aboutSummary}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Professional Experience
          </h2>
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="mt-4">
              <h3 className="text-sm font-semibold">{job.role}</h3>
              <p className="text-sm text-neutral-600">
                {job.company} | {job.period}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-neutral-400">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Skills
          </h2>
          <ul className="mt-3 grid gap-1.5 text-sm text-neutral-700 sm:grid-cols-2">
            {skills.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-neutral-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
