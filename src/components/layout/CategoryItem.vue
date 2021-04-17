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
}
</style>
