import {
  AlertTriangle,
  ArrowUpRight,
  Boxes,
  Database,
  GitBranch,
  UsersRound,
  Workflow,
} from "lucide-react";

export interface ChallengeItem {
  num: string;
  title: string;
  description: string;
}

export interface ServiceChallengeProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  intro: string;
  challenges: ChallengeItem[];
}

const challengeIcons = [
  GitBranch,
  Workflow,
  Boxes,
  Database,
];

const fragmentedNodes = [
  {
    label: "Teams",
    icon: UsersRound,
    position: "left-[7%] top-[16%]",
  },
  {
    label: "Systems",
    icon: Boxes,
    position: "right-[7%] top-[16%]",
  },
  {
    label: "Approvals",
    icon: GitBranch,
    position: "left-[6%] bottom-[14%]",
  },
  {
    label: "Data",
    icon: Database,
    position: "right-[8%] bottom-[14%]",
  },
];

export function ServiceChallenge({
  eyebrow = "BUSINESS CHALLENGE",
  heading,
  headingAccent,
  intro,
  challenges,
}: ServiceChallengeProps) {
  return (
    <section
      className="relative z-10 overflow-hidden border-y border-gray-200/80 bg-[#f8f9fb] py-16 text-black lg:py-24"
      aria-labelledby="challenge-heading"
    >
      {/* Subtle background details */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(223,1,42,0.08) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* Left content */}
          <div className="lg:sticky lg:top-28">
            <div className="max-w-xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#df012a]">
                <span
                  className="h-px w-5 bg-[#df012a]"
                  aria-hidden="true"
                />
                {eyebrow}
              </span>

              <h2
                id="challenge-heading"
                className="mb-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl"
              >
                {heading}{" "}
                {headingAccent && (
                  <span className="text-[#df012a]">
                    {headingAccent}
                  </span>
                )}
              </h2>

              <p className="max-w-lg text-base leading-relaxed text-gray-700 sm:text-lg">
                {intro}
              </p>
            </div>

            {/* Fragmented operations visualization */}
            <div className="relative mt-10 hidden min-h-[300px] overflow-hidden rounded-[28px] border border-[#efcbd2] bg-white/75 lg:block">
              <div
                className="absolute inset-0 opacity-60"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(223,1,42,0.1) 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />

              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,1,42,0.10),transparent_62%)]"
                aria-hidden="true"
              />

              {/* Broken connection lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 500 300"
                fill="none"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M120 72 C170 72 175 118 213 132"
                  stroke="#df012a"
                  strokeOpacity="0.38"
                  strokeWidth="1.5"
                  strokeDasharray="6 7"
                />

                <path
                  d="M380 72 C330 72 328 118 288 132"
                  stroke="#df012a"
                  strokeOpacity="0.38"
                  strokeWidth="1.5"
                  strokeDasharray="6 7"
                />

                <path
                  d="M118 230 C170 230 174 188 210 168"
                  stroke="#df012a"
                  strokeOpacity="0.38"
                  strokeWidth="1.5"
                  strokeDasharray="6 7"
                />

                <path
                  d="M382 230 C332 230 328 188 290 168"
                  stroke="#df012a"
                  strokeOpacity="0.38"
                  strokeWidth="1.5"
                  strokeDasharray="6 7"
                />
              </svg>

              {/* Surrounding business nodes */}
              {fragmentedNodes.map((node) => {
                const Icon = node.icon;

                return (
                  <div
                    key={node.label}
                    className={`absolute ${node.position} inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 shadow-sm`}
                  >
                    <Icon
                      className="h-4 w-4 text-[#df012a]"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    <span className="text-base font-medium text-gray-800">
                      {node.label}
                    </span>
                  </div>
                );
              })}

              {/* Central problem */}
              <div className="absolute left-1/2 top-1/2 w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#f09cac] bg-white px-5 py-5 text-center shadow-[0_16px_40px_rgba(223,1,42,0.10)]">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fbeaec] text-[#df012a]">
                  <AlertTriangle
                    className="h-5 w-5"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <p className="font-bold text-gray-950">
                  Operational Friction
                </p>

                <p className="mt-1 text-base leading-snug text-gray-600">
                  Disconnected tools and manual workarounds
                </p>
              </div>
            </div>
          </div>

          {/* Right challenge list */}
          <div className="border-y border-gray-300">
            {challenges.map((item, index) => {
              const ChallengeIcon =
                challengeIcons[index % challengeIcons.length];

              return (
                <article
                  key={`${item.num}-${item.title}`}
                  className="group relative grid gap-4 border-b border-gray-200 py-8 last:border-b-0 sm:py-10 lg:grid-cols-[64px_220px_1fr_24px] lg:gap-7"
                >
                  {/* Hover accent */}
                  <span
                    className="absolute bottom-0 left-0 top-0 w-[3px] origin-center scale-y-0 bg-[#df012a] transition-transform duration-300 group-hover:scale-y-100"
                    aria-hidden="true"
                  />

                  <div className="flex items-start">
                    <span className="inline-flex min-w-12 items-center justify-center rounded-lg bg-[#fbeaec] px-2 py-1.5 font-mono text-xs font-bold text-[#df012a]">
                      {item.num}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#f2ccd3] bg-white text-[#df012a] transition-colors duration-300 group-hover:bg-[#fbeaec]">
                      <ChallengeIcon
                        className="h-4 w-4"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="pt-1 text-lg font-bold leading-snug text-gray-950">
                      {item.title}
                    </h3>
                  </div>

                  <p className="max-w-2xl text-base leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  <ArrowUpRight
                    className="hidden h-5 w-5 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#df012a] lg:block"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}