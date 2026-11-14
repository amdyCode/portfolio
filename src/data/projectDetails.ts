export interface ProjectDetails {
  stack: string[];
  fr: string[];
  en: string[];
}

export const projectDetails: Record<string, ProjectDetails> = {
  'cv-gen-frontend': {
    stack: ['Angular', 'TypeScript', 'SCSS'],
    fr: [
      'Application de création de CV dynamiques avec aperçu en temps réel (ce CV a été généré avec l\'application)',
      'Remplissage rapide par import JSON avec validation du typage',
      'Personnalisation de la couleur du thème, photo et téléphone optionnels, mise en évidence des compétences selon l\'offre',
      'Export PDF via l\'API backend',
    ],
    en: [
      'Dynamic CV builder with live preview (my own CV was generated with this app)',
      'Quick form filling through JSON import with type validation',
      'Custom theme color, optional photo and phone number, skills highlighted according to the job offer',
      'PDF export through the backend API',
    ],
  },
  'cv-gen-backend': {
    stack: ['TypeScript', 'Docker'],
    fr: [
      'API de génération de PDF à partir du rendu HTML du CV',
      'Gestion des marges et des sauts de page pour un rendu fidèle à l\'aperçu',
      'Conteneurisation de l\'application avec Docker',
    ],
    en: [
      'API generating PDFs from the HTML rendering of the CV',
      'Margin and page-break handling for a result faithful to the preview',
      'Application containerized with Docker',
    ],
  },
  'chess-app': {
    stack: ['Angular', 'TypeScript'],
    fr: [
      'Jeu d\'échecs web complet avec moteur de règles personnalisé (échec, mat, pat)',
      'Chronomètres pour chaque joueur',
      'Architecture frontend réactive avec séparation stricte entre l\'interface et la logique métier',
    ],
    en: [
      'Complete web chess game with a custom rules engine (check, checkmate, stalemate)',
      'Individual timers for each player',
      'Reactive frontend architecture with strict separation between UI and business logic',
    ],
  },
  'quran-app': {
    stack: ['Google Play Console'],
    fr: [
      'Application mobile de lecture et d\'écoute du Saint Coran, publiée et maintenue sur le Google Play Store',
      'Interface de lecture immersive avec calligraphie authentique Uthmani et fonctionnement complet en mode hors-ligne',
      'Intégration d\'un module d\'écoute audio haute définition (streaming des récitations de grands récitateurs)',
      'Système de mise en favoris avec stockage local sécurisé et chiffré des données de l\'utilisateur',
      'Conception UI/UX sur mesure (vert émeraude et or) optimisée pour le confort visuel',
    ],
    en: [
      'Mobile app to read and listen to the Holy Quran, published and maintained on the Google Play Store',
      'Immersive reading interface with authentic Uthmani calligraphy and a fully offline mode',
      'High-definition audio module (streaming of recitations by renowned reciters)',
      'Favorites system with secure, encrypted local storage of user data',
      'Custom UI/UX design (emerald green and gold) optimized for visual comfort',
    ],
  },
  'patient-portal': {
    stack: ['Flutter (Dart)', 'Provider'],
    fr: [
      'Application mobile de gestion de dossiers médicaux : consultation des rendez-vous, de l\'historique médical et des recommandations de santé',
      'Architecture de navigation avancée avec GoRouter et gestion d\'état avec Provider',
      'Interface UI/UX fluide et structurée',
      'Intégration de Firebase (Auth/Firestore) prévue prochainement',
    ],
    en: [
      'Mobile app for medical record management: appointments, medical history and health recommendations',
      'Advanced navigation architecture with GoRouter and state management with Provider',
      'Smooth and well-structured UI/UX',
      'Firebase (Auth/Firestore) integration planned soon',
    ],
  },
  'printer-app': {
    stack: ['Flutter (Dart)'],
    fr: [
      'Module d\'intégration matérielle pour l\'impression de reçus sur imprimante thermique',
      'Communication Bluetooth avec un périphérique externe',
      'Gestion avancée et stricte des permissions natives (iOS/Android)',
    ],
    en: [
      'Hardware integration module for printing receipts on a thermal printer',
      'Bluetooth communication with an external device',
      'Advanced and strict handling of native permissions (iOS/Android)',
    ],
  },
  'weather-magic': {
    stack: ['Flutter (Dart)', 'OpenWeather API', 'Google Maps SDK'],
    fr: [
      'Application météo asynchrone fournissant des prévisions en temps réel',
      'Consommation d\'APIs tierces et intégration de cartes interactives',
      'Géolocalisation de l\'utilisateur et visualisation de données avec des graphiques animés',
      'Intégration de Firebase prévue prochainement',
    ],
    en: [
      'Asynchronous weather app providing real-time forecasts',
      'Third-party API consumption and interactive map integration',
      'User geolocation and data visualization with animated charts',
      'Firebase integration planned soon',
    ],
  },
  'spotify-clone': {
    stack: ['GetX','Deezer API'],
    fr: [
      'Clone mobile de Spotify : écrans d\'accueil, recherche, bibliothèque, lecteur plein écran et paroles',
      'Lecture audio avec file d\'attente, modes aléatoire et répétition, avec le lecteur géré par un contrôleur GetX réactif',
      'Recherche combinant un catalogue local (JSON) et l\'API Deezer, avec récupération des extraits audio et mise en cache des URLs',
      'Favoris persistés en local (SharedPreferences) et mini-lecteur avec geste de balayage pour le fermer',
      'Écran de paroles défilant automatiquement avec la progression du morceau',
    ],
    en: [
      'Spotify mobile clone: home, search, library, full-screen player and lyrics screens',
      'Audio playback with queue, shuffle and repeat modes, driven by a reactive GetX controller',
      'Search combining a local catalog (JSON) and the Deezer API, fetching audio previews and caching URLs',
      'Favorites persisted locally (SharedPreferences) and a mini-player dismissed with a swipe gesture',
      'Lyrics screen that auto-scrolls along with the track progress',
    ],
  },
  'instagram-clone': {
    stack: ['Riverpod'],
    fr: [
      'Application mobile reproduisant les fonctionnalités clés d\'Instagram, connectée à une API GraphQL personnalisée',
      'Architecture Feature-first (découpage modulaire par fonctionnalité avec repository pattern) et gestion d\'état réactive avec Riverpod',
      'Navigation robuste par onglets avec GoRouter (StatefulShellRoute) préservant l\'état de chaque écran',
      'Fil d\'actualité dynamique avec likes instantanés, fil de stories et affichage des commentaires en bottom sheet',
      'Lecteur immersif de stories plein écran avec barre de progression synchronisée et navigation tactile',
      'Explorateur de publications en grille, recherche en direct d\'utilisateurs et écran de profil complet (stats, follow/unfollow, édition)',
    ],
    en: [
      'Mobile app reproducing Instagram\'s key features, connected to a custom GraphQL API',
      'Feature-first architecture (modular split by feature with repository pattern) and reactive state management with Riverpod',
      'Robust tab navigation with GoRouter (StatefulShellRoute) preserving each screen\'s state',
      'Dynamic feed with instant likes, stories feed and comments displayed in a bottom sheet',
      'Immersive full-screen story viewer with synchronized progress bar and touch navigation',
      'Grid post explorer, live user search and complete profile screen (stats, follow/unfollow, editing)',
    ],
  },
  'instagram-api': {
    stack: ['GraphQL', 'PostgreSQL'],
    fr: [
      'API backend GraphQL modulaire et hautement typée (Apollo Server 5 + GraphQL Code Generator pour les types resolvers)',
      'Modélisation relationnelle avec Prisma ORM et PostgreSQL (index composites, contraintes de clés et cascades de suppression)',
      'Gestion de l\'authentification stateless avec JWT, hachage bcrypt et validation rigoureuse des schémas d\'entrée via Zod',
      'Modules métier complets : gestion du feed personnalisé, publications multi-médias, système de follow/unfollow, likes et commentaires',
      'Architecture sécurisée avec Helmet, CORS, journalisation structurée ultra-rapide (Pino) et suite de tests avec Vitest et Supertest',
    ],
    en: [
      'Modular, strongly typed GraphQL backend API (Apollo Server 5 + GraphQL Code Generator for resolver types)',
      'Relational modeling with Prisma ORM and PostgreSQL (composite indexes, key constraints and cascading deletes)',
      'Stateless authentication with JWT, bcrypt hashing and strict input schema validation via Zod',
      'Complete business modules: personalized feed, multi-media posts, follow/unfollow system, likes and comments',
      'Secure architecture with Helmet, CORS, ultra-fast structured logging (Pino) and a test suite with Vitest and Supertest',
    ],
  },
  'chat-app': {
    stack: ['GetX'],
    fr: [
      'Application de messagerie 1:1 en temps réel avec authentification (inscription, connexion, réinitialisation du mot de passe par e-mail)',
      'Synchronisation des messages et des contacts via les écoutes temps réel de Firestore',
      'Présence en ligne/hors ligne liée au cycle de vie de l\'app, avec indicateur « en train d\'écrire »',
      'Accusés d\'envoi et de lecture (envoyé, lu) et compteur de messages non lus par conversation',
      'Blocage et déblocage de contacts, avec filtres et recherche dans la liste des contacts',
      'Architecture MVC avec GetX (contrôleurs, services, modèles, écrans)',
    ],
    en: [
      'Real-time 1:1 messaging app with authentication (sign up, sign in, password reset by e-mail)',
      'Messages and contacts synced through Firestore real-time listeners',
      'Online/offline presence tied to the app lifecycle, with a "typing…" indicator',
      'Sent and read receipts and unread message counter per conversation',
      'Contact blocking and unblocking, with filters and search in the contact list',
      'MVC architecture with GetX (controllers, services, models, screens)',
    ],
  },
};
