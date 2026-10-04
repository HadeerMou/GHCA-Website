import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import { boardRoles } from '../data/siteData';

export default function AboutPage() {
  return <>
    <PageHero title="About GHCA" description="Our mission, our history, and the board that serves you." variant="riverbank" />
    <section className="section about-section">
      <div className="shell about-layout">
        <div className="about-story">
          <section aria-labelledby="about-mission">
            <h2 id="about-mission" className="about-heading">Our mission</h2>
            <p>The Garden Highway Community Association advocates for the safety, well-being, and quality of life of our riverfront community. We work to protect our levees, promote responsible development, preserve open space and the environment, and ensure our voices are heard in decisions that affect our future.</p>
          </section>
          <section aria-labelledby="about-history">
            <h2 id="about-history" className="about-heading">Our history</h2>
            <p>Garden Highway’s story is shaped by the Sacramento River, agriculture, and the neighbors who call this corridor home. Flood protection, natural habitat, and a close connection to the river remain central to its character.</p>
            <p>GHCA brings that local knowledge into community advocacy and public decisions, helping residents stay informed and take part in shaping the neighborhood’s future.</p>
          </section>
        </div>

        <section className="about-board" aria-labelledby="about-board-heading">
          <h2 id="about-board-heading" className="about-heading">Board of directors</h2>
          <div className="board-grid">
            {boardRoles.map(([initials, role], index) => <article className="board-card" key={`${initials}-${index}`}>
              <div className="board-avatar" role="img" aria-label={`${role} portrait placeholder`}><Icon name="person" /></div>
              <h3>{role}</h3>
            </article>)}
          </div>
          <p className="board-roster-note">Board names, portraits, and biographies are pending approval.</p>
          <a className="board-contact" href="#/contact">Contact the board <Icon name="arrow" /></a>
        </section>
      </div>
    </section>

    <section className="about-statement" aria-label="Our community commitment">
      <div className="shell about-statement-inner">
        <Icon name="leaf" />
        <p>We are neighbors. We are stewards. We are Garden Highway.</p>
      </div>
    </section>
  </>;
}
