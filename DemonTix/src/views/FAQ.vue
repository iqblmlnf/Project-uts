<script setup>
import { ref } from "vue";

// List tab (kalau akan digunakan untuk fitur tab nanti)
const tabs = [
  { id: "definisi", name: "Definisi & Interpretasi" },
  { id: "ketentuan", name: "Ketentuan Umum" },
  { id: "cookies", name: "Cookies & Hak Cipta" },
  { id: "pengembalian", name: "Kebijakan Pengembalian Uang" },
];

// FAQ Data
const faqs = [
  {
    title: "Cara Pembelian Tiket di Artatix",
    list: [
      "Pembeli memilih tiket event yang diinginkan, silahkan mengunjungi website artatix.co.id",
      "Pilih event atau klik searching box dan tulis event yang ingin dibeli",
      "Kemudian pilih tiket yang ingin dibeli",
      "Selanjutnya mengisi data diri dan pastikan benar",
      "Klik “Lanjutkan” dan pilih metode pembayaran yang diinginkan",
      "Silahkan melakukan pembayaran sebelum batas waktu pembayaran selesai",
      "Cek secara berkala di email inbox ataupun whatsapp untuk melihat e-tiket kamu",
    ],
  },
  {
    title: 'Informasi <i>"Email Success"</i>',
    content:
      "Email konfirmasi sukses akan dikirim setelah pembayaran berhasil.",
  },
  {
    title: 'Informasi <i>"Email Cancel"</i>',
    content:
      "Email cancel dikirim jika terjadi pembatalan transaksi atau waktu pembayaran habis.",
  },
  {
    title: "Informasi pembatalan tiket yang sudah dibayarkan/dibeli",
    content: "Silakan hubungi customer service untuk informasi pembatalan.",
  },
];

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="container d-flex justify-content-start py-5">
    <div
      class="con-card col-md-7 vh-100 d-flex flex-column justify-content-start"
    >
      <h5 class="fw-bold mb-4">Frequently Asked Question</h5>

      <div v-for="(faq, index) in faqs" :key="index">
        <button class="accordion-button" @click="toggle(index)">
          <div class="con-faq d-flex">
            <div class="col-md-5 col-title">
              <h6 v-html="faq.title" class="accordion-item"></h6>
            </div>
            <div class="col-md-5 mt-1">
              <span class="icon">
                <i
                  class="fa-solid fa-chevron-down"
                  :class="{ rotate: activeIndex === index }"
                ></i>
              </span>
            </div>
          </div>
        </button>

        <div class="accordion-content" v-show="activeIndex === index">
          <ul v-if="faq.list">
            <li v-for="(item, i) in faq.list" :key="i">{{ item }}</li>
          </ul>
          <p v-else>{{ faq.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.con-card {
  background-color: #fff2f2;
  border-radius: 20px;
  padding: 30px;
}

h5 {
  font-family: 'Poppins';
}

.con-faq {
  max-width: 100%;
}

.col-title {
  width: 680px;
}

.accordion-item {
  border-top: 1px solid #ccc;
  padding-top: 10px;
  margin-right: -1rem;
}

.accordion-button {
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-content {
  padding: 10px 0 20px 15px;
  color: #333;
}

.rotate {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.icon {
  transition: transform 0.3s ease;
}

.icon:hover {
  color: #A43434;
}
</style>
