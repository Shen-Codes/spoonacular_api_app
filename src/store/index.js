import { createStore } from 'vuex'
import { trimRecipe, trimRecByIng } from './helpers'
import { recipesByIngData, fullRecipeData } from './data.js'

const apiKey = 'cdf99fb3ce324f408c7ca15d9eaca276'


export default createStore({
  state: {
    recipes: [],
    recipesByIng: [],
    isRandom: false,
    showModal: false,
  },
  mutations: {
    setRandom: (state, trimmedRecipe) => {
      state.recipes = [trimmedRecipe]
      state.isRandom = true
    },
    setRecipesByIng: (state, recipesByIng) => {
      state.recipes = []
      state.recipesByIng = recipesByIng
      state.isRandom = false
    },
    setRecipes: (state, trimmedRecipe) => {
      state.recipes = [...state.recipes, trimmedRecipe]
    },
    modalSwitch: (state) => {
      console.log(state.showModal)
      if(state.showModal) {
        state.showModal = false
      } else {
        state.showModal = true
      }
    }
  },

  actions: {
    async getRandom({commit}) {
      const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`)
      const data = await res.json();
      const trimmedRecipe = trimRecipe(data.recipe[0])
      commit("setRandom", trimmedRecipe) 
    },
    
    async getRecipesByIng({commit}, queryArray) {
      // console.log(queryArray)
      // const queryString = queryArray.join(',+')
      // console.log(queryString) 
      // let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${queryString}&number=3`
      // const res = await fetch(url)
      // const data = await res.json()
      const trimmedRecByIng = trimRecByIng(recipesByIngData)
      commit("setRecipesByIng", trimmedRecByIng)
    },  
    
    async getFullRecipe({commit}, id) {
      // let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      // const res = await fetch(url)
      // const data = await res.json()
      const trimmedRecipe = trimRecipe(fullRecipeData)
      commit("setRecipes", trimmedRecipe)
    },
    
    modalSwitch({commit}) {
      commit("modalSwitch")
    }
  },

  getters: {
    recipeById: (state) => (id) => {
      console.log("getter hit")
      return state.recipes.find(recipe => recipe.id === id)
    }
  }
})
