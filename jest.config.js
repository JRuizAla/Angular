module.exports = {
  globals: {
    "ts-jest": {
      allowSyntheticDefaultImports: true,

      tsconfig: "<rootDir>/tsconfig.spec.json",

      stringifyContentPathRegex: "\\.html$",
    },
  },

  transform: {
    "^.+\\.js": "ts-jest",
  },

  moduleFileExtensions: ["ts", "html", "js", "json"],

  collectCoverage: true,

  coverageReporters: ["json", "html", "lcov", "text", "text-summary"],

  collectCoverageFrom: [
    "<rootDir>/src/app/**/*.ts",

    "!<rootDir>/src/app/**/public-api.ts",

    "!<rootDir>/src/app/**/*.module.ts",

    "!<rootDir>/src/app/**/*.directive.ts",

    "!<rootDir>/src/app/**/*.mock.ts",
  ],

  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/package.json",
  ],

  testMatch: ["**/+(*.)+(spec|test).+(ts)?(x)"],

  modulePathIgnorePatterns: ["<rootDir>/dist/"],

  roots:[
    "<rootDir>",
    "src",
  ],
  modulePaths:[
    "<rootDir>",
  ],
  moduleDirectories:[
    "node_modules",
    "src"
  ],
};
