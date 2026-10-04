import { useEffect, useState } from 'react';
import { navigation } from '../data/siteData';

export default function Header({ route }) {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [route]);
  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return <header className="site-header">
    <div className="utility-bar"><div className="shell utility-inner"><span>Serving the Garden Highway community since 1982</span><div><a href="#/contact">Contact</a><a href="#/documents">Resources</a></div></div></div>
    <div className="shell nav-row">
      <a className="brand" href="#/" aria-label="GHCA home"><span className="brand-mark">GHCA</span><span className="brand-name">Garden Highway<br />Community Association</span></a>
      <button className="menu-button" type="button" aria-label={`${open ? 'Close' : 'Open'} navigation menu`} aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(value => !value)}><span></span><span></span><span></span></button>
      <nav id="site-nav" className={`site-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
        {navigation.map(item => <a key={item.path} aria-current={route === item.path ? 'page' : undefined} className={route === item.path ? 'active' : ''} href={`#${item.path}`}>{item.label}</a>)}
      </nav>
      <div className="nav-actions"><a className="btn btn-small btn-green" href="#/get-involved">Join GHCA</a><a className="btn btn-small btn-outline-light" href="#/get-involved?donation">Donate</a></div>
    </div>
  </header>;
}
