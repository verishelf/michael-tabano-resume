import { resume } from "@/data/resume";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section title="Experience">
      <ol className="space-y-10">
        {resume.experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="grid gap-3 sm:grid-cols-[11rem_1fr]">
            <div className="text-sm text-neutral-500">{job.period}</div>
            <div>
              <h3 className="text-lg font-medium text-neutral-950">
                {job.title}
                <span className="font-normal text-neutral-500"> — {job.company}</span>
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-700">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-px w-3 shrink-0 bg-neutral-400" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
