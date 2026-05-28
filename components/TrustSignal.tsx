interface TrustSignalProps {
  author?: string;
  credentials?: string;
  lastUpdated?: string;
  reviewedBy?: string;
  className?: string;
  /** Use on light/white backgrounds */
  light?: boolean;
}

export function TrustSignal({
  author,
  credentials,
  lastUpdated,
  reviewedBy,
  className = "",
  light = false,
}: TrustSignalProps) {
  if (light) {
    return (
      <aside
        className={`border-l-4 border-kronos-cyan pl-4 py-1 ${className}`}
        aria-label="Content trust signals"
      >
        {author && (
          <p className="font-body text-sm font-semibold text-gray-900">
            {author}
            {credentials && (
              <span className="font-light text-kronos-cyan">, {credentials}</span>
            )}
          </p>
        )}
        {reviewedBy && (
          <p className="font-body text-sm text-gray-700 mt-0.5">
            Medically reviewed by{" "}
            <span className="font-semibold text-gray-900">{reviewedBy}</span>
          </p>
        )}
        {lastUpdated && (
          <p className="font-body text-xs text-gray-600 mt-1">
            Last updated{" "}
            <time dateTime={lastUpdated}>
              {new Date(lastUpdated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        )}
      </aside>
    );
  }

  return (
    <aside
      className={`p-0 text-xs ${className}`}
      aria-label="Content trust signals"
    >
      <div className="flex flex-wrap gap-4 text-white/70">
        {author && (
          <div>
            <span className="text-white/70">Author:</span>{" "}
            <span className="text-white">{author}</span>
            {credentials && (
              <span className="text-white">, {credentials}</span>
            )}
          </div>
        )}
        {reviewedBy && (
          <div>
            <span className="text-white/70">Medically reviewed by:</span>{" "}
            <span className="text-white">{reviewedBy}</span>
          </div>
        )}
        {lastUpdated && (
          <div>
            <span className="text-white/70">Last updated:</span>{" "}
            <time dateTime={lastUpdated} className="text-white">
              {new Date(lastUpdated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        )}
      </div>
    </aside>
  );
}
