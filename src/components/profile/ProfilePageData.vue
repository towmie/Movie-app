<template>
  <div class="info">
    <base-spinner v-if="isLoading"></base-spinner>
    <form @submit.prevent="submitNewData" v-if="!isLoading">
      <button class="edit" type="button" @click="toggleEditMode"></button>
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
            required
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
            v-model="newLastName"
            required
            placeholder="Enter Last Name"
          />
        </div>
      </div>
      <div class="item">
        <p class="title" v-if="!editMode">
          Description:
          <span>{{ description }}</span>
        </p>
        <textarea
          class="edit-input"
          type="text"
          v-else
          v-model="newDescription"
          placeholder="Enter User Name"
        />
      </div>

      <button v-if="editMode" class="submit" @submit.prevent="submitNewData">
        Submit
      </button>
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
      newDescription: this.description,
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
    async submitNewData() {
      const updatedInfo = {
        firstName: this.newFirstName,
        lastName: this.newLastName,
        description: this.newDescription,
      };
      await this.$store.dispatch("profile/addUserInfo", updatedInfo);
      this.editMode = false;
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
.box {
  margin: 0;
}
form {
  width: 100%;
  padding: 0 10px;
  position: relative;
}
.item {
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(184, 184, 184, 0.5);
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 30;
  box-sizing: border-box;
}

.item span,
input,
textarea {
  font-size: 20px;
  font-weight: 700;
  color: #e71c60;
  padding-left: 10px;
}
textarea {
  outline: none;
  background-color: rgb(240, 239, 239);
  border: 1px solid rgb(240, 239, 239);
  padding: 10px 15px;
  font-family: inherit;
  font-size: 16px;
  margin-bottom: 10px;
  margin-right: 2px;
  border-radius: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
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
