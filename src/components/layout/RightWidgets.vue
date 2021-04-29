<template>
  <div class="widgets">
    <auth-widget class="auth"></auth-widget>
    <wishlist-widget v-if="isLoggedIn"></wishlist-widget>
  </div>
</template>

<script>
import AuthWidget from "./../auth/AuthWidget";
import WishlistWidget from "./widgets/wishlist/WishlistWidget";
export default {
  components: { AuthWidget, WishlistWidget },
  computed: {
    isLoggedIn() {
      return this.$store.getters["profile/getIsLoggedin"];
    },
  },
};
</script>

<style scoped>
.auth {
  margin-bottom: 10px;
}
.widgets {
  min-width: 265px;
  padding: 10px;
  padding-top: 15px;
}
</style>
