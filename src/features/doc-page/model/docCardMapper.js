/**
 * Maps API-shaped documentation rows (or mock) into the view-model used by `DocPageCard`.
 */
import { categoryToBadge } from "../Data/docs-categories.js";

/** Turns `Documentation.updatedAt` (ISO DateTime from API) into a short display string for cards. */
function formatDate(isoDate) {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/** Maps `Documentation.published` (boolean from API) to the right-hand badge on each card. */
function publishedToBadge(published) {
  return published
    ? { tone: "green", text: "Published" }
    : { tone: "amber", text: "Unpublished" };
}

/**
 * Builds the view-model object consumed by `DocPageCard`: merges API fields with UI-only fields
 * (badges, formatted date, arrow variant). Uses `structuredContent` when present (mock / future);
 * otherwise falls back to `content` like production GraphQL.
 */
export function toDocCard(doc, index = 0, section = "all") {
  const arrow =
    section === "startHere" || section === "recentUpdates"
      ? index === 0
        ? "primary"
        : "alt"
      : index % 2 === 0
        ? "primary"
        : "alt";

  return {
    id: doc.id ?? doc.slug,
    slug: doc.slug,
    badgeLeft: categoryToBadge(doc.category ?? ""),
    badgeRight: publishedToBadge(doc.published),
    title: doc.title,
    description: doc.description,
    content: doc.structuredContent ?? doc.content,
    minutes: "—",
    date: formatDate(doc.updatedAt),
    arrow,
  };
}
