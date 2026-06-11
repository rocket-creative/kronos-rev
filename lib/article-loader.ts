import fs from "fs";
import path from "path";
import type { Article } from "@/lib/articles";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

/** Strip YAML frontmatter and duplicate H1 from article markdown. */
export function loadArticleBody(article: Article): string {
  const filePath = path.join(ARTICLES_DIR, article.filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n/, "");
  const withoutTitle = withoutFrontmatter.replace(/^#\s+.+\n+/, "");
  return withoutTitle.trim();
}

/** Split body into main content and trailing case review CTA link line. */
export function splitArticleBody(body: string): { content: string; ctaHref: string | null } {
  const ctaPattern = /^\[Get a free IDR review\]\((\/case-review)\)\s*$/m;
  const match = body.match(ctaPattern);
  if (!match) {
    return { content: body, ctaHref: null };
  }
  const content = body.replace(ctaPattern, "").trim();
  return { content, ctaHref: match[1] };
}

/** Mid article insertion point: after the second ## section. */
export function splitForMidCta(content: string): { beforeMid: string; afterMid: string } {
  const sections = content.split(/\n(?=## )/);
  if (sections.length < 3) {
    const midpoint = Math.ceil(sections.length / 2);
    return {
      beforeMid: sections.slice(0, midpoint).join("\n"),
      afterMid: sections.slice(midpoint).join("\n"),
    };
  }
  return {
    beforeMid: sections.slice(0, 2).join("\n"),
    afterMid: sections.slice(2).join("\n"),
  };
}
