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
import "./styles.css";

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
