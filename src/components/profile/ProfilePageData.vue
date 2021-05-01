<template>
  <div class="info">
    <base-spinner v-if="isLoading"></base-spinner>
    <form @submit.prevent="submitNewData" v-if="!isLoading">
      <button class="edit" @click="toggleEditMode"></button>
      <div class="item">
        <div>
          <p class="title" v-if="!editMode">
            First name:
            <span>{{ firstName }}</span>
          </p>
          <input
            class="edit-input"
            type="text"
            v-else
            v-model="newFirstName"
            placeholder="Enter First Name"
          />
        </div>
      </div>
      <div class="item">
        <div>
          <p class="title" v-if="!editMode">
            Last name:
            <span>{{ lastName }}</span>
          </p>
          <input
            class="edit-input"
            type="text"
            v-else
            v-model="lastName"
            placeholder="Enter Last Name"
          />
        </div>
      </div>
      <div class="item">
        <div>
          <p class="title" v-if="!editMode">
            Description:
            <span>{{ description }}</span>
          </p>
          <textarea
            class="edit-input"
            type="text"
            v-else
            v-model="description"
            placeholder="Enter User Name"
          />
        </div>
      </div>

      <button class="submit" @submit.prevent="submitNewData">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  async created() {
    this.isLoading = true;
    await this.$store.dispatch("profile/setUserInfo");
    this.isLoading = false;
  },
  data() {
    return {
      newFirstName: this.firstName,
      newLastName: this.lastName,
      newDescription: "",
      newPass: "",
      changePassMode: false,
      editMode: false,
      isLoading: false,
    };
  },
  methods: {
    showChangePass() {
      this.changePassMode = !this.changePassMode;
    },
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
    submitNewData() {
      console.log(this.newFirstName, this.newLastName);
    },
  },
  computed: {
    firstName() {
      return this.$store.getters["profile/getUserFirstName"];
    },
    lastName() {
      return this.$store.getters["profile/getUserLastName"];
    },
    description() {
      return this.$store.getters["profile/getUserDescription"];
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
form {
  width: 100%;
  padding: 0 10px;
  position: relative;
}
.item {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(184, 184, 184, 0.5);
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 30;
}

.item span {
  font-size: 18px;
  font-weight: 700;
  color: #e71c60;
  padding-left: 10px;
}
textarea {
  font-family: inherit;
}

.edit-input {
  display: block;
  outline: none;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 0;
  background-color: transparent;
  border: none;
  font-size: 16px;
}
.pass {
  border-bottom: 2px solid rgb(0, 151, 26);
}
.pass-box {
  display: block;
  border-bottom: none;
}
.submit {
  margin-top: 20px;
  display: block;
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: inherit;
  padding: 6px 40px;
  /* width: 100%; */
  text-align: center;
  color: #fff;
  background-color: #e71c60;
}
.reset {
  background-color: transparent;
  padding: 0;
  margin-bottom: 10px;
  border: none;
  font-family: inherit;
  font-size: inherit;
  transition: all 0.2s;
  color: #e71c60;
}
.reset:hover {
  cursor: pointer;
}

.edit {
  cursor: pointer;
  position: absolute;
  top: -40px;
  right: 20px;
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  background-image: url(./../../assets/icons/edit.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30px 30px;
}
</style>
