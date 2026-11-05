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
  // Optional step-by-step flow drawn as a diagram on the project page
  pipeline?: { title: string; steps: { label: string; detail?: string }[] };
  // `wide: true` makes an image span the full gallery width
  images?: { src: string; alt: string; caption?: string; wide?: boolean; width?: number; height?: number }[];
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
      'A three-lead ECG built from scratch: amplifiers and filters that turn millivolt heart signals into a clean waveform, plus an Arduino and MATLAB that detect heartbeats and classify heart rate.',
    description: [
      'For the final design project in Bioinstrumentation and Circuit Theory Lab, my partner and I designed and built an electrocardiogram circuit that converts the heart\'s millivolt-level electrical activity into a readable ECG. We recorded a Lead II ECG from a human subject using limb electrodes connected to the breadboard through an audio jack.',
      'The signal chain starts with an instrumentation amplifier (gain of 95, under a design limit of 100) followed by a non-inverting amplifier (gain of about 10), for a total gain near 1,000 that brings the signal close to 1 V. A second-order 60 Hz notch filter removes power-line interference. A cascaded second-order high-pass and low-pass filter forms a 0.5 to 150 Hz bandpass matched to the frequency content of cardiac signals. We selected component values from lab stock, simulated every stage in LTspice, and verified each one with the oscilloscope\'s frequency response analysis before connecting them.',
      'Testing guided the final design. The first notch filter centered too far from 60 Hz, so we raised its feedback resistor from 1.5 kΩ to 2 kΩ, which moved the notch to 60.3 Hz (0.5% error). The measured bandpass cutoffs of 0.45 Hz and 172 Hz both fell within published ranges for ECG instrumentation. The integrated circuit displayed a clear waveform with distinct P, QRS, and T features.',
      'As an extension, we added a DC offset stage (an inverting summing amplifier followed by an inverting amplifier) that shifts the signal up 0.8 V so it stays within the Arduino\'s 0 to 5 V input range. A MATLAB script sampled the Arduino at 500 Hz, detected R-peaks using a voltage threshold with a minimum spacing between beats to avoid double counting, calculated heart rate from the R-R intervals, and classified it as bradycardic, normal, or tachycardic. In one 10-second recording it found an average R-R interval of 0.627 s, a heart rate of 95.7 BPM, classified as normal.',
      'Next steps would be moving the circuit from a breadboard to a printed circuit board with an enclosure, and using tighter-tolerance components and shorter connections to reduce error further.',
    ],
    facts: [
      { label: 'Course', value: 'BME 23101, Bioinstrumentation & Circuit Theory Lab, Purdue' },
      { label: 'Team', value: 'Two-person team' },
      { label: 'Tools', value: 'LTspice, Arduino Uno R4 WiFi, MATLAB, oscilloscope frequency response analysis' },
      { label: 'Results', value: 'Notch at 60.3 Hz; passband 0.45 to 172 Hz; heart rate detected at 95.7 BPM' },
    ],
    pipeline: {
      title: 'Signal chain',
      steps: [
        { label: 'Electrodes', detail: 'Lead II, limb leads' },
        { label: 'Instrumentation amp', detail: 'Gain 95' },
        { label: 'Non-inverting amp', detail: 'Gain 10' },
        { label: 'Notch filter', detail: 'Removes 60 Hz' },
        { label: 'Bandpass filter', detail: '0.5 to 150 Hz' },
        { label: 'DC offset', detail: '+0.8 V' },
        { label: 'Arduino', detail: 'Samples at 500 Hz' },
        { label: 'MATLAB', detail: 'Beats and heart rate' },
      ],
    },
    images: [
      {
        src: '/projects/arduino-matlab-ecg/full-circuit.webp',
        width: 1800,
        height: 839,
        alt: 'Breadboard ECG circuit with op-amp stages, connected to an Arduino Uno R4 WiFi and electrode leads',
        caption: 'The fully integrated circuit. Electrode leads enter through the audio jack on the left, pass through the amplifier and filter stages, and feed the Arduino on the right.',
        wide: true,
      },
      {
        src: '/projects/arduino-matlab-ecg/ecg-trace.webp',
        width: 899,
        height: 563,
        alt: 'Oscilloscope trace of a human ECG with the P, Q, R, S, and T points labeled',
        caption: 'ECG recorded from a human subject on the oscilloscope, with the P wave, QRS complex, and T wave labeled.',
      },
      {
        src: '/projects/arduino-matlab-ecg/notch-filter-response.webp',
        width: 1170,
        height: 705,
        alt: 'Plot of gain versus frequency showing a sharp dip at 60 Hz',
        caption: 'Measured frequency response of the notch filter, cutting power-line noise at 60 Hz while passing the rest of the band.',
      },
      {
        src: '/projects/arduino-matlab-ecg/heartbeat-detection.webp',
        width: 873,
        height: 583,
        alt: 'MATLAB plot of a 10-second ECG with detected heartbeats marked above a 1.4 V threshold',
        caption: 'MATLAB heartbeat detection on the Arduino\'s samples. Each marker is a detected R-peak above the 1.4 V threshold, giving a heart rate of 95.7 BPM.',
        wide: true,
      },
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
      'Tested whether blocking the enzyme aldose reductase with the drug epalrestat protects brain immune cells from bacterial-toxin-induced inflammation. It did, across cell survival, cytokines, and oxidative stress.',
    description: [
      'Microglia are the brain\'s resident immune cells. When they detect lipopolysaccharide (LPS), a toxin from the outer membrane of bacteria, they become activated and release inflammatory cytokines. Sustained microglia-driven inflammation is a risk factor for Alzheimer\'s, Parkinson\'s, and multiple sclerosis. Aldose reductase (AR), an enzyme in the polyol pathway, is best known for its role in diabetic complications, and growing evidence links it to inflammation, but its role in microglia activation was unclear.',
      'This project tested whether epalrestat (EPAL), an AR inhibitor already used to treat diabetic neuropathy, could suppress LPS-induced inflammation when given as a pretreatment. I cultured BV2 mouse microglia and treated them with two LPS doses (10 and 100 ng/mL), EPAL alone (50 µM), and EPAL combined with each LPS dose, alongside untreated controls, with every condition run in triplicate.',
      'I measured cell survival with an MTT assay and isolated RNA for qRT-PCR to track inflammatory cytokine genes (TNF-α and IL-1β). Cytokine protein levels, NF-κB p65 activation by Western blot, and immunofluorescence imaging of oxidative stress markers rounded out the analysis. I tested significance with t-tests and ANOVA in GraphPad Prism (p < 0.05).',
      'LPS reduced cell viability to about 70% of untreated cells, and EPAL pretreatment brought it back above 80%. LPS raised inflammatory cytokines at both the gene and protein level, and EPAL lowered them. In cells given the higher LPS dose, IL-6 dropped by roughly 80%. EPAL also reduced the oxidative stress markers acrolein, NLRP3, COX-2, and iNOS, and limited phosphorylation of p65, the subunit that switches on NF-κB, the transcription factor behind TNF-α, IL-1β, and IL-6 production.',
      'Together, the results point to aldose reductase as a key mediator of LPS-induced microglia activation, and suggest AR inhibitors like epalrestat have therapeutic potential against neuroinflammation. Natural next steps are confirming the effect in other microglia models and testing other inflammatory triggers such as HNE and HMGB-1. The work earned the Outstanding Achievement Award for Ability and Creativity in In Vitro Biology from the Society for In Vitro Biology, along with membership in the SIVB.',
    ],
    facts: [
      { label: 'Institution', value: "University of Louisville, Dr. Shirish Barve's Lab" },
      { label: 'Model', value: 'BV2 mouse microglia cell line' },
      { label: 'Techniques', value: 'Cell culture, MTT assay, RNA extraction, qRT-PCR, Western blot, immunofluorescence' },
      { label: 'Analysis', value: 'GraphPad Prism (t-tests, ANOVA)' },
      { label: 'Recognition', value: 'Outstanding Achievement Award in In Vitro Biology, SIVB (2023)' },
    ],
    pipeline: {
      title: 'Experimental workflow',
      steps: [
        { label: 'Cell culture', detail: 'BV2 mouse microglia' },
        { label: 'Pretreatment', detail: 'Epalrestat, 50 µM' },
        { label: 'Stimulation', detail: 'LPS, 10 or 100 ng/mL' },
        { label: 'Viability', detail: 'MTT assay' },
        { label: 'Gene expression', detail: 'RNA extraction, qRT-PCR' },
        { label: 'Protein levels', detail: 'Cytokines, Western blot' },
        { label: 'Imaging', detail: 'Immunofluorescence' },
        { label: 'Statistics', detail: 't-tests and ANOVA' },
      ],
    },
    images: [
      {
        src: '/projects/aldose-reductase/at-the-bench.webp',
        width: 1134,
        height: 1134,
        alt: 'Shreyas in a lab coat working at a bench beside a gel electrophoresis setup',
        caption: 'Working at the bench in the Barve Lab at the University of Louisville.',
      },
      {
        src: '/projects/aldose-reductase/microglia-microscope.webp',
        width: 604,
        height: 604,
        alt: 'BV2 microglia cells seen through a microscope eyepiece',
        caption: 'BV2 microglia in culture, viewed through the microscope eyepiece.',
      },
      {
        src: '/projects/aldose-reductase/mtt-plate.webp',
        width: 1201,
        height: 708,
        alt: '96-well plate with purple MTT assay wells, labeled by treatment group',
        caption: 'MTT assay plate. Living cells turn the dye purple, so color intensity reflects how many cells survived each treatment (labeled down the right side).',
        wide: true,
      },
      {
        src: '/projects/aldose-reductase/mtt-viability.webp',
        width: 548,
        height: 783,
        alt: 'Bar chart of cell viability by treatment group with significance markers',
        caption: 'Cell viability. LPS cut survival to about 70% of untreated cells; with EPAL pretreatment it recovered to above 80%.',
      },
      {
        src: '/projects/aldose-reductase/il6-protein.webp',
        width: 467,
        height: 514,
        alt: 'Bar chart of IL-6 protein levels by treatment group with significance markers',
        caption: 'IL-6 protein levels. EPAL lowered IL-6 by roughly 80% in cells given the higher LPS dose (p ≤ 0.001).',
      },
      {
        src: '/projects/aldose-reductase/immunofluorescence.webp',
        width: 1800,
        height: 1070,
        alt: 'Immunofluorescence images comparing microglia treated with LPS alone and with LPS plus epalrestat',
        caption: 'Immunofluorescence of microglia given 100 ng/mL LPS (left) versus LPS with EPAL pretreatment (right). Green marks acrolein and purple marks NLRP3, both oxidative stress markers; red marks CD45. The bright stress signal seen with LPS is reduced with EPAL.',
        wide: true,
      },
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
