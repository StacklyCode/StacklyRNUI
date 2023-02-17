import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const config = [
  {
    input: "main.ts",
    external: ["react", "react-native", "react-dom", "react-native-reanimated"],
    output: [
      {
        file: "build/index.js",
        format: "cjs",
        // sourcemap: true,
      },
    ],
    plugins: [
      json(),
      peerDepsExternal(),
      commonjs(),
      nodeResolve({
        browser: true,
      }),
      // alias({
      //   applicationRoot: `${__dirname}`,
      // }),
      typescript({
        outputToFilesystem: true,
        tsconfig: "./tsconfig-rollup.json",
      }),
    ],
  },
];

export default config;
