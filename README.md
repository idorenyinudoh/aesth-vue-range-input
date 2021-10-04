# aesthetic-vue-range-input

<br>
<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/44336070/135869793-6417e5f6-a2d7-4e6b-9df4-eea8b2fb6bb8.png" alt="Screenshot of aesth-vue-range-input"/>
</p>
<br>
<br>

a completely customizable and aesthetic range input component for vue 2.

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
