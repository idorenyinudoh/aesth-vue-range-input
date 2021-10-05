import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import buble from "@rollup/plugin-buble";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/wrapper.js",
  output: {
    name: "AesthVueRangeInput",
    exports: "named",
    globals: {
      vue: "vue",
    },
  },
  external: ["vue"],
  plugins: [vue(), postcss(), commonjs(), buble(), terser()],
};
