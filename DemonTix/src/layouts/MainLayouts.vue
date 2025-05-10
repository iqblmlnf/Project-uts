<script setup>
import { RouterLink, RouterView } from 'vue-router'
const items = [
    { to: '/',      name: 'Jelajah' },
    { to: '/tim',     name: 'Tim' },
    { to: '/contact', name: 'Hubungi Kami' }
]
</script>


<template>
  <!-- Navbar -->
   <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
  <nav class="navbar navbar-expand-lg navbar-dark justify-center bg-danger" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem;">
      <img src="../assets/logo.png">
    <div class="container" style="display: flex; align-items: center;">
      <RouterLink class="navbar-brand" to="/" style="margin-left: -50px;">DemonTix</RouterLink>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="nav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li v-for="i in items" :key="i.to" class="nav-item">
            <RouterLink class="nav-link" :to="i.to">{{ i.name }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Transisi halaman -->
  <transition name="fade-page" mode="out-in">
    <RouterView />
  </transition>

  <!-- Footer -->
  <footer class="bg-danger text-center text-white py-3">
    © 2025 UNIVERSITAS AMIKOM YOGYAKARTA
  </footer>
</template>

<style>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: all 0.4s ease;
}
.fade-page-enter-from {
  opacity: 0; transform: translateY(20px);
}
.fade-page-leave-to {
  opacity: 0; transform: translateY(-20px);
}
</style>
