// Icone inline con colore ereditato (currentColor), così seguono il tema
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PhoneIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
  </svg>
);

export const GithubIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

export const DownloadIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
  </svg>
);

export const ArrowIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const SunIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Logo = (props) => (
  <svg viewBox="0 0 180.41 110.3" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
    <g transform="translate(-11.134 -43.122)">
      <path d="m111.09 60.052h80.277v-16.753h-80.277z" />
      <path
        transform="matrix(.35278 0 0 -.35278 127.85 106.65)"
        d="m0 0h153.4v47.491h-200.89v-179.57h227.56v47.49h-180.07z"
      />
      <path
        transform="matrix(.35278 0 0 -.35278 -89.16 288.77) translate(531.2 609.71)"
        d="m0 0v38.83c0 26.007-21.084 47.09-47.091 47.09h-152.22c-25.912 0-46.923-20.933-47.076-46.81h-0.013v-0.27c0-4e-3 -1e-3 -6e-3 -1e-3 -0.01h1e-3v-84.992c0-26.008 21.083-47.09 47.09-47.09h146.12v-84.993h-140.01v38.829h-53.194v-38.829c0-26.007 21.083-47.091 47.09-47.091h152.22c26.007 0 47.09 21.084 47.09 47.091v84.993c0 26.007-21.083 47.09-47.09 47.09h-146.12v84.992h140.01v-38.83z"
      />
    </g>
  </svg>
);
