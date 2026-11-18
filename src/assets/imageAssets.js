const imageContext = require.context("./", false, /\.(jpe?g|png)$/i);

export const imageAssets = imageContext.keys().sort().map((key) => {
  const filename = key.replace("./", "");

  return {
    src: imageContext(key),
    filename,
    name: filename
      .replace(/\.[^.]+$/, "")
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  };
});

export const findImage = (keywords, fallbackIndex = 0) => {
  const terms = keywords.map((keyword) => keyword.toLowerCase());
  const match = imageAssets.find(({ filename }) => {
    const normalizedFilename = filename.toLowerCase();
    return terms.some((term) => normalizedFilename.includes(term));
  });

  return match?.src || imageAssets[fallbackIndex % imageAssets.length]?.src;
};
