<template v-if="recipes.length > 0">
  <div class="recipes-container">
    <h1>Recipes</h1>
    <RecipeCard v-if="isRandom" v-bind="recipes[0]" :key="recipes[0].id"/>
    <RecipeByIngCard v-show="!isRandom" v-for="recipe in recipesByIng" :key="recipe.id"/>
  </div>
</template>

<script>
import RecipeCard from './RecipeCard'
import RecipeByIngCard from './RecipeByIngCard'
import { mapState } from 'vuex'


export default {
  Name: "RecipesContainer",
  components: {
    RecipeCard,
    RecipeByIngCard
  },
  computed: mapState({
      recipes: state => state.recipes,
      isRandom: state => state.isRandom,
      recipesByIng: state => state.recipesByIng
  }),
  methods: {
    logProps(e) {
      e.preventDefault()
      console.log(this.recipes)
    }
  }
}

</script>

<style scoped>
.recipes-container {
  display: grid;
  grid-template-columns: repeat(3, 1 fr);
  margin-top: 20px;
}
</style>