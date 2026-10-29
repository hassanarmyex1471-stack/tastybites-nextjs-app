export function ContactSection() {
  return (
    <section id="contact-us" className="bg-[#ff5722]/10 px-6 py-16 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-[#b02f00]">We’re here to help</p>
        <h2 className="text-2xl font-bold text-[#1b1b21] sm:text-3xl">Get in touch</h2>
        <p className="max-w-xl text-sm leading-relaxed text-[#5b4039]">
          Have a question about the menu or your order? Reach out and our team will be happy to help.
        </p>
        <a
          href="mailto:hello@tastybites.example"
          className="inline-flex items-center gap-2 rounded-full bg-[#ff5722] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b02f00]"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
            mail
          </span>
          Email our team
        </a>
      </div>
    </section>
  );
}
