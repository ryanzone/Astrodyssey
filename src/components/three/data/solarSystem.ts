const Data = [
  {
    name: "Sun",
    size: 4,
    distance: 0,
    speed: 0,
    tilt: 7.25,
    emissive: true,
    moons: [],
  },

  {
    name: "Mercury",
    size: 0.38,
    distance: 8,
    speed: 1.6,
    tilt: 0.03,
    moons: [],
  },

  {
    name: "Venus",
    size: 0.95,
    distance: 11,
    speed: 1.2,
    tilt: 177.4,
    moons: [],
  },

{
  name: "Earth",
  size: 1,
  distance: 14,
  speed: 1,
  tilt: 23.44,
  moons: [
    { name: "Moon", size: 0.27, distance: 2, speed: 2 },
  ],
},

  {
    name: "Mars",
    size: 0.53,
    distance: 18,
    speed: 0.8,
    tilt: 25.19,
    moons: [
      { name: "Phobos", size: 0.08, distance: 1.2, speed: 3 },
      { name: "Deimos", size: 0.05, distance: 1.6, speed: 2 },
    ],
  },

  {
    name: "Jupiter",
    size: 2.5,
    distance: 26,
    speed: 0.4,
    tilt: 3.13,
    moons: [
      { name: "Io", size: 0.2, distance: 3, speed: 3 },
      { name: "Europa", size: 0.18, distance: 4, speed: 2 },
      { name: "Ganymede", size: 0.3, distance: 5, speed: 1.5 },
      { name: "Callisto", size: 0.28, distance: 6, speed: 1 },
    ],
  },

  {
    name: "Saturn",
    size: 1.95,
    distance: 36,
    speed: 0.3,
    tilt: 26.73,
    moons: [{ name: "Titan", size: 0.3, distance: 7, speed: 1.2 }],
  },

  {
    name: "Uranus",
    size: 1.6,
    distance: 46,
    speed: 0.2,
    tilt: 97.77,
    moons: [{ name: "Titania", size: 0.2, distance: 3, speed: 1 }],
  },

  {
    name: "Neptune",
    size: 1.55,
    distance: 56,
    speed: 0.18,
    tilt: 28.32,
    moons: [{ name: "Triton", size: 0.25, distance: 3.5, speed: 1 }],
  },

  {
    name: "Pluto",
    size: 0.18,
    distance: 70,
    speed: 0.1,
    tilt: 119.61,
    moons: [{ name: "Charon", size: 0.1, distance: 1, speed: 2 }],
  },

  {
    name: "Eris",
    size: 0.17,
    distance: 80,
    speed: 0.07,
    tilt: 44,
    moons: [],
  },
];

export default Data;
