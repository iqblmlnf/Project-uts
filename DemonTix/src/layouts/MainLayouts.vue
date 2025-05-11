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
  <footer style="background: linear-gradient(to right, #7b1e1e, #5c0f0f); color: #fff; padding: 2rem 0;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between;">
      <div style="flex: 1; min-width: 250px; margin-bottom: 1rem;" class="py-3 px-4">
        <h2 style="font-size: 1.5rem; font-weight: bold; display: flex; align-items: center; gap: 0.5rem;">
          <img src="../assets/logo.png" alt="logo" style="height: 2rem;" /> DemonTix
        </h2>
        <p style="margin-top: 0.5rem; max-width: 300px;" class="text-justify px-3 py-4">
          DemonTix merupakan salah satu penjualan tiket terpercaya di Indonesia dengan keaslian dan keamanan yang selalu terjaga.
        </p>
      </div>

      <div style="flex: 1; min-width: 150px; margin-bottom: 1rem;" class="py-3 px-4">
        <h3 style="font-weight: bold;">Kategori</h3>
        <ul style="list-style: none; padding: 0; margin-top: 0.5rem;">
          <li><a href="#" style="color: #ffd700; text-decoration: none;">Musik</a></li>
          <li><a href="#" style="color: #ffd700; text-decoration: none;">Olahraga</a></li>
          <li><a href="#" style="color: #ffd700; text-decoration: none;">Wisata</a></li>
        </ul>
      </div>

      <div style="flex: 1; min-width: 150px; margin-bottom: 1rem;" class="py-3 px-4">
        <h3 style="font-weight: bold;">DemonTix</h3>
        <ul style="list-style: none; padding: 0; margin-top: 0.5rem;">
          <li><a href="#" style="color: #ffd700; text-decoration: none;">Tentang Kami</a></li>
          <li><a href="#" style="color: #ffd700; text-decoration: none;">Syarat & Ketentuan</a></li>
          <li><a href="#" style="color: #ffd700; text-decoration: none;">FAQ</a></li>
          <li><a href="#" style="color: #ffd700; text-decoration: none;">Tim</a></li>
        </ul>
      </div>
    </div>

    <hr style="margin: 1rem 0; border-color: rgba(255, 255, 255, 0.2);" />

    <div style="text-align: center; font-size: 0.875rem;">
      Copyright © 2025 UNIVERSITAS AMIKOM YOGYAKARTA
    </div>
  </footer>
</template>

<style>
footer a:hover {
  text-decoration: underline;
  color: #ffffff;
}
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
