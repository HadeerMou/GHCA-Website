import { useState } from 'react';
import NewsletterForm from '../components/NewsletterForm';
import PageHero from '../components/PageHero';
import { issues } from '../data/siteData';

const filters = [
  ['all', 'All issues'],
  ['active', 'Active concerns'],
  ['monitoring', 'Monitoring'],
  ['ongoing', 'Ongoing'],
];

export default function IssuesPage({ onNotify }) {
  const [filter, setFilter] = useState('all');
  const [expandedIssue, setExpandedIssue] = useState(null);
  const visibleIssues = filter === 'all' ? issues : issues.filter(issue => issue.filter === filter);
  const filterCount = value => value === 'all' ? issues.length : issues.filter(issue => issue.filter === value).length;

  const selectFilter = value => {
    setFilter(value);
    setExpandedIssue(null);
  };

  return <>
    <PageHero
      title="Current Issues Impacting Garden Highway"
      description="Follow the proposals, public projects, and environmental conditions that may affect our riverfront community."
      variant="levee"
      className="issues-hero"
    />

    <section className="section section-soft">
      <div className="shell issues-layout">
        <div className="issues-main">
          <div className="issues-toolbar">
            <div className="filter-tabs" aria-label="Filter current issues">
              {filters.map(([value, label]) => <button
                type="button"
                key={value}
                className={`filter-tab ${filter === value ? 'active' : ''}`}
                aria-pressed={filter === value}
                onClick={() => selectFilter(value)}
              >{label}<span>{filterCount(value)}</span></button>)}
            </div>
            <p className="issue-results" aria-live="polite">
              Showing {visibleIssues.length} {visibleIssues.length === 1 ? 'issue' : 'issues'}
            </p>
          </div>

          <div className="issue-list">
            {visibleIssues.map(issue => {
              const expanded = expandedIssue === issue.id;
              return <article className="issue-detail" id={issue.id} key={issue.id}>
                <div className="issue-detail-media">
                  <img src={issue.image} alt={issue.imageAlt} />
                  <span className={`status status-${issue.filter}`}>{issue.status}</span>
                </div>
                <div className="issue-detail-copy">
                  <span className="issue-kicker">Community priority</span>
                  <h2>{issue.title}</h2>
                  <p>{issue.summary}</p>
                  <div className="issue-card-actions">
                    <button
                      type="button"
                      className="text-button"
                      aria-expanded={expanded}
                      aria-controls={`${issue.id}-details`}
                      onClick={() => setExpandedIssue(expanded ? null : issue.id)}
                    >{expanded ? 'Hide details' : 'What we’re tracking'}<span aria-hidden="true">{expanded ? '−' : '+'}</span></button>
                    <a href="#/documents" className="text-link">Related resources</a>
                  </div>
                  {expanded && <div className="issue-facts" id={`${issue.id}-details`}>
                    {issue.facts.map(([label, value]) => <div className="issue-fact" key={label}><strong>{label}</strong><p>{value}</p></div>)}
                  </div>}
                </div>
              </article>;
            })}
          </div>
        </div>

        <aside className="issues-support" aria-label="Issue updates and community participation">
          <div className="sidebar-card">
            <span className="eyebrow">Issue alerts</span>
            <h3>Stay close to what changes.</h3>
            <p>Receive concise notices when proposals, meetings, or public comment windows need resident attention.</p>
            <NewsletterForm id="issue-email" onNotify={onNotify} />
            <div className="side-links">
              <a href="#/documents">Browse issue documents <span>→</span></a>
              <a href="#/events">See public meetings <span>→</span></a>
              <a href="#/contact?concern">Report a concern <span>→</span></a>
            </div>
          </div>
          <div className="issue-process">
            <span className="eyebrow">Our approach</span>
            <h3>How GHCA follows an issue</h3>
            <ol>
              <li><span>1</span><div><strong>Monitor</strong><p>Review notices, plans, and agency updates.</p></div></li>
              <li><span>2</span><div><strong>Understand</strong><p>Focus on local safety, access, and quality-of-life impacts.</p></div></li>
              <li><span>3</span><div><strong>Respond</strong><p>Share clear information and appropriate ways to participate.</p></div></li>
            </ol>
          </div>
        </aside>
      </div>
    </section>

    <section className="issue-action-band">
      <div className="shell issue-action-inner">
        <div className="issue-action-mark" aria-hidden="true">!</div>
        <div><span className="eyebrow eyebrow-light">Your voice matters</span><h2>See something the community should know about?</h2><p>Send GHCA a clear description so the board can review it and help identify the appropriate next step.</p></div>
        <a className="btn btn-green" href="#/contact?concern">Report a concern</a>
      </div>
    </section>
  </>;
}
