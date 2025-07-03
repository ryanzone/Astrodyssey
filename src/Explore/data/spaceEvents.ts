export type SpaceEvent = {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
};

export const spaceEvents: SpaceEvent[] = [
  {
    date: "2025-07-02",
    title: "Venus at Greatest Elongation",
    description: "Venus is farthest from the Sun in the evening sky.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/58/Venus_by_Mariner_10.jpg",
  },
  {
    date: "2025-07-04",
    title: "Juno Flyby of Jupiter",
    description: "NASA’s Juno spacecraft flies close to Jupiter.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Jupiter_by_Juno.jpg",
  },
  // Duplicate for demo
  {
    date: "2025-07-06",
    title: "Saturn Ring Tilt Maximum",
    description: "Saturn's rings appear at their maximum tilt toward Earth.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  },
  {
    date: "2025-07-08",
    title: "Mars Opposition",
    description: "Mars appears brightest as it lies opposite the Sun from Earth.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  },
  {
    date: "2025-07-10",
    title: "Full Moon",
    description: "A fully illuminated moon lights up the sky.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
  },
];
