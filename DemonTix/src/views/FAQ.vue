<script setup>
import { ref } from 'vue'

const tabs = [
  { id: 'definisi', name: 'Definisi & Interpretasi' },
  { id: 'ketentuan', name: 'Ketentuan Umum' },
  { id: 'cookies', name: 'Cookies & Hak Cipta' },
  { id: 'pengembalian', name: 'Kebijakan Pengembalian Uang' },
]

const activeTab = ref('definisi')
</script>

<template>
  <div class="flex flex-col items-start py-10 px-4 md:px-32 font-sans bg-white text-black">
    <h1 class="text-3xl font-extrabold mb-10">IQBAL KONTOL BANGET</h1>
    <h1 class="text-3xl font-extrabold mb-10">KANJUT HIDENG</h1>
    <h1 class="text-3xl font-extrabold mb-10">BAU MATAHARI</h1>
  </div>
</template>

<style scoped>
h1 {
  font-size: 6rem;
  font-weight: bold;
  text-align: center;
}
@media (max-width: 768px) {
  aside {
    flex-direction: row;
    overflow-x: auto;
  }
}
</style>
