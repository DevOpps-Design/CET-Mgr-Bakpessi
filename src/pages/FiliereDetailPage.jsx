import { Link, useParams } from 'react-router-dom';

const filieres = {
    F1: {
      titre: 'Construction mécanique',
      description: 'Maîtrisez la conception et la fabrication de systèmes mécaniques complexes.',
      objectifs: [
        'Maîtriser les outils de DAO (Conception Assistée par Ordinateur)',
        'Savoir interpréter un plan technique',
        'Fabrication de pièces mécaniques par usinage',
        'Maintenance des équipements mécaniques',
      ],
      debouche: 'Technicien en mécanique, Fabricant mécanique, Maintenance industrielle',
    },
    F2: {
      titre: 'Electrotechnique',
      description: 'Apprenez à gérer la production et la distribution de l\'énergie électrique.',
      objectifs: [
        'Installation électrique industrielle',
        'Maintenance des équipements électriques',
        'Automatisme et contrôle',
        'Énergies renouvelables',
      ],
      debouche: 'Technicien électricien, Installateur électrique, Automaticien',
    },
    F3: {
      titre: 'Electronique',
      description: 'Plongez au cœur des circuits et des systèmes embarqués.',
      objectifs: [
        'Circuits électroniques',
        'Systèmes embarqués',
        'Automatismes',
        'Maintenance électronique',
      ],
      debouche: 'Technicien électronique, Technicien en systèmes embarqués',
    },
    F4: {
      titre: 'Génie civil',
      description: 'Construisez l\'avenir : De la conception à la réalisation d\'infrastructures durables.',
      objectifs: [
        'Dessin technique et DAO',
        'Bâtiment et travaux publics',
        'Supervision de chantier',
        'Gestion de projet',
      ],
      debouche: 'Technicien BTP, Dessinateur, Superviseur de chantier',
    },
    E: {
      titre: 'Mathématiques et Techniques',
      description: 'Formation scientifique avancée alliant mathématiques, physique et technologie.',
      objectifs: [
        'Raisonnement mathématique et modélisation',
        'Sciences physiques et technologies',
        'Résolution de problèmes techniques',
        'Préparation aux études supérieures scientifiques',
      ],
      debouche: 'Technicien supérieur, Études d\'ingénieur, Laboratoire, Data & métiers du numérique',
    },
    G1: {
      titre: 'Secrétariat',
      description: 'Formation axée sur la bureautique et l\'organisation administrative.',
      objectifs: [
        'Bureautique',
        'Organisation administrative',
        'Communication professionnelle',
        'Gestion de courrier',
      ],
      debouche: 'Secrétaire, Assistant administratif',
    },
    G2: {
      titre: 'Comptabilité',
      description: 'Apprentissage des bases de la comptabilité et de la gestion financière.',
      objectifs: [
        'Comptabilité générale',
        'Gestion financière',
        'Analyse comptable',
        'Logiciels de gestion',
      ],
      debouche: 'Comptable, Assistant de gestion',
    },
    G3: {
      titre: 'Gestion',
      description: 'Formation orientée vers la gestion des entreprises.',
      objectifs: [
        'Gestion d\'entreprise',
        'Management',
        'Organisation',
        'Planification',
      ],
      debouche: 'Responsable administration, Gestionnaire',
    },
  };

export default function FiliereDetailPage() {
  const { serie = 'F1' } = useParams();
  const filiere = filieres[serie] || filieres.F1;

  return (
    <>
      <section className="hero-cetmb py-5">
        <div className="container py-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-5 mb-3">{serie} - {filiere.titre}</h1>
              <p className="lead mb-4">
                {filiere.description} Une formation d'excellence pour les techniciens de demain.
              </p>
              <Link to="/admissions" className="btn btn-primary">
                S'inscrire dans cette filière
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <h2 className="h2 mb-4">Présentation de la filière</h2>
              <p className="mb-3">
                La série {serie} ({filiere.titre}) forme des techniciens supérieurs capables de participer aux études techniques, à la préparation, à l'organisation et à la conduite de travaux dans leur domaine.
              </p>
              <p className="mb-3">
                C'est une voie pour ceux qui souhaitent façonner leur avenir, alliant rigueur scientifique et créativité technique.
              </p>
              <p className="mb-0">
                Cette formation est reconnue au niveau national et ouvre les portes à de nombreuses opportunités d'emploi au Togo et à l'international.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="card-cetmb">
                <h3 className="h5 mb-3">Informations</h3>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between border-bottom pb-2 mb-2">
                    <span className="text-muted">Durée</span>
                    <strong>3 ans</strong>
                  </li>
                  <li className="d-flex justify-content-between border-bottom pb-2 mb-2">
                    <span className="text-muted">Diplôme</span>
                    <strong>BT / CAP</strong>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span className="text-muted">Niveau requis</span>
                    <strong>BEPC</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <h2 className="h2 mb-4">Objectifs de la formation</h2>
          <div className="row g-4">
            {filiere.objectifs.map((objectif, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card-cetmb h-100">
                  <i data-lucide="check-circle-2" className="icon-sm text-success me-2"></i>
                  <span>{objectif}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="h2 mb-4">Débouchés professionnels</h2>
              <p className="mb-4">
                Après votre formation, plusieurs opportunités s'offrent à vous :
              </p>
              <div className="card-cetmb">
                <h3 className="h5 mb-3">Métiers accessibles</h3>
                <p className="mb-0">{filiere.debouche}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-cetmb bg-primary-cetmb text-white">
                <h3 className="h5 mb-3 text-white">Poursuite d'études</h3>
                <p className="mb-0 opacity-75">
                  Vous pouvez également poursuivre vos études vers un BTS, une licence professionnelle ou un diplôme équivalent pour spécialiser davantage vos compétences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container text-center py-4">
          <h2 className="h2 mb-3">Intéressé par cette filières?</h2>
          <p className="mb-4 text-muted">
            Inscrivez-vous dès maintenant pour la prochaine année scolaire.
          </p>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            <Link to="/admissions" className="btn btn-primary">S'inscrire</Link>
            <Link to="/filieres" className="btn btn-outline-primary">Voir toutes les filières</Link>
          </div>
        </div>
      </section>
    </>
  );
}