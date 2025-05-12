<template>
  <div :class="['container', { 'sign-up-mode': isSignUp }]">
    <div class="forms-container">
      <div class="signin-signup">
        <!-- Sign In Form -->
        <form @submit.prevent="login" class="sign-in-form">
          <h2 class="title">Sign In</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" v-model="loginUsername" placeholder="Username" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" v-model="loginPassword" placeholder="Password" />
          </div>
          <input type="submit" value="Login" class="btn solid" />
        </form>

        <!-- Sign Up Form -->
        <form @submit.prevent="register" class="sign-up-form">
          <h2 class="title">Sign Up</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" v-model="signUpUsername" placeholder="Username" />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" v-model="signUpEmail" placeholder="Email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" v-model="signUpPassword" placeholder="Password" />
          </div>
          <input type="submit" value="Sign Up" class="btn solid" />
        </form>
      </div>
    </div>

    <!-- Panels -->
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>Belum Punya Akun ?</h3>
          <button class="btn transparent" @click="isSignUp = true">Sign Up</button>
        </div>
        <img src="../assets/logo.png" class="image" alt="" />
      </div>

      <div class="panel right-panel">
        <div class="content">
          <h3>Sudah Punya Akun ?</h3>
          <button class="btn transparent" @click="isSignUp = false">Sign In</button>
        </div>
        <img src="../assets/logo.png" class="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isSignUp: false,
      loginUsername: "",
      loginPassword: "",
      signUpUsername: "",
      signUpEmail: "",
      signUpPassword: "",
    };
  },
  methods: {
    login() {
      if (this.loginUsername === "admin" && this.loginPassword === "admin123") {
        alert("Login berhasil!");
        window.location.href = "../views/home.vue";
      } else {
        alert("Username atau password salah.");
      }
    },
    register() {
      // Simulasi pendaftaran
      alert("Pendaftaran berhasil!\nUsername: " + this.signUpUsername);
      this.isSignUp = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input {
  font-family: "Poppins", sans-serif;
}

.container {
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.container.sign-up-mode .sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode .sign-in-form {
  opacity: 0;
  z-index: 1;
}

.title {
  font-size: 2.2rem;
  color: #A43434;
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #A43434;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  border: none;
  outline: none;
  font-size: 1.1rem;
  font-weight: 600;
  color: #A43434;
}

.input-field input::placeholder {
  color: #A43434;
  font-weight: 500;
}

.btn {
  width: 150px;
  background-color: #A43434;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
}

.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 15rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 15rem 17%;
}

.panel .content {
  color: #fff;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.btn.transparent {
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
  color: #fff;
}

.image {
  width: 220px;
  margin-top: 30px;
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #A43434 0%, #A43434 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}
</style>
