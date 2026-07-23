import LegalLayout from '../components/layout/LegalLayout';

export default function CookiesPage() {
  const H2 = ({ children }) => (
    <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginTop: '2rem' }}>{children}</h2>
  );

  return (
    <LegalLayout title="Politique des cookies" date="Dernière mise à jour : 1er janvier 2026">
      <H2>1. Qu'est-ce qu'un cookie ?</H2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web.
        Il permet de conserver des informations relatives à votre navigation (préférences, session, sécurité) afin d'améliorer votre expérience utilisateur.
      </p>

      <H2>2. Cookies utilisés sur le site CETMB</H2>
      <p>
        Le site du Collège Technique d'Enseignement MGR BAKPESSI utilise exclusivement des cookies strictement nécessaires au fonctionnement du site :
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li className="mb-2"><strong>Cookies de session :</strong> Permettent de maintenir votre session active lors de la navigation (formulaire d'admission, etc.). Ils sont supprimés à la fermeture du navigateur.</li>
        <li className="mb-2"><strong>Cookies de sécurité :</strong> Protègent le site contre les attaques informatiques et garantissent l'intégrité des données transmises.</li>
        <li className="mb-2"><strong>Cookies techniques :</strong> Assurent le bon fonctionnement des fonctionnalités essentielles (navigation, accessibilité).</li>
      </ul>
      <p>
        <strong>Aucun cookie de tracking, de publicité ou d'analyse n'est déployé sur ce site.</strong>
      </p>

      <H2>3. Consentement et respect du RGPD</H2>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi n° 2019-014 du 19 juillet 2019 portant protection des données à caractère personnel au Togo,
        nous sollicitons votre consentement avant tout dépôt de cookies non essentiels.
      </p>
      <p>
        Lors de votre première visite, un bandeau de consentement vous permet de :
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li className="mb-2"><strong>Accepter</strong> l'utilisation des cookies essentiels (action par défaut).</li>
        <li className="mb-2"><strong>Refuser</strong> le dépôt de cookies (dans la limite de ce qui est techniquement nécessaire).</li>
      </ul>
      <p>
        Votre choix est conservé dans le stockage local de votre navigateur (localStorage) et peut être modifié à tout moment en vidant le cache de votre navigateur ou en revisitant cette page.
      </p>

      <H2>4. Gestion et suppression des cookies</H2>
      <p>
        Vous pouvez à tout moment configurer votre navigateur pour limiter ou bloquer les cookies :
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li className="mb-2"><strong>Google Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies et autres données de site</li>
        <li className="mb-2"><strong>Mozilla Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies et données de site</li>
        <li className="mb-2"><strong>Safari :</strong> Préférences → Confidentialité → Gérer les données de site</li>
        <li className="mb-2"><strong>Microsoft Edge :</strong> Paramètres → Cookies et autorisations de site</li>
      </ul>
      <p>
        <strong>Attention :</strong> Le refus de certains cookies peut limiter l'accès à certaines fonctionnalités du site (formulaire d'admission).
      </p>

      <H2>5. Cookies tiers et services externes</H2>
      <p>
        Le site du CETMB n'intègre aucun service tiers déposant des cookies (pas de Google Analytics, pas de réseaux sociaux externes, pas de publicité ciblée).
        Les seules interactions avec des tiers concernent les liens vers nos pages officielles (Facebook, LinkedIn, Instagram, X) qui sont ouverts dans de nouveaux onglets.
      </p>

      <H2>6. Modification de la politique des cookies</H2>
      <p>
        Le CETMB se réserve le droit de modifier la présente politique des cookies à tout moment.
        Les utilisateurs sont invités à consulter régulièrement cette page pour prendre connaissance des éventuelles mises à jour.
      </p>

      <H2>7. Contact</H2>
      <p>Pour toute question relative à notre politique des cookies ou à l'exercice de vos droits, contactez-nous :</p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li className="mb-2"><strong>Email :</strong> Contact@institut-bakpessi.com</li>
        <li className="mb-2"><strong>Adresse :</strong> Kara, Togo</li>
        <li className="mb-2"><strong>Téléphone :</strong> +228 72 89 66 02</li>
      </ul>
    </LegalLayout>
  );
}
