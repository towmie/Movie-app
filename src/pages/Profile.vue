<template>
  <div class="profile">
    <div class="header">Profile Info</div>
    <div class="main">
      <profile-page-img class="img"></profile-page-img>
      <profile-page-data class="data"></profile-page-data>
    </div>
  </div>
</template>

<script>
import ProfilePageImg from "./../components/profile/ProfilePageImg";
import ProfilePageData from "./../components/profile/ProfilePageData";
export default {
  components: { ProfilePageImg, ProfilePageData },
};
</script>
<style scoped>
.header {
  display: block;
  padding: 15px;
  margin-top: 16px;
  padding-bottom: 26px;
  color: #353535;
  font-size: 18px;
  font-weight: 300;
  border-bottom: 1px solid rgba(53, 53, 53, 0.3);
}
.img {
  width: 40%;
}
.data {
  width: 60%;
}
.main {
  display: flex;
  padding: 20px;
  margin-top: 30px;
}
</style>
