<template>
  <div class="recipe-by-ing-card">
    <h2 class="recipe-by-ing-card__title">{{ title }}</h2>
    <img class="recipe-by-ing-card__image" :src="image" :alt="title">
    <h4 class="recipe-by-ing-card__h4">Ingredients Required</h4>
    <p class="recipe-by-ing-card__ingredient" v-for="ingredient in allIngredients" :key="ingredient.id">
      {{ ingredient.name}}<span>{{ingredient.missed ? " - missing" : ""}}</span>
    </p>
    <h4 class="recipe-by-ing-card__h4" v-if="unusedExists">Unused Ingredients</h4>
    <p class="recipe-by-ing-card__ingredient" v-for="ingredient in unusedIngredients" :key="ingredient.id">
      {{ingredient.name}}
    </p>
    <div class="recipe-by-ing-card__button">
      <Button  type="Get Full Recipe" @click="handleGetRecipe" />
    </div>
  </div>
</template>

<script>
import Button from './Button'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "RecipeByIngCard",
  components: {
    Button
  },
  props: {
    id: Number,
    title: String,
    image: String,
    allIngredients: Array,
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
    ...mapGetters(['recipeById']),
    unusedExists() {
      return this.unusedIngredients && this.unusedIngredients.length > 0
    }
  }
}
</script>

<style scoped>
.recipe-by-ing-card { 
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 1%;
  margin: 2%;
}

.recipe-by-ing-card__image {
  justify-self: center;
  align-self: center;
}

.recipe-by-ing-card__button {
 align-items: baseline;
}
</style>