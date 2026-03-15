interface TrustSignalProps {
  author?: string;
  credentials?: string;
  lastUpdated?: string;
  reviewedBy?: string;
  className?: string;
}

export function TrustSignal({
  author,
  credentials,
  lastUpdated,
  reviewedBy,
  className = "",
}: TrustSignalProps) {
  return (
    <aside
      className={`bg-kronos-card/50 border border-white/5 p-4 text-xs ${className}`}
      aria-label="Content trust signals"
    >
      <div className="flex flex-wrap gap-4 text-white/40">
        {author && (
          <div>
            <span className="text-white/60">Author:</span>{" "}
            <span className="text-white/80">{author}</span>
            {credentials && (
              <span className="text-kronos-cyan">, {credentials}</span>
            )}
          </div>
        )}
        {reviewedBy && (
          <div>
            <span className="text-white/60">Reviewed by:</span>{" "}
            <span className="text-white/80">{reviewedBy}</span>
          </div>
        )}
        {lastUpdated && (
          <div>
            <span className="text-white/60">Last updated:</span>{" "}
            <time dateTime={lastUpdated} className="text-white/80">
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
