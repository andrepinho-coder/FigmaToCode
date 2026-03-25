import DocPageCard from "./DocPageCard.jsx";

export default function DocPageMode({
  title,
  cards,
  assets,
  onSelectDoc,
  onClearFilters,
  titleClassName = "m-0 text-[24px] font-bold leading-8 text-[#101828]",
}) {
  return (
    <section className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className={titleClassName}>{title}</h2>
        <button
          type="button"
          className="text-sm font-medium text-[#155dfc] hover:text-[#1447e6]"
          onClick={onClearFilters}
        >
          Clear filters
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <DocPageCard key={card.id} card={card} assets={assets} onSelect={onSelectDoc} />
        ))}
      </div>
    </section>
  );
}

