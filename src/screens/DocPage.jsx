import { docPageAssets } from "../Data/docPageAssets.js";
import { categories, docsData, getFeaturedDocs, getRecentDocs } from "../Data/docs-data.js";
import DocPageCard from "../components/DocPageCard.jsx";
import DocDetails from "../components/DocDetails.jsx";
import DocSearchEmptyState from "../components/DocSearchEmptyState.jsx";
import { HERO, useDocPageModel } from "../model/DocPage.js";

function DocPageSectionTitle({ icon, title }) {
  return (
    <div className="mb-6 flex items-center gap-2">
      <img className="block size-6" alt="" src={icon} />
      <div className="text-2xl font-bold leading-8 text-(--text)">{title}</div>
    </div>
  );
}

export default function DocPage() {
  const {
    selectedDoc,
    setSelectedDoc,
    closeDetails,
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
  } = useDocPageModel({ categories, docsData, getFeaturedDocs, getRecentDocs });

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
            <span className="text-sm font-medium leading-5">{HERO.pillText}</span>
          </div>

          <h1
            className="mt-4 mb-0 text-center text-5xl font-bold"
            style={{ lineHeight: "48px", letterSpacing: "-0.02em" }}
            data-node-id="2:11"
          >
            {HERO.title}
          </h1>
          <p className="mt-4 mb-0 text-center text-xl font-normal leading-7 text-(--muted)" data-node-id="2:13">
            {HERO.subtitle}
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
          <input
            type="text"
            value={query}
            placeholder={HERO.searchPlaceholder}
            className="w-full border-none bg-transparent text-base leading-6 text-[#101828] outline-none placeholder:text-[rgba(10,10,10,0.5)]"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submitSearch();
            }}
          />
        </div>
      </header>

      <main className="mx-auto max-w-[1151px] px-6 pt-12 pb-24" data-node-id="2:21">
        {isSearching ? (
          searchResults.length > 0 ? (
            <section className="mb-12">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="m-0 text-[24px] font-bold leading-8 text-[#101828]">
                  {`Search Results for "${submittedQuery}"`}
                </h2>
                <button
                  type="button"
                  className="text-sm font-medium text-[#155dfc] hover:text-[#1447e6]"
                  onClick={clearSearch}
                >
                  Clear filters
                </button>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {searchResults.map((card) => (
                  <DocPageCard key={card.id} card={card} assets={docPageAssets} onSelect={setSelectedDoc} />
                ))}
              </div>
            </section>
          ) : (
            <DocSearchEmptyState query={submittedQuery} onClear={clearCategory} />
          )
        ) : isCategoryMode ? (
          <section className="mb-12">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="m-0 text-[40px] font-bold leading-8 text-[#101828]">{selectedCategory}</h2>
              <button
                type="button"
                className="text-sm font-medium text-[#155dfc] hover:text-[#1447e6]"
                onClick={clearCategory}
              >
                Clear filters
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allDocumentation.map((card) => (
                <DocPageCard key={card.id} card={card} assets={docPageAssets} onSelect={setSelectedDoc} />
              ))}
            </div>
          </section>
        ) : (
          <>
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
                  label === selectedCategory
                    ? "border-[#155dfc] bg-[#155dfc] text-white"
                    : "border-[#d1d5dc] bg-white text-[#364153]",
                ].join(" ")}
                type="button"
                onClick={() => selectCategory(label)}
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
          </>
        )}
      </main>

      {selectedDoc ? (
        <div
          className="fixed inset-0 z-50 bg-black/30"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeDetails();
          }}
        >
          <div className="absolute inset-0 overflow-y-auto">
            <DocDetails
              doc={selectedDoc}
              assets={docPageAssets}
              onClose={closeDetails}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
