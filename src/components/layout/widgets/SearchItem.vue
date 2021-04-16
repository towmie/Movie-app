<template>
  <div class="input-wrapper">
    <input class="search-input" v-model="searchedFilm" placeholder="Search" />
    <button class="serach-btn" @submit="serach"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchedFilm: "",
    };
  },

  methods: {
    search() {
      //   console.log(this.searchedFilm);
      //   this.$store.dispatch("searchInput", this.searchedFilm);
    },

    // moveToSearch() {
    //   this.$router.push("/serch");
    // },
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
  display: block;
}
.input-wrapper {
  position: relative;
}
.serach-btn {
  position: absolute;
  cursor: pointer;
  right: 55px;
  top: 7px;
  border: none;
  background-color: transparent;
  background-image: url(./../../../assets/icons/search.svg);
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  height: 20px;
}
</style>
