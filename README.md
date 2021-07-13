# @hyrious/esbuild-plugin-svgo

[SVGO](https://github.com/svg/svgo) plugin for esbuild.

## Usage

```js
const { svgo } = require("@hyrious/esbuild-plugin-svgo");
// prettier-ignore
require("esbuild").build({
  entryPoints: ["app.js"],
  bundle: true,
  outfile: "out.js",
  plugins: [svgo()],
}).catch(() => process.exit(1));
```

### Options

```ts
export function svgo(options?: OptimizeOptions): Plugin;
```

See [SVGO Options](https://github.com/svg/svgo).

## License

MIT @ [hyrious](https://github.com/hyrious)
