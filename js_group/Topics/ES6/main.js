// barrel imports -> pattern used by libraries to export all functionalities from different files to a single file so that you can import from a single file like `index.js/.ts`

import { intersection, union, groupBy } from "./lib/index.js"; // <- barrel import 💎

export function greet() {
  // name export - like const export
  console.log("Hello Deep!");

  intersection();
}

// export { greet }; // this is another type of export, same import like const export
export default greet; // there only a single default export - when import, their name can be change
// 💎💀 when default export - it export with value that is defined at the time of export not the live current value, so means it doexn't change even if live value change
