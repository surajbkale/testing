import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  preset: "ts-jest/presets/default-esm", // Ensure this is the ESM preset
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
  },
  // Add this section to handle .js imports
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
