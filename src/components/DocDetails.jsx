const editIcon = "https://www.figma.com/api/mcp/asset/ae925095-8354-4cb5-be90-5a819b22960f";

export default function DocDetails({ doc, assets, onClose }) {
  const title = doc?.title ?? "Quick Start Guide";
  const badgeLeft = doc?.badgeLeft?.text ?? "Getting Started";
  const description = doc?.description ?? "Get up and running with BusinessWith in under 5 minutes";
  const contextText =
    doc?.content?.context ??
    description;
  const problemText =
    doc?.content?.problem ??
    "Many businesses struggle with fragmented tools and workflows. BusinessWith solves this by providing an integrated solution that brings all your business processes into one place.";

  return (
    <div className="min-h-full bg-white">
      <div className="border-b border-black/10 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-[1151px] items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#717182]">Documentation</span>
            <span className="text-[#d1d5dc]">/</span>
            <span className="text-[#717182]">{badgeLeft}</span>
            <span className="text-[#d1d5dc]">/</span>
            <span className="text-[#0a0a0a] font-medium">{title}</span>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-[10px] border border-[#d1d5dc] px-4 py-2 text-sm font-medium text-[#364153]"
            onClick={onClose}
          >
            <img className="block size-4" alt="" src={editIcon} />
            Edit
          </button>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1151px] gap-10 px-6 pt-10 pb-24">
        <article className="w-[768px]">
          <button
            type="button"
            className="mb-6 flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
            onClick={onClose}
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Documentation
          </button>

          <div className="inline-flex items-center rounded-[8px] bg-[#dbeafe] px-3 py-1 text-[#193cb8]">
            <span className="text-sm font-medium leading-5">{badgeLeft}</span>
          </div>

          <h1 className="mt-4 mb-0 text-[48px] font-bold leading-[48px] tracking-[-0.02em] text-[#101828]">
            {title}
          </h1>

          <p className="mt-4 mb-0 text-[20px] leading-7 text-[#4a5565]">{description}</p>

          <div className="mt-6 flex items-center gap-6 border-b border-[#e5e7eb] pb-4">
            <span className="inline-flex items-center gap-2 text-xs leading-4 text-[#6a7282]">
              {assets?.metaClockIcon ? <img className="block size-3.5" alt="" src={assets.metaClockIcon} /> : null}
              <span>{doc?.minutes ?? "5 min"}</span>
            </span>
            <span className="inline-flex items-center gap-2 text-xs leading-4 text-[#6a7282]">
              {assets?.metaCalendarIcon ? <img className="block size-3.5" alt="" src={assets.metaCalendarIcon} /> : null}
              <span>{doc?.date ?? "Mar 20, 2026"}</span>
            </span>
          </div>

          <section className="mt-8">
            <h2 className="text-[30px] font-bold leading-[36px] text-[#101828]">What is {title}?</h2>
            <p className="mt-4 text-[18px] leading-[29px] text-[#364153]">{contextText}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-[30px] font-bold leading-[36px] text-[#101828]">Problem we solve</h2>
            <p className="mt-4 text-[18px] leading-[29px] text-[#364153]">
              {problemText}
            </p>

            <div className="mt-6 rounded-[10px] border-l-4 border-[#bedbff] bg-[#eff6ff] px-5 py-4">
              <div className="text-[16px] font-semibold leading-6 text-[#1c398e]">Why this matters</div>
              <div className="mt-1 text-[14px] leading-5 text-[#193cb8]">
                Understanding the core problem helps you leverage {title} more effectively in your workflow.
              </div>
            </div>
          </section>
        </article>

        <aside className="w-[280px] pt-2">
          <div className="text-[14px] font-semibold text-[#101828]">On this page</div>
          <div className="mt-4 border-l border-[#e5e7eb] pl-4">
            <div className="mb-4 text-[14px] text-[#4a5565]">What is BusinessWith?</div>
            <div className="mb-4 text-[14px] text-[#4a5565]">Problem we solve</div>
            <div className="mb-4 text-[14px] text-[#4a5565]">Step-by-step setup</div>
            <div className="mb-4 text-[14px] text-[#4a5565]">Real-world example</div>
            <div className="text-[14px] text-[#4a5565]">Best practices</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

