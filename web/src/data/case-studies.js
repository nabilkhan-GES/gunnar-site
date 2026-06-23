// Case studies — ANONYMIZED. Client and site names are withheld; each project
// is identified by location and project type, with approximate technical
// figures and the core of what made it notable. Sourced from Gunnar's internal
// "Case Studies 2020–Present" record. No client identities or confidential
// financials are published here.

export const caseStudies = [
  // ── Featured / fully-written ───────────────────────────────────────────
  {
    slug: 'north-dakota-relief-intercept',
    img: '/assets/case-north-dakota.jpg',
    name: 'Relief-Well Intercept, Kill & P&A',
    location: 'North Dakota, USA',
    year: '2025',
    region: 'United States',
    featured: true,
    title: "World-first commercial wired-pipe AMR-While-Drilling — intercept, kill and P&A",
    scope: ['Intercept', 'Kill', 'P&A', 'Regulator-witnessed'],
    challenge: [
      'During conventional P&A, tubing parted at ~1,000 ft; milling to dress the top failed.',
      'Only a ~10 ft window below the stuck packer for a precise intercept.',
      'Target builds ~18°/100 ft DLS immediately below the packer.',
      'High-resistivity salt formation and oil-based mud, with poor target surveys at ~500-ft intervals.',
    ],
    solution:
      "DeadAhead™ wired-pipe AMR-While-Drilling — the world's first commercial deployment. Continuous live ranging from the BHA through a six-phase intercept, holding 5–10 ft separation to land on the exact planned depth.",
    outcome: '~2 weeks saved vs. wireline AMR · ~$2M direct savings · 10+ runs avoided',
    result: {
      metric: '~8,640 ft',
      metricLabel: 'MD — intercepted at exact planned depth',
      points: [
        'Located target at ~3,500 ft',
        'Held 5–10 ft separation over ~5,500 ft of continuous ranging',
        'Well killed via bullhead',
        'Milled, re-entered and cemented under regulator witness',
      ],
    },
    meta: { ranging: 'AMR-WD', deployment: 'Wired drill pipe', reentry: 'Yes' },
  },
  {
    slug: 'louisiana-legacy-blowout',
    img: '/assets/case-louisiana.jpg',
    name: 'Legacy-Well Blowout Intercept & Kill',
    location: 'Louisiana, USA',
    year: '2025',
    region: 'United States',
    featured: true,
    title: 'Uncontrolled flow stopped after 116 days of failed surface intervention',
    scope: ['Blowout Intervention', 'Well Kill', 'P&A'],
    challenge: [
      "Unexpected water flow surfaced on agricultural land; excavation revealed the stump of an unpermitted 1950s-era legacy well.",
      'Subsurface position and orientation completely unknown.',
      'Surface intervention attempted for 116 days — the well leaked ~5,000 bbl/day and all surface methods failed.',
    ],
    solution:
      'CTRWD™ Coiled-Tubing Ranging-While-Drilling — live ranging from the BHA during drilling, with a ~25°/100 ft build to navigate a shallow intercept at ~1,050 ft. Two-phase mapping, then a planned sidetrack.',
    outcome: '15 days vs. 116 days of surface attempts · ~$2M saved',
    result: {
      metric: '15 days',
      metricLabel: 'to well control',
      points: [
        'Located the ~70-year-old legacy well and reconstructed its geometry',
        'Legacy well drifted ~15° inclination in the first ~1,000 ft',
        'Mechanical contact at ~1,070 ft MD; window milled',
        'Flow arrested; dyed-circulation confirmed communication; well killed, plugged and abandoned',
      ],
    },
    meta: { ranging: 'CTRWD', deployment: 'Coiled tubing (live well)', reentry: 'Yes' },
  },
  {
    slug: 'california-relief-well-pa',
    img: '/assets/case-california-gas.jpg',
    name: 'Relief-Well P&A — Legacy Gas Field',
    location: 'California, USA',
    year: '2020 – ongoing',
    region: 'United States',
    featured: true,
    title: 'Multi-well relief-well P&A of 1950s-era wells at a major legacy gas-storage field',
    scope: ['Relief Well P&A', 'Dual Intercept', 'Re-entry'],
    challenge: [
      'A 1950s-era injection well at a major gas-storage field suffered a casing failure and a large methane release; a state of emergency and community relocation followed.',
      'The aging field now requires precise relief-well intercepts to permanently plug wells.',
      'Targets carry poor or absent surveys, with sidetracks and downhole restrictions in the way.',
    ],
    solution:
      'Sidetrack past existing sidetracks and restrictions, then directionally drill and range to each target with DeadSet™ AMR, EverReady™ PMR-While-Drilling and Gyro MWD — milling and re-entering casing from 8-5/8" production strings down to 5.5" liners, even with poor or absent target surveys.',
    outcome: '8 precise intercepts across 4 wells · state regulator approved',
    result: {
      metric: '8 intercepts',
      metricLabel: 'across the 4-well campaign',
      points: [
        'Re-entered 8-5/8" and 6-5/8" production casing and 5.5" liner targets',
        'Dual intercept: 5.5" liner at ~8,825 ft MD + 7" × 2-3/8" at ~8,690 ft MD',
        'Overcame an electrically continuous parasite sidetrack and missing surveys',
        'All steps witnessed and approved by the state regulator',
      ],
    },
    meta: { ranging: 'AMR + PMR', deployment: 'Wireline + While Drilling', reentry: 'Yes' },
  },
  {
    slug: 'gulf-offshore-well-location',
    img: '/assets/case-gulf-offshore.jpg',
    name: 'Offshore Well Location & Intercept P&A',
    location: 'Gulf of Mexico',
    year: '2025 – ongoing',
    region: 'Gulf of Mexico',
    featured: true,
    title: 'Locating and plugging a cluster of buried offshore wells — among the longest-running releases on record',
    scope: ['Offshore P&A', 'Well Location', 'Relief / Intercept'],
    challenge: [
      'A hurricane-driven seafloor mudslide toppled an offshore platform, burying a cluster of ~28 wells under sediment in ~475 ft of water.',
      'Chronic release ongoing for years; well positions uncertain with no surface access.',
      "Wells must be located and intercepted entirely subsurface, where usable surveys don't exist.",
    ],
    solution:
      'Magnetic-ranging-led location and intercept: AMR + PMR while-drilling to deterministically locate each buried wellbore, then drill intercept / relief wells to permanently plug and abandon the cluster.',
    outcome: 'Early engineering underway — execution targeted end-Q4 2026 / Q1 2027',
    result: {
      metric: '~28 wells',
      metricLabel: 'to locate, intercept & permanently P&A',
      points: [
        'Deterministic subsurface well location via magnetic ranging (AMR + PMR)',
        'Phased intercept / relief-well plan for permanent abandonment',
        'Status: early engineering; execution targeted end-Q4 2026 / Q1 2027',
      ],
    },
    meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'Yes' },
  },
  {
    slug: 'kansas-solution-mining',
    img: '/assets/case-kansas-mining.jpg',
    name: 'Five-Well Solution-Mining Intercept',
    location: 'Kansas, USA',
    year: '2026',
    region: 'United States',
    featured: true,
    title: 'Five-well halite solution-mining intercept with real-time ranging correction',
    scope: ['Solution Mining', '5-Well Intercept', 'Halite'],
    challenge: [
      'Five-well solution-mining system in a shallow halite formation (~460 ft TVD).',
      'Direct intersection required within a narrow interval below the casing shoe.',
      'Shallow target demanded high dogleg (>35°/100 ft); conventional surveys unreliable.',
    ],
    solution:
      'Coiled-tubing BHA with a 3.13" rotating magnet, gyro-referenced for azimuth integrity, and a ranging receiver behind 8.63" casing. Detection beyond 200 ft enabled early target ID, and a composite-survey workflow reset survey error at each station to steer each intercept.',
    outcome: 'Systematic ~27 ft survey bias exposed and corrected in real time',
    result: {
      metric: '4 of 5',
      metricLabel: 'wells intercepted; 1 intentional bypass',
      points: [
        'Ranging revealed a consistent survey bias up to ~27 ft (8.2 m)',
        'Four wells intercepted; one intentionally bypassed (~19 ft off survey)',
        'Detection >200 ft enabled early target identification',
        'Reliable hydraulic communication established across the wellfield',
      ],
    },
    meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'Yes' },
  },
  {
    slug: 'queensland-csg-intercept',
    img: '/assets/case-queensland-csg.jpg',
    name: 'Horizontal CSG Toe-to-Toe Intercepts',
    location: 'Queensland, Australia',
    year: '2025 – ongoing',
    region: 'Australia',
    featured: true,
    title: 'Rotating-magnet ranging — 4 intercepts across 2 horizontal coal-seam-gas well pairs',
    scope: ['CSG Intercept', 'Rotating Magnet', 'While-Drilling'],
    challenge: [
      'Horizontal coal-seam-gas well pairs require precise toe-to-toe intercepts.',
      'Accumulated MWD survey error produces lateral shifts of ~1.3–4.5 m in the horizontal.',
      'Undetected, these shifts cause missed intercepts and lost hydraulic communication.',
    ],
    solution:
      'Torped™ rotating-magnet ranging: magnets integrated into the directional rotary-steerable BHA, with the sensor run on wireline in the target well. A shift-vector methodology resolved true relative position at each station and steered every intercept. Delivered alongside major directional-drilling partners.',
    outcome: '4 of 4 intercepts successful · ~30% faster by the final intercept',
    result: {
      metric: '4 intercepts',
      metricLabel: 'across 2 well pairs — 100% success',
      points: [
        'All 4 planned intercepts achieved',
        'Closed from ~55–60 m to ~3–6 m final range (signal 0.2 → ~1,010 nT)',
        'Detected and corrected real lateral shifts of ~1.3–4.5 m',
        '~30% reduction in ranging time over the campaign',
      ],
    },
    meta: { ranging: 'AMR (Torped™)', deployment: 'BHA While Drilling', reentry: 'Yes' },
  },
  {
    slug: 'alberta-sagd-passby',
    img: '/assets/case-alberta-sagd.jpg',
    name: 'SAGD Multi-Pad Pass-By / Collision Avoidance',
    location: 'Alberta, Canada',
    year: '2025',
    region: 'Canada',
    featured: true,
    title: 'Five complex SAGD pass-bys against existing well pairs — verified placement',
    scope: ['SAGD', 'Collision Avoidance', 'Well Twinning'],
    challenge: [
      'Three 311 mm intermediate sections requiring 5 complex pass-bys of existing SAGD pairs.',
      'Existing laterals at ~70° azimuth — elevated EOU and collision risk.',
      'Nominal surveys off by 3D radial shifts exceeding ~30 m.',
    ],
    solution:
      'Delivered refined offset-well positioning to the directional-drilling team, resolving true relative position so the new wells could land on-top, between and under existing pairs while maintaining safe separation.',
    outcome: '5 of 5 pass-bys completed safely — zero collisions',
    result: {
      metric: '5 pass-bys',
      metricLabel: 'completed safely on a live SAGD pad',
      points: [
        'Corrected for 3D radial shifts exceeding ~30 m from nominal surveys',
        'Safe landings on-top, between and under existing SAGD pairs',
        'Adequate separation maintained throughout',
      ],
    },
    meta: { ranging: 'AMR', deployment: 'BHA While Drilling', reentry: 'No' },
  },
  {
    slug: 'colorado-solution-mining',
    img: '/assets/case-colorado-mining.jpg',
    name: 'Nahcolite Solution-Mining Intercept',
    location: 'Colorado, USA',
    year: '2025',
    region: 'United States',
    featured: true,
    title: 'Two-well solution-mining intercept — remediating a failed third-party attempt',
    scope: ['Solution Mining', 'Hydraulic Comms', 'Engineered Intercept'],
    challenge: [
      'Two-well solution-mining system in a nahcolite formation (~1,900–2,100 ft TVD).',
      'Required direct intersection / <10 ft proximity for hydraulic communication.',
      'A prior third-party attempt missed — the wells passed at ~13 ft with no communication.',
    ],
    solution:
      'Re-entered the original target as the drilling well toward the cased original well. Conventional BHA with a 4.75" rotating magnet; receiver behind 7" casing with shielding accounted for. A composite-survey workflow continuously updated relative position to steer the intercept.',
    outcome: 'Hydraulic communication established where the prior attempt failed',
    result: {
      metric: '~2,880 ft',
      metricLabel: 'MD — wells intersected; comms established',
      points: [
        'Reprocessing showed the prior wells had passed at ~13 ft (4.1 m)',
        'Engineered sidetrack steered with continuous composite-survey updates',
        'Wells intersected at ~2,880 ft MD / ~2,000 ft TVD',
        'Hydraulic communication established within the target interval',
      ],
    },
    meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'Yes' },
  },
  {
    slug: 'bavaria-closed-loop-geothermal',
    img: '/assets/case-bavaria-geothermal.jpg',
    name: 'Closed-Loop Geothermal Well Connections',
    location: 'Bavaria, Germany',
    year: '2024 – ongoing',
    region: 'Germany',
    featured: true,
    title: 'Connecting six horizontal wells to a cased vertical at a closed-loop geothermal project',
    scope: ['Closed-Loop Geothermal', 'RM-CTRWD', 'Twin & Intercept'],
    challenge: [
      'Connect 6 horizontal drilling wells to an existing cased vertical well.',
      '16" vertical target casing; 4.75" horizontal hole — extended-reach geometry.',
      'Conventional wireline ranging too slow for a multi-well commercial program.',
    ],
    solution:
      'RM-CTRWD: rotating-magnet ranging-while-drilling on a coiled-tubing unit with a motorized BHA. Near-bit magnet sub in the drilling well, ranging sensor in the cased target, high-density surveys via wired coiled tubing transmitted to surface in real time.',
    outcome: '>80% faster intersection vs. conventional wireline ranging',
    result: {
      metric: '>1,700 ft',
      metricLabel: 'MD — horizontal-to-vertical intersections achieved',
      points: [
        'Target casing precisely milled at horizontal-to-vertical geometry',
        'Ranging / intersection time reduced >80% vs. conventional wireline',
        'Downhole camera confirmed the completed junction',
        'First field executions successful — no downhole tool failures',
      ],
    },
    meta: { ranging: 'AMR + PMR', deployment: 'Coiled tubing While Drilling', reentry: 'Yes' },
  },

  // ── Track record (location + type; details on request) ──────────────────
  { slug: 'australia-offshore-pa-2025', name: 'Offshore Plug & Abandonment Intervention', location: 'Australia', year: '2025 – ongoing', region: 'Australia', featured: false, scope: ['Well Intervention', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'Yes' } },
  { slug: 'australia-mine-intercept-2025', name: 'Direct Intercept Into Sub-surface Mine Workings', location: 'Queensland, Australia', year: '2025', region: 'Australia', featured: false, scope: ['Well Intervention'], meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'Yes' } },
  { slug: 'alberta-collision-avoidance-2025', name: 'Close-Proximity Collision Avoidance', location: 'Alberta, Canada', year: '2025', region: 'Canada', featured: false, scope: ['Well Twinning', 'Collision Avoidance'], meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'No' } },
  { slug: 'central-asia-relief-planning-2025', name: 'Relief-Well Design / Ops for a Multi-Pad Blowout', location: 'Central Asia', year: '2025', region: 'Other', featured: false, scope: ['Relief Well', 'Planning Only'], meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'Yes' } },
  { slug: 'oklahoma-intercept-2025', name: 'Direct Wellbore Intercept for Hydraulic Communication', location: 'Oklahoma, USA', year: '2025', region: 'United States', featured: false, scope: ['Well Intervention'], meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'Yes' } },
  { slug: 'california-detection-pa-2024', name: 'Near-Surface Wellbore Detection & Positioning', location: 'Southern California, USA', year: '2024 – ongoing', region: 'United States', featured: false, scope: ['Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'Wireline', reentry: 'Yes' } },
  { slug: 'western-australia-pa-2024', name: 'Mill & Re-Enter for Plug & Abandonment', location: 'Western Australia', year: '2024 – 2025', region: 'Australia', featured: false, scope: ['Well Intervention', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'Yes' } },
  { slug: 'los-angeles-detection-reentry-2024', name: 'Near-Surface Detection, Mill & Re-Enter', location: 'Los Angeles, California, USA', year: '2024', region: 'United States', featured: false, scope: ['Well Intervention', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'Yes' } },
  { slug: 'los-angeles-relief-pa-2023', name: 'Relief Well for P&A — Hydraulic Communication via Perforation', location: 'Los Angeles, California, USA', year: '2023', region: 'United States', featured: false, scope: ['Relief Well', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'No' } },
  { slug: 'australia-relief-study-2023', name: 'Engineering Studies for Relief Well, Milling & P&A', location: 'Australia', year: '2023', region: 'Australia', featured: false, scope: ['Well Intervention', 'P&A — Study Only'], meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'Yes' } },
  { slug: 'colorado-relief-pa-2023', name: 'Relief Well for Plug & Abandonment', location: 'Colorado, USA', year: '2023', region: 'United States', featured: false, scope: ['Relief Well', 'Plug & Abandonment'], meta: { ranging: 'n/a', deployment: 'n/a', reentry: 'n/a' } },
  { slug: 'oklahoma-intercept-2023', name: 'Direct Wellbore Intercept for Hydraulic Communication', location: 'Oklahoma, USA', year: '2023', region: 'United States', featured: false, scope: ['Well Intervention'], meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'Yes' } },
  { slug: 'kansas-intercept-2023', name: 'Direct Wellbore Intercept for Hydraulic Communication', location: 'Kansas, USA', year: '2023', region: 'United States', featured: false, scope: ['Well Intervention'], meta: { ranging: 'AMR + PMR', deployment: 'BHA While Drilling', reentry: 'Yes' } },
  { slug: 'gulf-anticollision-2023-a', name: 'Passive Magnetic Ranging for Anti-Collision', location: 'Gulf of Mexico', year: '2023', region: 'Gulf of Mexico', featured: false, scope: ['Collision Avoidance', 'Well Twinning'], meta: { ranging: 'PMR', deployment: 'BHA While Drilling', reentry: 'No' } },
  { slug: 'gulf-anticollision-2023-b', name: 'Passive Magnetic Ranging for Anti-Collision', location: 'Gulf of Mexico', year: '2023', region: 'Gulf of Mexico', featured: false, scope: ['Collision Avoidance', 'Well Twinning'], meta: { ranging: 'PMR', deployment: 'BHA While Drilling', reentry: 'No' } },
  { slug: 'utah-mining-intercept-2023', name: 'Direct Wellbore Intercept for Hydraulic Communication', location: 'Utah, USA', year: '2023', region: 'United States', featured: false, scope: ['Well Twinning'], meta: { ranging: 'PMR', deployment: 'BHA While Drilling', reentry: 'No' } },
  { slug: 'michigan-relief-2022', name: 'Relief Well — Hydraulic Communication via Perforation', location: 'Michigan, USA', year: '2022', region: 'United States', featured: false, scope: ['Relief Well', 'Well Intervention'], meta: { ranging: 'PMR', deployment: 'BHA While Drilling', reentry: 'No' } },
  { slug: 'los-angeles-pa-2022', name: 'Mill & Re-Enter for Plug & Abandonment', location: 'Los Angeles, California, USA', year: '2022', region: 'United States', featured: false, scope: ['Well Intervention', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'Yes' } },
  { slug: 'texas-well-control-2021', name: 'Well Control — Surface Capping', location: 'Texas, USA', year: '2021', region: 'United States', featured: false, scope: ['Well Control', 'Surface Capping'], meta: { ranging: 'n/a', deployment: 'Surface', reentry: 'No' } },
  { slug: 'california-pa-2021-a', name: 'Mill & Re-Enter', location: 'California, USA', year: '2021', region: 'United States', featured: false, scope: ['Well Intervention', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'Yes' } },
  { slug: 'california-pa-2021-b', name: 'Mill & Re-Enter', location: 'California, USA', year: '2021', region: 'United States', featured: false, scope: ['Well Intervention', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'Yes' } },
  { slug: 'california-pa-2020-a', name: 'Plug & Abandonment', location: 'California, USA', year: '2020', region: 'United States', featured: false, scope: ['Well Intervention', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'No' } },
  { slug: 'california-pa-2020-b', name: 'Mill & Re-Enter', location: 'California, USA', year: '2020', region: 'United States', featured: false, scope: ['Well Intervention', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'Yes' } },
  { slug: 'california-pa-planning-2020', name: 'Plug & Abandonment Planning', location: 'California, USA', year: '2020', region: 'United States', featured: false, scope: ['Well Intervention', 'P&A Planning'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'Yes' } },
  { slug: 'california-pa-2020-c', name: 'Mill & Re-Enter', location: 'California, USA', year: '2020', region: 'United States', featured: false, scope: ['Well Intervention', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'Yes' } },
  { slug: 'colorado-relief-pa-2020', name: 'Relief Well for P&A — Hydraulic Communication via Perforation', location: 'Colorado, USA', year: '2020', region: 'United States', featured: false, scope: ['Relief Well', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'No' } },
  { slug: 'new-mexico-pa-2020', name: 'Two-Well Mill & Re-Enter', location: 'New Mexico, USA', year: '2020', region: 'United States', featured: false, scope: ['Well Intervention', 'Plug & Abandonment'], meta: { ranging: 'PMR', deployment: 'BHA While Drilling (PMR)', reentry: 'Yes' } },
  { slug: 'california-pa-2020-d', name: 'Mill & Re-Enter', location: 'California, USA', year: '2020', region: 'United States', featured: false, scope: ['Well Intervention', 'Plug & Abandonment'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'Yes' } },
  { slug: 'kansas-intercept-2020', name: 'Hydraulic Communication via Perforation', location: 'Kansas, USA', year: '2020', region: 'United States', featured: false, scope: ['Well Intervention'], meta: { ranging: 'PMR', deployment: 'BHA While Drilling (PMR)', reentry: 'No' } },
  { slug: 'texas-well-control-2020', name: 'Well Control — Capping While on Fire', location: 'Texas, USA', year: '2020', region: 'United States', featured: false, scope: ['Well Control', 'Surface Capping'], meta: { ranging: 'n/a', deployment: 'Surface', reentry: 'No' } },
  { slug: 'gulf-relief-planning-2020', name: 'Relief-Well Planning (Inland Waters) & Capping', location: 'Gulf of Mexico, USA', year: '2020', region: 'Gulf of Mexico', featured: false, scope: ['Relief Well', 'Planning Only'], meta: { ranging: 'AMR + PMR', deployment: 'While Drilling (PMR) / Wireline (AMR)', reentry: 'n/a' } },
];

export const getCase = (slug) => caseStudies.find((c) => c.slug === slug);

// Resolve a hero image for any case: its own photo, else the engineering/
// planning image for study/well-control work, else the generic cover rig.
export function caseImage(c) {
  if (c.img) return c.img;
  const s = c.scope.join(' ').toLowerCase();
  if (/planning|study|well control|surface/.test(s)) return '/assets/case-engineering.jpg';
  return '/assets/hero.jpg';
}
