import Link from 'next/link';
import type { CategoryItem } from '@/lib/types';

interface CategoriesProps {
  categories: CategoryItem[];
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <section id="categories" className="px-6 py-14 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#b02f00]">
            Explore the menu
          </p>
          <h2 className="text-2xl font-bold text-[#1b1b21] sm:text-3xl">What are you craving?</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="#popular-dishes"
              className="group flex flex-col items-center rounded-2xl border border-[#e4beb4]/30 bg-white p-5 text-center shadow-[0_4px_16px_-2px_rgba(180,130,90,0.08)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_-2px_rgba(180,130,90,0.14)]"
            >
              <span
                aria-hidden="true"
                className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full ${category.bgClass} ${category.textClass}`}
              >
                <span className="material-symbols-outlined text-[28px]">{category.iconName}</span>
              </span>
              <span className="font-bold text-[#1b1b21] group-hover:text-[#b02f00]">
                {category.name}
              </span>
              <span className="mt-1 text-xs text-[#5b4039]">{category.countLabel}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
