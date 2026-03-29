export const DOCUMENTATION_CATEGORY_REGISTRY = [
  { id: "Core", tone: "blue", color: "bg-blue-100 text-blue-800" },
  {
    id: "Systems & Providers",
    tone: "purple",
    color: "bg-purple-100 text-purple-800",
  },
  { id: "Reviews", tone: "green", color: "bg-green-100 text-green-800" },
  { id: "Badges", tone: "amber", color: "bg-orange-100 text-orange-800" },
  { id: "Guide Leads", tone: "blue", color: "bg-sky-100 text-sky-800" },
  { id: "Lead Forms", tone: "green", color: "bg-emerald-100 text-emerald-800" },
  {
    id: "Buying Intent",
    tone: "purple",
    color: "bg-violet-100 text-violet-800",
  },
  {
    id: "Vendor Settings",
    tone: "amber",
    color: "bg-amber-100 text-amber-800",
  },
];

export const DOCUMENTATION_CATEGORIES = DOCUMENTATION_CATEGORY_REGISTRY.map(
  (c) => c.id,
);

export const DOCUMENTATION_CATEGORY_UI = Object.fromEntries(
  DOCUMENTATION_CATEGORY_REGISTRY.map((c) => [
    c.id,
    { label: c.label ?? c.id, tone: c.tone, color: c.color },
  ]),
);

const DEFAULT_TONE = "blue";
const FALLBACK_CHIP_COLOR = "bg-slate-100 text-slate-800";

export function documentationCategoriesFromDocs(docs) {
  const ids = [...new Set(docs.map((d) => d.category).filter(Boolean))];
  ids.sort((a, b) => a.localeCompare(b));
  return ids.map((id) => {
    const ui = DOCUMENTATION_CATEGORY_UI[id];
    return {
      id,
      name: ui?.label ?? id,
      color: ui?.color ?? FALLBACK_CHIP_COLOR,
    };
  });
}

export function categoryToBadge(category) {
  const key = category ?? "";
  const ui = DOCUMENTATION_CATEGORY_UI[key];
  return ui
    ? { tone: ui.tone, text: ui.label }
    : { tone: DEFAULT_TONE, text: key || "Uncategorized" };
}
