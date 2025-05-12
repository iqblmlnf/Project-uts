<template>
  <main class="container">
    <div class="badge">
      <span><i class="bi bi-music-note-beamed px-2"></i>Musik</span>
    </div>

    <!-- Judul -->
    <h1 class="title">BARAMIAN FEST 2025</h1>

    <div class="grid-container">
      <!-- Kiri -->
      <div class="left-content">
        <!-- Gambar -->
        <img src="/eventmusik1.png" alt="Event Image" class="event-image" />

        <!-- Penyelenggara -->
        <div class="event_creator">
          <div class="creator_profile">
            <div class="creator_img">
              <img src="/eventmusik1.png" alt="" />
            </div>
            <div class="creator_name">
              <label for>Penyelenggara</label>
              <span>Hip Hop</span>
            </div>
          </div>
          <div class="creator_instagram">
            <div class="instagram_logo">
              <i class="bi bi-instagram"></i><label for>Instagram</label>
            </div>
            <div class="instagram_profile">
              <a href="https://www.instagram.com/@rzlnggr_" target="_blank"
                >@rzalnggr_</a
              >
            </div>
          </div>
        </div>

        <!-- Tab Button -->
        <div class="tab-buttons">
          <button
            @click="currentTab = 'deskripsi'"
            :class="{ 'active-tab': currentTab === 'deskripsi' }"
          >
            <i class="bi bi-window-desktop"></i> Deskripsi
          </button>
          <button
            @click="currentTab = 'tiket'"
            :class="{ 'active-tab': currentTab === 'tiket' }"
          >
            <i class="bi bi-ticket-detailed"></i> Tiket
          </button>
        </div>

        <!-- Tab Deskripsi -->
        <div v-if="currentTab === 'deskripsi'" class="tab-content">
          <h5>Deskripsi Event</h5>
          <div class="description-text">
            <p>
              Hiphop Soringin Festival 2025 adalah lanjutan dari Hiphop Soringin
              #1, Hiphop Soringin #2, Hiphop Soringin #3, Hiphop Soringin
              Festival 2024, dan Hiphop Soringin #5 yg sudah digelar sebelumnya.
              <br />
              Merupakan sebuah selebrasi Hiphop yang festive di Yogyakarta,
              menampilkan pegiat Hiphop dari seluruh elemen baik rap, graffiti,
              bboy, breakdance, dan DJ.
            </p>
          </div>
          <h5>Syarat dan Ketentuan</h5>
          <div class="description-text">
            <p>
              1. Entry Pass yang valid adalah yang dibeli melalui artatix.co.id
            </p>
            <p>2. Satu Entry Pass berlaku untuk satu orang.</p>
            <p>
              3. Panitia dan Promotor tidak bertanggung jawab/ tidak ada
              penggantian kerugian atas pembelian tiket acara melalui
              calo/tempat/kanal/platform/yang bukan mitra resmi penjualan tiket
              "Subculture Agression”.
            </p>
          </div>
        </div>

        <!-- Tab Tiket -->
        <div class="card-tiket">
          <div class="info">
            <div class="col-8 p-0 ticket-name">
              <span>Bundling - 3 Day Pass</span>
            </div>
            <div class="col-4 p-0 ticket-status">
              <span class="sold-out">Sold Out</span>
            </div>
          </div>
          <hr style="border: 1px dashed #b0b0b0" />
          <div class="ticket-order">
            <div class="ticket-price">
              <label for="" style="margin-bottom: 0px">Harga</label>
              <span style="color: #F26419;">Rp 100.000</span>
            </div>
          </div>
          <div>
            <div v-if="currentTab === 'tiket'" class="tab-content">
              <p><strong>Presale 1</strong></p>
              <p>Include tax 11%</p>
            </div>
            <span class="sold-out">Sold Out</span>
            <p class="price">Rp 184.000</p>
          </div>
          <div class="ticket">
            <div>
              <p><strong>Presale 2</strong></p>
              <div class="nice-number">
                <div class="nice-number">
                  <button type="button" @click="decrement('presale2')">
                    -
                  </button>
                  <input
                    type="number"
                    v-model="ticketCount.presale2"
                    min="1"
                    max="5"
                    readonly
                    style="width: 2ch"
                  />
                  <button type="button" @click="increment('presale2')">
                    +
                  </button>
                </div>
              </div>
            </div>
            <span class="sold-out">On Sale</span>
            <p class="price">Rp 206.000</p>
          </div>
          <div class="ticket">
            <div>
              <p><strong>Reguler</strong></p>
              <p>Include tax 11%</p>
            </div>
            <span class="sold-out">On Sale</span>
            <p class="price">Rp 222.000</p>
          </div>
        </div>
      </div>

      <!-- Kanan -->
      <div class="right-content">
        <div><h5>Detail Event</h5></div>
        <div class="info">
          <div class="icon"><i class="bi bi-calendar-event py-1"></i></div>
          <div class="catext">
            <label for>Tanggal</label>
            <span>28 - 29 Jun 2025</span>
          </div>
        </div>
        <div class="info">
          <div class="icon">
            <i class="bi bi-clock-fill py-1"></i>
          </div>
          <div class="catext">
            <label for>Waktu</label>
            <span>15:00 - 23:00</span>
          </div>
        </div>
        <div class="info">
          <div class="icon">
            <i class="bi bi-geo-alt-fill py-1"></i>
          </div>
          <div class="catext">
            <label for>Lokasi</label>
            <span>Halaman Gedung Sultan Suriansyah</span>
          </div>
        </div>
        <button class="buy-button">Beli Tiket</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const currentTab = ref("deskripsi");

// Mengatur jumlah tiket
const ticketCount = ref({
  presale2: 1,
  reguler: 1,
});

// Fungsi untuk menambah jumlah tiket
const increment = (ticketType) => {
  if (ticketCount.value[ticketType] < 5) {
    ticketCount.value[ticketType] += 1;
  }
};

// Fungsi untuk mengurangi jumlah tiket
const decrement = (ticketType) => {
  if (ticketCount.value[ticketType] > 1) {
    ticketCount.value[ticketType] -= 1;
  }
};
</script>

<style scoped>
.ticket-order {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
}

.ticket-price {
  display: flex;
  flex-direction: column;
}

.ticket-status {
  text-align: right;
}

.ticket-name {
  font-size: 13px;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.card-tiket {
  padding: 24px;
  margin: 20px 0;
  border-radius: 14px;
  border: solid 1px #ebf1ff;
}

.nice-number input {
  vertical-align: middle;
  -moz-appearance: textfield;
  box-sizing: content-box;
  margin: 0;
  text-align: center;
}

.nice-number button {
  padding: 0 10px;
  cursor: pointer;
}

.qty input {
  width: 40px;
  border-radius: 8px;
  font-size: 14px;
  margin: 0 8px;
  padding: 6px;
  border: none;
  outline: none;
}

input:not(
    [type="image" i],
    [type="range" i],
    [type="checkbox" i],
    [type="radio" i]
  ) {
  overflow-clip-margin: 0px !important;
  overflow: clip !important;
}
.nice-number {
  display: inline-flex;
  justify-content: stretch;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.description-text {
  font-size: 13px;
  font-weight: 400;
  color: #7e7e7e;
  line-height: 24px;
  padding-bottom: 12px;
}

a {
  text-decoration: none;
}
.creator_instagram {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.instagram_profile a {
  font-size: 14px;
  font-weight: 500;
  color: #241ce6;
}

.instagram_logo {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}

.creator_name {
  display: flex;
  flex-direction: column;
}

.creator_profile {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
}

.creator_img img {
  background-color: #b0b0b0;
  width: 48px;
  height: 48px;
  border-radius: 50px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
  color: #222222;
  line-height: 1.2em !important;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 600;
}
span {
  font-size: 15px;
  font-weight: 600;
  color: #181818;
  padding: 2px 0;
}
label {
  font-size: 13px;
  font-weight: 400;
  color: #b0b0b0;
  margin-bottom: 0px;
}

.catext {
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon {
  display: flex;
  background-color: #e3b1b1;
  border-radius: 8px;
  width: 35px;
  height: 35px;
  justify-content: center;
}

.title {
  grid-column: span 2;
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
}

.badge {
  background-color: #ffeec6;
  color: #9a6700;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}
.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}
.left-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.right-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.event-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}
.event_creator {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.logo {
  width: 24px;
  height: 24px;
}
.tab-buttons {
  display: flex;
  gap: 8px;
}
.tab-buttons button {
  padding: 8px 8px;
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 13px;
  font: bold;
}
.tab-buttons .active-tab {
  background-color: #922323;
}
.tab-content {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}
.ticket {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 12px;
}

.sold-out {
  background-color: #fae7e7;
  color: #fa3e3e;
  font-weight: 400;
  font-size: 13px;
  padding: 6px 10px;
  border-radius: 8px;
}
.price {
  color: #922323;
  font-weight: bold;
}
.info {
  display: flex;
  gap: 8px;
  align-items: center;
}
.buy-button {
  padding: 11px;
  background-color: #922323;
  color: #fff;
  border: none;
  border-radius: 13px;
  cursor: pointer;
}
</style>
