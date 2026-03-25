import DocPageBadge from "./DocPageBadge.jsx";
import { DOC_COLORS } from "../theme/colors.js";
import { DOC_STRINGS } from "../theme/strings.js";

export default function DocPageCard({ card, assets, onSelect }) {
  const { badgeLeft, badgeRight, title, description, minutes, date, arrow = "primary" } = card;

  return (
    <div
      className="group flex min-h-[229px] cursor-pointer flex-col rounded-[14px] border bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(16,24,40,0.14),0_2px_6px_rgba(16,24,40,0.06)] focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:transform-none"
      style={{ borderColor: DOC_COLORS.border.light }}
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(card)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect?.(card);
      }}
    >
      <div className="flex min-h-6 items-start justify-between">
        <div className="flex w-full justify-between gap-3">
          <DocPageBadge tone={badgeLeft.tone}>{badgeLeft.text}</DocPageBadge>
          <DocPageBadge tone={badgeRight.tone}>{badgeRight.text}</DocPageBadge>
        </div>
      </div>

      <div
        className="mt-3 text-[20px] font-semibold leading-7 transition-colors duration-150"
        style={{ color: DOC_COLORS.text.heading }}
      >
        {title}
      </div>
      <div
        className="mt-2 max-w-[320px] overflow-hidden text-sm leading-5"
        style={{
          color: DOC_COLORS.text.muted,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </div>

      <div className="mt-4 flex items-center gap-4">
        <span className="inline-flex items-center gap-1.5" style={{ color: DOC_COLORS.text.caption }}>
          <img className="block size-3.5" alt="" src={assets.metaClockIcon} />
          <span className="text-xs leading-4">{minutes}</span>
        </span>
        <span className="inline-flex items-center gap-1.5" style={{ color: DOC_COLORS.text.caption }}>
          <img className="block size-3.5" alt="" src={assets.metaCalendarIcon} />
          <span className="text-xs leading-4">{date}</span>
        </span>
      </div>

      <a
        className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium leading-5 no-underline"
        style={{ color: DOC_COLORS.text.heading }}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onSelect?.(card);
        }}
      >
        <span style={{ color: DOC_COLORS.brand.primary }}>{DOC_STRINGS.actions.readMore}</span>
        <img
          className="block size-4 transition-transform duration-200 ease-out group-hover:translate-x-[3px] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          alt=""
          src={arrow === "alt" ? assets.arrowRightAltIcon : assets.arrowRightIcon}
        />
      </a>
    </div>
  );
}

