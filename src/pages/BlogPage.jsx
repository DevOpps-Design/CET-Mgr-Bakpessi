import { useState } from 'react';
import { HeroSection, FiltersSection, ArticlesSection, NewsletterSection } from '../components/sections/blog';

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  return (
    <>
      <HeroSection />
      <FiltersSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <ArticlesSection activeFilter={activeFilter} />
      <NewsletterSection />
    </>
  );
}