// ─────────────────────────────────────────────────────────────
// Research and leadership roles, newest first.
// To add a role, copy one block and edit it.
// ─────────────────────────────────────────────────────────────

export type Role = {
  title: string;
  org: string;
  dates: string;
  where?: string;
  link?: string;
  summary?: string;
  points: string[];
};

export const research: Role[] = [
  {
    title: 'Undergraduate Researcher',
    org: 'HeaRT Laboratory',
    dates: 'June – August 2026',
    where: 'Dr. Yash Chitalia · University of Louisville, Shumaker Research Building',
    link: 'https://www.heart-lab.io/',
    points: [
      'Developed a robotic module that identifies surgical instruments using a machine learning model',
      "Designed a lead screw motor mechanism to pick up the selected instrument and unlatch its device casing",
      'Engineered a custom vacuum pickup tool for precise, secure instrument handling',
    ],
  },
  {
    title: 'Undergraduate Researcher',
    org: 'Biomedical Devices Laboratory',
    dates: 'May – August 2026',
    where: 'Dr. Guruprasad Giridharan · University of Louisville, Shumaker Research Building',
    points: [
      'Contributed to a novel, non-obstructive cavopulmonary assist device (CPAD) aimed at reversing the Fontan paradox for patients with Fontan failure',
      'Designed and tested multiple novel impeller configurations to optimize device performance',
      'Ran hemolysis comparisons against clinically approved blood pumps to evaluate biocompatibility and safety',
    ],
  },
  {
    title: 'Student Researcher (High School)',
    org: 'Barve Laboratory',
    dates: '2022 – 2024',
    where: 'Dr. Shirish Barve · University of Louisville, Clinical and Translational Research Building',
    points: [
      'Led independent research on brain inflammation and the effects of alcohol on the gut-brain axis using a BV-2 microglia cell line',
      'Performed Western Blot, PCR, and analytical assays; operated thermocyclers and biosafety cabinets',
      'Completed biosafety and hazardous chemical handling training for lab certification',
    ],
  },
];

export const leadership: Role[] = [
  {
    title: 'Junior Director, Science & Engineering Curriculum',
    org: 'STEM You Can',
    dates: '2022 – 2024',
    link: 'https://www.stemyoucan.org/',
    summary: 'National nonprofit running free, hands-on STEM summer camps.',
    points: [
      'Co-designed camp curricula, including a solar oven build and a homemade glow stick chemistry experiment',
      'Ran in-person camps in the Louisville region, managing day-to-day logistics',
      'Mentored and taught students directly, building their confidence in science and engineering',
    ],
  },
  {
    title: 'Engineering & Technology Lead Instructor',
    org: 'STEMY',
    dates: '2021 – 2024',
    summary:
      'Louisville nonprofit breaking down social, racial, and gender barriers in STEM for younger students.',
    points: [
      "As the team's most experienced CAD and 3D printing member, wrote the lesson plans for teaching middle schoolers CAD in Onshape",
      "3D printed students' own designs to show them what their models could become",
    ],
  },
  {
    title: 'Officer',
    org: 'Indian Community Foundation',
    dates: '2017 – 2024',
    summary: 'Louisville organization sharing Indian culture and traditions through community events.',
    points: [
      'Scheduled monthly member meetings and planned events, including a Diwali festival open to the wider community',
      'Organized temple and food bank donations and pushed to expand into food and clothing drives beyond the Indian community',
    ],
  },
];

export const service = [
  { name: 'Beta Club', dates: '2017 – 2024', note: '1,100+ community service hours, including Ohio River cleanups' },
  { name: 'Science National Honor Society', dates: '2021 – 2024', note: 'Hands-on science outreach at elementary and middle schools' },
  { name: 'Mu Alpha Theta', dates: '2020 – 2024', note: 'Math tutoring outreach and team competitions' },
];

export const interests = [
  { name: 'Guitar', note: '7+ years at Kentucky Arts Academy, including annual holiday recitals at a Louisville senior living community' },
  { name: 'Tennis', note: 'Middle school team and high school junior varsity' },
  { name: 'Chess', note: 'School chess teams from elementary through high school' },
];
