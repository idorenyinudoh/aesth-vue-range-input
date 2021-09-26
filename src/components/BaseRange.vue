<template>
  <input
    type="range"
    ref="range"
    @input="updateWebkitProgress"
    :max="max"
    :style="{
      '--range-width': rangeWidth,
      '--progress-color': progressColor,
      '--thumb-border-radius': squaredThumb ? '0' : '50%',
      '--thumb-size': thumbSize,
    }"
  />
</template>

<script>
export default {
  props: {
    rangeWidth: {
      type: String,
      required: false,
      default: "100%",
    },
    progressColor: {
      type: String,
      required: false,
      default: "#000c",
    },
    squaredThumb: {
      type: Boolean,
      required: false,
      default: false,
    },
    thumbSize: {
      type: String,
      required: false,
      default: "20px",
    },
    max: {
      type: Number,
      required: false,
      default: 100,
    },
  },
  methods: {
    updateWebkitProgress() {
      const progress =
        (this.$refs.range.value / this.$refs.range.max) * 100 + "%";
      this.$refs.range.style.setProperty("--webkit-progress", progress);
    },
  },
  mounted() {
    this.updateWebkitProgress();
  },
};
</script>

<style scoped>
input[type="range"] {
  position: relative;
  -webkit-appearance: none;
  margin: 0;
  height: 19px;
  width: var(--range-width);
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    rgba(0, 125, 181, 0.6) 70%,
    rgba(0, 125, 181, 0.2) 70%
  );
}
input[type="range"]::before {
  position: absolute;
  content: "";
  top: 8px;
  left: 0;
  width: var(--webkit-progress);
  height: 3px;
  background-color: var(--progress-color);
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  position: relative;
  -webkit-appearance: none;
  box-sizing: content-box;
  border: 1px solid #007db5;
  height: var(--thumb-size);
  width: var(--thumb-size);
  border-radius: var(--thumb-border-radius);
  background-color: #fff;
  cursor: pointer;
  margin: calc((var(--thumb-size) / 2) - var(--thumb-size)) 0 0 0;
}
input[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.2);
  background: #007db5;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    rgba(0, 125, 181, 0.6) 70%,
    rgba(0, 125, 181, 0.2) 70%
  );
}
input[type="range"]::-moz-range-progress {
  height: 3px;
  background-color: var(--progress-color);
}
input[type="range"]::-moz-focus-outer {
  border: 0;
}
input[type="range"]::-moz-range-thumb {
  box-sizing: content-box;
  border: 1px solid #007db5;
  height: var(--thumb-size);
  width: var(--thumb-size);
  border-radius: var(--thumb-border-radius);
  background-color: #fff;
  cursor: pointer;
}
input[type="range"]:active::-moz-range-thumb {
  transform: scale(1.2);
  background: #007db5;
}
</style>
