<template>
  <div class="home">
    <SearchBar />
    <RecipesContainer />
    <RecipeModal v-show="showModal" />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "../components/SearchBar.vue";
import RecipesContainer from "../components/RecipesContainer";
import RecipeModal from "../components/RecipeModal";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    SearchBar,
    RecipesContainer,
    RecipeModal,
  },
  computed: mapState({
    showModal: (state) => state.showModal,
  }),
  methods: {
    ...mapActions(["modalSwitch"]),
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>