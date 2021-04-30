<template>
  <div>
    <a href="">{{ sourceUrl }}</a>
    <p>Credit to: {{ creditTo }}</p>
  </div>
</template>

<script>
export default {
  name: "RecipeCardFooter",
  props: {
    sourceUrl: String,
    creditTo: String,
  }
}
</script>