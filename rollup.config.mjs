import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";

const config = [
  {
    input: "main.ts",
    external: ["react", "react-native", "react-dom"],
    output: [
      {
        file: "build/index.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({
        browser: true,
      }),
      commonjs(),
      json(),
      // alias({

      // }),
      typescript({
        outputToFilesystem: true,
        tsconfig: "./tsconfig-rollup.json",
      }),
    ],
  },
];

export default config;
