import { useEffect, useRef, useState } from 'react';

/**
 * Hook reveal : retourne un ref à attacher à un élément DOM
 * et `visible` qui passe à true quand l'élément entre dans le viewport.
 */
export const useReveal = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
};

/**
 * Hook skill bar : observe un élément et retourne `triggered` quand
 * il entre dans le viewport (pour animer les barres de compétences).
 */
export const useSkillBar = (threshold = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setTriggered(true), 200);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, triggered };
};
