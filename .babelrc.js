const dev = process.env.NODE_ENV !== "production";

module.exports = {
  presets: ["next/babel", "@babel/preset-typescript"],
  plugins: [
    [
      "styled-components",
      {
        displayName: dev,
        pure: true,
      },
    ],
  ],
};
