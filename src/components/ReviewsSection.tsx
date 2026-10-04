import Image from "next/image";
import { images } from "@/lib/images";
import { reviews, site } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/SectionHeading";

function StarRow() {
  return (
    <span className="inline-flex gap-0.5 text-amber-700" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Reviews"
              title="Patients trust Dr. Torres and our team"
              description="We're grateful for the families who choose I Beliv Dental Studio—and for the thoughtful reviews they share."
            />

            <div className="mt-8 rounded-xl border border-stone-200 bg-[#FAF8F5] p-6">
              <div className="flex flex-wrap items-end gap-3">
                <p className="font-serif text-5xl leading-none text-stone-900">
                  {site.rating}
                </p>
                <div>
                  <StarRow />
                  <p className="mt-2 text-sm text-stone-600">
                    Based on {site.reviewCount} Google reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 hidden aspect-[3/2] overflow-hidden rounded-2xl bg-stone-200 lg:block">
              <Image
                src={images.reviews}
                alt="Welcoming environment at I Beliv Dental Studio"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </div>

          <ul className="space-y-5">
            {reviews.map((review) => (
              <li
                key={review.author}
                className="rounded-xl border border-stone-200 bg-[#FAF8F5] p-6 sm:p-7"
              >
                <StarRow />
                <blockquote className="mt-4 text-base leading-relaxed text-stone-700">
                  “{review.quote}”
                </blockquote>
                <footer className="mt-4 text-sm font-semibold text-stone-900">
                  — {review.author}
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
