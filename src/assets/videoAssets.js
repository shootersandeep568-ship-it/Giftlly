const videoContext = require.context("./", false, /\.mp4$/i);

export const videoAssets = videoContext.keys().map((key) => ({
  src: videoContext(key),
  name: key
    .replace("./", "")
    .replace(/\.mp4$/i, "")
    .replace(/[-_]+/g, " ")
    .trim(),
}));
