import { createStore } from 'vuex';
import { trimRecipe, trimRecByIng } from './helpers';
import { recipesByIngData, fullRecipeData } from './data.js';

const apiKey = process.env.VUE_APP_API_KEY;


export default createStore({
  state: {
    recipe: {},
    recipesByIng: [],
    showModal: false,
  },
  mutations: {
    setRandom: (state, trimmedRecipe) => {
      state.recipe = trimmedRecipe;
    },
    setRecipesByIng: (state, recipesByIng) => {
      state.recipes = [];
      state.recipesByIng = recipesByIng;
      state.isRandom = false;
    },
    setRecipe: (state, trimmedRecipe) => {
      state.recipe = trimmedRecipe;
    },
    modalSwitch: (state) => {
      if (state.showModal) {
        state.showModal = false;
      } else {
        state.showModal = true;
      }
    }
  },

  actions: {
    async getRandom({ commit }) {
      const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
      const data = await res.json();
      const trimmedRecipe = trimRecipe(data.recipes[0]);
      commit("setRandom", trimmedRecipe);
    },

    async getRecipesByIng({ commit }, queryArray) {
      console.log(queryArray);
      const queryString = queryArray.join(',+');
      let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${queryString}&number=30&ranking=1`;
      const res = await fetch(url);
      const data = await res.json();
      const trimmedRecByIng = trimRecByIng(data);
      commit("setRecipesByIng", trimmedRecByIng);
    },

    async getFullRecipe({ commit }, id) {
      let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      const trimmedRecipe = trimRecipe(data);
      commit("setRecipe", trimmedRecipe);
    },

    modalSwitch({ commit }) {
      commit("modalSwitch");
    }
  },

  getters: {
    recipeById: (state) => (id) => {
      console.log("getter hit");
      return state.recipes.find(recipe => recipe.id === id);
    }
  }
});
