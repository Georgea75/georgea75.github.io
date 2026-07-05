# Conway WASM Game of Life

Rust + wasm-bindgen implementation of Conway's Game of Life that you can drop into a static site.

## Prerequisites
- Rust toolchain (stable)
- `wasm-pack` (`cargo install wasm-pack`)
- WebAssembly target (`rustup target add wasm32-unknown-unknown`)

## Build
```
wasm-pack build --target web --release --out-dir web/pkg
```
This emits `web/pkg/conway_wasm.js` and `conway_wasm_bg.wasm` ready for static hosting.

## Using in the browser
```js
import init, { Universe, set_panic_hook } from "./pkg/conway_wasm.js";

const wasm = await init();
set_panic_hook();

const width = 64;
const height = 64;
const universe = Universe.random(width, height, 0.5);

const cells = new Uint8Array(
  wasm.memory.buffer,
  universe.cells_ptr(),
  universe.cells_len(),
);

universe.tick(); // advance one generation
```

API highlights:
- `Universe::new(width, height)` create empty grid
- `Universe::random(width, height, probability)` seeded grid
- `tick()` advance one generation
- `set_cell(row, col, alive)` / `toggle_cell(row, col)`
- `cells_ptr()` + `cells_len()` zero-copy view of cells (0 = dead, 1 = alive)
- `cells()` clone if you prefer a copy
- `clear()` and `randomize(probability)` helpers

## Demo page
After running the build command above, open `web/index.html` in a static server (e.g. `python -m http.server 8000 -d web`) to see a canvas-based demo that consumes the WASM build.