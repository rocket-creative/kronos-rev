# Kronos Revenue Article System, Index and Build Spec

Ten articles for kronosrevenue.health. Kronos owns education, attorney comparison, problem aware, specialty, and state keywords per the brand split. Every article ends with a CTA into /case-review. Bylines split between Dr. Abrahams (clinical and strategic) and Heisha Rivera (operational), matching the team page.

## Article slate

| # | Slug | Title | Byline | Primary keyword |
|---|---|---|---|---|
| 01 | federal-idr-timeline-every-deadline | The Federal IDR Timeline: Every Deadline That Can Kill Your Claim | Heisha Rivera | idr deadlines |
| 02 | idr-attorney-vs-idr-service-true-cost | IDR Attorney vs IDR Service: The True Cost of 20 Percent | Dr. Abrahams | idr attorney cost |
| 03 | claims-your-attorney-never-files | The Claims Your Attorney Never Files | Heisha Rivera | idr small claims |
| 04 | why-idr-disputes-get-rejected | Why 1 in 5 IDR Disputes Get Thrown Out | Heisha Rivera | idr eligibility |
| 05 | 2026-idr-filing-fee-cut | The 2026 IDR Fee Cut Nobody Told Your Practice About | Dr. Abrahams | idr filing fees 2026 |
| 06 | open-negotiation-guide | Open Negotiation: The 30 Day Step That Protects Your Right to Arbitrate | Heisha Rivera | open negotiation no surprises act |
| 07 | what-evidence-wins-at-idr | What Actually Wins at IDR Arbitration | Dr. Abrahams | idr evidence |
| 08 | federal-vs-state-idr | Federal vs State IDR: Which Process Applies to Your Claim | Heisha Rivera | federal vs state idr |
| 09 | neurosurgery-out-of-network-reimbursement | Neurosurgery Out of Network Reimbursement: An IDR Guide | Dr. Abrahams | neurosurgery out of network reimbursement |
| 10 | new-york-surprise-bill-lookback | New York's Surprise Bill Law Gives You 3 Years. Federal IDR Gives You 30 Business Days. | Heisha Rivera | new york surprise bill law |

## Cannibalization note, read before publishing

Four articles in the earlier Sydra blog set cover topics Kronos now owns under the brand split: QPA explained, batching, the Texas pathway, and the orthopedic guide. Rule: if those four are not yet live on sydrahealth.com, publish them on Kronos instead with CTAs swapped to /case-review. If they are live on Sydra, leave them, do not duplicate them here, and revisit canonical assignment in the next content cycle. Never run the same topic live on both domains.

## Frontmatter schema, all articles

```yaml
title: string
slug: string
description: string under 160 chars
date: YYYY-MM-DD
author: Dr. John M. Abrahams, MD | Heisha Rivera
category: Education | Attorney Comparison | Specialty | State
tags: string[]
```

## Internal linking map

Every article links to /case-review once mid article and once at close. Article 01, 04, 06 link to /what-is-idr and /how-we-work. Articles 02, 03 link to /lawyer-problem. Article 08 links to all six state pages. Article 09 links to /specialties/neurosurgery. Article 10 links to /states/new-york. Articles 05 and 07 link to /what-is-idr.

## Technical notes

Article JSON LD on every post with author, datePublished, headline. Breadcrumbs Home, Resources, Article. The index page gets CollectionPage schema. Medically reviewed line with Dr. Abrahams link on articles 02, 05, 07, 09, matching the site's existing pattern.
