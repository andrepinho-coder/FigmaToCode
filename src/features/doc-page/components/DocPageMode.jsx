import DocPageCard from "./DocPageCard.jsx";
import { DOC_COLORS } from "../theme/colors.js";
import { DOC_STRINGS } from "../theme/strings.js";

export default function DocPageMode({
  title,
  cards,
  assets,
  onSelectDoc,
  onClearFilters,
  titleClassName = "m-0 text-[24px] font-bold leading-8",
}) {
  return (
    <section className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className={titleClassName} style={{ color: DOC_COLORS.text.heading }}>
          {title}
        </h2>
        <button
          type="button"
          className="text-sm font-medium"
          style={{ color: DOC_COLORS.brand.primary }}
          onClick={onClearFilters}
        >
          {DOC_STRINGS.actions.clearFilters}
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

