<template>
  <div class="item">
    <router-link :to="movieUrl">
      <img class="img" :src="cover" alt=""
    /></router-link>
    <div class="info-box">
      <router-link :to="movieUrl" class="title">{{ title }}</router-link>
      <div class="gernes-box">
        <span class="genres" v-for="genre of genres" :key="genre">{{
          genre
        }}</span>
      </div>
      <span class="rating"
        >Rating: <span class="sub">{{ rating }}</span></span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "cover", "id", "genres", "rating"],
  computed: {
    movieUrl() {
      return "/details/" + this.id;
    },
  },
};
</script>

<style scoped>
.info-box {
  padding: 0 10px;
}
.item {
  display: flex;
  padding-top: 3px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(204, 203, 203);
  margin-bottom: 5px;
}
.img {
  width: 70px;
  height: 100px;
}
.gernes-box {
  display: flex;
  flex-wrap: wrap;
}
.rating {
  font-size: 10px;
}
.sub {
  font-size: 18px;
  font-weight: 700;
  color: #e71c60;
}
.title {
  display: block;
  font-weight: 700;
  color: #e71c60;
  margin-bottom: 10px;
}

.genres {
  position: relative;
  margin-right: 8px;
  margin-bottom: 5px;
  font-size: 12px;
  color: #fff;
  background-color: rgb(179, 178, 178);
  padding: 3px;
  border-radius: 4px;
}
</style>
