export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About GHCA', path: '/about' },
  { label: 'Current Issues', path: '/current-issues' },
  { label: 'Residents', path: '/residents' },
  { label: 'Events', path: '/events' },
  { label: 'Documents', path: '/documents' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Contact', path: '/contact' },
];

export const missionAreas = [
  { icon: 'shield', title: 'Levee & Flood Protection', description: 'Advocating for strong levees and responsible flood management to keep our community safe.' },
  { icon: 'leaf', title: 'Environmental Stewardship', description: 'Protecting the river, wildlife habitat, and natural resources for future generations.' },
  { icon: 'map', title: 'Development Advocacy', description: 'Monitoring and influencing development proposals that impact our community and infrastructure.' },
  { icon: 'users', title: 'Community Engagement', description: 'Bringing neighbors together, sharing information, and making our voices heard.' },
];

export const issues = [
  {
    id: 'west-natomas',
    title: 'West Natomas Development',
    status: 'Active concern',
    filter: 'active',
    image: '/images/river-hero.png',
    imageAlt: 'Aerial view of the river corridor',
    summary: 'GHCA is following large-scale development proposals west of Natomas and their potential effects on the Garden Highway corridor.',
    preview: 'Tracking proposals that may affect flood safety, traffic, services, and the environmental character of our river corridor.',
    facts: [
      ['Why this matters', 'Flood safety, evacuation routes, traffic, habitat, and public services.'],
      ['GHCA focus', 'Transparent review, responsible mitigation, and meaningful resident input.'],
      ['Timeline', 'Planning milestones and hearing dates will be posted as confirmed.'],
      ['How to act', 'Read updates, attend public meetings, and submit informed comments.'],
    ],
  },
  {
    id: 'levee-improvements',
    title: 'Levee Improvements',
    status: 'Ongoing',
    filter: 'ongoing',
    image: '/images/levee.png',
    imageAlt: 'River levee and riprap reinforcement',
    summary: 'We track maintenance, reinforcement, inspections, and agency coordination across the levee system that protects our neighborhood.',
    preview: 'Following reinforcement, maintenance, and agency coordination along the Garden Highway levee system.',
    facts: [
      ['Why this matters', 'Reliable flood protection supports residents, property, and regional safety.'],
      ['GHCA focus', 'Sound engineering, clear communication, and minimal community disruption.'],
      ['Timeline', 'Inspection and project notices are shared when agencies publish them.'],
      ['How to act', 'Report visible concerns and follow official high-water guidance.'],
    ],
  },
  {
    id: 'river-access',
    title: 'River Access & Preservation',
    status: 'Monitoring',
    filter: 'monitoring',
    image: '/images/riverbank.png',
    imageAlt: 'Riparian habitat along a calm river',
    summary: 'GHCA supports river access that respects safety, private property, habitat, and the long-term health of the Sacramento River corridor.',
    preview: 'Supporting safe access, habitat protection, and long-term care for the Sacramento Riverfront.',
    facts: [
      ['Why this matters', 'Access, habitat, wildfire risk, litter, and erosion are closely connected.'],
      ['GHCA focus', 'Balanced solutions that preserve the riverfront’s natural character.'],
      ['Timeline', 'Updates follow public proposals and seasonal stewardship work.'],
      ['How to act', 'Join cleanups and report hazards through the proper channel.'],
    ],
  },
];

export const residentFaqs = [
  ['Do I need flood insurance?', 'Coverage needs vary by property, lender, and current flood designation. GHCA can point residents to official maps and public agencies, but insurance decisions should be made with a qualified insurer or advisor.'],
  ['How can I stay informed about development proposals?', 'Join the GHCA email list, review the Current Issues page, and watch the Events calendar for hearings and public comment dates.'],
  ['Who represents Garden Highway at public hearings?', 'GHCA may submit community comments or participate in public meetings according to board-approved positions. Residents are also encouraged to speak in their own voice.'],
  ['How can I get involved in GHCA?', 'Membership, volunteering, donations, event participation, and sharing local knowledge all strengthen the association’s work.'],
  ['Where should I report an urgent levee or flood concern?', 'For immediate danger, call emergency services. For non-emergency observations, use the contact form so GHCA can help route the concern to the appropriate public agency.'],
];

export const documentCategories = [
  { title: 'Governance', icon: 'shield', topics: ['Bylaws', 'Board policies'], description: 'Understand how the association is organized and how decisions are made.', keywords: 'governance bylaws ccb board policies' },
  { title: 'Meeting Materials', icon: 'calendar', topics: ['Agendas', 'Minutes', 'Notices'], description: 'Follow board discussions, meeting agendas, and community business.', keywords: 'meeting materials agendas minutes recordings presentations notices' },
  { title: 'Projects & Advocacy', icon: 'map', topics: ['Development', 'Levee', 'River'], description: 'Explore the proposals and public projects affecting our riverfront.', keywords: 'projects advocacy development reports levee river public comments technical' },
  { title: 'Financial Reports', icon: 'chart', topics: ['Budgets', 'Statements'], description: 'Find information about association budgets and financial reporting.', keywords: 'financial reports annual budget statements' },
  { title: 'Newsletter Archive', icon: 'mail', topics: ['Newsletters', 'Community news'], description: 'Catch up on community updates and news from around Garden Highway.', keywords: 'newsletters archive updates community news' },
];

export const eventTypes = [
  { date: 'Monthly', meta: 'Schedule', title: 'GHCA Board Meeting', description: 'Regular association business, issue updates, and resident participation.', note: 'Date and location posted in advance' },
  { date: 'Seasonal', meta: 'Volunteer', title: 'Community Cleanup', description: 'A hands-on stewardship day along a designated part of the river corridor.', note: 'Volunteer registration opens with the event notice' },
  { date: 'As set', meta: 'Public', title: 'Planning & Agency Hearings', description: 'Public meetings related to development, flood control, infrastructure, or the environment.', note: 'Links and comment instructions included when available' },
];

export const boardRoles = [
  ['P', 'President'],
  ['VP', 'Vice President'],
  ['T', 'Treasurer'],
  ['S', 'Secretary'],
  ['D', 'Director'],
  ['D', 'Director'],
];
