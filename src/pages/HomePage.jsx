import Icon from '../components/Icon';
import { issues, missionAreas } from '../data/siteData';

export default function HomePage() {
  return <>
    <section className="hero">
      <div className="shell hero-content"><span className="eyebrow eyebrow-light">Garden Highway · Sacramento River</span><h1 className="display">Protecting our community, riverfront, and levee.</h1><p>GHCA brings neighbors together to advance flood safety, responsible development, and thoughtful stewardship of the place we call home.</p><div className="hero-actions"><a className="btn btn-green" href="#/get-involved">Join GHCA</a><a className="btn btn-outline-light" href="#/current-issues">View current issues</a></div></div>
      <div className="hero-badge">Community-led since 1982</div>
    </section>
    <section className="mission-strip" aria-label="What we do"><div className="shell mission-grid">{missionAreas.map(item => <article className="mission-item" key={item.title}><Icon name={item.icon} /><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>
    <section className="section section-soft"><div className="shell">
      <div className="section-head"><div><span className="eyebrow">On our radar</span><h2 className="section-title">Issues that shape Garden Highway</h2></div><a className="text-link" href="#/current-issues">Explore all issues</a></div>
      <div className="issue-grid">{issues.map((issue, index) => <article className={`issue-card ${index === 0 ? 'featured' : ''}`} key={issue.id}><img src={issue.image} alt={issue.imageAlt} /><div className="issue-card-body"><span className={`status ${issue.filter === 'ongoing' ? 'gold' : ''}`}>{issue.status}</span><h3>{issue.title}</h3><p>{issue.preview}</p><a className="text-link" href="#/current-issues">Learn more</a></div></article>)}</div>
    </div></section>
    <section className="split-section"><div className="split-photo" role="img" aria-label="Tree-lined Sacramento Valley river"></div><div className="split-copy"><div className="split-copy-inner"><span className="eyebrow eyebrow-light">Your voice matters</span><h2 className="section-title">Local knowledge makes better decisions.</h2><p>GHCA helps residents understand proposals, participate in public processes, and work together on the issues that affect daily life.</p><div className="action-list"><div className="action-row"><div className="action-number">01</div><div><strong>Know what is changing</strong><span>Get concise issue briefs and meeting alerts.</span></div></div><div className="action-row"><div className="action-number">02</div><div><strong>Share what you see</strong><span>Report local concerns and community observations.</span></div></div><div className="action-row"><div className="action-number">03</div><div><strong>Take part</strong><span>Join, volunteer, attend a meeting, or submit a public comment.</span></div></div></div><a className="btn btn-white" href="#/get-involved">Find your way to help</a></div></div></section>
    <section className="section"><div className="shell news-grid">
      <div><div className="section-head"><div><span className="eyebrow">Latest updates</span><h2 className="section-title">What neighbors need to know</h2></div></div><div className="updates-list"><article className="update-item"><span className="update-date">Board update</span><div><h3>Community planning and project review</h3><p>A concise summary of current agency coordination and next public milestones.</p></div></article><article className="update-item"><span className="update-date">Levee report</span><div><h3>Seasonal inspection overview</h3><p>What the latest routine inspection means for residents along the corridor.</p></div></article><article className="update-item"><span className="update-date">Resident note</span><div><h3>Preparing for high-water season</h3><p>Trusted resources and simple steps to keep close at hand.</p></div></article></div></div>
      <div><div className="section-head"><div><span className="eyebrow">Upcoming</span><h2 className="section-title">Meetings & events</h2></div><a className="text-link" href="#/events">Full calendar</a></div><div className="event-stack"><article className="event-card"><div className="event-date"><strong>3rd</strong><span>Wed</span></div><div className="event-copy"><h3>GHCA Board Meeting</h3><p>Monthly · Details posted in advance</p></div></article><article className="event-card"><div className="event-date"><strong>Fall</strong><span>Season</span></div><div className="event-copy"><h3>Riverfront Community Cleanup</h3><p>Volunteer day · Date to be announced</p></div></article><article className="event-card"><div className="event-date"><strong>As</strong><span>Posted</span></div><div className="event-copy"><h3>Public Hearings</h3><p>City and regional meeting notices</p></div></article></div></div>
    </div></section>
    <section className="home-involvement" aria-labelledby="home-involvement-title">
      <div className="shell">
        <div className="home-involvement-heading">
          <h2 id="home-involvement-title">Get Involved</h2>
          <p>Join your neighbors in protecting what makes<br className="home-involvement-break" /> Garden Highway a special place to live.</p>
        </div>
        <div className="home-involvement-grid">
          <a className="home-involvement-card" href="#/get-involved?membership">
            <Icon name="users" /><h3>Join GHCA</h3><p>Become a member<br />and stay informed.</p>
          </a>
          <a className="home-involvement-card" href="#/get-involved?volunteer">
            <Icon name="volunteer" /><h3>Volunteer</h3><p>Share your time and<br />talents.</p>
          </a>
          <a className="home-involvement-card" href="#/get-involved?donation">
            <Icon name="donate" /><h3>Donate</h3><p>Support our advocacy<br />and community efforts.</p>
          </a>
        </div>
      </div>
    </section>
  </>;
}
