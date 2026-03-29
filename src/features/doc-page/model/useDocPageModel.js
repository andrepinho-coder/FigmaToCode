import { useMemo, useState } from "react";
import { toDocCard } from "./docCardMapper.js";

export function useDocPageModel({
  categories,
  docsData,
  getFeaturedDocs,
  getRecentDocs,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  /** Top “Start here” strip: first three published featured docs as cards. */
  const startHere = useMemo(
    () =>
      getFeaturedDocs()
        .slice(0, 3)
        .map((doc, i) => toDocCard(doc, i, "startHere")),
    [getFeaturedDocs],
  );

  /** “Recent updates” strip: latest docs by `updatedAt`, capped by `getRecentDocs`. */
  const recentUpdates = useMemo(
    () => getRecentDocs(4).map((doc, i) => toDocCard(doc, i, "recentUpdates")),
    [getRecentDocs],
  );

  /** Resolves the selected browse label to a category id for filtering (`doc.category` string). */
  const selectedCategoryId = useMemo(() => {
    if (selectedCategory === "All") return null;
    return categories.find((c) => c.name === selectedCategory)?.id ?? null;
  }, [categories, selectedCategory]);

  /** Full doc array filtered by selected category, or unfiltered when “All” is selected. */
  const allDocsFiltered = useMemo(() => {
    return selectedCategoryId
      ? docsData.filter((doc) => doc.category === selectedCategoryId)
      : docsData;
  }, [docsData, selectedCategoryId]);

  /** Main grid: all docs (after category filter) as cards. */
  const allDocumentation = useMemo(() => {
    return allDocsFiltered.map((doc, i) => toDocCard(doc, i, "all"));
  }, [allDocsFiltered]);

  /** Labels for the category chips, in canonical order, with “All” first. */
  const browseByCategory = useMemo(
    () => ["All", ...categories.map((c) => c.name)],
    [categories],
  );

  const normalizedQuery = submittedQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;
  const isCategoryMode = !isSearching && selectedCategory !== "All";

  /** Docs matching the submitted search across title, description, and category string. */
  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    return docsData
      .filter((doc) => {
        return (
          doc.title.toLowerCase().includes(normalizedQuery) ||
          doc.description.toLowerCase().includes(normalizedQuery) ||
          (doc.category ?? "").toLowerCase().includes(normalizedQuery)
        );
      })
      .map((doc, i) => toDocCard(doc, i, "all"));
  }, [docsData, isSearching, normalizedQuery]);

  /** Applies the current search input as the active filter. */
  const submitSearch = () => {
    setSubmittedQuery(query.trim());
  };

  /** Clears search input and active search filter. */
  const clearSearch = () => {
    setQuery("");
    setSubmittedQuery("");
  };

  /** Resets category to “All” and clears search. */
  const clearCategory = () => {
    setSelectedCategory("All");
    clearSearch();
  };

  /** Sets active category and clears search so list and search modes do not mix. */
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
