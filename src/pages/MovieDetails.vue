<template>
  <div class="details">
    <img class="img" :src="movie.cover" alt="" />
    <div class="movie-info">
      <h2 class="title">{{ movie.title }}</h2>
      <p>
        Rating: <span class="rating">{{ movie.rating }}</span>
      </p>
      <p>
        Year:
        <span class="year">{{ movie.year }}</span>
      </p>
      <p>
        Description: <br />
        <span class="desc">{{ movie.desc }}</span>
      </p>
      <p>
        <span class="genres" v-for="gerne of movie.genres" :key="gerne">{{
          gerne
        }}</span>
      </p>
    </div>
  </div>
  <div>
    <h2>You Also Might Like</h2>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <ul class="list" v-else>
      <movie-item
        v-for="movie of recommends"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title_english"
        :idImdb="movie.imdb_code"
        :desc="movie.description_full"
        :year="movie.year"
        :cover="movie.medium_cover_image"
        :rating="movie.rating"
        :genres="movie.genres"
      ></movie-item>
    </ul>
  </div>
</template>

<script>
import MovieItem from "./../components/movies/MovieItem";
export default {
  components: { MovieItem },
  data() {
    return {
      isLoading: false,
    };
  },
  async created() {
    this.isLoading = true;
    await this.$store.dispatch("renderRecommends", this.movie.id);
    this.isLoading = false;
  },
  watch: {
    movie: async function (movie) {
      this.isLoading = true;
      await this.$store.dispatch("renderRecommends", movie.id);
      this.isLoading = false;
    },
  },

  computed: {
    movie() {
      return this.$store.getters.getSelectedMovie;
    },
    recommends() {
      console.log(this.$store.getters.getRecommends);
      return this.$store.getters.getRecommends;
    },
  },
};
</script>

<style scoped>
.details {
  padding: 20px;
  display: flex;
  margin-top: 50px;
  padding-right: 40px;
}
.title {
  margin-bottom: 30px;
}
.movie-info {
  margin-left: 20px;
}
.img {
  width: 300px;
  max-height: 500px;
}
p {
  font-size: 15px;
  color: rgb(32, 32, 32);
  line-height: 26px;
}
span {
  font-size: 18px;
  color: black;
}
.list {
  display: flex;
}
.genres {
  position: relative;
  margin-right: 8px;
  margin-bottom: 5px;
  font-size: 12px;
  color: #fff;
  background-color: rgb(214, 213, 213);
  padding: 3px;
  border-radius: 4px;
}
</style>
