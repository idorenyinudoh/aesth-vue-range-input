<template>
  <input type="range" />
</template>

<script></script>

<style scoped>
input[type="range"] {
  position: relative;
  -webkit-appearance: none;
  margin: 0;
  height: 19px;
  width: 100%;
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
  width: 50%;
  height: 3px;
  background-color: #007db5;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  position: relative;
  -webkit-appearance: none;
  box-sizing: content-box;
  border: 1px solid #007db5;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  margin: -7px 0 0 0;
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
  background-color: #007db5;
}
input[type="range"]::-moz-focus-outer {
  border: 0;
}
input[type="range"]::-moz-range-thumb {
  box-sizing: content-box;
  border: 1px solid #007db5;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
}
input[type="range"]:active::-moz-range-thumb {
  transform: scale(1.2);
  background: #007db5;
}
</style>
