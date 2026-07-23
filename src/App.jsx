import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CookieConsent from './components/CookieConsent';

const HomePage = lazy(() => import('./pages/HomePage'));
const EtablissementPage = lazy(() => import('./pages/EtablissementPage'));
const FilierePage = lazy(() => import('./pages/FilierePage'));
const FiliereDetailPage = lazy(() => import('./pages/FiliereDetailPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const CookiesPage = lazy(() => import('./pages/CookiesPage'));

function PageFallback() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Suspense fallback={<PageFallback />}><HomePage /></Suspense> },
      { path: 'etablissement', element: <Suspense fallback={<PageFallback />}><EtablissementPage /></Suspense> },
      { path: 'filieres', element: <Suspense fallback={<PageFallback />}><FilierePage /></Suspense> },
      { path: 'filieres/:serie', element: <Suspense fallback={<PageFallback />}><FiliereDetailPage /></Suspense> },
      { path: 'admissions', element: <Suspense fallback={<PageFallback />}><AdmissionsPage /></Suspense> },
      { path: 'blog', element: <Suspense fallback={<PageFallback />}><BlogPage /></Suspense> },
      { path: 'blog/:slug', element: <Suspense fallback={<PageFallback />}><BlogDetailPage /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<PageFallback />}><ContactPage /></Suspense> },
      { path: 'conditions-utilisation', element: <Suspense fallback={<PageFallback />}><TermsPage /></Suspense> },
      { path: 'politique-confidentialite', element: <Suspense fallback={<PageFallback />}><PrivacyPage /></Suspense> },
      { path: 'cookies', element: <Suspense fallback={<PageFallback />}><CookiesPage /></Suspense> },
    ]
  }
]);

export default function App() {
  return (
    <>
      <CookieConsent />
      <RouterProvider router={router} />
    </>
  );
}
