const esbuild = require("esbuild");
const { svgo } = require("..");

async function test(report, plugins, loader) {
  const t = performance.now();
  const result = await esbuild.build({
    entryPoints: ["./a.js"],
    bundle: true,
    plugins,
    loader,
    outfile: "out.js",
    metafile: true,
    loader: { '.svg': 'dataurl' }
  });
  const e = (performance.now() - t).toFixed();
  const n = Object.entries(result.metafile.outputs)[0][1].bytes;
  console.log(report, ":", n, "bytes, in", e, "ms");
}

(async () => {
  await test("default", undefined, { ".svg": "dataurl" });
  await test("svgo", [svgo()], undefined);
})();
