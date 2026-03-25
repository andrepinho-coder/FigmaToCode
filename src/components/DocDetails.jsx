import { useMemo, useState } from "react";

const editIcon = "https://www.figma.com/api/mcp/asset/ae925095-8354-4cb5-be90-5a819b22960f";

export default function DocDetails({ doc, assets, onClose }) {
  const title = doc?.title ?? "Quick Start Guide";
  const badgeLeft = doc?.badgeLeft?.text ?? "Getting Started";
  const description = doc?.description ?? "Get up and running with BusinessWith in under 5 minutes";
  const contextText = doc?.content?.context ?? description;
  const problemText =
    doc?.content?.problem ??
    "Many businesses struggle with fragmented tools and workflows. BusinessWith solves this by providing an integrated solution that brings all your business processes into one place.";

  const steps = useMemo(() => doc?.content?.steps ?? [], [doc]);
  const realCase = doc?.content?.realCase ?? "";
  const bestPractices = useMemo(() => doc?.content?.bestPractices ?? [], [doc]);
  const checklistItems = useMemo(() => doc?.content?.checklist ?? [], [doc]);
  const [checkedItems, setCheckedItems] = useState(() => new Set());

  const tocSections = useMemo(() => {
    const fromData = Array.isArray(doc?.content?.sections) ? doc.content.sections : [];
    if (fromData.length > 0) return fromData;
    return [
      { id: "context", title: "What is BusinessWith?", level: 2 },
      { id: "problem", title: "Problem we solve", level: 2 },
      { id: "steps", title: "Step-by-step setup", level: 2 },
      { id: "real-case", title: "Real-world example", level: 2 },
      { id: "best-practices", title: "Best practices", level: 2 },
      { id: "checklist", title: "Setup checklist", level: 2 },
    ];
  }, [doc]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-full bg-white">
      <div className="border-b border-black/10 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-[1151px] items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#717182]">Documentation</span>
            <span className="text-[#d1d5dc]">/</span>
            <span className="text-[#717182]">{badgeLeft}</span>
            <span className="text-[#d1d5dc]">/</span>
            <span className="font-medium text-[#0a0a0a]">{title}</span>
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
            <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          <section id="context" className="mt-8 scroll-mt-24">
            <h2 className="text-[30px] font-bold leading-[36px] text-[#101828]">What is {title}?</h2>
            <p className="mt-4 text-[18px] leading-[29px] text-[#364153]">{contextText}</p>
          </section>

          <section id="problem" className="mt-10 scroll-mt-24">
            <h2 className="text-[30px] font-bold leading-[36px] text-[#101828]">Problem we solve</h2>
            <p className="mt-4 text-[18px] leading-[29px] text-[#364153]">{problemText}</p>
          </section>

          {steps.length > 0 ? (
            <section id="steps" className="mt-12 scroll-mt-24">
              <h2 className="text-[30px] font-bold leading-[36px] text-[#101828]">Step-by-step setup</h2>
              <div className="mt-6 space-y-6">
                {steps.map((step, idx) => (
                  <div key={step.title ?? idx} id={`step-${idx + 1}`} className="rounded-[12px] border border-[#e5e7eb] p-5">
                    <h3 className="text-[20px] font-semibold text-[#101828]">{`${idx + 1}. ${step.title}`}</h3>
                    <p className="mt-2 text-[16px] leading-6 text-[#364153]">{step.description}</p>
                    {step.code ? (
                      <pre className="mt-3 overflow-x-auto rounded-[10px] bg-[#101828] p-4 text-[13px] leading-5 text-[#f3f4f6]">
                        {step.code}
                      </pre>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {realCase ? (
            <section id="real-case" className="mt-12 scroll-mt-24">
              <h2 className="text-[30px] font-bold leading-[36px] text-[#101828]">Real-world example</h2>
              <div className="mt-6 rounded-[14px] border-l-4 border-[#bedbff] bg-[#eff6ff] px-6 py-4">
                <p className="text-[18px] leading-[29px] text-[#1e2939]">{realCase}</p>
              </div>
            </section>
          ) : null}

          {bestPractices.length > 0 ? (
            <section id="best-practices" className="mt-12 scroll-mt-24">
              <h2 className="text-[30px] font-bold leading-[36px] text-[#101828]">Best practices</h2>
              <div className="mt-6 flex flex-col gap-4">
                {bestPractices.map((practice) => (
                  <div key={practice} className="flex items-start gap-3">
                    <svg className="mt-1 size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="#155dfc"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="text-[16px] leading-6 text-[#364153]">{practice}</div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {checklistItems.length > 0 ? (
            <section id="checklist" className="mt-12 scroll-mt-24">
              <h2 className="text-[30px] font-bold leading-[36px] text-[#101828]">Setup checklist</h2>
              <div className="mt-6 rounded-[14px] border border-[#e5e7eb] bg-white px-6 py-5">
                <p className="text-[16px] leading-6 text-[#4a5565]">
                  Use this checklist to ensure you&apos;ve completed all steps:
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {checklistItems.map((item) => {
                    const isChecked = checkedItems.has(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        className="flex items-start gap-3 text-left"
                        onClick={() => {
                          setCheckedItems((prev) => {
                            const next = new Set(prev);
                            if (next.has(item)) next.delete(item);
                            else next.add(item);
                            return next;
                          });
                        }}
                        aria-pressed={isChecked}
                      >
                        <span
                          className={[
                            "mt-0.5 flex h-5 w-5 items-center justify-center rounded-[2px] border text-[12px]",
                            isChecked
                              ? "border-[#c8b24f] bg-[#b39b35] text-white"
                              : "border-[#bfc4cc] bg-white text-transparent",
                          ].join(" ")}
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <span className="text-[16px] leading-6 text-[#364153]">{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : null}

          <div className="mt-12 border-t border-[#e5e7eb] pt-6">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#155dfc] transition-colors hover:text-[#1447e6]"
              onClick={onClose}
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to all documentation
            </button>
          </div>
        </article>

        <aside className="w-[280px] pt-2">
          <div className="text-[14px] font-semibold text-[#101828]">On this page</div>
          <div className="mt-4 border-l border-[#e5e7eb] pl-4">
            {tocSections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollToSection(s.id)}
                className="mb-4 block text-left text-[14px] text-[#4a5565] hover:text-gray-900"
              >
                {s.title}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

