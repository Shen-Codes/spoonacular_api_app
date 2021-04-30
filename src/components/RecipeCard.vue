<template>
  <div class="recipe-card">
    <RecipeCardHeader :title="title" :image="image" :readyIn="readyInMinutes" :servings="servings"/>
    <IngredientsList :ingredients="extendedIngredients"/>
    <StepsList :steps="analyzedInstructions"/>
    <RecipeCardFooter :sourceUrl="sourceUrl" :creditTo="creditsText"/>
  </div>
</template>

<script>
import RecipeCardHeader from './recipe-card-parts/RecipeCardHeader';
import IngredientsList from './recipe-card-parts/IngredientsList';
import StepsList from './recipe-card-parts/StepsList'
import RecipeCardFooter from './recipe-card-parts/RecipeCardFooter'
import { mapGetters } from 'vuex'


export default {
  name: "RecipeCard",
  components: {
    RecipeCardHeader,
    RecipeCardFooter,
    IngredientsList,
    StepsList,
  },
  props: {
    id: Number,
    title: String,
    image: String,
    readyInMinutes: Number,
    servings: Number,
    extendedIngredients: Array,
    analyzedInstructions: Array,
    sourceUrl: String,
    creditsText: String
  },
}
</script>

<style scoped>
.recipe-card { 
  width: 28vw;
  border: 1px solid black;
  padding: .3%;
}
</style>