<template>
  <ul class="ingredients">
    <li class="ingredients__ingredient" v-for="ingredient of ingredients" :key="ingredient.id"> {{ ingredient.amount}} {{ingredient.unit}} {{ ingredient.name }}</li>
  </ul>
</template>

<script>
export default {
  name: "IngredientsList",
  props: {
    ingredients: Array
  }, 
}
</script>

<style scoped>
.ingredients {
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style-type: none;
}

.ingredients__ingredient {
  text-align: left;
}
</style>