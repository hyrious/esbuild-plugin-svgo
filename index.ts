import { Plugin } from "esbuild";
import fs from "fs";
import path from "path";
import { optimize, OptimizeOptions } from "svgo";

/**
 * @example
 * svgo({ multipass: true })
 */
export function svgo(options?: OptimizeOptions): Plugin {
  return {
    name: "svgo",
    setup({ onResolve, onLoad }) {
      const cwd = process.cwd();

      onResolve({ filter: /\.svg$/ }, args => {
        return { path: path.relative(cwd, path.join(args.resolveDir, args.path)), namespace: "svgo" };
      });

      onLoad({ filter: /.*/, namespace: "svgo" }, async args => {
        const raw = await fs.promises.readFile(args.path, "utf-8");
        const contents = optimize(raw, options).data;
        return { contents, loader: "dataurl" };
      });
    },
  };
}
