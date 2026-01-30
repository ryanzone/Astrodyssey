const PLANET_FACTS: Record<string, string[]> = {
  mercury: [
    "Mercury is the smallest planet in our solar system, only slightly larger than Earth's Moon. Despite being closest to the Sun, it's not the hottest planet.",
    "A year on Mercury takes just 88 Earth days, but a single day on Mercury lasts 59 Earth days. This means a year is shorter than a day!",
    "Mercury has no atmosphere to retain heat, so temperatures swing wildly from 800°F (430°C) during the day to -290°F (-180°C) at night.",
    "Mercury's surface is covered with impact craters, similar to our Moon. The largest crater, Caloris Basin, is about 960 miles (1,550 km) in diameter.",
    "Despite its small size, Mercury has a large iron core that makes up about 75% of the planet's radius, giving it a magnetic field.",
  ],
  venus: [
    "Venus rotates backwards compared to most planets, meaning the Sun rises in the west and sets in the east. Scientists aren't sure why.",
    "A day on Venus (243 Earth days) is longer than its year (225 Earth days). It's the slowest rotating planet in our solar system.",
    "Venus is the hottest planet in the solar system with surface temperatures around 900°F (475°C), hot enough to melt lead.",
    "The atmospheric pressure on Venus is 92 times stronger than Earth's, equivalent to being 3,000 feet underwater in Earth's oceans.",
    "Venus has more volcanoes than any other planet in our solar system, with over 1,600 major volcanoes identified on its surface.",
  ],
  earth: [
    "Earth is the only planet not named after a Greek or Roman god. The name 'Earth' comes from Old English and Germanic words meaning 'ground.'",
    "Earth's rotation is gradually slowing down. About 1.4 billion years ago, a day on Earth lasted only 18 hours instead of 24.",
    "The Earth's core is as hot as the surface of the Sun, reaching temperatures of about 10,800°F (6,000°C).",
    "Earth is the only known planet with plate tectonics, where large pieces of crust move around, creating mountains, earthquakes, and volcanos.",
    "About 71% of Earth's surface is covered by water, but 97% of that water is saltwater in oceans, leaving only 3% as freshwater.",
  ],
  mars: [
    "Mars has the largest volcano in the solar system: Olympus Mons, which is about 13.6 miles (22 km) high, nearly three times the height of Mount Everest.",
    "A day on Mars is remarkably similar to Earth, lasting 24 hours and 37 minutes. However, a Martian year is 687 Earth days long.",
    "Mars appears red because its surface is covered in iron oxide, essentially rust. This gives the planet its distinctive reddish appearance.",
    "Mars has two small, irregularly shaped moons called Phobos and Deimos, which are thought to be captured asteroids.",
    "The Valles Marineris canyon system on Mars is over 2,500 miles (4,000 km) long and reaches depths of up to 4 miles (7 km), dwarfing Earth's Grand Canyon.",
  ],
  jupiter: [
    "Jupiter is so massive that it could fit all the other planets in the solar system inside it. It has 2.5 times the mass of all other planets combined.",
    "The Great Red Spot is a giant storm on Jupiter that has been raging for at least 400 years and is larger than Earth.",
    "Jupiter has 95 known moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto, discovered by Galileo in 1610.",
    "Jupiter's moon Ganymede is the largest moon in the solar system, even bigger than the planet Mercury.",
    "Jupiter rotates faster than any other planet, completing a full rotation in just under 10 hours, causing its equator to bulge outward.",
  ],
  saturn: [
    "Saturn's rings are made of billions of pieces of ice and rock, ranging in size from tiny grains to house-sized chunks.",
    "Saturn is the least dense planet in our solar system. If you could find a bathtub big enough, Saturn would float in water.",
    "Saturn has 146 known moons, the most of any planet. Its largest moon, Titan, is bigger than Mercury and has a thick atmosphere.",
    "The hexagonal storm at Saturn's north pole is about 20,000 miles (32,000 km) wide, larger than two Earths side by side.",
    "Saturn's rings are incredibly thin, only about 30 feet (10 meters) thick in most places, despite being over 175,000 miles (282,000 km) wide.",
  ],
  uranus: [
    "Uranus rotates on its side at a 98-degree angle, likely due to a massive collision early in its history. This causes extreme seasonal variations.",
    "A season on Uranus lasts 21 Earth years, meaning each pole gets 42 years of continuous sunlight followed by 42 years of darkness.",
    "Uranus is the coldest planet in the solar system with temperatures dropping to -371°F (-224°C), even though Neptune is farther from the Sun.",
    "Uranus has 13 known rings, though they are much darker and harder to see than Saturn's famous rings.",
    "Uranus was the first planet discovered with a telescope, spotted by William Herschel in 1781. All planets before it were known since ancient times.",
  ],
  neptune: [
    "Neptune has the strongest winds in the solar system, with speeds reaching up to 1,200 mph (2,000 km/h), faster than the speed of sound on Earth.",
    "Neptune takes 165 Earth years to orbit the Sun. Since its discovery in 1846, it has only completed one full orbit in 2011.",
    "Neptune's largest moon, Triton, orbits the planet backwards (retrograde), suggesting it was captured from the Kuiper Belt rather than forming with Neptune.",
    "Neptune radiates more than twice as much heat as it receives from the Sun, likely due to leftover heat from its formation.",
    "The Great Dark Spot observed on Neptune by Voyager 2 was a storm system as large as Earth, though it had disappeared by the time Hubble observed it in 1994.",
  ],
};

function makeCompleteFact(text: string, maxLength = 260) {
  if (!text) return "No description available.";
  
  if (text.length <= maxLength) return text;
  
  // Split into sentences
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  
  let result = "";
  
  for (const sentence of sentences) {
    if ((result + sentence).length > maxLength) break;
    result += sentence;
  }
  
  return result.trim() || text.slice(0, maxLength) + "...";
}

export async function getPlanetFunFact(planet: string): Promise<string> {
  const facts = PLANET_FACTS[planet.toLowerCase()];
  
  if (!facts || facts.length === 0) {
    return `No facts available for ${planet}.`;
  }
  
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  return makeCompleteFact(randomFact);
}

export async function getMultiplePlanetFacts(
  planet: string,
  count = 3
): Promise<string[]> {
  const facts = PLANET_FACTS[planet.toLowerCase()];
  
  if (!facts || facts.length === 0) {
    return [`No facts available for ${planet}.`];
  }
  
  // Shuffle and take unique facts
  const shuffled = [...facts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, facts.length));
}