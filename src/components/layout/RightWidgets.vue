<template>
  <div class="wid">
    <top-rated-widget></top-rated-widget>
    <wishlist-widget></wishlist-widget>
  </div>
</template>

<script>
import TopRatedWidget from "./widgets/topRated/TopRatedWidget";
import WishlistWidget from "./widgets/wishlist/WishlistWidget";
export default {
  components: { WishlistWidget, TopRatedWidget },
};
</script>

<style scoped>
.wid {
  padding: 10px;
}
</style>
