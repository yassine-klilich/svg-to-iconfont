import svgtofont from "svgtofont";

svgtofont({
  src: "./svg", // svg path
  dist: "./fonts", // output path
  fontName: "yk-icons", // font name
  css: true, // Create CSS files.
  outSVGPath: false,
  outSVGReactNative: false,
  outSVGReact: false,
  excludeFormat: ["eot", "svg", "symbol.svg", "ttf", "woff"],
}).then(() => {
  console.log("done!");
});
