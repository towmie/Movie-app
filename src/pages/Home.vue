<template>
  <div class="btn">
    <h3>Home</h3>
    <div class="btn-wrapper">
      <button class="prev" @click="prevPage"></button>
      <button class="next" @click="nextPage"></button>
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
      if (this.currentPage > 1) {
        this.currentPage--;
      } else {
        return;
      }
      this.$store.dispatch("getMovieList", this.currentPage);
    },
  },
};
</script>

<style scoped>
.btn {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.btn-wrapper {
  margin-left: auto;
}
.prev,
.next {
  cursor: pointer;
  border: none;
  margin: 2px;
  background-color: transparent;
  width: 30px;
  height: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 25px 25px;
}
.prev {
  background-image: url(./../assets/icons/previous.svg);
}
.next {
  background-image: url(./../assets/icons/next.png);
}
</style>
