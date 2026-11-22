export const projectCovers: Record<string, string> = {
  'cv-gen-frontend': 'projects/cv.png',
  'cv-gen-backend': 'projects/cv.png',
  'chess-app': 'projects/chess.png',
  'quran-app': 'projects/quran.png',
  'chat-app': 'projects/chat.png',
  'spotify-clone': 'projects/spotify.png',
  'instagram-clone': 'projects/instagram-clone.png',
  'instagram-api': 'projects/instagram-clone.png',
  'patient-portal': 'projects/patient-portal.png',
  'printer-app': 'projects/printer-app.png',
  'weather-magic': 'projects/weather-magic.png',
};

export const getProjectImage = (projectId: string): string =>
  projectCovers[projectId];
