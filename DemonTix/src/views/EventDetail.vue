<template>
  <div class="container">
    <!-- Kategori -->
    <div class="badge">
      <span>🎵 Musik</span>
    </div>

    <!-- Judul -->
    <h1 class="title">HIPHOP SORINGIN FESTIVAL 2025</h1>

    <!-- Banner -->
    <img src="/eventolahraga1.png" alt="banner" class="banner" />

    <!-- Info Penyelenggara -->
    <div class="organizer">
      <img src="../assets/logo.png" alt="logo" class="logo" />
      <span>Hip Hop Soringin</span>
      <a href="#">@hiphopsoringin</a>
    </div>

    <!-- Tabs -->
    <div class="tabs">
      <button class="tab active">📄 Deskripsi</button>
      <button class="tab">📜 Tiket</button>
    </div>

    <!-- Deskripsi -->
    <div class="deskripsi-box">
      <h2>Deskripsi Event</h2>
      <p>
        Hiphop Soringin Festival 2025 adalah lanjutan dari Hiphop Soringin #1, #2, #3, dan #5 yang sudah digelar sebelumnya.
        Merupakan sebuah selebrasi HipHop yang festival vibes di Yogyakarta, menampilkan penggiat HipHop dari seluruh elemen:
        baik rap, graffiti, bboy, breakdance, dan DJ.
      </p>
      <br />
      <h3>Syarat dan Ketentuan</h3>
      <ol>
        <li>Entry Pass yang valid adalah yang dibeli melalui artatix.co.id.</li>
        <li>Satu Entry Pass berlaku untuk satu orang.</li>
        <li>Panitia dan Promotor tidak bertanggung jawab/tidak ada penggantian atas pembelian tiket secara ilegal atau dari pihak ketiga.</li>
        <li>Tiket hilang/rusak/tidak dapat ditunjukkan dianggap tidak sah walau memiliki bukti pembelian.</li>
        <li>Panitia dan Promotor tidak bertanggung jawab atas biaya transportasi atau akomodasi akibat pembatalan event.</li>
        <li>Dalam keadaan force majeure, promotor berhak membatalkan event tanpa pengembalian dana.</li>
        <li>Promotor tidak bertanggung jawab atas cedera selama acara berlangsung.</li>
        <li>Tunjukkan barcode di saat E-Ticket diterima untuk masuk atau penukaran tiket.</li>
      </ol>
    </div>

    <!-- Sidebar Detail -->
    <div class="detail-box">
      <h3>Detail Event</h3>
      <p><i class="fa fa-calendar"></i> <strong>Tanggal:</strong><br />10 Mei 2025</p>
      <p><i class="fa fa-clock"></i> <strong>Waktu:</strong><br />14:00 - 22:00</p>
      <p><i class="fa fa-map-marker"></i> <strong>Lokasi:</strong><br />JNM BLOC</p>
      <button class="beli-btn">Beli Tiket</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const eventTitle = route.params.title
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 40px;
}

.badge {
  background-color: #ffeec6;
  color: #9a6700;
  display: inline-block;
  padding: 5px 12px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
}

.title {
  grid-column: span 2;
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
}

.banner {
  width: 100%;
  border-radius: 12px;
  grid-column: span 2;
}

.organizer {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  grid-column: span 2;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  grid-column: span 2;
}

.tab {
  padding: 8px 16px;
  border: none;
  background-color: #f3f4f6;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}

.tab.active {
  background-color: #b91c1c;
  color: white;
}

.deskripsi-box {
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.deskripsi-box h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.deskripsi-box ol {
  padding-left: 20px;
}

.detail-box {
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  height: fit-content;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.detail-box h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.detail-box p {
  margin: 10px 0;
  font-size: 15px;
}

.beli-btn {
  margin-top: 20px;
  background-color: #b91c1c;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
}

.beli-btn:hover {
  background-color: #991b1b;
}
</style>
