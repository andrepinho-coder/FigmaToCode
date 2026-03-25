import { useState } from "react";
import { docPageAssets } from "../Data/docPageAssets.js";
import { categories, docsData, getFeaturedDocs, getRecentDocs } from "../Data/docs-data.js";
import DocPageCard from "../components/DocPageCard.jsx";
import DocDetails from "../components/DocDetails.jsx";

function DocPageSectionTitle({ icon, title }) {
  return (
    <div className="mb-6 flex items-center gap-2">
      <img className="block size-6" alt="" src={icon} />
      <div className="text-2xl font-bold leading-8 text-(--text)">{title}</div>
    </div>
  );
}

export default function DocPage() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const hero = {
    pillText: "Documentation",
    title: "BusinessWith Documentation",
    subtitle: "Everything you need to know to get started and grow with BusinessWith",
    searchPlaceholder: "Search documentation...",
  };

  const formatDate = (isoDate) => {
    // docs-data lastUpdated is YYYY-MM-DD
    const d = new Date(`${isoDate}T00:00:00`);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const categoryToBadge = (categoryId) => {
    const map = {
      "getting-started": { tone: "blue", text: "Getting Started" },
      integration: { tone: "purple", text: "Integration" },
      api: { tone: "green", text: "API Reference" },
      guides: { tone: "amber", text: "Guides" },
      troubleshooting: { tone: "red", text: "Troubleshooting" },
    };
    return map[categoryId] ?? { tone: "blue", text: "Getting Started" };
  };

  const statusToBadge = (status) => {
    const map = {
      published: { tone: "green", text: "Published" },
      updated: { tone: "blue", text: "Updated" },
      draft: { tone: "amber", text: "Draft" },
    };
    return map[status] ?? { tone: "green", text: "Published" };
  };

  const toDocCard = (doc, index = 0, section = "all") => {
    const badgeLeft = categoryToBadge(doc.category);
    const badgeRight = statusToBadge(doc.status);

    // Match your existing UI style: alternating arrow icons per section.
    const arrow = (() => {
      if (section === "startHere") return index === 0 ? "primary" : "alt";
      if (section === "recentUpdates") return index === 0 ? "primary" : "alt";
      return index % 2 === 0 ? "primary" : "alt";
    })();

    return {
      id: doc.id ?? doc.slug,
      badgeLeft,
      badgeRight,
      title: doc.title,
      description: doc.description,
      content: doc.content,
      minutes: doc.readTime,
      date: formatDate(doc.lastUpdated),
      arrow,
    };
  };

  const startHereDocs = getFeaturedDocs().slice(0, 3);
  const recentUpdatesDocs = getRecentDocs(4);
  const allDocs = docsData;

  const startHere = startHereDocs.map((doc, i) => toDocCard(doc, i, "startHere"));
  const recentUpdates = recentUpdatesDocs.map((doc, i) => toDocCard(doc, i, "recentUpdates"));
  const allDocumentation = allDocs.map((doc, i) => toDocCard(doc, i, "all"));
  const browseByCategory = ["All", ...categories.map((c) => c.name)];

  return (
    <div className="w-full" data-node-id="2:2">
      {/* Hero (title + subtitle + search) */}
      <header
        className="border-b border-black/25 bg-(--surface) px-6 pt-16"
        data-node-id="2:3"
      >
        <div className="mx-auto max-w-[768px] text-center" data-node-id="2:4">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-[#eff6ff] px-3 py-1.5 text-[#1447e6]"
            data-node-id="2:5"
          >
            <img
              className="block size-4"
              alt=""
              src={docPageAssets.heroPillIcon}
            />
            <span className="text-sm font-medium leading-5">{hero.pillText}</span>
          </div>

          <h1
            className="mt-4 mb-0 text-center text-5xl font-bold"
            style={{ lineHeight: "48px", letterSpacing: "-0.02em" }}
            data-node-id="2:11"
          >
            {hero.title}
          </h1>
          <p className="mt-4 mb-0 text-center text-xl font-normal leading-7 text-(--muted)" data-node-id="2:13">
            {hero.subtitle}
          </p>
        </div>

        <div
          className="mx-auto mt-8 mb-16 flex max-w-[672px] items-center gap-3 rounded-[14px] border border-[#d1d5dc] px-4 py-4"
          data-node-id="2:15"
        >
          <img
            className="block size-5"
            alt=""
            src={docPageAssets.searchIcon}
          />
          <div
            className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-base leading-6 text-[rgba(10,10,10,0.5)]"
            role="textbox"
            aria-label="Search documentation"
          >
            {hero.searchPlaceholder}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1151px] px-6 pt-12 pb-24" data-node-id="2:21">
        {/* Section: Start Here */}
        <section className="mb-12" data-node-id="2:22">
          <DocPageSectionTitle
            icon={docPageAssets.sectionStartHereIcon}
            title="Start Here"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {startHere.map((card) => (
              <DocPageCard
                key={card.id}
                card={card}
                assets={docPageAssets}
                onSelect={setSelectedDoc}
              />
            ))}
          </div>
        </section>

        {/* Section: Recent Updates */}
        <section className="mb-12" data-node-id="2:126">
          <DocPageSectionTitle
            icon={docPageAssets.sectionRecentIcon}
            title="Recent Updates"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {recentUpdates.map((card) => (
              <DocPageCard
                key={card.id}
                card={card}
                assets={docPageAssets}
                onSelect={setSelectedDoc}
              />
            ))}
          </div>
        </section>

        {/* Section: Browse by Category */}
        <section className="mb-12" data-node-id="2:??">
          <DocPageSectionTitle
            icon={docPageAssets.sectionBrowseIcon}
            title="Browse by Category"
          />
          <div className="flex flex-wrap gap-2">
            {browseByCategory.map((label) => (
              <button
                key={label}
                className={[
                  "cursor-pointer rounded-[10px] border px-3 py-2 text-sm leading-5",
                  label === "All"
                    ? "border-[#155dfc] bg-[#155dfc] text-white"
                    : "border-[#d1d5dc] bg-white text-[#364153]",
                ].join(" ")}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Section: All Documentation */}
        <section className="mb-12" data-node-id="2:??">
          <DocPageSectionTitle
            icon={docPageAssets.sectionAllDocsIcon}
            title="All Documentation"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allDocumentation.map((card) => (
              <DocPageCard
                key={card.id}
                card={card}
                assets={docPageAssets}
                onSelect={setSelectedDoc}
              />
            ))}
          </div>
        </section>
      </main>

      {selectedDoc ? (
        <div
          className="fixed inset-0 z-50 bg-black/30"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedDoc(null);
          }}
        >
          <div className="absolute inset-0 overflow-y-auto">
            <DocDetails
              doc={selectedDoc}
              assets={docPageAssets}
              onClose={() => setSelectedDoc(null)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
