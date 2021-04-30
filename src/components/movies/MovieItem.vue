<template>
  <teleport to="body" v-if="isAlreadyIn">
    <div class="modal warning">This Movie Is Alredy in WishList</div>
  </teleport>
  <teleport to="body" v-if="loginToAddMovie">
    <div class="modal warning">Please Log In to add Films to wishlist</div>
  </teleport>

  <li class="card" :style="bgImg">
    <button
      v-if="!deleteFromWl"
      class="wishlist"
      @click="addToWhishlist"
    ></button>
    <button v-else class="del-wishlist" @click="deleteFromWhishlist"></button>
    <div class="bg"></div>
    <div class="wrapper">
      <div class="top">
        <span class="rating">{{ rating }}</span>
        <p class="title">{{ title }}</p>
      </div>
      <router-link
        :to="movieUrl"
        name="details"
        class="info"
        @click="chooseSelectedMovie"
        >Show Info</router-link
      >
    </div>
  </li>
</template>

<script>
export default {
  props: [
    "title",
    "id",
    "cover",
    "genres",
    "year",
    "desc",
    "rating",
    "currentPage",
    "deleteFromWl",
  ],
  data() {
    return {
      isAlreadyIn: false,
      loginToAddMovie: false,
    };
  },

  computed: {
    bgImg() {
      return `background-image: url(${this.cover})`;
    },
    movieUrl() {
      return "/details/" + this.id;
    },
    needToLogin() {
      return this.$store.getters["profile/getIsLoggedin"];
    },
  },

  methods: {
    addToWhishlist() {
      if (!this.needToLogin) {
        this.loginToAddMovie = true;
        setTimeout(() => {
          this.loginToAddMovie = false;
        }, 2000);
        return;
      }

      const list = this.$store.getters["wishlist/getWishlistMovies"];
      if (!list.find((el) => el.id === this.id)) {
        this.$store.dispatch("wishlist/addToWhishlist", {
          id: this.id,
          title: this.title,
          cover: this.cover,
          genres: this.genres,
          desc: this.desc,
          rating: this.rating,
          year: this.year,
        });
      } else {
        this.isAlreadyIn = true;
        setTimeout(() => {
          this.isAlreadyIn = false;
        }, 2000);
      }
    },

    deleteFromWhishlist() {
      this.$store.dispatch("wishlist/deleteFromWhishlist", this.id);
    },

    chooseSelectedMovie() {
      this.$store.dispatch("selectedMovie", {
        currentPage: this.currentPage,
        id: this.id,
        title: this.title,
        cover: this.cover,
        genres: this.genres,
        desc: this.desc,
        rating: this.rating,
        year: this.year,
      });
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 40px;
  right: 40px;
  min-width: 100px;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
}
.warning {
  background-color: rgb(173, 127, 1);
}
.card {
  position: relative;
  width: 170px;
  height: 230px;
  padding: 10px;
  margin: 15px;
  border-radius: 2px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.default-img {
  width: 100%;
  z-index: -1;
}
.wishlist,
.del-wishlist {
  position: absolute;
  z-index: 13;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  cursor: pointer;

  border: none;
  border-radius: 1px;
  background-color: #454547;
  opacity: 0.9;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
}

.wishlist {
  background-image: url(./../../assets/icons/add.svg);
}
.del-wishlist {
  background-image: url(./../../assets/icons/minus.svg);
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
}

.top {
  position: absolute;
  color: #fff;
  font-weight: 300;
  opacity: 0;
  transition: all 0.3s ease-out;
}

.card:hover .top {
  opacity: 1;
}
.card:hover .info {
  opacity: 1;
}
.card:hover .bg {
  background: rgba(0, 0, 0, 0.4);
}
.title {
  margin-top: 8px;
  font-size: 18px;
}
.rating {
  font-size: 20px;
}
.info {
  opacity: 0;
  margin-top: auto;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: #e71c60;
  transition: all 0.3s ease-out;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@media (max-width: 1200px) {
  .modal {
    top: 20px;
    right: 20px;
  }

  .info {
    opacity: 1;
  }
}
</style>
