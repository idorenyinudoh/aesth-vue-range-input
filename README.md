# aesthetic-vue-range-input

<br>
<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/44336070/135869793-6417e5f6-a2d7-4e6b-9df4-eea8b2fb6bb8.png" alt="Screenshot of aesth-vue-range-input"/>
</p>
<br>
<br>

a completely customizable and aesthetic range input component for vue 2.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Range Input Components](#range-input-components)
5. [Props](#props)
6. [License](#license)

## Features
- supports all native range input attributes because it is built on the native HTML range input.
- completely customizable.
- minimal design.
- implements buffered feature (appropriate for media players).

## Installation

### npm
```shell
npm install aesth-vue-range-input
```

### CDN

#### jsDelivr
```xml
<script src="https://cdn.jsdelivr.net/npm/aesth-vue-range-input"></script>
```

#### UNPKG
```xml
<script src="https://unpkg.com/aesth-vue-range-input"></script>
```

## Usage

If installed through npm,

```vue
<template>
  <div id="app">
    <aesth-vue-range-input v-model.number="rangeValue" />
  </div>
</template>

<script>
import AesthVueRangeInput from "aesth-vue-range-input";

export default {
  data() {
    return {
      rangeValue: 20,
    };
  },
  components {
    AesthVueRangeInput,
  },
};
</script>
```

If installed through CDN, in your HTML file,

```xml
<head>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  <!-- OR -->
  <script src="https://unpkg.com/vue@2"></script>
    
    
  <script src="https://cdn.jsdelivr.net/npm/aesth-vue-range-input"></script>
  <!-- OR -->
  <script src="https://unpkg.com/aesth-vue-range-input"></script>
</head>

<body>
  <div id="app">
    <aesth-vue-range-input v-model.number="rangeValue" />
  </div>
  
  <script>
    var app = new Vue({
      el: '#app',
      data: {
        rangeValue: 20,
      }
    });
  </script>
</body>
```

### Demo

A Demo of the aesth-vue-range-input installed through jsDelivr is available [here](https://codepen.io/idorenyinudoh/pen/KKqLbEy).

## Range Input Components
- **progress**: The section to the left of the thumb. This section consists of values lower than the current value as indicated by the thumb.
- **thumb**: The knob that the user can utilize to alter the range input's value.
- **track**: The section that the thumb slides on.

## Props
All the props are optional.

| Prop        | Description | Type        | Default     |
|-------------|-------------|-------------|-------------|
| `max` | the greatest value in the range of permitted values | Number | 100 |
| `value` | the value of the range input (make sure to include the `.number` modifier on the `v-model` directive) | Number | 0 |
| `rangeWidth` | the width of the range input | String | 100% |
| `progressColor` | the color of the range input's progress section (the `v-model` directive has to be present for this to be visible on webkit browsers) | String | #000c |
| `trackColor` | the color of the range input's track | String | #0003 |
| `squaredThumb` | boolean specifying whether the range input's thumb should be in a square or circle shape | Boolean | false |
| `thumbBorderColor` | the color of the thumb's border | String | #000 |
| `thumbSize` | the `width` and `height` CSS properties of the range input's thumb | String | 20px |
| `buffered` | an object containing the `width` and `color` of the buffered section | Object | `undefined` |

<br>

Here's an implementation with the `buffered` prop:

```vue
<aesth-vue-range-input
  :buffered="{
    width: '70%',
    color: '#0008',
  }"
/>
```

# License
[MIT](https://opensource.org/licenses/MIT)
&copy; Idorenyin Udoh
