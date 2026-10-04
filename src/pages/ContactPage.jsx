import { useState } from 'react';
import PageHero from '../components/PageHero';
import { contactDetails } from '../data/contactData';

export default function ContactPage({ onNotify, query }) {
  const [topic, setTopic] = useState(query === 'concern' ? 'Report a concern' : 'General question');
  const submit = event => {
    event.preventDefault();
    event.currentTarget.reset();
    setTopic('General question');
    onNotify('Your message is saved in this preview. Connect the board inbox before launch.');
  };

  return <>
    <PageHero title="Contact GHCA" description="Send a question, share a local concern, or get in touch with the board." variant="levee" />
    <section className="section section-soft"><div className="shell contact-layout"><div><span className="eyebrow">We’re here to help</span><h2 className="section-title">Start the conversation.</h2><p className="section-lead">Use the form for general questions, resident observations, or board correspondence.</p><div className="contact-cards"><div className="contact-card"><strong>Email</strong><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></div>
      <div className="contact-card"><strong>{contactDetails.mailingAddress ? 'Mailing address' : 'Location'}</strong>{contactDetails.mailingAddress && <div>{contactDetails.mailingAddress}</div>}<span>{contactDetails.locality}</span></div>
      {contactDetails.phone && <div className="contact-card"><strong>Phone</strong><a href={`tel:${contactDetails.phone.replace(/[^+\d]/g, '')}`}>{contactDetails.phone}</a></div>}<div className="contact-card"><strong>Response time</strong><span>Community volunteers respond as availability allows.</span></div></div></div><form className="contact-form" onSubmit={submit}><div className="field"><label htmlFor="contact-name">Name</label><input id="contact-name" required /></div><div className="field"><label htmlFor="contact-email">Email</label><input id="contact-email" type="email" required /></div><div className="field full"><label htmlFor="contact-topic">Topic</label><select id="contact-topic" value={topic} onChange={event => setTopic(event.target.value)}><option>General question</option><option>Report a concern</option><option>Current issue</option><option>Membership</option><option>Documents</option></select></div><div className="field full"><label htmlFor="contact-message">Message</label><textarea id="contact-message" required></textarea></div><p className="form-note">For an immediate threat to life or property, contact emergency services directly.</p><button className="btn btn-green" type="submit">Send message</button></form></div></section>
  </>;
}
