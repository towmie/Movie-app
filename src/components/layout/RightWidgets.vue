<template>
  <div class="wid">
    <search-item class="search"></search-item>
    <top-rated-widget></top-rated-widget>
    <wishlist-widget></wishlist-widget>
  </div>
</template>

<script>
import SearchItem from "./widgets/SearchItem";
import TopRatedWidget from "./widgets/topRated/TopRatedWidget";
import WishlistWidget from "./widgets/wishlist/WishlistWidget";
export default {
  components: { WishlistWidget, TopRatedWidget, SearchItem },
};
</script>

<style scoped>
.wid {
  padding: 10px;
}
</style>
