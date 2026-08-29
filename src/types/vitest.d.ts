/**
 * Type declarations for Vitest test utilities.
 * Allows type checking and IDE resolution without requiring heavy global dependencies.
 */
declare module 'vitest' {
  export interface Assertion<T = any> {
    toBe(expected: any): void
    toEqual(expected: any): void
    toStrictEqual(expected: any): void
    toBeTruthy(): void
    toBeFalsy(): void
    toBeNull(): void
    toBeUndefined(): void
    toBeDefined(): void
    toBeGreaterThan(expected: number): void
    toBeLessThan(expected: number): void
    toContain(expected: any): void
    toThrow(expected?: any): void
    rejects: {
      toThrow(expected?: any): Promise<void>
      toEqual(expected?: any): Promise<void>
      toBe(expected?: any): Promise<void>
      [key: string]: any
    }
    resolves: {
      toEqual(expected?: any): Promise<void>
      toBe(expected?: any): Promise<void>
      [key: string]: any
    }
    [key: string]: any
  }

  export function describe(name: string, fn: () => void): void
  export function it(name: string, fn: (() => void) | (() => Promise<void>)): void
  export function test(name: string, fn: (() => void) | (() => Promise<void>)): void
  export function beforeEach(fn: (() => void) | (() => Promise<void>)): void
  export function afterEach(fn: (() => void) | (() => Promise<void>)): void
  export function beforeAll(fn: (() => void) | (() => Promise<void>)): void
  export function afterAll(fn: (() => void) | (() => Promise<void>)): void
  export function expect<T = any>(actual: T): Assertion<T>

  export const vi: {
    fn: (implementation?: (...args: any[]) => any) => any
    spyOn: (object: any, method: string) => any
    stubGlobal: (name: string, value: any) => void
    unstubAllGlobals: () => void
    clearAllMocks: () => void
    resetAllMocks: () => void
    restoreAllMocks: () => void
    mock: (path: string, factory?: () => any) => void
    [key: string]: any
  }
}
