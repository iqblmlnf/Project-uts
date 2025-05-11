<template>
  <div class="event-detail-container">
    <!-- Kategori -->
    <div class="badge">🎵 Musik</div>

    <!-- Judul -->
    <h1 class="event-title">HIPHOP SORINGIN FESTIVAL 2025</h1>

    <!-- Banner -->
    <img src="/eventdetail1.png" alt="Banner Event" class="event-banner" />

    <!-- Info Penyelenggara -->
    <div class="organizer">
      <span><img src="/logo.png" alt="Logo" class="logo" /> Hip Hop Soringin</span>
      <span class="social">@hiphopsoringin</span>
    </div>

    <!-- Tab Navigasi -->
    <div class="tab-buttons">
      <button :class="{ active: activeTab === 'deskripsi' }" @click="scrollToSection('deskripsi')">
        📄 Deskripsi
      </button>
      <button :class="{ active: activeTab === 'tiket' }" @click="scrollToSection('tiket')">
        🧾 Tiket
      </button>
    </div>

    <!-- Deskripsi -->
    <div ref="deskripsiSection" v-if="activeTab === 'deskripsi'" class="tab-content">
      <h3>Deskripsi Event</h3>
      <p>
        HipHop Soringin Festival 2025 adalah lanjutan dari HipHop Soringin #1, #2, #3, dan #4. Merupakan sebuah
        selebrasi HipHop yang menampilkan elemen rap, graffiti, bboy, breakdance, dan DJ di Yogyakarta.
      </p>
      <ul>
        <li>Entry Pass hanya berlaku untuk satu orang</li>
        <li>Penukaran tiket tidak dapat dilakukan ulang meski memiliki bukti pembelian</li>
        <li>Penyelenggara tidak bertanggung jawab atas kehilangan/kerusakan pribadi</li>
        <li>Panitia berhak membatalkan acara jika terjadi force majeure</li>
      </ul>
    </div>

    <!-- Tiket -->
    <div ref="tiketSection" v-if="activeTab === 'tiket'" class="tab-content">
      <h3>Pilih Tiket</h3>
      <div class="ticket-list">
        <div class="ticket-card">
          <div>
            <strong>Presale 1</strong>
            <p class="subtext">Include tax 11%</p>
          </div>
          <span class="price">Rp 184.000</span>
          <button disabled class="sold-out">Sold Out</button>
        </div>
        <div class="ticket-card">
          <div>
            <strong>Presale 2</strong>
            <p class="subtext">Include tax 11%</p>
          </div>
          <span class="price">Rp 206.000</span>
          <button class="select-btn">Pilih</button>
        </div>
        <div class="ticket-card">
          <div>
            <strong>Regular</strong>
            <p class="subtext">Include tax 11%</p>
          </div>
          <span class="price">Rp 222.000</span>
          <button class="select-btn">Pilih</button>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="event-sidebar">
      <h3>Detail Event</h3>
      <p><i class="fa fa-calendar"></i> Tanggal: 10 Mei 2025</p>
      <p><i class="fa fa-clock"></i> Waktu: 14:00 - 22:00</p>
      <p><i class="fa fa-map-marker"></i> Lokasi: JNM BLOC</p>
      <button class="buy-button" @click="scrollToSection('tiket')">Beli Tiket</button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const activeTab = ref('deskripsi')
const deskripsiSection = ref(null)
const tiketSection = ref(null)

const scrollToSection = (section) => {
  activeTab.value = section
  nextTick(() => {
    const target = section === 'deskripsi' ? deskripsiSection.value : tiketSection.value
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
}
</script>

<style scoped>
.event-detail-container {
  max-width: 1200px;
  margin: auto;
  padding: 24px;
  font-family: sans-serif;
}

.badge {
  background: #fcd34d;
  color: #78350f;
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
  margin-bottom: 10px;
}

.event-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.event-banner {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 16px;
}

.organizer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
}

.organizer .logo {
  height: 20px;
  margin-right: 8px;
}

.social {
  color: #6b7280;
}

.tab-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.tab-buttons button {
  padding: 10px 20px;
  border-radius: 999px;
  border: 2px solid #b91c1c;
  background-color: white;
  color: #b91c1c;
  font-weight: bold;
  cursor: pointer;
}

.tab-buttons .active {
  background-color: #b91c1c;
  color: white;
}

.tab-content {
  margin-bottom: 60px;
}

.ticket-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.ticket-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subtext {
  color: #6b7280;
  font-size: 12px;
  margin-top: 4px;
}

.price {
  font-weight: bold;
  color: #b91c1c;
}

.select-btn,
.sold-out {
  padding: 6px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.select-btn {
  background-color: #b91c1c;
  color: white;
}

.select-btn:hover {
  background-color: #991b1b;
}

.sold-out {
  background-color: #e5e7eb;
  color: #9ca3af;
  cursor: not-allowed;
}

.event-sidebar {
  background-color: #f9fafb;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  max-width: 300px;
  margin-top: 40px;
}

.buy-button {
  margin-top: 16px;
  width: 100%;
  padding: 10px;
  background-color: #b91c1c;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.buy-button:hover {
  background-color: #991b1b;
}
</style>
