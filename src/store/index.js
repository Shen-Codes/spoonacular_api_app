import { createStore } from 'vuex';
import { trimRecipe, trimRecByIng } from './helpers';
import { recipesByIngData, fullRecipeData } from './data.js';

const apiKey = 'cdf99fb3ce324f408c7ca15d9eaca276';


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
      let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${queryString}&number=50&ranking=2`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const trimmedRecByIng = trimRecByIng(data);
      commit("setRecipesByIng", trimmedRecByIng);
    },

    async getFullRecipe({ commit }, id) {
      let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
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
