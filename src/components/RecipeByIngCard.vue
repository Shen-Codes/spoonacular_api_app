<template>
  <div class="recipe-by-ing-card">
    <h2 class="recipe-by-ing-card__title">{{ title }}</h2>
    <img class="recipe-by-ing-card__image" :src="image" :alt="title">
    <h4>Ingredients Required</h4>
    <p v-for="ingredient in ingredients" :key="ingredient.id">
      {{ ingredient.name}}{{ingredient.missing ? " - missing" : ""}}
    </p>
    <h4 v-if="unusedIngredients.length > 0">Unused Ingredients</h4>
    <p v-for="ingredient in unusedIngredients" :key="ingredient.id">
      {{ingredient.name}}
    </p>
    <Button type="Get Full Recipe" @click="handleGetRecipe" />
  </div>
</template>

<script>
import Button from './Button'
import { mapActions } from 'vuex'

export default {
  name: "RecipeByIngCard",
  components: {
    Button
  },
  props: {
    id: Number,
    title: String,
    image: String,
    ingredients: Array,
    unusedIngredients: Array,
  },
  methods: {
    ...mapActions(['getFullRecipe']),
    handleGetRecipe(e) {
      e.preventDefault()
      this.getFullRecipe(id)
    }
  },
  computed: {
    ...mapGetters(['recipeById'])
  }
}
</script>

<style scoped>
.recipe-by-ing-card { 
  width: 28vw;
  border: 1px solid black;
  padding: .3%;
}
</style>