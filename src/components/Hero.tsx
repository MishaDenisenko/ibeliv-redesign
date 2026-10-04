import Image from "next/image";
import { images } from "@/lib/images";
import { site } from "@/lib/site-data";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="border-b border-stone-200/80 bg-[#FAF8F5] pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
              Davenport, Florida
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-stone-900 sm:text-5xl lg:text-[3.25rem]">
              Comfortable, personalized dental care for your whole family
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
              State-of-the-art dentistry in a relaxing studio environment — where
              honest treatment, modern technology, and a welcoming team come
              together.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={site.phoneHref}>{site.bookLabel}</ButtonLink>
              <ButtonLink href="#services" variant="secondary">
                Explore Services
              </ButtonLink>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-stone-200 pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-stone-500">Google rating</dt>
                <dd className="mt-1 font-serif text-2xl text-stone-900">
                  {site.rating}★
                </dd>
              </div>
              <div>
                <dt className="text-sm text-stone-500">Patient reviews</dt>
                <dd className="mt-1 font-serif text-2xl text-stone-900">
                  280+
                </dd>
              </div>
              <div>
                <dt className="text-sm text-stone-500">In the community</dt>
                <dd className="mt-1 font-serif text-2xl text-stone-900">
                  Since {site.since}
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 shadow-[0_24px_60px_-40px_rgba(28,43,40,0.55)] lg:aspect-[5/4]">
            <Image
              src={images.hero}
              alt="I Beliv Dental Studio office"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
