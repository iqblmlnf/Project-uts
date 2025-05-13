<script setup>
import { RouterLink, RouterView } from 'vue-router'

const items = [
  { to: '/', name: 'Home' },
  { to: '/jelajah', name: 'Jelajah' },
  { to: '/tim', name: 'Team Project' },
  { to: '/contact', name: 'Hubungi Kami' }
]
</script>

<template>
  <div class="layout-wrapper">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-left">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </div>

      <div class="navbar-center gap-5">
        <RouterLink v-for="i in items" :key="i.to" class="nav-link" :to="i.to">{{ i.name }}</RouterLink>
      </div>

      <div class="navbar-right">
        <router-link to="/login">
        <button class="login-btn">Login</button>
      </router-link>
      </div>
    </nav>

    <!-- Halaman konten -->
    <main class="page-content">
      <RouterView />
    </main>
    

    <!-- Footer -->
    <footer class="footer">
  <div class="footer-content">
    <!-- Kolom 1: Logo & Deskripsi -->
    <div class="footer-left">
      <div class="logo-footer">
        <img src="../assets/logo.png" class="footer-logo">
        <span class="brand">DemonTix</span>
      </div>
      <p class="desc">
        Eventick merupakan salah satu penjualan tiket<br />
        terpercaya di Indonesia dengan keaslian dan<br />
        keamanan yang selalu terjaga
      </p>
      <div class="social-icons">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-linkedin"></i>
      </div>
    </div>

    <!-- Kolom 2: Kategori -->
    <div class="footer-right">
      <h5>Kategori</h5>
      <ul>
        <li>
              <RouterLink to="/jelajah" class="text-white hover:text-gray-300 transition">Musik</RouterLink>
            </li>
            <li>
              <RouterLink to="/jelajah" class="text-white hover:text-gray-300 transition">Olahraga</RouterLink>
            </li>
            <li>
              <RouterLink to="/jelajah" class="text-white hover:text-gray-300 transition">Seminar</RouterLink>
            </li>
      </ul>
    </div>


    <!-- Kolom 3: DemonTix -->
    <div class="footer-right">
      <h5>DemonTix</h5>
      <ul>
        <li>
              <RouterLink to="/contact" class="text-white hover:text-gray-300 transition">Tentang Kami</RouterLink>
            </li>
            <li>
              <RouterLink to="/syarat-ketentuan" class="text-white hover:text-gray-300 transition">Syarat & Ketentuan</RouterLink>
            </li>
            <li>
              <RouterLink to="/faq" class="text-white hover:text-gray-300 transition">FAQ</RouterLink>
            </li>
      </ul>
    </div>
  </div>

  <!-- Footer bawah -->
  <div class="footer-bottom">
    <hr />
    <div class="logo-footer">
      <img src="../assets/logo.png" class="footer-logo" style="width: 25px;">
      <span class="brand">DemonTix</span>
    </div>
    <p><strong>Copyright © 2025 UNIVERSITAS AMIKOM YOGYAKARTA</strong></p>
  </div> 
</footer>
  </div>
</template>

