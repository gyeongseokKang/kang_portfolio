module.exports = {
  targets: ">0.5%",
  assumptions: {
    noDocumentAll: true,
    noClassCalls: true,
  },
  presets: [
    "next/babel",
    // "react-app",
    // "@emotion/babel-preset-css-prop",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
        importSource: "@emotion/react",
        sourceType: "module",
        modules: "commonjs",
        seBuiltIns: "entry",
      },
    ],
    ["@babel/preset-env", { targets: { node: "current" }, loose: true }],
    // "@babel/preset-typescript",
  ],
  plugins: [
    "@emotion",
    "@babel/plugin-proposal-do-expressions",
    ["@babel/plugin-transform-runtime", { helpers: true, regenerator: true }],
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"], // for build시에 console.log 제거
    },
  },
};
