import type { PAGE_SEO } from "@/lib/page-seo";

export type SpecialtySlug =
  | "orthopedic"
  | "neurosurgery"
  | "spine"
  | "plastic-surgery"
  | "anesthesia"
  | "general-surgery";

export type Specialty = {
  slug: SpecialtySlug;
  name: string;
  shortName: string;
  hubAnchor: string;
  seoKey: keyof typeof PAGE_SEO.specialty;
  intro: string;
  body: string;
  cptSections: { title: string; codes: string }[];
  claimRange: string;
  ctaLabel: string;
};

export const SPECIALTIES: Specialty[] = [
  {
    slug: "orthopedic",
    name: "Orthopedic Surgery",
    shortName: "orthopedic",
    hubAnchor: "orthopedic",
    seoKey: "orthopedic",
    intro:
      "Orthopedic surgery generates some of the highest volumes of NSA IDR disputes in the federal system. CPT codes are procedure specific, laterality dependent, and modifier sensitive.",
    body: "CPT 27447 (total knee arthroplasty) and 27446 (hemicondylar replacement) are not interchangeable. A bilateral modifier changes the payment calculation. A staged procedure filed without the correct modifier triggers an eligibility challenge before arbitration begins.",
    cptSections: [
      {
        title: "Knee",
        codes:
          "27447 total knee arthroplasty · 27446 hemicondylar replacement · 29881 meniscectomy medial or lateral · 29882 meniscus repair · 27570 manipulation under anesthesia",
      },
      {
        title: "Shoulder",
        codes:
          "23412 rotator cuff repair chronic · 23420 complete rotator cuff repair · 29806 SLAP repair · 29827 biceps tenodesis · 23470 total shoulder arthroplasty unconstrained",
      },
      {
        title: "Hip",
        codes:
          "27130 total hip arthroplasty · 27132 conversion to total hip · 27137 revision acetabular · 27138 revision femoral · 29914 hip arthroscopy femoroplasty",
      },
    ],
    claimRange: "Typical claim range: $2,000 to $8,000 per CPT. Confirmed on your free review.",
    ctaLabel: "Get a free IDR review for your orthopedic practice",
  },
  {
    slug: "neurosurgery",
    name: "Neurosurgery",
    shortName: "neurosurgery",
    hubAnchor: "neurosurgery",
    seoKey: "neurosurgery",
    intro:
      "Neurosurgery produces some of the highest per case IDR dispute amounts in the federal system. Kronos Revenue was built by Dr. John M. Abrahams, a board certified practicing neurosurgeon.",
    body: "Neurosurgical CPT coding involves add on codes, intraoperative procedure codes, and staged billing structures. A generalist who batches CPT 61510 with 61517 into one IDR submission has created an unfiled claim for the chemotherapy implantation.",
    cptSections: [
      {
        title: "Cranial",
        codes:
          "61510 craniotomy excision of brain tumor · 61512 excision of meningioma · 61518 intracranial abscess · 61520 posterior fossa tumor removal · 61576 skull base lesion",
      },
      {
        title: "Spinal (neurosurgical)",
        codes:
          "63030 lumbar discectomy one level · 63047 lumbar laminectomy · 63048 laminectomy each additional segment · 63055 transpedicular decompression · 63081 vertebral corpectomy anterior one level",
      },
    ],
    claimRange: "Typical claim range: $5,000 to $25,000 per CPT for major cranial procedures.",
    ctaLabel: "Get a free IDR review for your neurosurgery practice",
  },
  {
    slug: "spine",
    name: "Spine Surgery",
    shortName: "spine",
    hubAnchor: "spine",
    seoKey: "spine",
    intro:
      "Spine surgery is the specialty most actively using the NSA IDR system, and the specialty where batched CPT filings cause the most damage.",
    body: "A multi level lumbar fusion involves CPT 22612, 22632, 22840, and 63030. Those are four separately eligible IDR claims. An attorney who batches them into one submission creates a composite offer that does not match any prior determination cleanly.",
    cptSections: [
      {
        title: "Cervical",
        codes:
          "22551 ACDF single level · 22552 ACDF each additional level · 22845 anterior instrumentation · 63001 cervical laminectomy · 22600 posterior cervical fusion",
      },
      {
        title: "Lumbar",
        codes:
          "22612 posterior lumbar fusion single level · 22632 each additional level · 22630 PLIF · 22633 TLIF · 22840 instrumentation 3 to 6 segments · 22842 instrumentation 7 or more segments · 63030 lumbar discectomy · 63047 lumbar laminectomy",
      },
      {
        title: "Disc arthroplasty",
        codes:
          "22856 cervical total disc single level · 22857 lumbar total disc · 22861 revision of cervical arthroplasty",
      },
    ],
    claimRange:
      "Typical claim range: $4,000 to $15,000 per CPT. Multi level fusion cases can generate $40,000 or more in total IDR eligible disputed amounts from a single surgery.",
    ctaLabel: "Get a free IDR review for your spine surgery group",
  },
  {
    slug: "plastic-surgery",
    name: "Plastic Surgery",
    shortName: "plastic surgery",
    hubAnchor: "plastic",
    seoKey: "plasticSurgery",
    intro:
      "Reconstructive procedures are frequently coded as cosmetic by insurers unfamiliar with the clinical distinction.",
    body: "Getting an arbitrator to understand why a complex free flap reconstruction bills at $18,000 requires documentation that explains the procedure, the clinical necessity, and the market benchmark for that specific technique.",
    cptSections: [
      {
        title: "Reconstruction",
        codes:
          "19364 breast reconstruction free flap · 19368 TRAM reconstruction · 15756 free muscle flap · 15757 free skin flap with microvascular anastomosis",
      },
      {
        title: "Hand and microsurgery",
        codes:
          "25447 wrist arthroplasty · 26115 excision tendon sheath tumor · 26356 flexor tendon repair · 64716 nerve decompression hand",
      },
    ],
    claimRange: "Typical claim range: $3,000 to $12,000 per CPT for primary reconstruction.",
    ctaLabel: "Get a free IDR review for your plastic surgery practice",
  },
  {
    slug: "anesthesia",
    name: "Anesthesia",
    shortName: "anesthesia",
    hubAnchor: "anesthesia",
    seoKey: "anesthesia",
    intro:
      "Anesthesia NSA IDR has specific rules that differ from surgical specialty filing. Anesthesia claims bill on base units plus time units.",
    body: "Federal IDR rules currently permit anesthesia services under the same CPT code to be bundled. Rules on bundling across related CPT codes remain under active regulatory development. Kronos Revenue files anesthesia claims under current regulatory requirements, not assumptions about what the rules will become.",
    cptSections: [
      {
        title: "Filing approach",
        codes:
          "Time unit precision, base units, and modifier documentation on every claim. Eligibility review before submission.",
      },
    ],
    claimRange: "Typical claim range: $800 to $4,000 per CPT depending on case length and base units.",
    ctaLabel: "Get a free IDR review for your anesthesia group",
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    shortName: "general surgery",
    hubAnchor: "general-surgery",
    seoKey: "generalSurgery",
    intro:
      "General surgery out of network claims at in network ASCs and hospitals are systematically underpaid and systematically winnable at IDR when filed correctly.",
    body: "Kronos Revenue applies the same one CPT per claim standard to general surgery that it applies to neurosurgery and orthopedics.",
    cptSections: [
      {
        title: "Abdominal",
        codes:
          "44950 appendectomy · 44970 laparoscopic appendectomy · 44140 colectomy partial · 43239 upper GI endoscopy with biopsy",
      },
      {
        title: "Hernia",
        codes:
          "49505 inguinal hernia repair reducible age 5 or over · 49560 ventral hernia repair incarcerated · 49650 laparoscopic inguinal hernia repair",
      },
    ],
    claimRange: "Typical claim range: $1,500 to $6,000 per CPT.",
    ctaLabel: "Get a free IDR review for your general surgery practice",
  },
];

export function getSpecialtyBySlug(slug: string): Specialty | undefined {
  return SPECIALTIES.find((s) => s.slug === slug);
}

export const PRIMARY_SPECIALTY_LABELS = SPECIALTIES.map((s) => s.name);
