import { docPageAssets } from "../Data/docPageAssets.js";
import { docPageData } from "../Data/docPageData.js";
import DocPageCard from "../components/DocPageCard.jsx";

function DocPageSectionTitle({ icon, title }) {
  return (
    <div className="mb-6 flex items-center gap-2">
      <img className="block size-6" alt="" src={icon} />
      <div className="text-2xl font-bold leading-8 text-(--text)">{title}</div>
    </div>
  );
}

export default function DocPage() {
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
            <span className="text-sm font-medium leading-5">{docPageData.hero.pillText}</span>
          </div>

          <h1
            className="mt-4 mb-0 text-center text-5xl font-bold"
            style={{ lineHeight: "48px", letterSpacing: "-0.02em" }}
            data-node-id="2:11"
          >
            {docPageData.hero.title}
          </h1>
          <p className="mt-4 mb-0 text-center text-xl font-normal leading-7 text-(--muted)" data-node-id="2:13">
            {docPageData.hero.subtitle}
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
            {docPageData.hero.searchPlaceholder}
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
            {docPageData.startHere.map((card) => (
              <DocPageCard key={card.id} card={card} assets={docPageAssets} />
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
            {docPageData.recentUpdates.map((card) => (
              <DocPageCard key={card.id} card={card} assets={docPageAssets} />
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
            {docPageData.browseByCategory.map((label) => (
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
            {docPageData.allDocumentation.map((card) => (
              <DocPageCard key={card.id} card={card} assets={docPageAssets} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
