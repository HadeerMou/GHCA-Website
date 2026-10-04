export default function NewsletterForm({ id = 'newsletter-email', onNotify, expanded = false, buttonLabel = 'Sign up' }) {
  const submit = event => {
    event.preventDefault();
    event.currentTarget.reset();
    onNotify('Thanks — you’re on the community updates list.');
  };

  if (expanded) return <form className="contact-form" onSubmit={submit} style={{ padding: 0, border: 0, background: 'transparent', gridTemplateColumns: '1fr' }}>
    <div className="field"><label htmlFor={`${id}-name`}>Name</label><input id={`${id}-name`} required /></div>
    <div className="field"><label htmlFor={id}>Email</label><input id={id} type="email" required /></div>
    <button className="btn btn-green" type="submit">Subscribe</button>
  </form>;

  return <form className="mini-form" onSubmit={submit}><label className="sr-only" htmlFor={id}>Email address</label><input id={id} type="email" autoComplete="email" placeholder="Email address" required /><button type="submit" aria-label="Subscribe">{buttonLabel}</button></form>;
}
