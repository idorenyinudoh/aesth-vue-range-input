<template>
  <input
    type="range"
    ref="range"
    @input="$emit('input', $event.target.value)"
    :max="max"
    :value="value"
    :style="{
      '--range-width': rangeWidth,
      '--progress-color': progressColor,
      '--track-color': buffered
        ? `linear-gradient(90deg, ${buffered.color} ${buffered.width}, ${trackColor} ${buffered.width})`
        : trackColor,
      '--thumb-border-radius': squaredThumb ? '0' : '50%',
      '--thumb-border-color': thumbBorderColor,
      '--thumb-size': thumbSize,
    }"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: false,
      default: 0,
    },
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
    buffered: {
      type: Object,
      required: false,
      // default: function () {
      //   return {
      //     width: "50%",
      //     color: "#0003",
      //   };
      // },
    },
    trackColor: {
      type: String,
      required: false,
      default: "#0003",
    },
    squaredThumb: {
      type: Boolean,
      required: false,
      default: false,
    },
    thumbBorderColor: {
      type: String,
      required: false,
      default: "#000",
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
  computed: {
    updateWebkitProgress() {
      const progress = (this.value / this.max) * 100 + "%";
      return this.$refs.range.style.setProperty("--webkit-progress", progress);
    },
  },
  mounted() {
    this.updateWebkitProgress;
  },
  watch: {
    value() {
      this.updateWebkitProgress;
    },
  },
};
</script>

<style scoped>
input {
  position: relative;
  -webkit-appearance: none;
  margin: 0;
  padding: 5px 0;
  height: 19px;
  width: var(--range-width);
}
input:focus-visible {
  outline: 2px solid var(--progress-color);
}
input::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: var(--track-color);
}
input::before {
  position: absolute;
  content: "";
  top: 13px;
  left: 0;
  width: var(--webkit-progress);
  height: 3px;
  background-color: var(--progress-color);
  cursor: pointer;
}
input::-webkit-slider-thumb {
  position: relative;
  -webkit-appearance: none;
  box-sizing: content-box;
  border: 1px solid var(--thumb-border-color);
  height: var(--thumb-size);
  width: var(--thumb-size);
  border-radius: var(--thumb-border-radius);
  background-color: #fff;
  cursor: pointer;
  margin: calc((var(--thumb-size) / 2) - var(--thumb-size)) 0 0 0;
}
input:active::-webkit-slider-thumb {
  transform: scale(1.2);
  background: var(--thumb-border-color);
}
input::-moz-range-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: var(--track-color);
}
input::-moz-range-progress {
  height: 3px;
  background-color: var(--progress-color);
}
input::-moz-focus-outer {
  border: 0;
}
input::-moz-range-thumb {
  box-sizing: content-box;
  border: 1px solid var(--thumb-border-color);
  height: var(--thumb-size);
  width: var(--thumb-size);
  border-radius: var(--thumb-border-radius);
  background-color: #fff;
  cursor: pointer;
}
input:active::-moz-range-thumb {
  transform: scale(1.2);
  background: var(--thumb-border-color);
}
</style>
