<template>
  <div>Home</div>
  <div class="btn">
    <div class="btn-wrapper">
      <button class="prev" @click="prevPage">prev</button>
      <button class="next" @click="nextPage">next</button>
    </div>
  </div>
  <div><MovieList /></div>
</template>

<script>
import MovieList from "./../components/movies/MovieList";
export default {
  components: { MovieList },
  data() {
    return {
      currentPage: 1,
    };
  },
  created() {
    this.$store.dispatch("getMovieList", this.currentPage);
  },
  methods: {
    nextPage() {
      this.currentPage++;
      console.log(this.currentPage);
      this.$store.dispatch("getMovieList", this.currentPage);
    },
    prevPage() {
      if (this.currentPage < 1) return;
      this.currentPage--;
      console.log(this.currentPage);

      this.$store.dispatch("getMovieList", this.currentPage);
    },
  },
};
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: flex-end;
}
.btn-wrapper {
  margin-left: auto;
}
</style>
