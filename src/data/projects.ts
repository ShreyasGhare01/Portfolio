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

export type Category = 'college' | 'lab' | 'personal' | 'research';

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
  acknowledgment?: string; // shown at the end of the description
  // `wide: true` spans the full gallery width. Add `video` (an .mp4 path) to show
  // a silent looping clip, or `model` (a .glb path) for an interactive 3D viewer;
  // either way `src` is the poster image shown first. `ratio` sets a viewer's shape.
  images?: {
    src: string;
    alt: string;
    caption?: string;
    wide?: boolean;
    width?: number;
    height?: number;
    video?: string;
    model?: string;
    ratio?: string;
  }[];
  featured?: boolean;
};

// `webLabel` is how the category reads inside its bubble in the project web
// (keep each line short so it fits).
export const categories: Record<Category, { name: string; blurb: string; webLabel: string[] }> = {
  college: {
    name: 'College',
    blurb: 'Projects completed at Purdue University as a Biomedical Engineering student, in courses and engineering clubs.',
    webLabel: ['COLLEGE'],
  },
  lab: {
    name: 'Undergraduate Research',
    blurb: 'Research in university laboratories as an undergraduate, including summer research at the University of Louisville.',
    webLabel: ['UNDERGRAD', 'RESEARCH'],
  },
  personal: {
    name: 'Personal',
    blurb: 'Projects built on my own time, outside of coursework and lab work.',
    webLabel: ['PERSONAL'],
  },
  research: {
    name: 'Earlier Research',
    blurb: 'Independent research from middle and high school, including state and national award-winning work.',
    webLabel: ['EARLIER', 'RESEARCH'],
  },
};

// Order of the tabs on the Projects page and the bubbles in the project web.
export const categoryOrder: Category[] = ['college', 'lab', 'personal', 'research'];

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
    slug: 'asme-competition-turret',
    title: 'Foam Ball Launching Turret: ASME Small Projects',
    short: 'ASME Turret',
    tags: ['Robotics', 'Electronics', 'CAD', '3D Printing'],
    category: 'college',
    dates: 'Spring 2026',
    summary:
      'A team-built turret for an ASME competition: dual flywheels launch foam golf balls at cup-stack targets, a spiral hopper feeds ammunition, and a motor-driven geared turntable aims the whole launcher.',
    description: [
      'As part of the Small Projects subteam of Purdue\'s chapter of the American Society of Mechanical Engineers (ASME), my team designed and built a turret to launch foam golf balls at targets. The competition has three rounds. The accuracy round sets 10 cup-stack targets between 5 and 20 feet away and 3 to 8 feet high, with 20 balls to hit them. The time-attack round gives 3 minutes and unlimited balls, and the turret has to pivot between targets because hitting the same one twice in a row scores nothing. The range round is three attempts to launch a single ball as far as possible. The turret had to stay under 3 feet tall, keep launch speed under 45 m/s, and be operable with one hand.',
      'We chose a dual-flywheel launcher for stable, repeatable shots. Two spinning wheels grip each ball and fire it through a 1.75-inch PVC barrel. Balls drop from a funnel hopper into the firing chamber, and a spiral hopper above it stores ammunition for the timed round while feeding balls one at a time so they don\'t jam.',
      'To aim, the whole launcher sits on a lazy susan bearing. A motor turns it through a 3D-printed gear, giving the turret 180 degrees of rotation, and the design adds about 30 degrees of tilt for adjusting launch angle. Holding power to the motor locks the turret in place between shots. We modeled the complete turret in Fusion 360. After presenting our preliminary design review, we built and tested the rotating base: the 3D-printed tower spins on its geared turntable, driven by the motor and controlled from a handheld radio controller.',
      'My main role was the electronics: I wired the control circuit and programmed the Arduino that drives the turret\'s motor. I also helped design parts in CAD and 3D print the turret\'s components.',
    ],
    facts: [
      { label: 'Organization', value: 'ASME at Purdue, Small Projects subteam' },
      { label: 'Team', value: 'Team project' },
      { label: 'My role', value: 'Electronics and Arduino programming; helped design the CAD and 3D print components' },
      { label: 'Constraints', value: 'Under 3 ft tall, launch speed under 45 m/s, one-handed operation' },
      { label: 'Tools', value: 'Fusion 360, Arduino, 3D printing' },
      { label: 'Key parts', value: 'Dual flywheels, 1.75 in PVC barrel, spiral hopper, lazy susan bearing, 3D-printed gear and funnel' },
    ],
    pipeline: {
      title: 'How the turret works',
      steps: [
        { label: 'Spiral hopper', detail: 'Stores ammo, prevents jams' },
        { label: 'Funnel', detail: 'Drops balls into the chamber' },
        { label: 'Dual flywheels', detail: 'Grip and launch each ball' },
        { label: 'PVC barrel', detail: '1.75 in, guides the shot' },
        { label: 'Turntable', detail: 'Lazy susan bearing base' },
        { label: 'Geared motor', detail: '3D-printed drive gear' },
        { label: 'Aim', detail: '180° rotation, ~30° tilt' },
        { label: 'Lock', detail: 'Motor holds position' },
      ],
    },
    images: [
      {
        src: '/projects/asme-turret/turret-assembly-poster.webp',
        model: '/projects/asme-turret/turret-assembly.glb',
        ratio: '16 / 10',
        alt: 'Interactive 3D model of the full turret assembly in Fusion 360',
        caption: 'Interactive model of the full turret assembly. Drag to rotate and scroll to zoom. From the bottom up: the turntable base, the motor tower, the barrel holder with its flywheels, and the curved feed tube that brings balls down to the barrel. Simplified for the web from the Fusion 360 model.',
        wide: true,
      },
      {
        src: '/projects/asme-turret/turret-rotation-poster.webp',
        video: '/projects/asme-turret/turret-rotation.mp4',
        width: 480,
        height: 848,
        alt: 'Video of the 3D-printed turret rotating on its geared turntable base, controlled with a handheld radio controller',
        caption: 'Rotation test of the built turret base. The 3D-printed tower spins on its geared turntable, driven by the Arduino-controlled motor and steered from a handheld radio controller.',
      },
      {
        src: '/projects/asme-turret/turret-holder-poster.webp',
        model: '/projects/asme-turret/turret-holder.glb',
        ratio: '1 / 1',
        alt: 'Interactive 3D model of the turret holder head',
        caption: 'The turret holder head, which cradles the launcher barrel at the top of the turret. Drag to rotate.',
      },
      {
        src: '/projects/asme-turret/feed-mechanism-sketch.webp',
        width: 1800,
        height: 963,
        alt: 'Sketch of a funnel dropping a ball against a backboard onto a track lined with pairs of spinning wheels',
        caption: 'Early launcher concept. A funnel drops each ball against a backboard, then pairs of spinning wheels accelerate it down a track. The final design narrowed this to a single pair of flywheels.',
        wide: true,
      },
      {
        src: '/projects/asme-turret/spiral-hopper-sketch.webp',
        width: 654,
        height: 902,
        alt: 'Sketch of a spiral ramp wrapped around a central column, with balls rolling down to an outlet at the bottom',
        caption: 'Spiral hopper concept. Balls roll down a ramp wrapped around a central column and leave one at a time, storing ammunition for the timed round without jamming.',
      },
      {
        src: '/projects/asme-turret/turntable-base-sketch.webp',
        width: 1400,
        height: 632,
        alt: 'Sketch of a square base plate with a circular turntable and a mounting platform held by two brackets',
        caption: 'Base and aiming concept: a turntable bearing set into the base plate, with brackets holding the launcher platform so it can tilt.',
      },
    ],
  },
  {
    slug: 'pip-joint-implant',
    title: 'PIP Finger Joint Implant: CAD Proof of Concept',
    short: 'PIP Joint Implant',
    tags: ['CAD', 'Biomedical', 'Design'],
    category: 'college',
    dates: 'Fall 2025',
    featured: true,
    summary:
      'A team-designed, 3D-printable ball-and-socket implant for the finger\'s PIP joint, sized from hand anatomy, compression tested in PLA and TPU, and checked with finite element analysis up to 50 N.',
    description: [
      'Osteoarthritis is the most common form of arthritis and frequently affects the proximal interphalangeal (PIP) joint in the middle of the finger. Once the cartilage wears away, bone grinds on bone, and severe cases need a joint replacement that costs around $22,000. Current implants, most often silicone, can loosen, crack, or wear out over time, which can mean another surgery. Working in a team for BME 21401, Purdue\'s Biomechanical Analysis Laboratory, we set out to design a proof-of-concept PIP implant that could be 3D printed and customized to a patient.',
      'I drew the anatomical sketches that grounded the design, mapping the phalanges and joints of the hand, the joint capsule and articular cartilage, and an early ball-and-socket concept. I then modeled the implant in CAD as two parts. The upper piece attaches to the middle phalanx and ends in a 5.5 mm radius ball. It stands 13 mm tall, under the average 16.1 mm length of that bone, and is 13 mm wide to match the bone\'s base. The lower piece attaches to the proximal phalanx and holds the socket, at 17 mm tall against an average bone length of 20.7 mm. Each part has a 1 mm radius hole for a surgical screw to fix it to the bone.',
      'We compared PLA, TPU, aluminum, titanium, and ABS, and chose PLA and TPU for their low cost and printability. We compression tested five printed cylinders of each on an Instron universal testing machine. PLA was far stiffer, with a Young\'s modulus of 1.31 ± 0.08 GPa against 20.4 ± 1.4 MPa for TPU, a difference confirmed by a two-sample t-test (p = 4.4 × 10⁻⁶) that I ran. Two TPU samples sheared rather than compressing evenly and were excluded as outliers. In finite element analysis of the implant geometry, typical finger loads fall between 2 and 35 N. At 50 N the design held a minimum safety factor of 1.41 with under 0.1 mm of displacement, and stress concentrated around the screw hole.',
      'The results showed that printed PLA is strong enough for prototype-level loads but much less stiff than bone (1.3 GPa against 10 to 30 GPa), so it suits a proof of concept rather than a final implant, while the more flexible TPU is a better match for cartilage-like regions. A ball-and-socket joint also allows more motion than a real PIP joint, which works like a hinge. Next steps would be a hinge-based geometry, a reinforced screw hole with larger fillets, fatigue and multi-axial load testing, medical-grade materials, and patient-specific designs built from medical imaging.',
    ],
    facts: [
      { label: 'Course', value: 'BME 21401, Biomechanical Analysis Laboratory, Purdue University' },
      { label: 'Team', value: 'Four-person team' },
      { label: 'My role', value: 'Anatomical sketches, CAD modeling and engineering drawings, statistical analysis, methods write-up' },
      { label: 'Tools', value: 'CAD and FEA, Instron universal testing machine, Excel' },
      { label: 'Results', value: 'Safety factor of 1.41 at 50 N; PLA modulus 1.31 GPa vs TPU 20.4 MPa (p < 0.001)' },
    ],
    pipeline: {
      title: 'Design process',
      steps: [
        { label: 'Clinical need', detail: 'PIP osteoarthritis, implant failure' },
        { label: 'Anatomical sketches', detail: 'Phalanx sizes, joint structure' },
        { label: 'CAD model', detail: 'Two-part ball and socket' },
        { label: 'Engineering drawings', detail: 'Dimensioned in mm' },
        { label: 'Material selection', detail: 'PLA and TPU from five candidates' },
        { label: 'Compression testing', detail: 'Five samples per material' },
        { label: 'Statistics', detail: 'Two-sample t-test' },
        { label: 'FEA', detail: 'Loads of 20, 30, and 50 N' },
      ],
    },
    images: [
      {
        src: '/projects/pip-joint/anatomical-sketches.webp',
        width: 756,
        height: 599,
        alt: 'Pencil sketches on graph paper of hand bones with labeled joints and phalanx lengths, a finger joint capsule, and a ball-and-socket concept',
        caption: 'My anatomical sketches: the bones and joints of the hand with the average phalanx lengths used to size the implant, the joint capsule and articular cartilage, and the first ball-and-socket concept.',
      },
      {
        src: '/projects/pip-joint/cad-assembly.webp',
        width: 756,
        height: 538,
        alt: 'CAD renders of the ball component, the socket component, and the assembled implant',
        caption: 'The CAD model: the ball component (left) attaches to the middle phalanx, the socket component (center) to the proximal phalanx, and together they form the assembled joint (right).',
      },
      {
        src: '/projects/pip-joint/engineering-drawing.webp',
        width: 1144,
        height: 811,
        alt: 'Dimensioned engineering drawing of the ball component with front, side, top, and isometric views',
        caption: 'Engineering drawing of the ball component, with all dimensions in millimeters.',
        wide: true,
      },
      {
        src: '/projects/pip-joint/compression-curves.webp',
        width: 1800,
        height: 528,
        alt: 'Two stress-strain charts from compression testing five PLA samples and five TPU samples',
        caption: 'Compression testing of five printed cylinders per material. PLA (left) behaved consistently. In the TPU tests (right), the two curves that rise early came from samples that sheared rather than compressing evenly, and they were excluded as outliers.',
        wide: true,
      },
      {
        src: '/projects/pip-joint/fea-50n.webp',
        width: 756,
        height: 429,
        alt: 'Three finite element analysis renders of the ball component under a downward load, colored by safety factor, stress, and displacement',
        caption: 'Finite element analysis of the ball component under 50 N, above the 2 to 35 N a finger joint typically sees. Left to right: safety factor, von Mises stress, and displacement. The minimum safety factor stayed at 1.41, with stress concentrated around the screw hole.',
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

  {
    slug: 'python-hand-histogram',
    title: 'Histogram Hand: Finger Motion and Piano Notes in Python',
    short: 'Histogram Hand',
    tags: ['Programming', 'Biomedical'],
    category: 'college',
    dates: 'Fall 2024',
    summary:
      'A Python program that models a human hand as a live histogram, one bar per finger, and plays a piano note when a finger presses past its natural reach. Built with Tkinter, Matplotlib, and an embedded tutorial video.',
    description: [
      'The human hand coordinates dozens of muscles and tendons to make movements that feel effortless, like pressing a piano key or fretting a guitar string. That system is what draws me to prosthetics, and this individual project for ENGR 133 at Purdue was a first step toward modeling it in code. As a guitar player, I noticed that each note comes from one finger segment extending while the rest of the hand holds position. I built a program around that idea, using a piano because its one-finger-per-key layout maps cleanly onto a hand.',
      'The program represents the hand as a histogram where each bar is a finger and its height is how many segments are extended. The user types a string of letters: a, s, d, f, and g stand for the thumb through the pinky, and each repeat extends the next segment, up to two for the thumb and three for the other fingers. The letters q, w, e, and r add a gap between neighboring fingers, so the user can spread the hand apart. Pressing Generate draws the hand as a Matplotlib bar chart.',
      'Extending a finger past its real number of segments counts as pressing a key. In a five-finger piano position, the thumb plays C, the index finger D, the middle finger E, the ring finger F, and the pinky G, and the window reports which note was played. Input validation handles empty strings and invalid characters with a clear message instead of crashing.',
      'Because the input scheme takes a moment to learn, I built a Tkinter interface that opens with a 36-second tutorial video embedded using the tkvideo library, which I taught myself for this project, before moving to the input screen. The code is organized into separate functions for counting segments, laying out the bars, plotting, and mapping notes, each documented with a flowchart. It came with a user manual and test cases, including one that draws the rock-and-roll hand sign.',
    ],
    facts: [
      { label: 'Course', value: 'ENGR 133, Purdue University (individual project)' },
      { label: 'Tools', value: 'Python, Tkinter, Matplotlib, tkvideo' },
      { label: 'Features', value: 'Segment and gap input, note detection (C to G), input validation, tutorial video' },
    ],
    pipeline: {
      title: 'How the program works',
      steps: [
        { label: 'Tutorial video', detail: 'Embedded with tkvideo' },
        { label: 'Letter input', detail: 'asdfg segments, qwer gaps' },
        { label: 'Validation', detail: 'Flags invalid or empty input' },
        { label: 'Segment count', detail: 'Caps each finger at its limit' },
        { label: 'Bar layout', detail: 'Heights plus finger gaps' },
        { label: 'Histogram', detail: 'Drawn with Matplotlib' },
        { label: 'Note detection', detail: 'Overextended finger plays C to G' },
        { label: 'Feedback', detail: 'Note or error message' },
      ],
    },
    images: [
      {
        src: '/projects/hand-histogram/title-screen.webp',
        width: 1172,
        height: 520,
        alt: 'Title card reading Histogram Hand Python with an outline of a hand making a peace sign',
        caption: 'Title card from the tutorial video that plays when the program opens.',
        wide: true,
      },
      {
        src: '/projects/hand-histogram/input-key.webp',
        width: 1800,
        height: 517,
        alt: 'Two hand diagrams: one mapping letters a, s, d, f, g to finger segments, the other mapping q, w, e, r to the gaps between fingers',
        caption: 'The input key. Each of a, s, d, f, and g extends one segment of a finger; q, w, e, and r open a gap between two fingers.',
        wide: true,
      },
      {
        src: '/projects/hand-histogram/histogram-output.webp',
        width: 584,
        height: 457,
        alt: 'Bar chart with five bars of heights 2, 3, 1, 1, 1 representing the fingers of a hand',
        caption: 'Histogram output. Each bar is a finger; here the thumb and index finger are fully extended.',
      },
      {
        src: '/projects/hand-histogram/rock-sign-histogram.webp',
        width: 841,
        height: 642,
        alt: 'Bar chart with bars of heights 1, 3, 1, 1, 3 resembling the rock-and-roll hand sign',
        caption: 'One of the test cases: the input "asssdfggg" draws the rock-and-roll hand sign.',
      },
      {
        src: '/projects/hand-histogram/note-detected.webp',
        width: 894,
        height: 412,
        alt: 'Program window with the input asadafg and the message The note that is played: C',
        caption: 'Typing "a" three times overextends the two-segment thumb, so the program reports that C was played.',
        wide: true,
      },
    ],
  },
  // ── Undergraduate research ────────────────────────────────
  {
    slug: 'heart-lab-surgical-instrument-robot',
    title: 'Robotic Surgical Instrument Identification and Handling',
    short: 'Surgical Robot',
    tags: ['Robotics', 'Biomedical', 'Programming'],
    category: 'lab',
    dates: 'Summer 2026',
    summary:
      'Summer research in the HeaRT Lab at the University of Louisville: a robotic module that recognizes surgical instruments with machine learning, then picks one up and unlatches its casing.',
    description: [
      'Over the summer of 2026, I worked as an undergraduate researcher in Dr. Yash Chitalia\'s HeaRT Laboratory at the University of Louisville, which develops robotic systems for medicine.',
      'I developed a robotic module that identifies surgical instruments using a machine learning model. Once an instrument is identified, a lead screw motor mechanism I designed picks up the selected instrument and unlatches its device casing. I also engineered a custom vacuum pickup tool so the robot could handle instruments precisely and securely.',
    ],
    facts: [
      { label: 'Lab', value: 'HeaRT Laboratory, Dr. Yash Chitalia' },
      { label: 'Institution', value: 'University of Louisville, Shumaker Research Building' },
      { label: 'Focus', value: 'Machine learning identification, lead screw mechanism, vacuum pickup tool' },
    ],
    links: [{ label: 'Visit the HeaRT Lab', href: 'https://www.heart-lab.io/' }],
  },
  {
    slug: 'cavopulmonary-assist-device',
    title: 'Cavopulmonary Assist Device for Fontan Failure',
    short: 'Fontan Assist Device',
    tags: ['Biomedical', 'Design'],
    category: 'lab',
    dates: 'Summer 2026',
    summary:
      'Summer research in the Biomedical Devices Lab at the University of Louisville: designing impellers for a blood pump that supports single-ventricle patients, and running and troubleshooting in-vitro hemolysis tests.',
    description: [
      'Over the summer of 2026, I worked as an undergraduate researcher in Dr. Guruprasad Giridharan\'s Biomedical Devices Laboratory at the University of Louisville.',
      'Patients born with a single functioning ventricle are treated with the Fontan procedure, which routes blood from the body directly to the lungs without a pumping chamber. Over time this circulation can fail. The lab is developing a novel, non-obstructive cavopulmonary assist device (CPAD) that adds pumping power to that pathway, aiming to reverse the "Fontan paradox."',
      'I designed and tested multiple novel impeller configurations to optimize the device\'s performance, and ran hemolysis comparisons against clinically approved blood pumps to evaluate how gently each design treats red blood cells, a key measure of biocompatibility and safety.',
      'Hemolysis testing measures how much a blood pump damages red blood cells as it runs. We built a mock circulatory loop, primed it with saline, then filled it with blood warmed to 37 °C and ran the pump at a constant speed for four and a half hours, drawing samples every 45 minutes. For each sample I tracked hematocrit, hemoglobin, activated clotting time, and plasma-free hemoglobin, monitored pressures across the device, and calculated the normalized and modified indices of hemolysis (NIH and MIH), the standard metrics for comparing a device with clinically approved pumps. I then presented the results to the lab.',
      'Part of the analysis was finding what could skew the numbers. I traced two sources of error. Vibration from the motor and shaft rippled the water bath that kept the device at body temperature, and those oscillations pushed blood into the saline-filled pressure sensors. Separately, oil from the ball bearing on the motor shaft was seeping into the blood circuit, which showed up as a thin film on a centrifuged sample. Identifying both gave the lab clear fixes for the test setup before the next run.',
    ],
    facts: [
      { label: 'Lab', value: 'Biomedical Devices Laboratory, Dr. Guruprasad Giridharan' },
      { label: 'Institution', value: 'University of Louisville, Shumaker Research Building' },
      { label: 'Focus', value: 'Impeller design and testing, in-vitro hemolysis testing' },
      { label: 'Measurements', value: 'Hematocrit, hemoglobin, activated clotting time, plasma-free hemoglobin, pressures, NIH and MIH' },
    ],
    pipeline: {
      title: 'Hemolysis test protocol',
      steps: [
        { label: 'Prime the loop', detail: 'Saline' },
        { label: 'Fill with blood', detail: 'Pre-warmed to 37 °C' },
        { label: 'Run the pump', detail: 'Constant speed, 4.5 hours' },
        { label: 'Sample', detail: 'Every 45 minutes' },
        { label: 'Blood labs', detail: 'Hematocrit, hemoglobin, ACT' },
        { label: 'Plasma-free Hb', detail: 'Red cell damage released' },
        { label: 'Hemolysis indices', detail: 'NIH and MIH' },
        { label: 'Error analysis', detail: 'Leaks, sensors, setup' },
      ],
    },
    images: [
      {
        src: '/projects/cpad/mock-loop.webp',
        width: 1400,
        height: 1044,
        alt: 'A mock circulatory loop on a pegboard: a reservoir, silicone tubing, a flow sensor, and the pump connected in a closed circuit',
        caption: 'The mock circulatory loop used for hemolysis testing. Blood circulates from the reservoir through tubing and inline sensors to the pump (bottom left) and back.',
        wide: true,
      },
    ],
  },

  // ── Earlier research ──────────────────────────────────────
  {
    slug: 'aldose-reductase-brain-inflammation',
    title: 'Pathogenic Role of Aldose Reductase in Brain Inflammation',
    short: 'Aldose Reductase',
    tags: ['Cell Biology', 'Neuroscience', 'Biomedical'],
    category: 'research',
    dates: '2022 – 2024',
    featured: true,
    summary:
      'Gut-brain axis research at the University of Louisville: tested whether blocking the enzyme aldose reductase with epalrestat protects brain immune cells from inflammation caused by the bacterial toxin LPS. It did, across cell survival, cytokines, and oxidative stress.',
    description: [
      'Microglia are the brain\'s resident immune cells. When they detect lipopolysaccharide (LPS), a toxin from the outer membrane of bacteria, they become activated and release inflammatory cytokines. Sustained microglia-driven inflammation is a risk factor for Alzheimer\'s, Parkinson\'s, and multiple sclerosis. Aldose reductase (AR), an enzyme in the polyol pathway, is best known for its role in diabetic complications, and growing evidence links it to inflammation, but its role in microglia activation was unclear.',
      'The project was part of the Barve Lab\'s broader research on the gut-brain axis and alcohol. Alcohol use and an imbalanced gut microbiome can release bacterial products like LPS into circulation, where they can drive inflammation that reaches the brain, and alcohol has been shown to raise AR levels in the liver. Over two years in the lab, I led this study from experimental design through the written research paper.',
      'This project tested whether epalrestat (EPAL), an AR inhibitor already used to treat diabetic neuropathy, could suppress LPS-induced inflammation when given as a pretreatment. I cultured BV2 mouse microglia and treated them with two LPS doses (10 and 100 ng/mL), EPAL alone (50 µM), and EPAL combined with each LPS dose, alongside untreated controls, with every condition run in triplicate.',
      'I measured cell survival with an MTT assay and isolated RNA for qRT-PCR to track inflammatory cytokine genes (TNF-α and IL-1β). Cytokine protein levels, NF-κB p65 activation by Western blot, and immunofluorescence imaging of oxidative stress markers rounded out the analysis. I tested significance with t-tests and ANOVA in GraphPad Prism (p < 0.05).',
      'LPS reduced cell viability to about 70% of untreated cells, and EPAL pretreatment brought it back above 80%. LPS raised inflammatory cytokines at both the gene and protein level, and EPAL lowered them. In cells given the higher LPS dose, IL-6 dropped by roughly 80%. EPAL also reduced the oxidative stress markers acrolein, NLRP3, COX-2, and iNOS, and limited phosphorylation of p65, the subunit that switches on NF-κB, the transcription factor behind TNF-α, IL-1β, and IL-6 production.',
      'Together, the results point to aldose reductase as a key mediator of LPS-induced microglia activation, and suggest AR inhibitors like epalrestat have therapeutic potential against neuroinflammation. Natural next steps are confirming the effect in other microglia models and testing other inflammatory triggers such as HNE and HMGB-1. The work earned the Outstanding Achievement Award for Ability and Creativity in In Vitro Biology from the Society for In Vitro Biology, along with membership in the SIVB.',
    ],
    facts: [
      { label: 'Institution', value: 'University of Louisville, Clinical and Translational Research Building' },
      { label: 'Lab', value: "Dr. Shirish Barve's Lab" },
      { label: 'Model', value: 'BV2 mouse microglia cell line' },
      { label: 'Techniques', value: 'Cell culture, MTT assay, RNA extraction, qRT-PCR, Western blot, immunofluorescence' },
      { label: 'Analysis', value: 'GraphPad Prism (t-tests, ANOVA)' },
      { label: 'Recognition', value: 'Outstanding Achievement Award in In Vitro Biology, SIVB (2023)' },
    ],
    acknowledgment:
      'Thank you to Dr. Shirish Barve and Dr. Craig McClain at the University of Louisville for hosting this research in their lab, and to Dr. Paula Chilton and Dr. Sreelatha Reddy for teaching me the experimental procedures.',
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
    slug: 'peltier-thermoelectric-effects',
    title: 'Peltier Chips and the Reversibility of Thermoelectric Effects',
    short: 'Peltier Chip',
    tags: ['Energy', 'Electronics', 'Physics'],
    category: 'research',
    dates: '2021 – 2022',
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
