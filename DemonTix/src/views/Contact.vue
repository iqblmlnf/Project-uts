<template>
  <div class="container py-5">
    <h2 class="fw-bold mb-4">Hubungi Kami</h2>
    <div class="row">
      <!-- Kontak Info -->
      <div class="col-md-4 mb-4">
        <div class="mb-3 d-flex">
<<<<<<< HEAD
          <span class="me-3">🏠</span>
=======
          <i class="bi bi-house-door-fill me-3"></i>
>>>>>>> cc8566dd2e227f87d0be592f945ef2edbc59bf55
          <div>
            <strong>DemonTix Office</strong><br />
            Dsn. Tegal Krapyak RT001/RW033<br />
            Desa/Kelurahan Sariharjo,<br />
            Kec. Ngaglik, Kab. Sleman,<br />
            Provinsi Daerah Istimewa Yogyakarta, 55581
          </div>
        </div>
        <div class="mb-3 d-flex">
<<<<<<< HEAD
          <span class="me-3">📞</span>
=======
          <i class="bi bi-telephone-fill me-3"></i>
>>>>>>> cc8566dd2e227f87d0be592f945ef2edbc59bf55
          <div>
            +62 821-3767-6220<br />
            Mon to Fri 9am - 9pm
          </div>
        </div>
        <div class="d-flex">
<<<<<<< HEAD
          <span class="me-3">✉️</span>
=======
          <i class="bi bi-envelope-fill me-3"></i>
>>>>>>> cc8566dd2e227f87d0be592f945ef2edbc59bf55
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
<<<<<<< HEAD
          <button type="submit" class="btn btn-danger fw-bold">Kirim Pesan</button>
=======
          <button type="submit" class="btn fw-bold">Kirim Pesan</button>
>>>>>>> cc8566dd2e227f87d0be592f945ef2edbc59bf55
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
<<<<<<< HEAD
=======

.btn {
  background-color: #A43434;
  color: white;
}
>>>>>>> cc8566dd2e227f87d0be592f945ef2edbc59bf55
</style>
