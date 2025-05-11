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

      <div class="navbar-center">
        <RouterLink v-for="i in items" :key="i.to" class="nav-link" :to="i.to">{{ i.name }}</RouterLink>
      </div>

      <div class="navbar-right">
        <div class="search-box">
        <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="search" />
        </div>
        <button class="login-btn">Login</button>
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
    <div class="footer-middle">
      <h5>Kategori</h5>
      <ul>
        <li>Musik</li>
        <li>Olahraga</li>
        <li>Wisata</li>
      </ul>
    </div>

<<<<<<< HEAD
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
=======
    <!-- Kolom 3: DemonTix -->
    <div class="footer-right">
      <h5>DemonTix</h5>
      <ul>
        <li>Tentang Kami</li>
        <li>Syarat & Ketentuan</li>
        <li>FAQ</li>
        <li>Tim</li>
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
>>>>>>> cc8566dd2e227f87d0be592f945ef2edbc59bf55
