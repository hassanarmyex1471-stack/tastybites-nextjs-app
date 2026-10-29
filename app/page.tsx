import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { DishGrid } from '@/components/DishGrid';
import { WhyUs } from '@/components/WhyUs';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { DISHES, CATEGORIES, TESTIMONIALS } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-[#ff5722]/10 px-4 py-2.5 flex items-center justify-center gap-3 text-center border-b border-[#ff5722]/10">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#ff5722] text-white text-[11px] font-bold tracking-wider uppercase shadow-sm">
          Fresh Deal
        </span>
        <p className="text-xs sm:text-sm text-[#5b4039] font-medium">
          Free delivery on orders over $25 with code <strong className="text-[#b02f00] font-bold">HOTBITES</strong> today!
        </p>
      </div>

      <Hero />
      <Categories categories={CATEGORIES} />
      <DishGrid dishes={DISHES} />
      <WhyUs />
      <Testimonials testimonials={TESTIMONIALS} />
      <ContactSection />
    </div>
  );
}
