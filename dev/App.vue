<template>
  <base-range v-model.number="value"></base-range>
</template>

<script>
import BaseRange from "@/AesthVueRangeInput.vue";

export default {
  data() {
    return {
      value: 0,
    };
  },
  components: {
    BaseRange,
  },
};
</script>

<style></style>
