<template>
  <div class="container py-5">
    <h2 class="fw-bold mb-4">Hubungi Kami</h2>
    <div class="row">
      <!-- Kontak Info -->
      <div class="col-md-4 mb-4">
        <div class="mb-3 d-flex">
          <span class="me-3">🏠</span>
          <div>
            <strong>DemonTix Office</strong><br />
            Dsn. Tegal Krapyak RT001/RW033<br />
            Desa/Kelurahan Sariharjo,<br />
            Kec. Ngaglik, Kab. Sleman,<br />
            Provinsi Daerah Istimewa Yogyakarta, 55581
          </div>
        </div>
        <div class="mb-3 d-flex">
          <span class="me-3">📞</span>
          <div>
            +62 821-3767-6220<br />
            Mon to Fri 9am - 9pm
          </div>
        </div>
        <div class="d-flex">
          <span class="me-3">✉️</span>
          <div>
            <strong>info@artatix.co.id</strong><br />
            Kirim pesan kami kapan saja!
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="col-md-8">
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col">
              <input type="text" v-model="form.nama" placeholder="Nama Anda" class="form-control" required />
            </div>
            <div class="col">
              <input type="email" v-model="form.email" placeholder="Email Anda" class="form-control" required />
            </div>
          </div>
          <div class="mb-3">
            <input type="text" v-model="form.subjek" placeholder="Subjek" class="form-control" required />
          </div>
          <div class="mb-3">
            <textarea v-model="form.pesan" placeholder="Pesan" class="form-control" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-danger fw-bold">Kirim Pesan</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nama: '',
  email: '',
  subjek: '',
  pesan: ''
})

const submitForm = () => {
  alert(`Pesan dari ${form.nama} berhasil dikirim!`)
  // Reset form jika diperlukan
  form.nama = ''
  form.email = ''
  form.subjek = ''
  form.pesan = ''
}
</script>

<style scoped>
.container {
  max-width: 1100px;
}
</style>
