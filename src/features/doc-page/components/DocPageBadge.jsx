import { DOC_COLORS } from "../theme/colors.js";

export default function DocPageBadge({ tone, children }) {
  const tones = {
    blue: {
      backgroundColor: DOC_COLORS.badge.blueBackground,
      color: DOC_COLORS.badge.blueForeground,
    },
    green: {
      backgroundColor: DOC_COLORS.badge.greenBackground,
      color: DOC_COLORS.badge.greenForeground,
    },
    purple: {
      backgroundColor: DOC_COLORS.badge.purpleBackground,
      color: DOC_COLORS.badge.purpleForeground,
    },
    amber: {
      backgroundColor: DOC_COLORS.badge.amberBackground,
      color: DOC_COLORS.badge.amberForeground,
    },
    red: {
      backgroundColor: DOC_COLORS.badge.redBackground,
      color: DOC_COLORS.badge.redForeground,
    },
  };

  return (
    <span
      className="inline-flex items-center whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-medium leading-4"
      style={tones[tone] ?? undefined}
    >
      {children}
    </span>
  );
}

