import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DocumentsPage from './pages/DocumentsPage';
import EventsPage from './pages/EventsPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import HomePage from './pages/HomePage';
import IssuesPage from './pages/IssuesPage';
import ResidentsPage from './pages/ResidentsPage';

const pageTitles = {
  '/': 'GHCA · Garden Highway Community Association',
  '/current-issues': 'Current Issues · GHCA',
  '/residents': 'Residents Hub · GHCA',
  '/documents': 'Documents & Resources · GHCA',
  '/events': 'Events & Meetings · GHCA',
  '/get-involved': 'Get Involved · GHCA',
  '/about': 'About GHCA',
  '/contact': 'Contact GHCA',
};

function readLocation() {
  const value = window.location.hash.replace(/^#/, '') || '/';
  const [path, query = ''] = value.split('?');
  return { path: path.startsWith('/') ? path : `/${path}`, query };
}

function useHashRoute() {
  const [location, setLocation] = useState(readLocation);
  useEffect(() => {
    const update = () => setLocation(readLocation());
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  return location;
}

export default function App() {
  const { path, query } = useHashRoute();
  const [toast, setToast] = useState('');

  useEffect(() => {
    document.title = pageTitles[path] || pageTitles['/'];
    window.scrollTo(0, 0);
    if (path === '/residents' && query === 'updates') setTimeout(() => document.querySelector('#resident-updates')?.scrollIntoView({ block: 'center' }), 50);
  }, [path, query]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  const pageProps = { onNotify: setToast, query };
  const pages = {
    '/': <HomePage />,
    '/current-issues': <IssuesPage {...pageProps} />,
    '/residents': <ResidentsPage {...pageProps} />,
    '/documents': <DocumentsPage {...pageProps} />,
    '/events': <EventsPage />,
    '/get-involved': <GetInvolvedPage {...pageProps} />,
    '/about': <AboutPage />,
    '/contact': <ContactPage {...pageProps} />,
  };

  return <Layout route={path} onNotify={setToast}>
    {pages[path] || <HomePage />}
    <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">{toast}</div>
  </Layout>;
}
