import { trustBenefits } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";

const icons = [
  (
    <svg
      key="honest"
      className="h-6 w-6 text-teal-800"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  (
    <svg
      key="calm"
      className="h-6 w-6 text-teal-800"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
  (
    <svg
      key="tech"
      className="h-6 w-6 text-teal-800"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  (
    <svg
      key="languages"
      className="h-6 w-6 text-teal-800"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
    </svg>
  ),
];

export function TrustBar() {
  return (
    <section
      className="border-b border-stone-200/80 bg-white py-10 sm:py-12"
      aria-label="Why patients choose I Beliv Dental Studio"
    >
      <Container>
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
          Why patients choose us
        </p>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {trustBenefits.map((item, index) => (
            <li key={item.title} className="flex gap-4 lg:flex-col lg:gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-900/5">
                {icons[index]}
              </div>
              <div>
                <h2 className="font-serif text-lg leading-snug text-stone-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
