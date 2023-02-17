import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import multiEntry from "@rollup/plugin-multi-entry";

const config = [
  {
    input: ["main.ts"],
    output: [
      {
        file: "build/index.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    // preserveModules: true,
    plugins: [
      json(),
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({
        outputToFilesystem: true,
        tsconfig: "./tsconfig-rollup.json",
      }),
      multiEntry(),
    ],
  },
];

export default config;
