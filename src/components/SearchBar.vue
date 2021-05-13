<template>
    <div class="search-bar">
        <div class="search-bar__bar">
            <form @submit.prevent="handleSubmit" >
                <label for="searchQuery">Search by ingredients, separate ingredients by comma  </label>
                <input 
                    type="text" 
                    v-model="searchQuery"
                    placeholder="Search by ingredients..." 
                    name="searchQuery"
                />
                <Button type="Search"/>
            </form>
            <Button type="Get Random Recipe" @click="getRandom"/>
            <Button type="Test recipe" @click="testNewRecipe"/>
        </div>
        <div class="ingredients-list">
            <p><b>List of Ingredients:</b> </p>
            <p class="ingredients-list__ingredient" v-for="ingredient in searchArray" :key="ingredient">
                {{ ingredient }}
            </p>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
import {mapActions} from 'vuex'

export default {
    name: "SearchBar",
    components: {
        Button
    }, 
    data() {
        return {
            searchQuery: "",
            searchArray: []
        }
    },
    watch: {
        searchQuery(newQuery, oldQuery) {
            let idx = newQuery.length - 1
            if (newQuery[idx] === "," || newQuery.length < oldQuery.length) {
                this.updateSearchArray()
            }
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault()
            this.updateSearchArray()
            if(!this.searchArray[this.searchArray.length - 1]){
                this.searchArray.pop()
            }
            this.getRecipesByIng(this.searchArray)
        },
        updateSearchArray() {
            let searchArray = this.searchQuery.split(',')
            searchArray = searchArray.map(ing => {
                return ing.trim()
            })
            this.searchArray = searchArray
        },
        ...mapActions(['getRandom', 'testNewRecipe', 'getRecipesByIng'])
    }
}
</script>

<style scoped>
.search-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.search-bar__bar {
    display: flex
}
.ingredients-list {
    display: flex;
}
.ingredients-list__ingredient {  
    margin-left: 5px;
    background-color: rgb(231, 231, 231);
}
</style>