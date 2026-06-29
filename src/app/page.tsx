import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Section } from "@/components/Section";
import { resume } from "@/data/resume";

export default function Home() {
  return (
    <div className="min-h-full bg-neutral-100 text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <article className="bg-white px-8 py-12 shadow-sm ring-1 ring-neutral-200 sm:px-12 sm:py-16">
          <Header />

          <div className="mt-12 space-y-12">
            <Section title="Summary">
              <p className="max-w-2xl text-base leading-relaxed text-neutral-700">
                {resume.summary}
              </p>
            </Section>

            <Experience />
            <Skills />
          </div>
        </article>

        <footer className="mt-8 text-center text-xs uppercase tracking-[0.25em] text-neutral-400">
          {resume.name}
        </footer>
      </div>
    </div>
  );
}
