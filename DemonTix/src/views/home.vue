<template>
  <div class="container my-5">
    <!-- Carousel (opsional pakai library seperti Swiper / Bootstrap carousel) -->
    <div class="mb-5">
      <div class="carousel-placeholder text-center">
        <!-- Ganti dengan carousel sebenarnya -->
        <p>[Carousel Event Promo]</p>
      </div>
    </div>

    <!-- Rekomendasi Event -->
    <section class="mb-5">
      <h4 class="fw-bold mb-4">Rekomendasi Event</h4>
      <div class="row g-3">
        <EventCard
          v-for="(event, index) in rekomendasi"
          :key="'reko' + index"
          :event="event"
        />
      </div>
    </section>

    <!-- Event Terlaris -->
    <section
      class="py-5 text-white"
      style="background: linear-gradient(to right, #8b0000, #a52a2a)"
    >
      <div class="container">
        <h4 class="fw-bold mb-3">Terlaris!</h4>
        <p>
          Kumpulan event-event terlaris di Demontix yang mungkin kamu sukai.
        </p>
        <div class="row g-3 mt-3">
          <EventCard
            v-for="(event, index) in terlaris"
            :key="'hot' + index"
            :event="event"
          />
        </div>
      </div>
    </section>

    <!-- Event Terdekat -->
    <section class="my-5">
      <h4 class="fw-bold mb-4">Event Terdekat</h4>
      <div class="row g-3">
        <EventCard
          v-for="(event, index) in terdekat"
          :key="'near' + index"
          :event="event"
        />
      </div>
      <div class="text-center mt-4">
        <button class="btn btn-outline-danger">Lihat Lainnya</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import EventCard from "@/views/EventCard.vue";

const rekomendasi = [
  {
    title: "LAND OF KOPLO",
    date: "26 Mei 2025",
    place: "Stadion Kridosono, Yogyakarta",
    price: 15000,
  },
  {
    title: "Melangkah Bersama VOL 1",
    date: "12 Mei 2025",
    place: "JEC",
    price: 25000,
  },
  {
    title: "Melangkah Bersama VOL 1",
    date: "12 Mei 2025",
    place: "JEC",
    price: 25000,
  },
  {
    title: "Melangkah Bersama VOL 1",
    date: "12 Mei 2025",
    place: "JEC",
    price: 25000,
  },
  {
    title: "Melangkah Bersama VOL 1",
    date: "12 Mei 2025",
    place: "JEC",
    price: 25000,
  },
  // Tambahkan lainnya...
];

const terlaris = [
  {
    title: "Melangkah Bersama VOL 1",
    date: "12 Mei 2025",
    place: "JEC",
    price: 25000,
  },
  {
    title: "Melangkah Bersama VOL 1",
    date: "12 Mei 2025",
    place: "JEC",
    price: 25000,
  },

  {
    title: "Melangkah Bersama VOL 1",
    date: "12 Mei 2025",
    place: "JEC",
    price: 25000,
  },

  {
    title: "Melangkah Bersama VOL 1",
    date: "12 Mei 2025",
    place: "JEC",
    price: 25000,
  },

  {
    title: "Melangkah Bersama VOL 1",
    date: "12 Mei 2025",
    place: "JEC",
    price: 25000,
  },

  // Tambahkan lainnya...
];

const terdekat = [
  { title: "Soundsekrta", date: "8 Mei 2025", place: "JEC", price: 25000 },
  { title: "Anime Fest", date: "9 Mei 2025", place: "JEC", price: 25000 },
  { title: "Soundsekrta", date: "8 Mei 2025", place: "JEC", price: 25000 },
  { title: "Anime Fest", date: "9 Mei 2025", place: "JEC", price: 25000 },
  { title: "Soundsekrta", date: "8 Mei 2025", place: "JEC", price: 25000 },
  { title: "Anime Fest", date: "9 Mei 2025", place: "JEC", price: 25000 },
  { title: "Soundsekrta", date: "8 Mei 2025", place: "JEC", price: 25000 },
  { title: "Anime Fest", date: "9 Mei 2025", place: "JEC", price: 25000 },
  { title: "Soundsekrta", date: "8 Mei 2025", place: "JEC", price: 25000 },
  { title: "Anime Fest", date: "9 Mei 2025", place: "JEC", price: 25000 },
  { title: "Soundsekrta", date: "8 Mei 2025", place: "JEC", price: 25000 },
  { title: "Anime Fest", date: "9 Mei 2025", place: "JEC", price: 25000 },
  { title: "Soundsekrta", date: "8 Mei 2025", place: "JEC", price: 25000 },
  { title: "Anime Fest", date: "9 Mei 2025", place: "JEC", price: 25000 },
  // Tambahkan lainnya...
];
</script>
