<template>
  <div class="item">
    <img class="img" :src="cover" alt="" />
    <div class="info-box">
      <h4 class="title">{{ title }}</h4>
      <div class="gernes-box">
        <span class="genres" v-for="genre of genres" :key="genre">{{
          genre
        }}</span>
      </div>
      <span class="rating"><span class="sub">rating: </span>{{ rating }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "cover", "id", "genres", "rating"],
};
</script>

<style scoped>
.info-box {
  padding: 0 10px;
}
.item {
  display: flex;
  margin-bottom: 10px;
}
.img {
  width: 70px;
  height: 100px;
}
.gernes-box {
  display: flex;
  flex-wrap: wrap;
}
.title {
  margin-bottom: 10px;
}
.sub {
  font-size: 10px;
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
