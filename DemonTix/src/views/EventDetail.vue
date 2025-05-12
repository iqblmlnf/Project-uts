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
              <i class="bi bi-instagram text-danger"></i
              ><label for>Instagram</label>
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
            <span class="text-white" style="font-size: 12px">
              <i class="bi bi-calendar-fill px-2"></i>Deskripsi
            </span>
          </button>
          <button
            @click="currentTab = 'tiket'"
            :class="{ 'active-tab': currentTab === 'tiket' }"
          >
            <span class="text-white" style="font-size: 12px">
              <i class="bi bi-ticket-perforated-fill px-1"></i> Tiket
            </span>
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
        <div v-if="currentTab === 'tiket'" class="tab-content">
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
                <span style="color: #f26419">Rp 100.000</span>
              </div>
            </div>
          </div>
          <div class="card-tiket">
              <div class="info">
                <div class="col-8 p-0 ticket-name">
                  <span>Normal [2 Day Pass]</span>
                </div>
                <div class="col-4 p-0 ticket-status">
                  <span class="onsale">On Sale</span>
                </div>
              </div>
              <hr style="border: 1px dashed #b0b0b0" />
              <div class="ticket-order">
                <div class="ticket-price">
                  <label for="">Harga</label>
                  <span style="color: #f26419">Rp 1.000.000</span>
                </div>
                <div>
                  <button
                    class="btn-buy"
                    v-if="selectedTicket !== 'TKT10247'"
                    @click="toggleQtyInput('TKT10247')"
                  >
                    Pilih
                  </button>
                  <div v-if="selectedTicket === 'TKT10247'" class="qty">
                    <div class="nice-number">
                      <button @click="decreaseQty('TKT10247')">-</button>
                      <input
                        type="number"
                        v-model="ticketQty.TKT10247"
                        min="1"
                        max="5"
                        style="width: 50px; text-align: center; font-size: 16px"
                        :readonly="!isQtyEditable"
                      />
                      <button @click="increaseQty('TKT10247')">+</button>
                    </div>
                    <div class="btn-order py-2">
                      <a
                        href="javascript:void(0)"
                        @click="cancelSelection"
                        
                      >
                        Batal
                      </a>
                      <button @click="submitTicket('TKT10247')" class="btn-buy px-3 py-2">
                        Beli
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <span style="color: #f26419">Rp 100.000</span>
              </div>
            </div>
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
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const currentTab = ref("deskripsi");

// To handle ticket selection and quantities
// To handle ticket selection and quantities
const selectedTicket = ref(null); // Tracks the selected ticket
const ticketQty = ref({
  TKT10247: 1, // Initial quantity for this ticket
});
const isQtyEditable = ref(true); // To control whether the quantity input is editable

// Function to toggle the visibility of quantity input when "Pilih" is clicked
const toggleQtyInput = (ticketId) => {
  if (selectedTicket.value === ticketId) {
    selectedTicket.value = null; // If the same ticket is clicked again, hide the input
  } else {
    selectedTicket.value = ticketId; // Otherwise, show the input for the selected ticket
  }
};

// Increase ticket quantity (limit to max of 5)
const increaseQty = (ticketId) => {
  if (ticketQty.value[ticketId] < 5) {
    ticketQty.value[ticketId]++;
  }
};

// Decrease ticket quantity (limit to min of 1)
const decreaseQty = (ticketId) => {
  if (ticketQty.value[ticketId] > 1) {
    ticketQty.value[ticketId]--;
  }
};

// Cancel the ticket selection
const cancelSelection = () => {
  selectedTicket.value = null;
};

// Submit ticket selection (for now, just log the selected ticket and quantity)
const submitTicket = (ticketId) => {
  alert(
    `Ticket ${ticketId} with quantity ${ticketQty.value[ticketId]} purchased!`
  );
};
</script>

<style scoped>
.nice-number {
  display: inline-flex;
  justify-content: stretch;
}

.qty {
  display: block;
  text-align: right;
  margin-top: 8px;
}

.btn-buy {
  border: none;
  border-radius: 8px;
  background-color: #1f1f95;
  color: #fff;
  padding: 8px 24px;
  font-size: 13px;
  font-weight: 400;
}

.onsale {
  background-color: #e1ebfb;
  color: #0066ff;
  font-weight: 400;
  font-size: 13px;
  padding: 6px 10px;
  border-radius: 8px;
}

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
  align-items: center;
}
.card-tiket {
  padding: 24px;
  margin: 20px 0;
  border-radius: 14px;
  border: solid 1px #ebf1ff;
}
.qty input {
  width: 50px; /* Ensure input has a width */
  text-align: center;
  font-size: 16px;
  margin: 0 8px;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
}

button {
    background-color: #fafafa;
    border: none;
    outline: none;
    border-radius: 8px;
    color: #1f1f95;
    padding: 5px 12px;
    font-weight: 500;
}

.btn-order {
  display: flex;
  justify-content: space-between;
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
  background-color: #d79a9a;
  color: #fff;
  border: none;
  border-radius: 18px;
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
</style>
