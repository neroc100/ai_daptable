// Global Configuration Constants
// Central configuration file for the experiment application.
// Contains all global constants and settings used throughout the app.

export const ADAPTABLE = true; // Controls whether the experiment allows participants to adapt automation levels during the experiment. When true, shows increase/decrease automation buttons.

export const MAX_NUM_URL = 15; // Maximum number of URLs in the experiment sequence. This determines the total number of URLs participants will evaluate.

export const NUM_FREEZE_PROBES = 3; // Number of freeze probes to show during the experiment. These are situational awareness questions that appear at random intervals.

export const MIN_SEC_FREEZE_PROBE = 5; // Minimum delay in seconds before showing a freeze probe. Freeze probes will appear after at least this many seconds on a target URL.

export const MAX_SEC_FREEZE_PROBE = 15; // Maximum delay in seconds before showing a freeze probe. Freeze probes will appear after at most this many seconds on a target URL.

export const STARTING_CONDITION = 1; // Default starting condition for the experiment

export const PARTICIPANT_ID = 1; // Default participant ID 
