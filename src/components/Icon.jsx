const paths = {
  facebook: <path d="M14 22v-9h3l.5-4H14V6.5c0-1.2.4-2 2-2h2V1.2C17.5 1.1 16.4 1 15 1c-3 0-5 1.8-5 5v3H7v4h3v9Z" fill="currentColor" stroke="none" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></>,
  volunteer: <><path d="M8 13V5a1.5 1.5 0 0 1 3 0v7-9a1.5 1.5 0 0 1 3 0v9-7a1.5 1.5 0 0 1 3 0v7-4a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7h-2c-2 0-3.5-1-5-3l-4-5a1.5 1.5 0 0 1 2-2l3 3" /></>,
  donate: <><path d="m9 7-2-4h10l-2 4M8 8h8c1 2 5 5 5 9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4c0-4 4-7 5-9Z"/><path d="M14.5 12h-3a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-3M12 11v8"/></>,
  person: <><circle cx="12" cy="8" r="4" /><path d="M4 22v-2a8 8 0 0 1 16 0v2" /></>,
  folder: <><path d="M3 7V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v1" /><path d="M2 9h20l-2 12H2V9Z" fill="currentColor" fillOpacity=".9" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 11h18M7 15h2M13 15h4M7 18h2"/></>,
  chart: <><path d="M4 3v18h17M8 16v-4M13 16V7M18 16v-6"/></>,
  arrow: <><path d="M5 12h14m-5-5 5 5-5 5"/></>,
  concern: <><path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5M12 17h.01"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  document: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 12h8M8 16h8"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
  shield: <><path d="M12 3 4.5 6v5.4c0 4.6 3.2 8.2 7.5 9.6 4.3-1.4 7.5-5 7.5-9.6V6L12 3Z"/><path d="m9 12 2 2 4-5"/></>,
  leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5.7 19 3 20 2c1 7.2-2.3 13.4-9 14.6"/><path d="M2 21c0-3 1.85-5.36 5.08-6.94"/></>,
  map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
};

export default function Icon({ name }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
