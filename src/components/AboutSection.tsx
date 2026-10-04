import Image from "next/image";
import { images } from "@/lib/images";
import { site } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#FAF8F5] py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
            <Image
              src={images.about}
              alt="Patient care at I Beliv Dental Studio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="About us"
              title="We are your family dentist"
              description="I Beliv Dental Studio is a state-of-the-art facility with the latest dental technology available. Our team is committed to providing you with the highest quality dental care in a relaxing, comfortable environment."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
              <p>
                Our approach to dental care helps you achieve a healthier, more
                beautiful smile — and the confidence that comes with it. We offer
                general and cosmetic services in a dental studio designed to help
                you feel at ease, with thoughtful touches like music and
                in-room television.
              </p>
              <p>
                We believe in honest diagnoses, preventative care, and a
                big-picture view of your overall well-being. Proudly serving
                Davenport and Central Florida since {site.since}.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
