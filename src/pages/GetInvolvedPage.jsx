import { useEffect, useRef, useState } from 'react';
import PageHero from '../components/PageHero';

const options = ['membership', 'volunteer', 'donation'];

export default function GetInvolvedPage({ onNotify, query }) {
  const [interest, setInterest] = useState(options.includes(query) ? query : 'membership');
  const formRef = useRef(null);
  useEffect(() => { if (options.includes(query)) setInterest(query); }, [query]);

  const choose = value => {
    setInterest(value);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const submit = event => {
    event.preventDefault();
    event.currentTarget.reset();
    setInterest('membership');
    onNotify('Thanks — your interest is saved in this preview.');
  };

  return <>
    <PageHero title="Get Involved" description="Choose the role that fits you. Every member, volunteer, and supporter strengthens the community." variant="riverbank" />
    <section className="section section-soft"><div className="shell involvement-grid">
      <article className="involvement-card"><span className="quick-icon">01</span><h2>Join GHCA</h2><p>Membership connects you with local information and strengthens the association’s public voice.</p><ul className="check-list"><li>Receive member updates</li><li>Participate in association business</li><li>Support year-round advocacy</li></ul><button className="btn btn-green" onClick={() => choose('membership')}>Start membership</button></article>
      <article className="involvement-card"><span className="quick-icon">02</span><h2>Volunteer</h2><p>Contribute time, local knowledge, professional skills, or event support.</p><ul className="check-list"><li>Community outreach</li><li>Events and cleanups</li><li>Issue research and review</li></ul><button className="btn btn-green" onClick={() => choose('volunteer')}>Volunteer with GHCA</button></article>
      <article className="involvement-card"><span className="quick-icon">03</span><h2>Donate</h2><p>Financial support helps fund communication, technical review, advocacy, and stewardship.</p><ul className="check-list"><li>Community information</li><li>Professional expertise</li><li>Environmental initiatives</li></ul><button className="btn btn-green" onClick={() => choose('donation')}>Support the work</button></article>
    </div></section>
    <section className="section"><div className="shell contact-layout"><div><span className="eyebrow">Take the next step</span><h2 className="section-title">Tell us how you’d like to help.</h2><p className="section-lead">This first-build form records your interest for review. Final membership and donation processing will be connected after board approval.</p></div><form ref={formRef} className="contact-form" onSubmit={submit}><div className="field"><label htmlFor="action-name">Name</label><input id="action-name" required /></div><div className="field"><label htmlFor="action-email">Email</label><input id="action-email" type="email" required /></div><div className="field full"><label htmlFor="action-type">I’m interested in</label><select id="action-type" value={interest} onChange={event => setInterest(event.target.value)}><option value="membership">Joining GHCA</option><option value="volunteer">Volunteering</option><option value="donation">Donating</option></select></div><div className="field full"><label htmlFor="action-message">Anything you’d like us to know?</label><textarea id="action-message"></textarea></div><p className="form-note">No payment is collected on this preview site.</p><button className="btn btn-green" type="submit">Send interest</button></form></div></section>
  </>;
}
