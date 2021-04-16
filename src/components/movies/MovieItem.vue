<template>
  <li class="card" :style="bgImg">
    <button class="wishlist" @click="addToWhishlist"></button>
    <div class="bg"></div>
    <div class="wrapper">
      <div class="top">
        <span class="rating">{{ rating }}</span>
        <p class="title">{{ title }}</p>
      </div>
      <a href="" class="info">Show Info</a>
    </div>
  </li>
</template>

<script>
export default {
  props: ["title", "id", "cover", "genres", "year", "desc", "rating"],
  computed: {
    bgImg() {
      return `background-image: url(${this.cover})`;
    },
  },
  methods: {
    addToWhishlist() {
      this.$store.dispatch("wishlist/addToWhishlist", {
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

.wishlist {
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
  background-image: url(./../../assets/icons/add.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
}
.wrapper {
  position: relative;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
}

.top {
  position: absolute;
  color: #fff;
  font-weight: 300;
}

.card:hover .wrapper {
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
  margin-top: auto;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: #e71c60;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
