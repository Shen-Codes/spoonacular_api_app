<template v-if="recipes.length > 0">
  <div class="recipes-container">
    <h1>Recipes</h1>
    <RecipeCard v-if="isRandom" v-bind="recipe" :key="recipes[0].id" />
    <div class="recipes-container__grid">
      <RecipeByIngCard
        v-show="!isRandom"
        v-for="recipe in recipesByIng"
        v-bind="recipe"
        :key="recipe.id"
      />
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard";
import RecipeByIngCard from "./RecipeByIngCard";
import { mapState } from "vuex";

export default {
  Name: "RecipesContainer",
  components: {
    RecipeCard,
    RecipeByIngCard,
  },
  computed: mapState({
    recipe: (state) => state.recipe,
    isRandom: (state) => state.isRandom,
    recipesByIng: (state) => state.recipesByIng,
  }),
  methods: {
    logProps(e) {
      e.preventDefault();
      console.log(this.recipesByIng);
    },
  },
};
</script>

<style scoped>
.recipes-container {
  display: grid;
  grid-template-columns: repeat(3, 1 fr);
  margin-top: 20px;
}

.recipes-container__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>