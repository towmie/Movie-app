<template>
  <div class="btn">
    <h2 class="title">Home:</h2>
    <div class="btn-wrapper">
      <button class="prev" @click="prevPage"></button>
      <button class="next" @click="nextPage"></button>
    </div>
  </div>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div v-else><MovieList /></div>
</template>

<script>
import MovieList from "./../components/movies/MovieList";
export default {
  components: { MovieList },
  data() {
    return {
      currentPage: 1,
      isLoading: false,
    };
  },
  async created() {
    this.isLoading = true;
    await this.$store.dispatch("getMovieList", this.currentPage);
    this.isLoading = false;
  },
  methods: {
    async nextPage() {
      this.isLoading = true;

      this.currentPage++;
      await this.$store.dispatch("getMovieList", this.currentPage);
      this.isLoading = false;
    },

    async prevPage() {
      this.isLoading = true;

      if (this.currentPage > 1) {
        this.currentPage--;
      } else {
        return;
      }
      await this.$store.dispatch("getMovieList", this.currentPage);
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.title {
  display: block;
  padding: 15px;
  margin-top: 16px;
  padding-bottom: 26px;
  color: #353535;
  font-size: 18px;
  font-weight: 300;
}
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(53, 53, 53, 0.3);
}
.btn-wrapper {
  margin-right: 10px;
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
@media (max-width: 700px) {
  .btn-wrapper {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .title {
    margin: 0 auto;
    text-align: center;
  }
}
</style>
