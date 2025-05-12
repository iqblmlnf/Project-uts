<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <!-- Left Side (Signup Info) -->
      <div class="col-md-6 d-flex flex-column justify-content-center align-items-center bg-gradient text-white position-relative" style="background: linear-gradient(to bottom right, #660000, #cc3333);">
        <h5 class="mb-3">Belum punya akun?</h5>
        <button class="btn btn-outline-light rounded-pill px-4">SIGN UP</button>
        <img src="../assets/logo.png" alt="Ticket Icon" class="position-absolute bottom-0 start-0 ms-4 mb-3" style="width: 120px; opacity: 0.5;" />
      </div>

      <!-- Right Side (Login Form) -->
      <div class="col-md-6 d-flex justify-content-center align-items-center bg-white">
        <div class="w-75">
          <h3 class="text-center text-danger fw-bold mb-4">Sign In</h3>

          <div class="mb-3 position-relative">
            <i class="fa fa-user position-absolute top-50 translate-middle-y ms-3 text-danger"></i>
            <input type="text" class="form-control ps-5 rounded-pill border-danger" placeholder="Username" />
          </div>

          <div class="mb-4 position-relative">
            <i class="fa fa-lock position-absolute top-50 translate-middle-y ms-3 text-danger"></i>
            <input type="password" class="form-control ps-5 rounded-pill border-danger" placeholder="Password" />
          </div>

          <button class="btn btn-danger w-100 rounded-pill">LOGIN</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed for static UI
</script>

<style scoped>
/* Optional additional styling */
</style>
