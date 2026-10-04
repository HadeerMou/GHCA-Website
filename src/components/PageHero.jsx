export default function PageHero({ title, description, variant = '', className = '' }) {
  return <section className={`page-hero ${variant} ${className}`}><div className="shell page-hero-content"><div className="breadcrumb"><a href="#/">Home</a><span>·</span><span>{title}</span></div><h1>{title}</h1><p>{description}</p></div></section>;
}
