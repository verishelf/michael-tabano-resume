import { resume } from "@/data/resume";

export function Header() {
  return (
    <header className="border-b border-neutral-300 pb-10">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
        Professional Resume
      </p>
      <h1 className="font-serif text-5xl font-light tracking-tight text-neutral-950 sm:text-6xl">
        {resume.name}
      </h1>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600">
        <a
          href={`tel:${resume.phone.replace(/\D/g, "")}`}
          className="transition-colors hover:text-neutral-950"
        >
          {resume.phone}
        </a>
        <span className="hidden text-neutral-300 sm:inline" aria-hidden>
          |
        </span>
        <span>{resume.location}</span>
      </div>
    </header>
  );
}
