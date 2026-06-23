// Technology detail content — Gunnar's proprietary ranging hardware + software.
// Sourced from the project's existing technology data (originally derived from
// gunnarenergyservices.com, the CIM, and public talks). No specs invented;
// fields are omitted where a value isn't known rather than guessed.

export const technology = [
  {
    slug: 'deadahead',
    name: 'DeadAhead™',
    kind: 'hardware',
    type: 'Active Magnetic Ranging · While Drilling',
    tagline: "The world's first commercial wired-pipe ranging-while-drilling system.",
    summary:
      'Continuous active ranging from the bottom-hole assembly — no wireline trips — delivering roughly 18× the power of conventional wireline AMR for an earlier, stronger locate.',
    overview: [
      'Traditional active ranging stops drilling to run a tool on wireline, measures, then trips out and resumes — a cycle repeated many times on a single intercept. DeadAhead™ removes that cycle. By transmitting power and data through wired drillpipe, it ranges continuously while drilling ahead toward the target.',
      'That continuous link lets DeadAhead deliver roughly 18× the current of a wireline system to the target casing, producing a far stronger magnetic signal that can be measured earlier and at greater separation. The result is an earlier first locate, more steering margin, and zero re-entry runs on the critical path to a relief-well kill.',
      "Deployed commercially for the first time anywhere on ExxonMobil's North Dakota intercept in 2025, DeadAhead held 5–10 ft separation across 5,500 ft of continuous ranging and intercepted at the exact planned depth of 8,642 ft MD.",
    ],
    specs: [
      { k: 'Range', v: 'up to 450 ft' },
      { k: 'Conveyance', v: 'Wired drillpipe (RWD)' },
      { k: 'Best for', v: 'Relief wells, blowout intercept' },
      { k: 'Status', v: 'Patented — U.S. 11,781,421 B2' },
    ],
    footnote:
      'U.S. Patent 11,781,421 B2 — reaffirmed by USPTO PTAB (2025). Co-presented at SPE/ISCWSA #62, Alaska, Sept 2025.',
    appliedTo: [
      { t: 'Relief Well & Blowout Intercept', href: '/services/relief-wells/' },
      { t: 'Plug & Abandonment', href: '/services/plug-and-abandonment/' },
      { t: 'Well Re-Entry & Milling', href: '/services/well-re-entry/' },
    ],
  },
  {
    slug: 'deadset',
    name: 'DeadSet™',
    kind: 'hardware',
    type: 'Active Magnetic Ranging · Wireline',
    tagline: 'All-in-one, no-access active ranging — deployable on short notice.',
    summary:
      'Combines active magnetic ranging, passive ranging and gyro survey in a single wireline system that locates a target casing to roughly ±1 ft.',
    overview: [
      "DeadSet™ injects an electrical current that magnetizes the target well's steel casing, then measures the resulting field to compute exact distance and direction. Because it needs no access to the target well, it can locate wells with damaged casing, missing surveys or lost surface access.",
      'The tool integrates AMR, PMR and a gyro in one run, is rated to 175 °C, and can be mobilized and operated remotely on short notice — which matters when a well is already out of control.',
      'It is Gunnar’s workhorse for relief-well intercepts and complex plug & abandonment where a rig is on location and wireline conveyance is practical.',
    ],
    specs: [
      { k: 'Range', v: '100–300 ft' },
      { k: 'Accuracy', v: '±1 ft' },
      { k: 'Temp rating', v: '175 °C' },
      { k: 'Conveyance', v: 'Wireline (no-access)' },
      { k: 'Best for', v: 'Relief wells, P&A' },
    ],
    appliedTo: [
      { t: 'Relief Well & Blowout Intercept', href: '/services/relief-wells/' },
      { t: 'Plug & Abandonment', href: '/services/plug-and-abandonment/' },
      { t: 'CCUS Well Integrity', href: '/services/ccus/' },
    ],
  },
  {
    slug: 'ctrwd',
    name: 'CTRWD™',
    kind: 'hardware',
    type: 'Ranging While Drilling · Coiled Tubing',
    tagline: "Active ranging on coiled tubing — where a rig won't fit and the well is live.",
    summary:
      'A first-of-its-kind magnet source and sensor on a 3.5-inch coiled-tubing BHA that ranges under pressure with continuous well-control barriers.',
    overview: [
      "Many of the hardest abandonment and intercept jobs sit where a drilling rig can't go — dense urban sites, platforms with no rig, or wells that must stay under pressure. CTRWD™ puts the ranging source and sensor on a coiled-tubing bottom-hole assembly so the work can be done without a rig and without killing the well first.",
      'Running on 3.5-inch coiled tubing, it deploys with continuous well-control barriers in place and ranges while advancing — well suited to high-inclination geometry and deep, complex abandonment.',
      'It was the technology that located and intercepted the unknown geometry of the 1950s-era Expand Energy legacy well in Louisiana at 1,068 ft MD, after 116 days of failed surface intervention.',
    ],
    specs: [
      { k: 'Range', v: '~150 ft' },
      { k: 'Tool OD', v: '3.5 in' },
      { k: 'Conveyance', v: 'Coiled tubing (live well)' },
      { k: 'Best for', v: 'Urban / deep P&A, ghost wells' },
    ],
    appliedTo: [
      { t: 'Plug & Abandonment', href: '/services/plug-and-abandonment/' },
      { t: 'Well Re-Entry & Milling', href: '/services/well-re-entry/' },
      { t: 'Relief Well & Blowout Intercept', href: '/services/relief-wells/' },
    ],
  },
  {
    slug: 'torped',
    name: 'Torped™',
    kind: 'hardware',
    type: 'Active Magnetic Source',
    tagline: 'A downhole rotating magnet that projects a strong active field at range.',
    summary:
      'A downhole rotary magnet source that generates a strong, controllable magnetic field for intersection and twinning applications at greater separations.',
    overview: [
      "Some applications — well twinning for SAGD, closed-loop geothermal intersection — need a strong active source placed in one well so the drilling well can range to it at distance. Torped™ is that source: a downhole rotating magnet that projects a powerful, controllable field.",
      "Because the field is generated by a rotating permanent magnet rather than injected current, it suits configurations where current injection isn't practical, and supports ranging out to roughly 300 ft.",
    ],
    specs: [
      { k: 'Range', v: '~300 ft' },
      { k: 'Type', v: 'Active source (rotating magnet)' },
      { k: 'Best for', v: 'SAGD twinning, geothermal intersection' },
    ],
    appliedTo: [
      { t: 'Geothermal Well Placement', href: '/services/geothermal/' },
      { t: 'Solution Mining Connections', href: '/services/solution-mining/' },
    ],
  },
  {
    slug: 'everready',
    name: 'EverReady™',
    kind: 'hardware',
    type: 'Passive Magnetic Ranging · AI-Driven',
    tagline: 'Passive ranging from data you already have — no extra rig time, no new tools.',
    summary:
      'Non-intrusive passive ranging computed from existing MWD/GWD survey data, interpreted remotely with AI and proprietary interference processing.',
    overview: [
      "Not every job needs an active source. EverReady™ reads the residual magnetism already present in a target well's casing using the MWD/GWD survey data the drilling well is already collecting — so it adds no rig time and puts no new tools downhole.",
      'Interpretation is fully remote and AI-driven, with proprietary processing that separates the target signal from magnetic interference. That makes EverReady ideal for collision avoidance and well spacing on multi-well pads, and for SAGD.',
      'Passive ranging works at shorter range than active methods; when separation or confidence demands more, Gunnar steps up to DeadSet™ or DeadAhead™.',
    ],
    specs: [
      { k: 'Range', v: '~30 ft' },
      { k: 'Type', v: 'Passive / remote' },
      { k: 'Input', v: 'Existing MWD/GWD data' },
      { k: 'Best for', v: 'Collision avoidance, SAGD, spacing' },
    ],
    appliedTo: [
      { t: 'Geothermal Well Placement', href: '/services/geothermal/' },
      { t: 'Solution Mining Connections', href: '/services/solution-mining/' },
    ],
  },
  {
    slug: 'topgun',
    name: 'TopGun™',
    kind: 'software',
    type: 'Software · AI Ranging & Interpretation',
    tagline: 'The only commercial end-to-end ranging software in the industry.',
    summary:
      'A web-based suite that turns raw magnetic measurements into real-time intercept decisions — automated analysis, 3D visualization and a GPT-driven interpretation layer.',
    overview: [
      'Every Gunnar ranging method feeds one brain. TopGun™ ingests the raw magnetic data from the hardware and automates the analysis that used to take an expert hours — presenting distance, direction and uncertainty in real time.',
      'A 3D visualization shows the drilling well closing on the target so the directional team can steer with confidence, and a GPT-driven interpretation layer surfaces what the numbers mean and what to do next.',
      "It is, to Gunnar's knowledge, the only commercial end-to-end ranging software in the industry — the connective tissue that lets one team run engineering, ranging and steering as a single loop.",
    ],
    specs: [
      { k: 'Type', v: 'Web-based suite' },
      { k: 'Role', v: 'Ranging analysis · 3D viz · decision support' },
      { k: 'AI', v: 'GPT-driven interpretation layer' },
    ],
    appliedTo: [
      { t: 'Active Magnetic Ranging', href: '/technology/' },
      { t: 'Relief Well & Blowout Intercept', href: '/services/relief-wells/' },
    ],
  },
  {
    slug: 'clearcut',
    name: 'ClearCut™',
    kind: 'software',
    type: 'Software · Intercept & Milling',
    tagline: 'Turns intercept geometry into real-world milling parameters.',
    summary:
      'A precision milling simulation that converts the intercept solution into the milling parameters the field crew executes — cutting rig time and risk at the point of contact.',
    overview: [
      'Hitting the target is only half of an intercept; once the relief well reaches the target you have to establish communication by milling into it. ClearCut™ simulates that milling operation, translating intercept geometry into concrete parameters the crew can execute.',
      'By modeling the cut before it happens, ClearCut reduces uncertainty at the most delicate moment of the job — lowering rig time and operational risk at the point of contact.',
    ],
    specs: [
      { k: 'Type', v: 'Simulation software' },
      { k: 'Role', v: 'Milling planning at intercept' },
      { k: 'Best for', v: 'Relief wells, re-entry' },
    ],
    appliedTo: [
      { t: 'Relief Well & Blowout Intercept', href: '/services/relief-wells/' },
      { t: 'Well Re-Entry & Milling', href: '/services/well-re-entry/' },
    ],
  },
];

export const getTech = (slug) => technology.find((t) => t.slug === slug);
