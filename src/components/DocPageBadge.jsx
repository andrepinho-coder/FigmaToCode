export default function DocPageBadge({ tone, children }) {
  const tones = {
    blue: "bg-[#dbeafe] text-[#193cb8]",
    green: "bg-[#dcfce7] text-[#016630]",
    purple: "bg-[#f3e8ff] text-[#6e11b0]",
    amber: "bg-[#ffedd4] text-[#9f2d00]",
    red: "bg-[#ffe2e2] text-[#9f0712]",
  };

  return (
    <span
      className={[
        "inline-flex items-center whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-medium leading-4",
        tones[tone] ?? "",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

