/* tslint:disable */
/* eslint-disable */

export class Universe {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  /**
   * Create an empty universe with all cells dead.
   */
  static new(width: number, height: number): Universe;
  /**
   * Create a universe with random cells, probability in [0.0, 1.0].
   */
  static random(width: number, height: number, alive_probability: number): Universe;
  width(): number;
  height(): number;
  /**
   * Pointer to the underlying cells buffer (0 = dead, 1 = alive).
   */
  cells_ptr(): number;
  /**
   * Number of cells in the buffer.
   */
  cells_len(): number;
  /**
   * Clone the cells buffer for convenience (copies memory).
   */
  cells(): Uint8Array;
  /**
   * Advance the universe by one tick.
   */
  tick(): void;
  /**
   * Set a specific cell.
   */
  set_cell(row: number, col: number, alive: boolean): void;
  /**
   * Toggle a specific cell.
   */
  toggle_cell(row: number, col: number): void;
  /**
   * Clear all cells (all dead).
   */
  clear(): void;
  /**
   * Randomize all cells with a probability in [0.0, 1.0].
   */
  randomize(alive_probability: number): void;
}

/**
 * Install better panic messages in the browser console.
 */
export function set_panic_hook(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_universe_free: (a: number, b: number) => void;
  readonly universe_new: (a: number, b: number) => number;
  readonly universe_random: (a: number, b: number, c: number) => number;
  readonly universe_width: (a: number) => number;
  readonly universe_height: (a: number) => number;
  readonly universe_cells_ptr: (a: number) => number;
  readonly universe_cells_len: (a: number) => number;
  readonly universe_cells: (a: number) => [number, number];
  readonly universe_tick: (a: number) => void;
  readonly universe_set_cell: (a: number, b: number, c: number, d: number) => void;
  readonly universe_toggle_cell: (a: number, b: number, c: number) => void;
  readonly universe_clear: (a: number) => void;
  readonly universe_randomize: (a: number, b: number) => void;
  readonly set_panic_hook: () => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
