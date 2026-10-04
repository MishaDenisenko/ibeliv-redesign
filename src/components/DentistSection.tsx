import Image from "next/image";
import { dentist, site } from "@/lib/site-data";
import { images } from "@/lib/images";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function DentistSection() {
  return (
    <section id="dentist" className="scroll-mt-24 bg-[#FAF8F5] py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-stone-200 lg:mx-0">
            <Image
              src={images.dentist}
              alt={dentist.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 80vw, 420px"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Our dentist"
              title={dentist.name}
              description="Trusted care, clear communication, and a commitment to honest dentistry for families across Central Florida."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
              {dentist.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.phoneHref}>Book with Dr. Torres</ButtonLink>
              <ButtonLink
                href={`${site.legacySite}/our-team`}
                variant="secondary"
                external
              >
                Meet Dr. Torres
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
