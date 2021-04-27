<template>
  <div class="profile">
    <!-- <div class="header">Profile Info</div> -->
    <div class="main">
      <profile-page-img></profile-page-img>
      <div class="info">Info</div>
    </div>
    <!-- <div class="wishlist">wishist</div> -->
  </div>
</template>

<script>
import ProfilePageImg from "./../components/profile/ProfilePageImg";
export default {
  components: { ProfilePageImg },
};
</script>
<style scoped>
.profile img {
  width: 300px;
}
</style>
