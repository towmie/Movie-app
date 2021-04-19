<template>
  <form @submit.prevent="searchFilm" class="input-wrapper">
    <input class="search-input" v-model="searchedFilm" placeholder="Search" />
    <button class="serach-btn" type="submit"></button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchedFilm: "",
    };
  },

  methods: {
    async searchFilm() {
      this.$router.replace("/search");
      await this.$store.dispatch("searchedFilm/searchMovie", this.searchedFilm);
      this.$store.dispatch("searchedFilm/searchInput", this.searchedFilm);
      this.searchedFilm = "";
    },
  },
};
</script>
<style scoped>
.search-input {
  font-size: 16px;
  border: none;
  background-color: rgb(235, 235, 235);
  border-radius: 10px;
  padding: 8px 18px 8px 8px;
  margin-right: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
  display: block;
}

.serach-btn {
  position: absolute;
  cursor: pointer;
  right: 65px;
  top: 36px;
  border: none;
  background-color: transparent;
  background-image: url(./../../../assets/icons/search.svg);
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  height: 20px;
}
</style>
