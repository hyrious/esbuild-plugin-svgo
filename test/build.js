const esbuild = require("esbuild");
const { svgo } = require("..");

async function test(report, plugins, loader) {
  const t = performance.now();
  const result = await esbuild.build({
    entryPoints: ["./a.js"],
    bundle: true,
    plugins,
    loader,
    outfile: "a.bundle.js",
    minify: true,
    write: false,
  });
  const e = (performance.now() - t).toFixed();
  const n = result.outputFiles[0].contents.byteLength;
  console.log(report, ":", n, "bytes, in", e, "ms");
}

(async () => {
  await test("default", undefined, { ".svg": "dataurl" });
  await test("svgo", [svgo()], undefined);
})();
