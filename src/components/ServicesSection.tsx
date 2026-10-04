import { services } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our services"
          title="Modern dentistry, clearly explained"
          description="From routine family care to advanced in-office technology, we focus on treatments that fit your needs — with transparency at every step."
          align="center"
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex h-full flex-col rounded-xl border border-stone-200 bg-[#FAF8F5] p-6"
            >
              <h3 className="font-serif text-xl text-stone-900">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                {service.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-stone-500">
          CareCredit and major credit cards accepted. Ask our team about
          financing options during your visit.
        </p>
      </Container>
    </section>
  );
}
