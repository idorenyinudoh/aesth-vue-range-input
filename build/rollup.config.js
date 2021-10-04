import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue2";
import css from "rollup-plugin-css-only";
import buble from "@rollup/plugin-buble";
export default {
  input: "src/wrapper.js",
  output: {
    name: "AesthVueRangeInput",
    exports: "named",
  },
  plugins: [
    vue({
      compileTemplate: true,
    }),
    css({ output: "bundle.css" }),
    commonjs(),
    buble(),
  ],
};
