<template>
  <router-link :to="catUrl" name="category" @click="showCat">{{
    category
  }}</router-link>
</template>

<script>
export default {
  props: ["category"],
  methods: {
    showCat() {},
  },
  computed: {
    catUrl() {
      return "/category/" + this.category;
    },
  },
};
</script>

<style scoped>
a {
  display: block;
  margin: 10px 0;
  padding-left: 30px;
  color: rgb(110, 110, 110);
}
a:hover {
  color: rgb(68, 68, 68);
}
</style>
