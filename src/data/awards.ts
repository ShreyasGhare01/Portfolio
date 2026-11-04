// ─────────────────────────────────────────────────────────────
// Awards & honors. `featured: true` puts an award in the
// highlight row at the top of the Awards section.
// ─────────────────────────────────────────────────────────────

export type Award = {
  name: string;
  org: string;
  year?: string;
  note?: string;
  featured?: boolean;
  project?: string; // slug of a related project in projects.ts
};

export const researchAwards: Award[] = [
  {
    name: 'Broadcom MASTERS Top 300',
    org: 'Society for Science',
    year: '2020',
    note: 'Top 300 of roughly 15,000 student researchers nationwide',
    featured: true,
    project: 'pick-a-ball-robot',
  },
  {
    name: '1st Place, Engineering',
    org: 'Kentucky Academy of Science',
    year: '2021',
    note: 'Competed as a high school student against undergraduate researchers',
    featured: true,
    project: 'solar-panel-efficiency',
  },
  {
    name: 'Published Research Abstract',
    org: 'Journal of the Kentucky Academy of Science',
    year: '2021',
    note: 'doi.org/10.3101/1098-7096-82.1.45',
    featured: true,
    project: 'solar-panel-efficiency',
  },
  {
    name: 'Outstanding Achievement Award in In Vitro Biology',
    org: 'Society for In Vitro Biology',
    year: '2023',
    note: 'Includes membership in the SIVB community',
    featured: true,
    project: 'aldose-reductase-brain-inflammation',
  },
  {
    name: 'Presenter',
    org: 'American Junior Academy of Science',
    year: '2022',
    project: 'solar-panel-efficiency',
  },
  {
    name: 'Presenter',
    org: 'American Association for the Advancement of Science',
    year: '2021',
    project: 'solar-panel-efficiency',
  },
  {
    name: '2nd Place, State',
    org: 'Kentucky Junior Academy of Science',
    year: '2021',
    note: 'Of roughly 300 entrants',
    project: 'solar-panel-efficiency',
  },
  {
    name: '3rd Place, State',
    org: 'Kentucky Junior Academy of Science',
    year: '2020',
    note: 'Of roughly 200 entrants',
    project: 'pick-a-ball-robot',
  },
  {
    name: '3rd Place (two consecutive years)',
    org: 'Junior Science & Humanities Symposium',
    project: 'peltier-thermoelectric-effects',
  },
  {
    name: '3rd Place, Physics & Astronomy',
    org: 'Regional Science Fair',
    year: '2022',
    project: 'peltier-thermoelectric-effects',
  },
];

export const honors: Award[] = [
  {
    name: "Churchill Downs Winner's Circle Governor's Scholars Award",
    org: 'Churchill Downs',
    year: '2023',
    note: "One of 43 Louisville-area Governor's Scholars selected; citations of achievement from KY Rep. Jason Nemes and KY Sen. Julie Raque Adams",
  },
  {
    name: "Governor's Scholar",
    org: "Kentucky Governor's Scholars Program",
    year: '2023',
  },
  {
    name: 'Award of Excellence',
    org: 'Congress of Future Medical Leaders',
    year: '2022',
  },
  {
    name: 'AP Scholar with Distinction',
    org: 'College Board',
  },
];
