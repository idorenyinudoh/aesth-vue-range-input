import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import buble from "@rollup/plugin-buble";
export default {
  input: "src/wrapper.js",
  output: {
    name: "AesthVueRangeInput",
    exports: "named",
  },
  plugins: [
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    buble(), // Transpile to ES5
  ],
};
