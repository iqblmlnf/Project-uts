<template>
  <div class="container py-5">
    <h2 class="fw-bold mb-4">Hubungi Kami</h2>
    <div class="row">
      <!-- Kontak Info -->
      <div class="col-md-4 mb-4">
        <div class="mb-3 d-flex">
          <i class="bi bi-house-door-fill me-3"></i>
          <div>
            <a
              href="https://www.google.com/maps/place/KONTRAKAN+DEMON/@-7.7405308,110.4272647,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5bf4f0b957eb:0xd971c1bcb24fdce4!8m2!3d-7.7405308!4d110.4298396!16s%2Fg%2F11s9_5_kgm?entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D"
              target="maps"
              ><h6 class="link">DemonTix Office</h6></a
            >
            Dsn. Tegal Krapyak RT001/RW033<br />
            Desa/Kelurahan Sariharjo,<br />
            Kec. Ngaglik, Kab. Sleman,<br />
            Provinsi Daerah Istimewa Yogyakarta, 55581
          </div>
        </div>
        <div class="d-flex py-2">
          <i class="bi bi-telephone-fill me-3"></i>
          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=6281228356763&text&type=phone_number&app_absent=0"
              target="whatsapp"
              ><h6 class="link">+62 812 2835 6763</h6></a>
            Mon to Fri 9am - 9pm
          </div>
        </div>
        <div class="d-flex py-2">
          <i class="bi bi-envelope-fill me-3"></i>
          <div>
            <a href="mailto:anggororizal09@gmail.com">
              <h6 class="link">anggororizal.co.id</h6></a
            >
            Kirim pesan kami kapan saja!
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="col-md-8">
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col">
              <input
                type="text"
                v-model="form.nama"
                placeholder="Nama Anda"
                class="form-control"
                required
              />
            </div>
            <div class="col">
              <input
                type="email"
                v-model="form.email"
                placeholder="Email Anda"
                class="form-control"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <input
              type="text"
              v-model="form.subjek"
              placeholder="Subjek"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <textarea
              v-model="form.pesan"
              placeholder="Pesan"
              class="form-control"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn fw-bold">Kirim Pesan</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  nama: "",
  email: "",
  subjek: "",
  pesan: "",
});

const submitForm = () => {
  alert(`Pesan dari ${form.nama} berhasil dikirim!`);
  // Reset form jika diperlukan
  form.nama = "";
  form.email = "";
  form.subjek = "";
  form.pesan = "";
};
</script>

<style scoped>
.container {
  max-width: 1100px;
}
.link {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.btn {
  background-color: #a43434;
  color: white;
}
</style>
