const benefits = [
  {
    icon: 'restaurant',
    title: 'Made fresh to order',
    description: 'Our chefs prepare every meal with fresh ingredients when you order.',
  },
  {
    icon: 'bolt',
    title: 'Fast, reliable delivery',
    description: 'Careful packing and speedy delivery bring your food to you hot.',
  },
  {
    icon: 'verified',
    title: 'Quality you can taste',
    description: 'Thoughtful recipes and quality ingredients make every bite count.',
  },
];

export function WhyUs() {
  return (
    <section id="about-us" className="bg-white px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#b02f00]">
            The TastyBites difference
          </p>
          <h2 className="text-2xl font-bold text-[#1b1b21] sm:text-3xl">
            Good food, made easy
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5b4039]">
            Great meals start with care. From the kitchen to your doorstep, we focus on making
            every order worth looking forward to.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-[#e4beb4]/30 bg-[#fbf8ff] p-6 text-center"
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined mb-3 text-[34px] text-[#ff5722]"
              >
                {benefit.icon}
              </span>
              <h3 className="font-bold text-[#1b1b21]">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b4039]">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
