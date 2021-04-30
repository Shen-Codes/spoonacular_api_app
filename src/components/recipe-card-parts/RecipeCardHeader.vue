<template>
  <h2 class="recipe-title">{{ title }}</h2>
  <img class="recipe-image" :src="image" :alt="title">
  <div class="sub-info">
    <p>Ready in {{readyIn}} minutes</p>
    <p>Serves: {{servings}}</p>
  </div>
</template>

<script>
export default {
  name: "RecipeCardHeader",
  props: {
    title: String,
    image: String,
    readyIn: Number,
    servings: Number
  },
}
</script>

<style scoped>
.recipe-image {
  width: 100%;
}

.sub-info {
  display: flex;
  justify-content: space-between;

}

</style>