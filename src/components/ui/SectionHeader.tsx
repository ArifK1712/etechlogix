interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const maxW = align === "center" ? "mx-auto max-w-4xl" : "max-w-4xl";

  return (
    <div className={`${textAlign} mb-12 md:mb-16`}>
      {eyebrow && (
        <p className="inline-block mb-3 text-base font-bold tracking-widest uppercase text-[#df012a]">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 ${
          light ? "text-white" : "text-black"
        } ${maxW}`}
      >
        {titleHighlight ? (
          <>
            {title}{" "}
            <span className="text-[#df012a]">{titleHighlight}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${maxW} ${
            light ? "text-white/70" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
