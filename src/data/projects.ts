// ─────────────────────────────────────────────────────────────
// Projects. Each one gets its own page at /projects/<slug>/.
//
// To add a project: copy a block, give it a unique `slug`,
// and pick a `category`. Set `featured: true` to show it on
// the home page. Put images in /public/projects/ and list
// them in `images` (optional).
//
// `tags` drive the dashed threads in the project web: any two
// projects that share a tag get connected.
// ─────────────────────────────────────────────────────────────

export type Category = 'college' | 'research' | 'personal';

export type Project = {
  slug: string;
  title: string;
  short: string; // short label used in the project web
  tags: string[]; // skills/themes; projects sharing a tag are linked in the web
  category: Category;
  dates: string;
  summary: string; // one or two sentences, shown on cards
  description: string[]; // paragraphs on the project page
  facts: { label: string; value: string }[];
  links?: { label: string; href: string }[];
  images?: { src: string; alt: string }[];
  featured?: boolean;
};

export const categories: Record<Category, { name: string; blurb: string }> = {
  college: {
    name: 'College',
    blurb: 'Projects completed at Purdue University as a Biomedical Engineering student.',
  },
  research: {
    name: 'Earlier Research',
    blurb: 'Independent research from middle and high school, including state and national award-winning work.',
  },
  personal: {
    name: 'Personal',
    blurb: 'Projects built outside of coursework and lab work.',
  },
};

export const projects: Project[] = [
  // ── College ───────────────────────────────────────────────
  {
    slug: 'arduino-matlab-ecg',
    title: 'Functioning ECG with an Arduino-MATLAB System',
    short: 'ECG System',
    tags: ['Electronics', 'Biomedical', 'Programming'],
    category: 'college',
    dates: 'Spring 2026',
    featured: true,
    summary:
      'An analog front end and Arduino that capture heart signals from skin probes, with MATLAB processing them into a live ECG trace.',
    description: [
      'Designed and built a working electrocardiogram as a circuits project. Electrode probes feed an analog front end of RC filters and operational amplifiers that amplify the small cardiac signal and reject noise.',
      'An Arduino microcontroller digitizes the conditioned signal, and MATLAB processes the data and displays the ECG waveform.',
    ],
    facts: [
      { label: 'Institution', value: 'Purdue University' },
      { label: 'Tools', value: 'Arduino, MATLAB, op-amps, RC filters' },
    ],
  },
  {
    slug: 'epics-speedway-wind-tunnel',
    title: 'Purdue EPICS: SPEEDWAY Wind Tunnel',
    short: 'Wind Tunnel',
    tags: ['CAD', '3D Printing', 'Design'],
    category: 'college',
    dates: 'Fall 2024 – Spring 2025',
    featured: true,
    summary:
      'A working wind tunnel designed and built for the Indianapolis Speed Museum to support STEM education outreach.',
    description: [
      "As part of Purdue's EPICS (Engineering Projects in Community Service) program, designed and assembled a fully functional wind tunnel for the Indianapolis Speed Museum to support STEM education outreach.",
      'Used Fusion 360 for CAD modeling, 3D printing for component fabrication, and hands-on prototyping for assembly. The project emphasized teamwork, engineering communication, and iterative design while delivering a real-world educational exhibit.',
    ],
    facts: [
      { label: 'Institution', value: 'Purdue University, EPICS Program' },
      { label: 'Partner', value: 'Indianapolis Speed Museum' },
      { label: 'Tools', value: 'Fusion 360, 3D printing, prototyping' },
    ],
  },

  // ── Earlier research ──────────────────────────────────────
  {
    slug: 'aldose-reductase-brain-inflammation',
    title: 'Pathogenic Role of Aldose Reductase in Brain Inflammation',
    short: 'Aldose Reductase',
    tags: ['Cell Biology', 'Neuroscience', 'Biomedical'],
    category: 'research',
    dates: '2022 – 2023',
    featured: true,
    summary:
      'Isolated the role of the aldose reductase enzyme in neuroinflammation by treating microglia with an inflammation inducer and an inhibitor.',
    description: [
      'Microglia are the immune cells of the central nervous system, responsible for detecting injury and driving inflammation. This project investigated how the aldose reductase enzyme contributes to that inflammation.',
      'BV-2 microglia were treated with LPS, a bacterial inflammation inducer, and EPAL, an aldose reductase inhibitor, to measure the enzyme\'s effect. The work used Western Blot, PCR, and cell-based assays at the University of Louisville.',
      'The research earned the Outstanding Achievement Award for Ability and Creativity in In Vitro Biology from the Society for In Vitro Biology, along with membership in the SIVB community.',
    ],
    facts: [
      { label: 'Institution', value: "University of Louisville, Dr. Shirish Barve's Lab" },
      { label: 'Techniques', value: 'Cell culture, Western Blot, PCR, assays' },
      { label: 'Recognition', value: 'Outstanding Achievement Award in In Vitro Biology, SIVB (2023)' },
    ],
  },
  {
    slug: 'gut-brain-alcohol-research',
    title: 'Brain Inflammation & the Gut-Brain Axis',
    short: 'Gut-Brain Axis',
    tags: ['Cell Biology', 'Neuroscience'],
    category: 'research',
    dates: '2022 – 2024',
    summary:
      'Independent research on how alcohol disrupts inflammatory pathways connecting the gut and the central nervous system.',
    description: [
      'Conducted independent research at the University of Louisville under Dr. Shirish Barve exploring the relationship between alcohol consumption, gut health, and brain inflammation, as part of a larger study by the lab.',
      'Led the project from experimentation through the written paper, using Western Blot, PCR, and biochemical assays after completing biosafety and hazardous chemical training.',
    ],
    facts: [
      { label: 'Institution', value: 'University of Louisville, Clinical and Translational Research Building' },
      { label: 'Supervisor', value: 'Dr. Shirish Barve' },
      { label: 'Techniques', value: 'Western Blot, PCR, biochemical assays' },
    ],
  },
  {
    slug: 'peltier-thermoelectric-effects',
    title: 'Peltier Chips and the Reversibility of Thermoelectric Effects',
    short: 'Peltier Chip',
    tags: ['Energy', 'Electronics', 'Physics'],
    category: 'research',
    dates: '2021 – 2022',
    featured: true,
    summary:
      'Tested whether a temperature difference across a Peltier chip can generate usable electrical energy through the Seebeck effect.',
    description: [
      'Investigated renewable energy generation through the Seebeck effect: heating one side of a Peltier chip and cooling the other to see whether the temperature difference produces electrical energy.',
      'The study explored the reversibility of thermoelectric effects and their potential for practical energy harvesting.',
    ],
    facts: [
      { label: 'Field', value: 'Physics, renewable energy' },
      { label: 'Recognition', value: '3rd Place Physics & Astronomy (regional); 3rd Place, Junior Science & Humanities Symposium (two years)' },
    ],
  },
  {
    slug: 'solar-panel-efficiency',
    title: 'Methods to Improve the Efficiency of Solar Panels',
    short: 'Solar Panels',
    tags: ['Energy', 'Design'],
    category: 'research',
    dates: '2020 – 2021',
    featured: true,
    summary:
      'Four solar panel designs built and tested for efficiency. Won 1st in Engineering at the Kentucky Academy of Science against undergraduates, and was published.',
    description: [
      'Designed and built four solar panel models, each hypothesized to improve photovoltaic efficiency, and tested them against one another.',
      'After placing 2nd of roughly 300 at the 2021 Kentucky Junior Academy of Science, the project was invited to the Kentucky Academy of Science, where it took 1st Place in Engineering against undergraduate researchers from Kentucky universities.',
      'The Kentucky Academy of Science then published the research abstract in its scholarly journal, and the project was presented nationally at the American Junior Academy of Science and the American Association for the Advancement of Science.',
    ],
    facts: [
      { label: 'Field', value: 'Engineering, renewable energy' },
      { label: 'Recognition', value: '1st Place Engineering, KAS 2021; 2nd Place, KJAS 2021; AJAS & AAAS presenter' },
      { label: 'Publication', value: 'Journal of the Kentucky Academy of Science' },
    ],
    links: [{ label: 'Read the published abstract', href: 'https://doi.org/10.3101/1098-7096-82.1.45' }],
  },
  {
    slug: 'pick-a-ball-robot',
    title: 'Pick-A-Ball Robot: Comparing Search Strategies',
    short: 'Pick-A-Ball Robot',
    tags: ['Robotics', 'Programming'],
    category: 'research',
    dates: '2019 – 2020',
    featured: true,
    summary:
      'A LEGO EV3 robot that collects balls, used to compare a fixed-path strategy against a nearest-ball strategy. Placed in the Broadcom MASTERS national top 300.',
    description: [
      'Built a robot from LEGO EV3 Mindstorms components that drives around and picks up table tennis balls, as a proof of concept for an automatic tennis ball collector.',
      'Two programs were compared on time and number of balls collected: a "Pattern" program that follows a fixed path, and a "Brownian Motion" program that detects and drives to the nearest ball.',
      'The project placed 3rd of roughly 200 at the 2020 Kentucky Junior Academy of Science and advanced to the Broadcom MASTERS top 300 nationally, from roughly 15,000 entrants.',
    ],
    facts: [
      { label: 'Field', value: 'Robotics, algorithms' },
      { label: 'Tools', value: 'LEGO EV3 Mindstorms' },
      { label: 'Recognition', value: 'Broadcom MASTERS Top 300 (2020); 3rd Place, KJAS 2020' },
    ],
  },
];
