/** Two labeled time savings layers sitewide. */

/** Per submission: drafting a federal submission. */
export const PER_SUBMISSION_MANUAL = "25 to 40 minutes by hand";
export const PER_SUBMISSION_SYDRA = "about 5 minutes with Sydra";

export const PER_SUBMISSION_COPY =
  `Drafting a federal submission takes a biller ${PER_SUBMISSION_MANUAL}, ${PER_SUBMISSION_SYDRA}.`;

/** Full lifecycle: intake through determination follow up. */
export const LIFECYCLE_MANUAL_HOURS = 3;
export const LIFECYCLE_SYDRA_HOURS = 0.25; // 15 minutes
export const LIFECYCLE_HOURLY_RATE = 65;

export const CALCULATOR_FINE_PRINT =
  `Assumes 88% win rate (CMS Q1/Q2 2025 Public Use File), roughly ${LIFECYCLE_MANUAL_HOURS} hours of total staff time per disputed claim across the full lifecycle by hand, intake through determination follow up, versus about 15 minutes of review time with Sydra, at a $${LIFECYCLE_HOURLY_RATE} per hour billing specialist rate. Recovery estimate based on disputed amount midpoints. Not a guarantee of results.`;
