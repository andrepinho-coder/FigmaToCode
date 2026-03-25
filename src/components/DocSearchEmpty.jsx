export default function DocSearchEmptyState({ query, onClear }) {
  return (
    <section className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="m-0 text-[32px] font-bold leading-8 text-[#101828]">
          {`Search Results for "${query}"`}
        </h2>
        <button
          type="button"
          className="text-sm font-medium text-[#155dfc] hover:text-[#1447e6]"
          onClick={onClear}
        >
          Clear filters
        </button>
      </div>

      <div className="rounded-[14px] border border-[#e5e7eb] bg-white px-6 py-16 text-center">
        <h3 className="m-0 text-[32px] font-semibold leading-7 text-[#101828]">No results found</h3>
        <p className="mt-4 text-[16px] leading-6 text-[#4a5565]">
          {`We couldn't find any documentation matching "${query}"`}
        </p>
        <button
          type="button"
          className="mt-6 rounded-[10px] bg-[#155dfc] px-6 py-2.5 text-[16px] font-medium text-white hover:bg-[#1447e6]"
          onClick={onClear}
        >
          View all documentation
        </button>
      </div>
    </section>
  );
}

