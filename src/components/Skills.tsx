import { resume } from "@/data/resume";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section title="Skills">
      <ul className="flex flex-wrap gap-2">
        {resume.skills.map((skill) => (
          <li
            key={skill}
            className="border border-neutral-300 px-3 py-1.5 text-sm text-neutral-800"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
}
