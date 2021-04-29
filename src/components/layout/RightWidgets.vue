<template>
  <div class="widgets">
    <top-rated-widget></top-rated-widget>
    <!-- <wishlist-widget></wishlist-widget> -->
  </div>
</template>

<script>
import TopRatedWidget from "./widgets/topRated/TopRatedWidget";
// import WishlistWidget from "./widgets/wishlist/WishlistWidget";
export default {
  components: { TopRatedWidget },
};
</script>

<style scoped>
.widgets {
  min-width: 265px;
  padding: 10px;
  padding-top: 37px;
}
</style>
