import { site } from "@/lib/site-data";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section className="bg-teal-900 py-16 text-white sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            Ready for a calm, confident dental visit?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-teal-100 sm:text-lg">
            Call our Davenport studio to schedule your appointment. Our team is
            happy to answer questions about services, hours, and what to expect
            at your first visit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={site.phoneHref}
              className="border border-white"
            >
              {site.bookLabel}
            </ButtonLink>
            <ButtonLink
              href={site.phoneHref}
              variant="secondary"
            >
              {site.phone}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
