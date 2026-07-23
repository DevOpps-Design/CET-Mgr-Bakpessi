import { HeroSection, AboutSection, HistorySection, ValuesSection, StatsSection, AchievementsSection, PedagogySection, LocationSection, CtaSection, TestimonialsSection } from '../components/sections/etablissement';

export default function EtablissementPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />
      
      {/* Présentation */}
      <AboutSection />
      
      {/* Notre histoire */}
      <HistorySection />
      
      {/* Vision, mission, valeurs */}
      <ValuesSection />
      
      {/* Chiffres clés */}
      <StatsSection />
      
      {/* Palmarès */}
      <AchievementsSection />
      
      {/* Témoignages */}
      <TestimonialsSection />
      
      {/* Pourquoi choisir le CETMB */}
      <PedagogySection />
      
      {/* Localisation et cadre de vie */}
      <LocationSection />
      
      {/* CTA */}
      <CtaSection />
    </>
  );
}