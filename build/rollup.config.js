import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue2";
import buble from "@rollup/plugin-buble";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
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
    postcss(),
    commonjs(),
    buble(),
    terser(),
  ],
};
