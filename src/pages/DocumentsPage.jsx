import { useState } from 'react';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import { documentCategories } from '../data/siteData';

export default function DocumentsPage() {
  const [query, setQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const normalized = query.toLowerCase().trim();
  const visibleDocuments = documentCategories.filter(item => !normalized || `${item.title} ${item.description} ${item.keywords}`.toLowerCase().includes(normalized));

  return <>
    <PageHero title="Documents & Resources" description="Important documents, reports, and meeting materials for the Garden Highway community." variant="riverbank" />
    <section className="section documents-section">
      <div className="shell">
        <form className="documents-search" role="search" onSubmit={event => event.preventDefault()}>
          <label className="sr-only" htmlFor="document-search">Search document categories</label>
          <input id="document-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search documents…" aria-describedby="document-results" />
          {query && <button type="button" className="documents-clear" onClick={() => setQuery('')}>Clear</button>}
          <button type="submit" className="documents-search-button" aria-label="Search"><Icon name="search" /></button>
        </form>
        <p id="document-results" className="sr-only" role="status">{visibleDocuments.length} of {documentCategories.length} categories</p>

        <div className="documents-list">
          {visibleDocuments.map((item, index) => {
            const expanded = expandedCategory === item.title;
            return <article className="documents-row" key={item.title}>
              <span className="documents-folder"><Icon name="folder" /></span>
              <div className="documents-copy"><h2>{item.title}</h2><p>{item.description}</p></div>
              <button type="button" className="btn btn-small btn-green" aria-expanded={expanded} aria-controls={`document-category-${index}`} onClick={() => setExpandedCategory(expanded ? null : item.title)}>
                {expanded ? 'Hide details' : 'View documents'}
              </button>
              <div id={`document-category-${index}`} className="documents-availability" hidden={!expanded}>
                <strong>Documents coming soon</strong>
                <p>No files are published in this category yet. <a href="#/contact">Contact GHCA</a> if you need a specific record.</p>
              </div>
            </article>;
          })}
        </div>
        {visibleDocuments.length === 0 && <div className="documents-empty">
          <h2>No matching categories</h2><p>Try a broader term, such as meetings, budgets, or newsletters.</p>
          <button type="button" className="btn btn-outline-dark" onClick={() => setQuery('')}>Clear search</button>
        </div>}

        <aside className="documents-help">
          <span className="documents-help-icon" aria-hidden="true">?</span>
          <div><h2>Can’t find what you’re looking for?</h2><p>Contact us and we’ll help you locate the information you need.</p></div>
          <a className="btn btn-small btn-green" href="#/contact">Contact us</a>
        </aside>
      </div>
    </section>
  </>;
}
