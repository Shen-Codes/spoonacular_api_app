<template>
  <p class="step" v-for="step in steps" :key="step.number">
    <b>Step {{ step.number }}:</b> {{ step.step }}
  </p>
</template>

<script>
export default {
  name: "StepsList",
  props: {
    steps: Array,
  },
};
</script>

<style scoped>
.step {
  text-align: left;
  margin-bottom: 1%;
}
</style>