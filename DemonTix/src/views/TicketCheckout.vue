<template>
  <div class="checkout-container">
    <!-- Formulir Data Pesanan -->
    <div class="form-section">
      <div class="form-box">
        <h3 class="box-title">Data Pesanan</h3>
        <div class="form-grid">
          <div class="form-group col-span-2">
            <label>Nama Lengkap *</label>
            <input
              type="text"
              v-model="order.nama"
              placeholder="Marcus Holloway"
              required
            />
          </div>
          <div class="form-group">
            <label>Identitas *</label>
            <select v-model="order.jenisIdentitas" required>
              <option value="KTP">KTP</option>
              <option value="SIM">SIM</option>
              <option value="Paspor">Paspor</option>
            </select>
          </div>
          <div class="form-group">
            <label>&nbsp;</label>
            <input
              type="text"
              v-model="order.nomorIdentitas"
              placeholder="Nomor Identitas"
              required
            />
          </div>
          <div class="form-group col-span-2">
            <label>Jenis Kelamin *</label>
            <div class="radio-row">
              <label
                ><input
                  type="radio"
                  v-model="order.jenisKelamin"
                  value="Laki-laki"
                />
                Laki-laki</label
              >
              <label
                ><input
                  type="radio"
                  v-model="order.jenisKelamin"
                  value="Perempuan"
                />
                Perempuan</label
              >
            </div>
          </div>
          <div class="form-group col-span-2">
            <label>Usia</label>
            <input type="number" v-model="order.usia" placeholder="Usia" />
          </div>
          <div class="form-group col-span-2">
            <label>Email *</label>
            <input
              type="email"
              v-model="order.email"
              placeholder="email@domain.com"
              required
            />
          </div>
          <div class="form-group col-span-2">
            <label>No. Whatsapp *</label>
            <input
              type="text"
              v-model="order.whatsapp"
              placeholder="08xxxxxxxxxx"
              required
            />
          </div>
          <div class="form-group col-span-2">
            <label>Jumlah Tiket *</label>
            <input
              type="number"
              min="1"
              v-model.number="ticketCount"
              required
            />
          </div>
        </div>
      </div>

      <!-- Panel Data Pemilik Tiket Dinamis -->
      <div v-for="(t, idx) in tickets" :key="idx" class="form-box">
        <details open>
          <summary class="box-title-row">
            <span class="box-title">Data Pemilik Tiket {{ idx + 1 }}</span>
            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="t.sameAsOrder"
                @change="copyOrderToTicket(idx)"
              />
              Samakan dengan data pesanan
            </label>
          </summary>
          <div class="form-grid mt-4">
            <div class="form-group col-span-2">
              <label>Nama Lengkap *</label>
              <input
                type="text"
                v-model="t.nama"
                placeholder="Marcus Holloway"
                required
              />
            </div>
            <div class="form-group">
              <label>Identitas *</label>
              <select v-model="t.jenisIdentitas" required>
                <option value="KTP">KTP</option>
                <option value="SIM">SIM</option>
                <option value="Paspor">Paspor</option>
              </select>
            </div>
            <div class="form-group">
              <label>&nbsp;</label>
              <input
                type="text"
                v-model="t.nomorIdentitas"
                placeholder="Nomor Identitas"
                required
              />
            </div>
            <div class="form-group col-span-2">
              <label>Jenis Kelamin *</label>
              <div class="radio-row">
                <label
                  ><input
                    type="radio"
                    v-model="t.jenisKelamin"
                    value="Laki-laki"
                  />
                  Laki-laki</label
                >
                <label
                  ><input
                    type="radio"
                    v-model="t.jenisKelamin"
                    value="Perempuan"
                  />
                  Perempuan</label
                >
              </div>
            </div>
            <div class="form-group col-span-2">
              <label>Usia</label>
              <input type="number" v-model="t.usia" placeholder="Usia" />
            </div>
            <div class="form-group col-span-2">
              <label>Email *</label>
              <input
                type="email"
                v-model="t.email"
                placeholder="email@domain.com"
                required
              />
            </div>
            <div class="form-group col-span-2">
              <label>No. Whatsapp *</label>
              <input
                type="text"
                v-model="t.whatsapp"
                placeholder="08xxxxxxxxxx"
                required
              />
            </div>
          </div>
        </details>
      </div>
    </div>

    <!-- Ringkasan Pesanan -->
    <!-- Ringkasan Pesanan -->
    <div class="summary-section">
      <div class="summary-box">
        <h3 class="box-title">Rincian Pesanan</h3>
        <img :src="eventInfo.image" alt="Event" class="event-image" />
        <div class="event-info">
          <div class="event-name">
            {{ eventInfo.name || "Event Tidak Diketahui" }}
          </div>
          <!-- Nama Event -->
          <div class="ticket-info">
            <div>
              <div class="info-label">Tiket</div>
              <div>{{ eventInfo.ticketName || "Reguler-Day 2" }}</div>
              <!-- Nama Tiket -->
              <div class="price">
                Rp {{ eventInfo.price.toLocaleString("id-ID") }}
                <!-- Harga Tiket -->
              </div>
            </div>
            <div class="qty">{{ ticketCount }}x</div>
          </div>
          <div class="voucher-row">
            <input type="text" placeholder="Masukkan kode voucher" />
            <span class="apply-link">Terapkan</span>
          </div>
          <div class="summary-row">
            <span>SubTotal</span>
            <span>
              Rp
              {{ (eventInfo.price * ticketCount).toLocaleString("id-ID") }}
            </span>
          </div>
          <div class="summary-row">
            <span>Biaya Layanan</span>
            <span>Rp {{ (6000 * ticketCount).toLocaleString("id-ID") }}</span>
          </div>
          <div class="summary-row total">
            <strong>Total</strong>
            <strong>
              Rp
              {{
                ((eventInfo.price + 6000) * ticketCount).toLocaleString("id-ID")
              }}
            </strong>
          </div>
          <button class="continue-button">Lanjutkan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketCheckout",
  data() {
    return {
      order: {
        nama: "",
        jenisIdentitas: "KTP",
        nomorIdentitas: "",
        jenisKelamin: "",
        usia: "",
        email: "",
        whatsapp: "",
      },
      ticketCount: 1,
      tickets: [],
      eventInfo: {
        name: "",
        price: 0,
        image: "",
      },
      eventDetail: {
        image: "",
        name: "",
        ticketName: "",
        ticketPrice: 0,
      },
      selectedEvent: null, // Tambahkan properti untuk menyimpan event data
      ticketId: null, // Properti untuk menyimpan ticketId
      quantity: null, // Properti untuk menyimpan quantity
      total: null, // Properti untuk menyimpan total
    };
  },
  mounted() {
    this.initTicketCountFromQuery();
    this.adjustTickets();
    this.loadEventFromStorage();
    this.loadEventFromURL(); // Menambahkan pemanggilan loadEventFromURL
  },
  methods: {
    loadEventFromStorage() {
      const data = localStorage.getItem("selectedEvent");
      if (data) {
        const parsed = JSON.parse(data);
        this.eventInfo.name = parsed.name || "Event Tidak Diketahui";
        this.eventInfo.price = parsed.price || 0;
        this.eventInfo.image = parsed.image || "/event-default.jpg";
        this.eventInfo.ticketName = parsed.ticketName || "Reguler-Day 2";
      } else {
        console.log("No event data in localStorage");
      }
    },

    loadEventFromURL() {
      // Ambil data dari URL
      const routeParams = new URLSearchParams(window.location.search);
      this.ticketId = routeParams.get("ticketId");
      this.quantity = routeParams.get("quantity");
      this.total = routeParams.get("total");

      // Misalnya, jika kamu ingin mengatur eventInfo berdasarkan data dari URL
      const eventData = JSON.parse(localStorage.getItem("checkoutEvent"));
      if (eventData) {
        this.selectedEvent = eventData;
        // Pastikan untuk menyesuaikan eventInfo jika diperlukan
        this.eventInfo.name = eventData.name;
        this.eventInfo.price = eventData.price;
        this.eventInfo.image = eventData.image;
      }
    },

    initTicketCountFromQuery() {
      const quantity = Number(this.$route.query.quantity);
      if (!isNaN(quantity) && quantity > 0) {
        this.ticketCount = quantity;
      }
    },
    adjustTickets() {
      const count = Math.max(1, Number(this.ticketCount) || 1);
      while (this.tickets.length < count) {
        this.tickets.push({
          nama: "",
          jenisIdentitas: "KTP",
          nomorIdentitas: "",
          jenisKelamin: "",
          usia: "",
          email: "",
          whatsapp: "",
          sameAsOrder: false,
        });
      }
      while (this.tickets.length > count) {
        this.tickets.pop();
      }
    },
    copyOrderToTicket(idx) {
      const ticket = this.tickets[idx];
      if (ticket.sameAsOrder) {
        ticket.nama = this.order.nama;
        ticket.jenisIdentitas = this.order.jenisIdentitas;
        ticket.nomorIdentitas = this.order.nomorIdentitas;
        ticket.jenisKelamin = this.order.jenisKelamin;
        ticket.usia = this.order.usia;
        ticket.email = this.order.email;
        ticket.whatsapp = this.order.whatsapp;
      }
    },
  },
};
</script>

<style scoped>
.checkout-container {
  display: flex;
  gap: 24px;
  padding: 20px;
}
.form-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.summary-section {
  flex: 1;
}
.form-box,
.summary-box {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 20px;
}
.box-title {
  font-size: 16px;
  font-weight: 600;
}
.box-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.col-span-2 {
  grid-column: span 2;
}
.form-group {
  display: flex;
  flex-direction: column;
}
label {
  font-size: 13px;
  margin-bottom: 5px;
}
input,
select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
.radio-row {
  display: flex;
  gap: 20px;
}
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}
.event-image {
  width: 100%;
  border-radius: 5px;
  margin: 12px 0;
}
.event-name {
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 6px;
}
.ticket-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.info-label {
  font-size: 12px;
  color: #555;
}
.price {
  font-weight: bold;
  margin-top: 4px;
}
.qty {
  text-align: right;
  font-size: 14px;
}
.voucher-row {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}
.apply-link {
  color: #b00000;
  cursor: pointer;
  font-size: 14px;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 6px;
}
.total {
  margin-top: 8px;
  font-weight: bold;
}
.continue-button {
  width: 100%;
  padding: 12px;
  background: #b00000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 12px;
}
.continue-button:hover {
  background: #922323;
}
</style>
