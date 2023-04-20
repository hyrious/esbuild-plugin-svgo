# @hyrious/esbuild-plugin-svgo

[SVGO](https://github.com/svg/svgo) plugin for esbuild.

## Usage

```js
const { svgo } = require("@hyrious/esbuild-plugin-svgo");

require("esbuild").build({
  entryPoints: ["app.js"],
  bundle: true,
  outfile: "out.js",
  plugins: [svgo()],
  loader: { '.svg': 'dataurl' },
}).catch(() => process.exit(1));
```

### Options

```ts
export function svgo(config?: Config): Plugin;
```

See [SVGO Options](https://github.com/svg/svgo#configuration).

## License

MIT @ [hyrious](https://github.com/hyrious)
