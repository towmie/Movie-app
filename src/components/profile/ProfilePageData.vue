<template>
  <div class="info">
    <form @submit.prevent="submitNewData">
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
            v-model="newLastName"
            placeholder="Enter Last Name"
          />
        </div>
      </div>
      <div class="item">
        <div>
          <p class="title" v-if="!editMode">
            UserName:
            <span>{{ userName }}</span>
          </p>
          <input
            class="edit-input"
            type="text"
            v-else
            v-model="newUserName"
            placeholder="Enter User Name"
          />
        </div>
      </div>
      <div class="pass-box">
        <button @click="showChangePass" class="reset">Reset Password</button>
        <div v-if="changePassMode || editMode">
          <input
            class="edit-input pass"
            type="password"
            placeholder="New password"
            v-model="newPass"
          />
        </div>
      </div>
      <button class="submit" @submit.prevent="submitNewData">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newFirstName: "",
      newLastName: "",
      newUserName: "",
      newPass: "",
      changePassMode: false,
      editMode: false,
    };
  },
  methods: {
    showChangePass() {
      this.changePass = !this.changePass;
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
      return "Andrey";
    },
    lastName() {
      return "Ziuzin";
    },
    userName() {
      return "towmie";
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
