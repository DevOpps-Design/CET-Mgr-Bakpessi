import { Link } from 'react-router-dom';
import LegalLayout from '../components/layout/LegalLayout';

export default function TermsPage() {
  const H2 = ({ children }) => (
    <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginTop: '2rem' }}>{children}</h2>
  );

  return (
    <LegalLayout title="Conditions générales d'utilisation" date="Dernière mise à jour : 1er janvier 2026 — En vigueur depuis le 1er septembre 2005">
      <H2>Article 1 - Objet et champ d'application</H2>
      <p>
        Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site web du Collège Technique d'Enseignement MGR BAKPESSI (C.E.T.M.B).
        Tout utilisateur accédant au site s'engage à respecter ces conditions sans réserve. L'utilisation du site vaut acceptation pleine et entière des présentes CGU.
      </p>

      <H2>Article 2 - Accès au site et disponibilité</H2>
      <p>
        L'accès au site est gratuit pour tous les utilisateurs disposant d'un accès internet. Le CETMB s'efforce de maintenir le site accessible 24h/24 et 7j/7,
        mais se réserve le droit, sans préavis ni indemnité, de modifier, suspendre ou interrompre tout ou partie du site pour des raisons de maintenance,
        de sécurité ou de force majeure.
      </p>

      <H2>Article 3 - Propriété intellectuelle et droits d'auteur</H2>
      <p>
        L'ensemble des éléments constituant le site (textes, images, logos, icônes, vidéos, graphismes, code source) sont la propriété exclusive du CETMB
        ou font l'objet d'une autorisation d'utilisation. Toute reproduction, représentation, modification ou exploitation, totale ou partielle,
        sans autorisation écrite préalable du CETMB est strictement interdite et constituerait une contrefaçon sanctionnée par la législation en vigueur au Togo.
      </p>

      <H2>Article 4 - Responsabilité et limitation</H2>
      <p>
        Le CETMB s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site. Toutefois, le CETMB ne saurait être tenu responsable :
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li className="mb-2">Des erreurs, omissions ou inexactitudes figurant sur le site</li>
        <li className="mb-2">Des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder</li>
        <li className="mb-2">De l'interprétation des informations fournies par les tiers ayant accès au site</li>
        <li>Des virus ou éléments malveillants pouvant infecter votre matériel informatique</li>
      </ul>

      <H2>Article 5 - Données à caractère personnel</H2>
      <p>
        La collecte et le traitement des données à caractère personnel sont régis par notre
        <Link to="/politique-confidentialite" className="text-decoration-underline ms-1">Politique de confidentialité</Link>.
        Conformément à la loi n° 2019-014 du 19 juillet 2019 portant protection des données à caractère personnel au Togo,
        l'utilisateur dispose d'un droit d'accès, de rectification et de suppression de ses données personnelles.
      </p>

      <H2>Article 6 - Modification des conditions</H2>
      <p>
        Le CETMB se réserve le droit de modifier les présentes CGU à tout moment, sans préavis. Les utilisateurs sont invités à consulter régulièrement cette page
        pour prendre connaissance des éventuelles mises à jour. L'utilisation du site après modification vaut acceptation des nouvelles conditions.
      </p>

      <H2>Article 7 - Droit applicable et juridiction compétente</H2>
      <p>
        Les présentes CGU sont régies par le droit togolais. En cas de litige, les tribunaux de Kara (Togo) seront seuls compétents,
        après tentative de résolution amiable. Pour toute question relative à ces conditions, contactez-nous à :
        <a href="mailto:Contact@institut-bakpessi.com" className="text-decoration-underline ms-1">Contact@institut-bakpessi.com</a>.
      </p>
    </LegalLayout>
  );
}
