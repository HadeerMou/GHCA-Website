import NewsletterForm from './NewsletterForm';
import Icon from './Icon';
import { contactDetails } from '../data/contactData';

export default function Footer({ onNotify }) {
  return <footer className="site-footer">
    <div className="shell footer-grid">
      <div>
        <a className="brand footer-brand" href="#/"><span className="brand-mark">GHCA</span><span className="footer-brand-name">Garden Highway<br />Community Association</span></a>
        <p>Protecting our community, riverfront, and levee for today and tomorrow.</p>
        <div className="footer-socials" role="group" aria-label="Social media and email">
          {['facebook', 'instagram'].map(platform => {
            const label = platform === 'facebook' ? 'Facebook' : 'Instagram';
            return contactDetails[platform]
              ? <a key={platform} href={contactDetails[platform]} target="_blank" rel="noopener noreferrer" aria-label={`GHCA on ${label} (opens in a new tab)`}><Icon name={platform} /></a>
              : <span key={platform} className="footer-social-pending" role="img" aria-label={`${label} link not yet available`} title={`${label} link not yet available`}><Icon name={platform} /></span>;
          })}
          <a href={`mailto:${contactDetails.email}`} aria-label="Email GHCA"><Icon name="mail" /></a>
        </div>
      </div>
      <div><h3>Quick links</h3><a href="#/about">About GHCA</a><a href="#/current-issues">Current Issues</a><a href="#/residents">Residents</a><a href="#/events">Events</a><a href="#/documents">Documents</a><a href="#/get-involved">Get Involved</a></div>
      <div><h3>Contact us</h3><address className="footer-contact">
        {contactDetails.mailingAddress && <span>{contactDetails.mailingAddress}</span>}
        <span>{contactDetails.locality}</span>
        <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        {contactDetails.phone && <a href={`tel:${contactDetails.phone.replace(/[^+\d]/g, '')}`}>{contactDetails.phone}</a>}
      </address></div>
      <div><h3>Newsletter sign up</h3><p>Stay informed about important updates and events.</p><NewsletterForm id="footer-email" buttonLabel="Subscribe" onNotify={onNotify} /></div>
    </div>
    <div className="shell footer-bottom"><span>© 2026 Garden Highway Community Association</span><span>Community-led · Nonpartisan · River-minded</span></div>
  </footer>;
}
