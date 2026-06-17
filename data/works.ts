export type Category = "Street" | "Flower" | "Cinematic" | "Landscape";

export type Work = {
  slug: string;
  image: string;
  title: string;
  category: Category;
  focalLength: string;
  aperture: string;
};

export const works: Work[] = [
  { slug: "the-dancer", image: "/work/7.jpg", title: "The Dancer", category: "Street", focalLength: "50mm", aperture: "f/1.8" },
  { slug: "city-Tower", image: "/work/2.jpg", title: "Tower", category: "Landscape", focalLength: "35mm", aperture: "f/2.0" },
  { slug: "morning-mist", image: "/work/3.jpg", title: "Morning Mist", category: "Landscape", focalLength: "85mm", aperture: "f/1.4" },
  { slug: "urban-geometry", image: "/work/19.jpg", title: "Urban Geometry", category: "Street", focalLength: "24mm", aperture: "f/4.0" },
  { slug: "golden-hour", image: "/work/1.jpg", title: "Golden Hour", category: "Flower", focalLength: "50mm", aperture: "f/1.2" },
  { slug: "noir-alley", image: "/work/6.jpg", title: "Noir Alley", category: "Street", focalLength: "35mm", aperture: "f/1.8" },
  { slug: "mountain-scape", image: "/work/7.jpg", title: "Mountain Scape", category: "Landscape", focalLength: "16mm", aperture: "f/8.0" },
  { slug: "candid-moments", image: "/work/9.jpg", title: "Candid Moments", category: "Street", focalLength: "50mm", aperture: "f/2.8" },
  { slug: "studio-gaze", image: "/work/5.jpg", title: "Studio Gaze", category: "Flower", focalLength: "85mm", aperture: "f/1.4" },
  { slug: "rainy-night", image: "/work/10.jpg", title: "Rainy Night", category: "Cinematic", focalLength: "50mm", aperture: "f/1.4" },
  { slug: "desert-bloom", image: "/work/11.jpg", title: "Desert Bloom", category: "Landscape", focalLength: "24mm", aperture: "f/5.6" },
  { slug: "street-performer", image: "/work/4.jpg", title: "Street Performer", category: "Street", focalLength: "35mm", aperture: "f/2.0" },
  { slug: "ethereal-beauty", image: "/work/15.jpg", title: "Ethereal Beauty", category: "Flower", focalLength: "100mm", aperture: "f/2.8" },
  { slug: "neon-dreams", image: "/work/14.jpg", title: "Neon Dreams", category: "Cinematic", focalLength: "28mm", aperture: "f/2.8" },
  { slug: "forest-path", image: "/work/12.jpg", title: "Forest Path", category: "Landscape", focalLength: "50mm", aperture: "f/1.8" },
  { slug: "market-life", image: "/work/13.jpg", title: "Market Life", category: "Street", focalLength: "85mm", aperture: "f/1.4" },
  { slug: "dramatic-pose", image: "/work/16.jpg", title: "Dramatic Pose", category: "Flower", focalLength: "70mm", aperture: "f/2.8" },
  { slug: "city-reflection", image: "/work/18.jpg", title: "City Reflection", category: "Cinematic", focalLength: "24mm", aperture: "f/4.0" },
  { slug: "sunset-over-hills", image: "/work/19.jpg", title: "Sunset Over Hills", category: "Landscape", focalLength: "35mm", aperture: "f/5.6" },
  { slug: "lonely-bench", image: "/work/20.jpg", title: "Lonely Bench", category: "Street", focalLength: "50mm", aperture: "f/1.8" },
];
