<template>
  <button @click="clicked">
      {{ type }}
  </button>
</template>


<script>
  export default {
    name: "Button",
    props: ['type'],
    emits: ['clicked'],
    methods: {
      clicked() {
        this.$emit('clicked')
      }
    }
  }
</script>