<template>
  <div class="home">
    <SearchBar />
    <RecipesContainer/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '../components/SearchBar.vue'
import Button from '../components/Button.vue'
import RecipesContainer from '../components/RecipesContainer'

export default {
  name: 'Home',
  components: {
    SearchBar,
    Button,
    RecipesContainer
  },
  data() {
    return {
      recipes: []
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>