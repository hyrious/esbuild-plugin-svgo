import { Plugin } from "esbuild";
import { readFile } from "fs/promises";
import { Config, optimize } from "svgo";

/**
 * Use {@link https://github.com/svg/svgo SVGO} to optimize SVG files on load.
 * 
 * @param config See {@link https://github.com/svg/svgo#configuration SVGO configuration} for details.
 * 
 * @example
 * ```js
 * svgo({ multipass: true })
 * ```
 */
export function svgo(config?: Config): Plugin {
  return {
    name: "svgo",
    setup({ onLoad }) {
      onLoad({ filter: /\.svg$/ }, async args => {
        const raw = await readFile(args.path, "utf-8");
        const contents = optimize(raw, config).data;
        return { contents, loader: 'default' };
      })
    },
  };
}

export default svgo;
