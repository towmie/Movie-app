<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div v-else>
    <div class="details">
      <img class="img" :src="details.large_cover_image" alt="" />
      <div class="movie-info">
        <h2 class="title">{{ details.title_english }}</h2>
        <p>
          Rating: <span class="rating">{{ details.rating }}</span>
        </p>
        <p>
          Year:
          <span class="year">{{ details.year }}</span>
        </p>
        <p>
          Description: <br />
          <span class="desc">{{ details.description_full }}</span>
        </p>
        <p>
          <span class="genres" v-for="gerne of details.genres" :key="gerne">{{
            gerne
          }}</span>
        </p>
      </div>
    </div>
    <div class="recommends">
      <h2 class="recommends__heading">You Also Might Like</h2>
      <ul class="list">
        <movie-item
          v-for="movie of recommends"
          :key="movie.id"
          :id="movie.id"
          :title="movie.title_english"
          :desc="movie.description_full"
          :year="movie.year"
          :cover="movie.medium_cover_image"
          :rating="movie.rating"
          :genres="movie.genres"
        ></movie-item>
      </ul>
    </div>
  </div>
</template>

<script>
import MovieItem from "./../components/movies/MovieItem";
export default {
  components: { MovieItem },
  data() {
    return {
      details: {},
      recommends: "",
      isLoading: false,
      filmId: null,
    };
  },
  async created() {
    this.isLoading = true;
    await this.$store.dispatch("movieDetails", this.$route.params.movieId);
    this.details = this.$store.getters.getMovieDetails;
    this.filmId = this.$route.params.movieId;
    await this.$store.dispatch("renderRecommends", this.filmId);
    this.recommends = this.$store.getters.getRecommends;
    this.isLoading = false;
  },
  watch: {
    async $route(newRoute) {
      this.isLoading = true;
      await this.$store.dispatch("movieDetails", newRoute.params.movieId);
      this.details = this.$store.getters.getMovieDetails;
      this.filmId = newRoute.params.movieId;
      await this.$store.dispatch("renderRecommends", this.filmId);
      this.recommends = this.$store.getters.getRecommends;
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.details {
  padding: 20px;
  display: flex;
  margin: 50px 0;
  padding-right: 40px;
}
.title,
.rating,
.year {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
  color: #e71c60;
}
.recommends {
  margin-bottom: 40px;
}
.recommends__heading {
  padding-left: 20px;
  color: #e71c60;
  margin-bottom: 20px;
}
.title {
  font-size: 30px;
  margin-bottom: 20px;
}
.movie-info {
  margin-left: 30px;
  padding-right: 20px;
}
.img {
  width: 300px;
  max-height: 400px;
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
