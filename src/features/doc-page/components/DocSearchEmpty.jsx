import { DOC_COLORS } from "../theme/colors.js";
import { DOC_STRINGS } from "../theme/strings.js";

export default function DocSearchEmptyState({ query, onClear }) {
  return (
    <section className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2
          className="m-0 text-[32px] font-bold leading-8"
          style={{ color: DOC_COLORS.text.heading }}
        >
          {`${DOC_STRINGS.search.resultsPrefix}${query}"`}
        </h2>
        <button
          type="button"
          className="text-sm font-medium"
          style={{ color: DOC_COLORS.brand.primary }}
          onClick={onClear}
        >
          {DOC_STRINGS.actions.clearFilters}
        </button>
      </div>

      <div
        className="rounded-[14px] border bg-white px-6 py-16 text-center"
        style={{ borderColor: DOC_COLORS.border.light }}
      >
        <h3
          className="m-0 text-[32px] font-semibold leading-7"
          style={{ color: DOC_COLORS.text.heading }}
        >
          {DOC_STRINGS.search.noResultsTitle}
        </h3>
        <p className="mt-4 text-[16px] leading-6" style={{ color: DOC_COLORS.text.muted }}>
          {`${DOC_STRINGS.search.noResultsMessagePrefix}${query}"`}
        </p>
        <button
          type="button"
          className="mt-6 rounded-[10px] px-6 py-2.5 text-[16px] font-medium text-white"
          style={{ backgroundColor: DOC_COLORS.brand.primary }}
          onClick={onClear}
        >
          {DOC_STRINGS.actions.viewAllDocumentation}
        </button>
      </div>
    </section>
  );
}

