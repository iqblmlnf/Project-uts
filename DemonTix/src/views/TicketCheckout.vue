<template>
  <div class="checkout-container">
    <div class="form-section">
      <!-- Data Pesanan -->
      <div class="form-box">
        <h2 class="section-title">Data Pesanan</h2>
        <div class="form-grid">
          <div class="form-group">
            <label>Nama Lengkap</label>
            <input type="text" v-model="order.nama" placeholder="Marcus Holloway" />
          </div>

          <div class="form-group">
            <label>Identitas</label>
            <div class="identity-row">
              <select v-model="order.jenisIdentitas">
                <option value="KTP">KTP</option>
                <option value="SIM">SIM</option>
                <option value="Paspor">Paspor</option>
              </select>
              <input type="text" v-model="order.nomorIdentitas" placeholder="Nomor Identitas" />
            </div>
          </div>

          <div class="form-group gender">
            <label>&nbsp;</label>
            <label><input type="radio" value="Laki-laki" v-model="order.gender" /> Laki-laki</label>
            <label><input type="radio" value="Perempuan" v-model="order.gender" /> Perempuan</label>
          </div>

          <div class="form-group">
            <label>Usia</label>
            <input type="number" v-model="order.usia" />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="order.email" />
          </div>

          <div class="form-group">
            <label>No WhatsApp</label>
            <input type="text" v-model="order.whatsapp" />
          </div>
        </div>
      </div>

      <!-- Data Pemilik Tiket -->
      <div class="form-box">
        <div class="form-title">
          <h2 class="section-title">Data Pemilik Tiket</h2>
          <button class="copy-button" @click="copyOrderData">Samakan dengan data pesanan</button>
        </div>
        <p class="ticket-label">Pemilik Tiket 1</p>
        <div class="form-grid">
          <div class="form-group">
            <label>Nama Lengkap</label>
            <input type="text" v-model="ticket.nama" placeholder="Marcus Holloway" />
          </div>

          <div class="form-group">
            <label>Identitas</label>
            <div class="identity-row">
              <select v-model="ticket.jenisIdentitas">
                <option value="KTP">KTP</option>
                <option value="SIM">SIM</option>
                <option value="Paspor">Paspor</option>
              </select>
              <input type="text" v-model="ticket.nomorIdentitas" placeholder="Nomor Identitas" />
            </div>
          </div>

          <div class="form-group gender">
            <label>&nbsp;</label>
            <label><input type="radio" value="Laki-laki" v-model="ticket.gender" /> Laki-laki</label>
            <label><input type="radio" value="Perempuan" v-model="ticket.gender" /> Perempuan</label>
          </div>

          <div class="form-group">
            <label>Usia</label>
            <input type="number" v-model="ticket.usia" />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="ticket.email" />
          </div>

          <div class="form-group">
            <label>No WhatsApp</label>
            <input type="text" v-model="ticket.whatsapp" />
          </div>
        </div>
      </div>
    </div>

    <!-- Rincian Pesanan -->
    <div class="summary-section">
      <div class="summary-box">
        <h2 class="section-title">Rincian Pesanan</h2>
        <img src="/eventmusik1.png" alt="Event Image" class="event-image" />
        <p class="event-title">HIPHOP SORINGIN FESTIVAL 2025</p>
        <p>SORINGIN PASS <strong>Rp 65.000</strong> &times;2</p>
        <div class="summary-row"><span>Subtotal</span><span>Rp 130.000</span></div>
        <div class="summary-row"><span class="disabled">Biaya Layanan</span><span class="disabled">Rp 11.000</span></div>
        <div class="summary-total"><span>Total</span><span>Rp 141.000</span></div>
        <button class="continue-button">Lanjutkan</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketCheckout',
  data() {
    return {
      order: {
        nama: 'Marcus Holloway',
        jenisIdentitas: 'KTP',
        nomorIdentitas: '',
        gender: '',
        usia: '',
        email: '',
        whatsapp: '',
      },
      ticket: {
        nama: 'Marcus Holloway',
        jenisIdentitas: 'KTP',
        nomorIdentitas: '',
        gender: '',
        usia: '',
        email: '',
        whatsapp: '',
      },
    };
  },
  methods: {
    copyOrderData() {
      this.ticket = { ...this.order };
    },
  },
};
</script>

<style scoped>
.checkout-container {
  display: flex;
  padding: 20px;
  background: #f2f2f2;
  gap: 20px;
  font-family: 'Arial', sans-serif;
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

.form-box, .summary-box {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.identity-row {
  display: flex;
  gap: 10px;
}

input, select {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}

label {
  font-weight: 500;
  margin-bottom: 5px;
}

.gender {
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.ticket-label {
  color: red;
  font-weight: bold;
  margin: 10px 0;
}

.form-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copy-button {
  padding: 6px 12px;
  border: 1px solid #000;
  background: #fff;
  cursor: pointer;
  font-weight: bold;
}

.summary-box img {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 6px;
}

.event-title {
  font-weight: bold;
  margin: 10px 0;
  font-size: 16px;
}

.summary-row, .summary-total {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  font-size: 14px;
}

.summary-total {
  font-weight: bold;
  border-top: 1px solid #ccc;
  padding-top: 8px;
}

.disabled {
  color: #aaa;
}

.continue-button {
  margin-top: 16px;
  width: 100%;
  background-color: #922323;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.continue-button:hover {
  background-color: #b00000;
}
</style>
