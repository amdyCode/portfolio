export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string; // lucide icon name
  color: string;
  items: SkillItem[];
  fullWidth?: boolean;
  twoColumns?: boolean;
}

export interface TechPill {
  name: string;
  icon: string;   // lucide icon name
  color: string;  // vraie couleur de la techno
}

export interface TechCategory {
  id: string;
  label: string;
  icon: string;
  color: string;
  pills: TechPill[];
}

export type ProjectCategory = 'all' | 'web' | 'backend' | 'mobile';
export type BadgeType = 'deployed' | 'available';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'all'>;
  badge: BadgeType;
  badgeLabel: string;
  techs: TechPill[];
  link: string;
  linkLabel: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string;
}

// ─── TECH GRID (Mon Atelier) ───────────────────────────────
export const techCategories: TechCategory[] = [
  {
    id: 'mobile',
    label: 'Mobile',
    icon: 'Smartphone',
    color: '#54C5F8',
    pills: [
      { name: 'Flutter', icon: 'flutter', color: '#54C5F8' },
      { name: 'Dart', icon: 'dart', color: '#01579B' },
      { name: 'Firebase', icon: 'firebase', color: '#FFA000' },
      { name: 'Supabase', icon: 'supabase', color: '#3ECF8E' },
      { name: 'Android', icon: 'android', color: '#3DDC84' },
    ],
  },
  {
    id: 'web',
    label: 'Web',
    icon: 'Globe',
    color: '#DD0031',
    pills: [
      { name: 'Angular', icon: 'angular', color: '#DD0031' },
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
      { name: 'React', icon: 'react', color: '#61DAFB' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'Server',
    color: '#68A063',
    pills: [
      { name: 'Node.js', icon: 'nodedotjs', color: '#68A063' },
      { name: 'Express.js', icon: 'express', color: '#888888' },
      { name: 'GraphQL', icon: 'graphql', color: '#E10098' },
      { name: 'Prisma', icon: 'prisma', color: '#2D3748' },
      { name: 'PostgreSQL', icon: 'postgresql', color: '#336791' },
      { name: 'REST APIs', icon: 'PlugZap', color: '#38BDF8' },
    ],
  },
  {
    id: 'tools',
    label: 'Outils & DevOps',
    icon: 'Wrench',
    color: '#F05033',
    pills: [
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
      { name: 'Git', icon: 'git', color: '#F05033' },
      { name: 'GitHub', icon: 'github', color: '#FFFFFF' },
      { name: 'Figma', icon: 'figma', color: '#F24E1E' },
      { name: 'Postman', icon: 'postman', color: '#FF6C37' },
      { name: 'VS Code', icon: 'vscode', color: '#007ACC' },
      { name: 'Linux', icon: 'linux', color: '#FCC624' },
    ],
  },
];

// ─── SKILL BARS ────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'Palette',
    color: '#38BDF8',
    items: [
      { name: 'HTML / CSS', level: 95 },
      { name: 'JavaScript', level: 88 },
      { name: 'Angular', level: 70 },
      { name: 'React.js', level: 65 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'Server',
    color: '#68A063',
    items: [
      { name: 'REST API', level: 80 },
      { name: 'Node.js', level: 72 },
      { name: 'Express.js', level: 70 },
      { name: 'GraphQL', level: 65 },
      { name: 'Python', level: 60 },
    ],
  },
  {
    id: 'database',
    label: 'Base de données',
    icon: 'Database',
    color: '#336791',
    items: [
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 65 },
      { name: 'Prisma ORM', level: 70 },
      { name: 'MySQL', level: 72 },
    ],
  },
  {
    id: 'devops',
    label: 'Outils & DevOps',
    icon: 'Wrench',
    color: '#F05033',
    items: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Figma', level: 85 },
      { name: 'Vercel', level: 88 },
      { name: 'Docker', level: 72 },
      { name: 'CI/CD', level: 70 },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile — Flutter & Dart',
    icon: 'Smartphone',
    color: '#54C5F8',
    fullWidth: true,
    twoColumns: true,
    items: [
      { name: 'Flutter', level: 88 },
      { name: 'Dart', level: 80 },
      { name: 'Firebase', level: 78 },
      { name: 'Provider / Riverpod', level: 80 },
      { name: 'REST API / GraphQL', level: 85 },
      { name: 'BLoC / GetX', level: 78 },
    ],
  },
];

// ─── PROJETS ───────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'cv-gen-frontend',
    title: 'Générateur de CV',
    description: 'Application de création de CV dynamiques.',
    category: 'web',
    badge: 'available',
    badgeLabel: 'Code disponible',
    techs: [
      { name: 'Angular', icon: 'angular', color: '#DD0031' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
    ],
    link: 'https://github.com/amdyCode/cv_app',
    linkLabel: 'Voir le code',
  },
  {
    id: 'cv-gen-backend',
    title: 'Générateur de CV — API',
    description: 'Backend de l\'application de création de CV dynamiques.',
    category: 'backend',
    badge: 'available',
    badgeLabel: 'Code disponible',
    techs: [
      { name: 'Node.js Express', icon: 'nodedotjs', color: '#68A063' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
    ],
    link: 'https://github.com/amdyCode/cv-back',
    linkLabel: 'Voir le code',
  },
  {
    id: 'quran-app',
    title: 'Quran App',
    description: 'Application pour lire le Coran, déjà déployée sur le Play Store.',
    category: 'mobile',
    badge: 'deployed',
    badgeLabel: 'Déployé',
    techs: [
      { name: 'Flutter', icon: 'flutter', color: '#54C5F8' },
      { name: 'Dart', icon: 'dart', color: '#01579B' },
    ],
    link: 'https://play.google.com/store/apps/details?id=com.amdyCode.quran_app',
    linkLabel: 'Voir sur le Play Store',
  },
  {
    id: 'patient-portal',
    title: 'Patient Portal',
    description: 'Application mobile de gestion de dossiers médicaux permettant aux patients de consulter leurs rendez-vous et recommandations. Architecture de navigation avancée et UI/UX fluide.',
    category: 'mobile',
    badge: 'available',
    badgeLabel: 'Code disponible',
    techs: [
      { name: 'Flutter (Dart)', icon: 'flutter', color: '#54C5F8' },
      { name: 'Firebase', icon: 'firebase', color: '#FFA000' },
    ],
    link: 'https://github.com/amdyCode/patient_portal',
    linkLabel: 'Voir le code',
  },
  {
    id: 'printer-app',
    title: 'Printer App',
    description: 'Module d\'intégration matérielle pour l\'impression de reçus sur imprimante thermique via Bluetooth, avec gestion avancée des permissions.',
    category: 'mobile',
    badge: 'available',
    badgeLabel: 'Code disponible',
    techs: [
      { name: 'Flutter (Dart)', icon: 'flutter', color: '#54C5F8' },
      { name: 'Bluetooth SDK', icon: 'Bluetooth', color: '#0082FC' },
    ],
    link: 'https://github.com/amdyCode/printer_app',
    linkLabel: 'Voir le code',
  },
  {
    id: 'weather-magic',
    title: 'Weather Magic',
    description: 'Application météo asynchrone offrant des prévisions en temps réel, avec cartographie interactive, géolocalisation et visualisation de données.',
    category: 'mobile',
    badge: 'available',
    badgeLabel: 'Code disponible',
    techs: [
      { name: 'Flutter (Dart)', icon: 'flutter', color: '#54C5F8' },
      { name: 'OpenWeather API', icon: 'CloudSun', color: '#EB6E4B' },
      { name: 'Google Maps SDK', icon: 'MapPin', color: '#4285F4' },
    ],
    link: 'https://github.com/amdyCode/weather_app',
    linkLabel: 'Voir le code',
  },
  {
    id: 'chess-app',
    title: 'Chess App',
    description: 'Jeu d\'échecs interactif avec moteur de règles personnalisé (échec, mat, pat, chronomètres), architecture frontend avec séparation stricte UI / logique métier.',
    category: 'web',
    badge: 'available',
    badgeLabel: 'Code disponible',
    techs: [
      { name: 'Angular', icon: 'angular', color: '#DD0031' },
    ],
    link: 'https://github.com/amdyCode/chess-app',
    linkLabel: 'Voir le code',
  },
];

// ─── FORMATION ─────────────────────────────────────────────
export const educations: Education[] = [
  {
    id: 'master',
    degree: 'Master en Intelligence Artificielle',
    school: 'Université Amadou Hampathe Ba',
    period: '2025 — 2026',
    description: '',
  },
  {
    id: 'licence',
    degree: 'Licence Informatique',
    school: 'Université Amadou Hampathe Ba',
    period: '2022 — 2025',
    description: 'Bases solides en algorithmique, réseaux, bases de données et développement logiciel.',
  },
];
