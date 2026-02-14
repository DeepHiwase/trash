// import { greet } from "./main"; // to give extension
// import { greet as greeting } from "./main.js"; // can use alias with `as`
import x, * as actions from "./main.js"; // * -> take all exported const and put it in created actions obj and default export import as `x`

function hello() {
  // greeting(); // getting auto suggestion - means vscode nodejs global object is storing it
  actions.greet();
  // actions.default(); // default exported will run ❌ don't use this as this can be var also or object so it may call or may not
  x(); // default exported function
  console.log("Hello World!");
}

hello();
