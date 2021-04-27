<template>
  <div class="profile">
    <img src="" alt="" />
  </div>
</template>

<script>
export default {
  computed: {
    profileImg() {
      return this.$store.getters["profile/getUserImg"];
    },
  },
};
</script>

<style scoped></style>
