import NewsletterForm from '../components/NewsletterForm';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import { residentFaqs } from '../data/siteData';

export default function ResidentsPage({ onNotify }) {
  const goToUpdates = event => {
    event.preventDefault();
    document.querySelector('#resident-updates')?.scrollIntoView({ block: 'center' });
    document.querySelector('#resident-email')?.focus({ preventScroll: true });
  };
  return <>
    <PageHero title="Residents Hub" description="Everyday information and practical ways to stay prepared, informed, and connected." variant="riverbank" />
    <section className="section"><div className="shell">
      <div className="resident-intro">
        <span className="eyebrow">Welcome, neighbor</span>
        <h2 className="section-title">New to Garden Highway?</h2>
        <p className="section-lead">Get to know our riverfront community and the neighbors who help care for it. Learn about GHCA’s mission, our shared priorities, and the ways you can stay informed and connected.</p>
        <a className="btn btn-green" href="#/about">Learn more about our community</a>
      </div>
      <div className="resident-actions">
        <span className="eyebrow">Quick actions</span>
        <h2 className="section-title">How can we help?</h2>
        <div className="quick-grid">
          <a className="quick-card" href="#/contact?concern"><span className="quick-icon"><Icon name="concern" /></span><h3>Report a concern</h3><p>Tell us about a local issue or observation.</p></a>
          <a className="quick-card" href="#/contact"><span className="quick-icon"><Icon name="mail" /></span><h3>Contact GHCA</h3><p>Reach the board or send a general question.</p></a>
          <a className="quick-card" href="#/documents"><span className="quick-icon"><Icon name="document" /></span><h3>View documents</h3><p>Find governance, meeting, and project materials.</p></a>
          <a className="quick-card" href="#/residents?updates" onClick={goToUpdates}><span className="quick-icon"><Icon name="bell" /></span><h3>Sign up for updates</h3><p>Receive important news by email.</p></a>
        </div>
      </div>
    </div></section>
    <section className="section section-soft"><div className="shell"><span className="eyebrow">Common questions</span><h2 className="section-title">Frequently asked questions</h2><div className="faq-list">{residentFaqs.map(([question, answer]) => <details className="faq" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section id="resident-updates" className="resident-updates" aria-labelledby="resident-updates-title">
      <div className="shell resident-updates-inner">
        <div><h2 id="resident-updates-title">Stay Informed</h2><p>Sign up for our newsletter to receive important updates, meeting notices, and community news.</p></div>
        <NewsletterForm id="resident-email" buttonLabel="Subscribe" onNotify={onNotify} />
      </div>
    </section>
  </>;
}
