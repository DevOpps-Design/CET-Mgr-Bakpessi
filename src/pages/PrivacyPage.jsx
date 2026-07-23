import LegalLayout from '../components/layout/LegalLayout';

export default function PrivacyPage() {
  const H2 = ({ children }) => (
    <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginTop: '2rem' }}>{children}</h2>
  );

  return (
    <LegalLayout title="Politique de confidentialité" date="Dernière mise à jour : 1er janvier 2026">
      <H2>1. Collecte des données</H2>
      <p>Nous collectons uniquement les données nécessaires au traitement de vos demandes d'admission (nom, prénom, email, téléphone, niveau, filière).</p>

      <H2>2. Utilisation des données</H2>
      <p>Les données collectées sont utilisées exclusivement pour le traitement des dossiers d'admission et la communication avec les candidats.</p>

      <H2>3. Conservation des données</H2>
      <p>Les données sont conservées pendant la durée nécessaire au traitement de votre dossier, puis archivées selon les obligations légales en vigueur au Togo.</p>

      <H2>4. Partage des données</H2>
      <p>Vos données ne sont jamais partagées avec des tiers, sauf obligation légale ou dans le cadre de partenariats pédagogiques explicitement autorisés.</p>

      <H2>5. Vos droits</H2>
      <p>Conformément à la loi, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à Contact@institut-bakpessi.com.</p>

      <H2>6. Cookies</H2>
      <p>Le site utilise uniquement des cookies essentiels au fonctionnement du site. Aucun cookie de tracking n'est utilisé.</p>
    </LegalLayout>
  );
}
