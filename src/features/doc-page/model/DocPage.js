import { useMemo, useState } from "react";

export const HERO = {
  pillText: "Documentation",
  title: "BusinessWith Documentation",
  subtitle: "Everything you need to know to get started and grow with BusinessWith",
  searchPlaceholder: "Search documentation...",
};

function formatDate(isoDate) {
  const d = new Date(`${isoDate}T00:00:00`);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function categoryToBadge(categoryId) {
  const map = {
    "getting-started": { tone: "blue", text: "Getting Started" },
    integration: { tone: "purple", text: "Integration" },
    api: { tone: "green", text: "API Reference" },
    guides: { tone: "amber", text: "Guides" },
    troubleshooting: { tone: "red", text: "Troubleshooting" },
  };
  return map[categoryId] ?? map["getting-started"];
}

function statusToBadge(status) {
  const map = {
    published: { tone: "green", text: "Published" },
    updated: { tone: "blue", text: "Updated" },
    draft: { tone: "amber", text: "Draft" },
  };
  return map[status] ?? map.published;
}

function toDocCard(doc, index = 0, section = "all") {
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
    badgeLeft: categoryToBadge(doc.category),
    badgeRight: statusToBadge(doc.status),
    title: doc.title,
    description: doc.description,
    content: doc.content,
    minutes: doc.readTime,
    date: formatDate(doc.lastUpdated),
    arrow,
  };
}

export function useDocPageModel({ categories, docsData, getFeaturedDocs, getRecentDocs }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const startHere = useMemo(
    () => getFeaturedDocs().slice(0, 3).map((doc, i) => toDocCard(doc, i, "startHere")),
    [getFeaturedDocs]
  );

  const recentUpdates = useMemo(
    () => getRecentDocs(4).map((doc, i) => toDocCard(doc, i, "recentUpdates")),
    [getRecentDocs]
  );

  const selectedCategoryId = useMemo(() => {
    if (selectedCategory === "All") return null;
    return categories.find((c) => c.name === selectedCategory)?.id ?? null;
  }, [categories, selectedCategory]);

  const allDocsFiltered = useMemo(() => {
    return selectedCategoryId ? docsData.filter((doc) => doc.category === selectedCategoryId) : docsData;
  }, [docsData, selectedCategoryId]);

  const allDocumentation = useMemo(() => {
    return allDocsFiltered.map((doc, i) => toDocCard(doc, i, "all"));
  }, [allDocsFiltered]);

  const browseByCategory = useMemo(
    () => ["All", ...categories.map((c) => c.name).sort((a, b) => a.localeCompare(b))],
    [categories]
  );

  const normalizedQuery = submittedQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;
  const isCategoryMode = !isSearching && selectedCategory !== "All";

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    return docsData
      .filter((doc) => {
        return (
          doc.title.toLowerCase().includes(normalizedQuery) ||
          doc.description.toLowerCase().includes(normalizedQuery) ||
          doc.category.toLowerCase().includes(normalizedQuery)
        );
      })
      .map((doc, i) => toDocCard(doc, i, "all"));
  }, [docsData, isSearching, normalizedQuery]);

  const submitSearch = () => {
    setSubmittedQuery(query.trim());
  };

  const clearSearch = () => {
    setQuery("");
    setSubmittedQuery("");
  };

  const clearCategory = () => {
    setSelectedCategory("All");
    clearSearch();
  };

  const selectCategory = (label) => {
    setSelectedCategory(label);
    clearSearch();
  };

  return {
    startHere,
    recentUpdates,
    allDocumentation,
    browseByCategory,
    selectedCategory,
    query,
    submittedQuery,
    isSearching,
    isCategoryMode,
    searchResults,
    setQuery,
    submitSearch,
    clearSearch,
    clearCategory,
    selectCategory,
  };
}

