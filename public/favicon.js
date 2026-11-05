// Little Habits icon set: flat, sticker-style SVGs in the app's palette
// (sage, cream, brick, mustard, plum, navy, rose, teal, brown).
// Each icon is 32×32 and sized with `1em`, so it scales with font-size
// exactly like the emoji it replaces.

const svg = (body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" aria-hidden="true" focusable="false">${body}</svg>`;

export const ICONS = [
  {
    id: "strength",
    label: "Strength",
    svg: svg(`
      <rect x="11" y="14" width="10" height="4" rx="2" fill="#6d4a3a"/>
      <rect x="4" y="9" width="6" height="14" rx="2.5" fill="#a8423b"/>
      <rect x="22" y="9" width="6" height="14" rx="2.5" fill="#a8423b"/>
      <rect x="9" y="11" width="4" height="10" rx="2" fill="#e0a93b"/>
      <rect x="19" y="11" width="4" height="10" rx="2" fill="#e0a93b"/>`),
  },
  {
    id: "run",
    label: "Run",
    svg: svg(`
      <path d="M4 22V11q0-1.5 1.5-1.5H9q1 3.5 4.5 3.5 3 0 5 3l7.5 2.5q3 1 3 4z" fill="#6f8f7c"/>
      <rect x="3" y="22" width="26" height="4" rx="2" fill="#6d4a3a"/>
      <path d="M13 15l2 2M16 16l2 2" stroke="#fbf3df" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M4 22h25" stroke="#fbf3df" stroke-width="1" opacity=".6"/>`),
  },
  {
    id: "read",
    label: "Read",
    svg: svg(`
      <path d="M16 7Q10 4 2 5.5V25.5Q10 24 16 27 22 24 30 25.5V5.5Q22 4 16 7z" fill="#7a4a86"/>
      <path d="M16 9Q10 6.8 4.5 8V23Q10 22 16 24.5z" fill="#fbf3df"/>
      <path d="M16 9Q22 6.8 27.5 8V23Q22 22 16 24.5z" fill="#f3ead2"/>
      <path d="M7 12Q10 11.4 13 12.4M7 15.5Q10 14.9 13 15.9M19 12.4Q22 11.4 25 12M19 15.9Q22 14.9 25 15.5" stroke="#c9bda0" stroke-width="1.3" stroke-linecap="round" fill="none"/>`),
  },
  {
    id: "meditate",
    label: "Meditate",
    svg: svg(`
      <path d="M16 22Q6 22 4.5 11Q13 12 16 22z" fill="#e58fab"/>
      <path d="M16 22Q26 22 27.5 11Q19 12 16 22z" fill="#e58fab"/>
      <path d="M16 5Q22 13 16 22Q10 13 16 5z" fill="#d4668a"/>
      <path d="M6 25.5Q16 29.5 26 25.5" stroke="#6f8f7c" stroke-width="2" stroke-linecap="round" fill="none"/>`),
  },
  {
    id: "water",
    label: "Water",
    svg: svg(`
      <path d="M16 4Q24 14 24 19A8 8 0 0 1 8 19Q8 14 16 4z" fill="#3f7f98"/>
      <path d="M12 19.5A4 4 0 0 0 16 23.5" stroke="#fbf3df" stroke-width="2" stroke-linecap="round" fill="none" opacity=".85"/>
      <circle cx="13.5" cy="14" r="1.3" fill="#fbf3df" opacity=".7"/>`),
  },
  {
    id: "sleep",
    label: "Sleep",
    svg: svg(`
      <path d="M21 5A11 11 0 1 0 27 21A9 9 0 0 1 21 5z" fill="#3b4a8c"/>
      <path d="M25 9l1.2 2.8L29 13l-2.8 1.2L25 17l-1.2-2.8L21 13l2.8-1.2z" fill="#e0a93b"/>
      <circle cx="19" cy="24.5" r="1" fill="#e0a93b"/>`),
  },
  {
    id: "eat",
    label: "Eat well",
    svg: svg(`
      <path d="M8 15Q8 8 14 7Q15 13 8 15z" fill="#6f8f7c"/>
      <path d="M15 15Q14 6 21 5Q23 12 15 15z" fill="#8aa88f"/>
      <circle cx="23.5" cy="11.5" r="3.2" fill="#e0a93b"/>
      <path d="M4 15H28A12 12 0 0 1 4 15z" fill="#a8423b"/>
      <path d="M8 18.5Q10 22 14 23" stroke="#fbf3df" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".6"/>`),
  },
  {
    id: "write",
    label: "Write",
    svg: svg(`
      <path d="M13 28Q17 25.5 21 28T29 28" stroke="#6f8f7c" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <path d="M8 20L22 6L26 10L12 24z" fill="#e0a93b"/>
      <path d="M6 26L8 20L12 24z" fill="#f2c4a6"/>
      <path d="M6 26L7.2 22.8L9.2 24.8z" fill="#6d4a3a"/>
      <path d="M22 6L24 4Q25.5 3.5 27.5 5.5Q28.5 7.5 28 8L26 10z" fill="#d4668a"/>`),
  },
  {
    id: "goal",
    label: "Goal",
    svg: svg(`
      <circle cx="15" cy="17" r="12" fill="#a8423b"/>
      <circle cx="15" cy="17" r="9" fill="#fbf3df"/>
      <circle cx="15" cy="17" r="6" fill="#a8423b"/>
      <circle cx="15" cy="17" r="3" fill="#e0a93b"/>
      <path d="M15 17L26.5 5.5M26.5 5.5V2.5M26.5 5.5H29.5" stroke="#6d4a3a" stroke-width="2" stroke-linecap="round" fill="none"/>`),
  },
  {
    id: "mind",
    label: "Mind",
    svg: svg(`
      <g fill="#7a4a86">
        <circle cx="11" cy="12" r="5.5"/><circle cx="19" cy="10.5" r="5.5"/><circle cx="24" cy="16" r="5"/>
        <circle cx="21" cy="22" r="5"/><circle cx="12" cy="21.5" r="5.5"/><circle cx="8" cy="17" r="4.5"/>
        <rect x="9" y="12" width="14" height="10" rx="3"/>
      </g>
      <path d="M16 8Q14 15 17 24M10 13Q12.5 15 10 18M22 13Q19.5 15.5 22 19" stroke="#fbf3df" stroke-width="1.6" stroke-linecap="round" fill="none"/>`),
  },
  {
    id: "meds",
    label: "Medicine",
    svg: svg(`
      <g transform="rotate(-40 16 16)">
        <path d="M16 11H7a5 5 0 0 0 0 10H16z" fill="#d4668a"/>
        <path d="M16 11H25a5 5 0 0 1 0 10H16z" fill="#fbf3df" stroke="#c9bda0" stroke-width="1"/>
        <path d="M8 14H13" stroke="#fbf3df" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>
      </g>`),
  },
  {
    id: "walk",
    label: "Walk",
    svg: svg(`
      <ellipse cx="11" cy="11" rx="3.4" ry="5" fill="#6f8f7c"/>
      <circle cx="11" cy="19.2" r="2.5" fill="#6f8f7c"/>
      <ellipse cx="21" cy="19" rx="3.4" ry="5" fill="#8aa88f"/>
      <circle cx="21" cy="27.2" r="2.5" fill="#8aa88f"/>`),
  },
];

export const ICON_IDS = ICONS.map((i) => i.id);

// Look up the SVG markup for a saved icon id. Unknown ids (for example an old
// emoji saved before this change) are returned as-is so they still display.
export const iconSvg = (id) => ICONS.find((i) => i.id === id)?.svg ?? id;
