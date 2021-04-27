<template>
  <div class="img">
    <img src="./../../assets/profile.jpg" alt="" />

    <label for="input">Choose new Image</label>
    <input type="file" id="input" class="hidden" />
  </div>
</template>

<script>
export default {
  computed: {
    profileImg() {
      return "./../../assets/profile.jpg";
    },
  },
};
</script>

<style scoped>
label {
  /* display: block; */
  padding-left: 30px;
  position: relative;
  transition: all 0.2s;
}
label:hover {
  cursor: pointer;
  color: #e71c60;
}
label::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-image: url(./../../assets/icons/edit.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 18px 18px;
}

.img {
  text-align: center;
}
.hidden {
  display: none;
}

img {
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #e71c60;
}
</style>
