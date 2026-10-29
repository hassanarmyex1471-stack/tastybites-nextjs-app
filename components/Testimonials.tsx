import type { Testimonial } from '@/lib/types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#b02f00]">
            Good food, happy people
          </p>
          <h2 className="text-2xl font-bold text-[#1b1b21] sm:text-3xl">
            What our customers say
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex h-full flex-col rounded-2xl border border-[#e4beb4]/30 bg-white p-6 shadow-[0_4px_16px_-2px_rgba(180,130,90,0.08)]"
            >
              <div
                className="mb-4 flex items-center gap-1 text-[#ffab69]"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <span
                    key={index}
                    aria-hidden="true"
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-[#5b4039]">
                “{testimonial.comment}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt=""
                  className="h-11 w-11 rounded-full bg-[#efecf5] object-cover"
                />
                <span>
                  <span className="block text-sm font-bold text-[#1b1b21]">{testimonial.name}</span>
                  <span className="block text-xs text-[#5b4039]">{testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
