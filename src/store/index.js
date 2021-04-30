import { createStore } from 'vuex'
import { trimRecipe, trimRecByIng } from './helpers'

const apiKey = process.env.API_KEY


export default createStore({
  state: {
    recipes: [],
    recipesByIng: [],
    isRandom: false
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
      const queryString = queryArray.join(',+')
      let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${queryString}&number=3`
      const res = await fetch(url)
      const data = await res.json()
      const trimmedRecByIng = trimRecByIng(data)
      commit("setRecipesByIng", trimmedRecByIng)
    },  
    
    async getFullRecipe({commit}, id) {
      let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      const res = await fetch(url)
      const data = await res.json()
      const trimmedRecipe = trimRecipe(data)
      commit("setRecipes", trimmedRecipe)
    },
    
    testNewRecipe({commit}) {
      const trimmedRecipes = [
        {
        id: Math.random(),
        title: "random title" + Math.random(),
        analyzedInstructions: [
          {
            step: Math.random()
          }
        ]
        }
      ]
      commit("getRandom", trimmedRecipes)
    }
  },
  getters: {
    recipeById: (state) => (id) => {
      console.log("getter hit")
      return state.recipes.find(recipe => recipe.id === id)
    }
  }
})
