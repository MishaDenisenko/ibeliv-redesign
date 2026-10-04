import Link from "next/link";
import { navLinks, site } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-stone-200 bg-[#FAF8F5] py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-serif text-xl text-stone-900">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              State-of-the-art family dentistry in a relaxing studio
              environment—serving Davenport since {site.since}.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-500">
              Visit us
            </h3>
            <address className="mt-3 space-y-2 text-sm not-italic leading-relaxed text-stone-700">
              <p>{site.address.line1}</p>
              <p>
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p>
                <a className="hover:text-teal-900" href={site.phoneHref}>
                  {site.phone}
                </a>
              </p>
              <p>Fax: {site.fax}</p>
              <p>
                <a
                  className="hover:text-teal-900"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-500">
              Hours
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-700">
              {site.hours.map((row) => (
                <li key={row.days}>
                  <span className="font-medium text-stone-800">{row.days}</span>
                  <br />
                  {row.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-500">
              Explore
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-700 hover:text-teal-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${site.mapsQuery}`}
                  className="text-stone-700 hover:text-teal-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-stone-200 pt-6 text-center text-xs text-stone-500">
          © {year} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
