import { Config } from '@jest/types'

// for potential issues with module imports/JSDOM see:
// https://thymikee.github.io/jest-preset-angular/docs/guides/angular-13+

const config: Config.InitialOptions = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./jest-setup.ts'],
  coverageReporters: ['text-summary', 'lcov', 'cobertura'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  // ignores cypress specs
  testPathIgnorePatterns: ['/cypress/', '/src/environments/', '/out/'],
  collectCoverageFrom: ['**/*.(t|j)s'],
  coveragePathIgnorePatterns: ['/cypress/', '/src/environments/', '/out/'],
  coverageDirectory: './coverage',
  coverageProvider: 'v8',
  /*   moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@features/(.*)': '<rootDir>/src/app/features/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@environments/(.*)': '<rootDir>/src/environments/$1',
    uuid: require.resolve('uuid'), // module import issue - fix from https://github.com/uuidjs/uuid/issues/451#issuecomment-1112328417
  }, */
  testEnvironment: 'jsdom',
}

export default config
