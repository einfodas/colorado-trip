export type CityColorSet = {
  bg: string;
  bgDark: string;
  text: string;
  textDark: string;
  textMuted: string;
  textMutedDark: string;
  border: string;
  borderDark: string;
  icon: string;
  iconDark: string;
};

const cityColors: Record<string, CityColorSet> = {
  Denver: {
    bg: "bg-amber-50",
    bgDark: "dark:bg-amber-900/20",
    text: "text-amber-800",
    textDark: "dark:text-amber-300",
    textMuted: "text-amber-700",
    textMutedDark: "dark:text-amber-400",
    border: "border-amber-200",
    borderDark: "dark:border-amber-800",
    icon: "text-amber-600",
    iconDark: "dark:text-amber-400",
  },
  "Estes Park": {
    bg: "bg-teal-50",
    bgDark: "dark:bg-teal-900/20",
    text: "text-teal-800",
    textDark: "dark:text-teal-300",
    textMuted: "text-teal-700",
    textMutedDark: "dark:text-teal-400",
    border: "border-teal-200",
    borderDark: "dark:border-teal-800",
    icon: "text-teal-600",
    iconDark: "dark:text-teal-400",
  },
  "Colorado Springs": {
    bg: "bg-orange-50",
    bgDark: "dark:bg-orange-900/20",
    text: "text-orange-800",
    textDark: "dark:text-orange-300",
    textMuted: "text-orange-700",
    textMutedDark: "dark:text-orange-400",
    border: "border-orange-200",
    borderDark: "dark:border-orange-800",
    icon: "text-orange-600",
    iconDark: "dark:text-orange-400",
  },
  Boulder: {
    bg: "bg-sky-50",
    bgDark: "dark:bg-sky-950/20",
    text: "text-sky-800",
    textDark: "dark:text-sky-300",
    textMuted: "text-sky-700",
    textMutedDark: "dark:text-sky-400",
    border: "border-sky-200",
    borderDark: "dark:border-sky-800",
    icon: "text-sky-600",
    iconDark: "dark:text-sky-400",
  },
  Golden: {
    bg: "bg-yellow-50",
    bgDark: "dark:bg-yellow-950/20",
    text: "text-yellow-800",
    textDark: "dark:text-yellow-300",
    textMuted: "text-yellow-700",
    textMutedDark: "dark:text-yellow-400",
    border: "border-yellow-200",
    borderDark: "dark:border-yellow-800",
    icon: "text-yellow-600",
    iconDark: "dark:text-yellow-400",
  },
};

const defaultColor: CityColorSet = {
  bg: "bg-stone-50",
  bgDark: "dark:bg-stone-900/20",
  text: "text-stone-800",
  textDark: "dark:text-stone-300",
  textMuted: "text-stone-700",
  textMutedDark: "dark:text-stone-400",
  border: "border-stone-200",
  borderDark: "dark:border-stone-800",
  icon: "text-stone-600",
  iconDark: "dark:text-stone-400",
};

export function getCityColor(city: string): CityColorSet {
  return cityColors[city] ?? defaultColor;
}

export function getCityFromLocation(location: string): string {
  if (location.includes("Rocky Mountain")) return "Estes Park";
  const first = location.split("→")[0].trim();
  for (const city of Object.keys(cityColors)) {
    if (first === city) return city;
  }
  for (const city of Object.keys(cityColors)) {
    if (location.includes(city)) return city;
  }
  return "Denver";
}
