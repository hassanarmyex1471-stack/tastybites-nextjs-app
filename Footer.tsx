import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#1b1b21] px-6 py-10 text-white lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
            Tasty<span className="text-[#ff5722]">Bites</span>
          </Link>
          <p className="mt-2 max-w-sm text-sm text-white/65">
            Fresh, chef-crafted meals delivered hot to your door.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
          <Link className="transition-colors hover:text-white" href="/">
            Home
          </Link>
          <Link className="transition-colors hover:text-white" href="/#popular-dishes">
            Menu
          </Link>
          <Link className="transition-colors hover:text-white" href="/#about-us">
            About
          </Link>
          <Link className="transition-colors hover:text-white" href="/#contact-us">
            Contact
          </Link>
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/50">
        © {new Date().getFullYear()} TastyBites. All rights reserved.
      </div>
    </footer>
  );
}
