import Header from './Header';
import Footer from './Footer';

export default function Layout({ route, onNotify, children }) {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header route={route} />
    <main id="main">{children}</main>
    <Footer onNotify={onNotify} />
  </>;
}
