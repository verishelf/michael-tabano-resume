import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section className="border-t border-neutral-200 pt-10">
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
        {title}
      </h2>
      {children}
    </section>
  );
}
