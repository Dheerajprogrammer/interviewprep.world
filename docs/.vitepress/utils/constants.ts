export const SITE_NAME = 'InterviewPrep.World'
export const SITE_URL = 'https://interviewprep.world'
export const SITE_DESCRIPTION =
  '750+ interview questions across frontend, backend, databases, DevOps, architecture, and behavioral interviews—with answers, examples, and real scenarios.'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.svg`

export const BRAND = {
  primary: '#2563EB',
  secondary: '#0F172A',
  accent: '#14B8A6',
} as const

export const TRACKS = [
  {
    id: 'react',
    label: 'React',
    path: '/react-interview-questions/',
    ogImage: '/og-react.png',
  },
  {
    id: 'angular',
    label: 'Angular',
    path: '/angular-interview-questions/',
    ogImage: '/og-angular.png',
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    path: '/javascript-interview-questions/',
    ogImage: '/og-javascript.png',
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    path: '/typescript-interview-questions/',
    ogImage: '/og-typescript.png',
  },
  {
    id: 'system-design',
    label: 'System Design',
    path: '/frontend-system-design/',
    ogImage: '/og-default.png',
  },
  {
    id: 'hr',
    label: 'HR Questions',
    path: '/hr-interview-questions/',
    ogImage: '/og-default.png',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    path: '/frontend-interview-questions/',
    ogImage: '/og-default.png',
  },
  {
    id: 'backend',
    label: 'Backend',
    path: '/backend-interview-questions/',
    ogImage: '/og-default.png',
  },
  {
    id: 'database',
    label: 'Database',
    path: '/database-interview-questions/',
    ogImage: '/og-default.png',
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    path: '/devops-cloud-interview-questions/',
    ogImage: '/og-default.png',
  },
  {
    id: 'architecture',
    label: 'Architecture',
    path: '/architecture-interview-questions/',
    ogImage: '/og-default.png',
  },
] as const
