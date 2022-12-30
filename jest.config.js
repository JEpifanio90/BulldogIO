module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  cacheDirectory: '<rootDir>/node_modules/jest-test-cache',
  verbose: true,
  collectCoverage: true,
  coverageThreshold: {
    'global': {
      'branches': 100,
      'functions': 100,
      'lines': 100,
      'statements': 100
    }
  },
  coverageDirectory: 'coverage/BulldogIO',
  coverageReporters: [["json", {file: 'coverage.json'}], "lcov", "text"],
  moduleNameMapper: {
    '^@bulldog/store/(.*)': '<rootDir>/src/app/store/$1',
    '^@bulldog/configs/(.*)': '<rootDir>/src/app/configs/$1',
    '^@bulldog/env/(.*)': '<rootDir>/src/environments/$1',
    '^@bulldog/core/(.*)': '<rootDir>/src/app/core/$1',
    '^@bulldog/modules/(.*)': '<rootDir>/src/app/modules/$1',
    '^@bulldog/shared/(.*)': '<rootDir>/src/app/shared/$1',
    '^@bulldog/tests/(.*)': '<rootDir>/src/tests/$1'
  },
};
