<template>
  <div class="home-page">
    <!-- Carousel Banner -->
    <div class="carousel-container">
      <div
        class="slides"
        :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }"
      >
        <div class="slide" v-for="(banner, index) in banners" :key="index">
          <img :src="banner" :alt="'Banner ' + (index + 1)" />
        </div>
      </div>
      <div class="dots">
        <span
          v-for="(dot, index) in banners"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>

    <!-- Rekomendasi Event -->

    <div class="event-section">
      <h2 class="section-title">Rekomendasi Event</h2>
      <div class="event-carousel">
        <button @click="prevSlide" class="nav-btn left">&#8592;</button>

        <div class="event-cards-wrapper">
          <div
            class="event-cards"
            :style="{
              transform:
                'translateX(-' + currentEventIndex * (cardWidth + gap) + 'px)',
            }"
          >
            <div
              v-for="(event, index) in events"
              :key="index"
              class="event-card"
            >
              <img :src="event.image" alt="Event" />
              <h3>{{ event.title }}</h3>
              <div class="event-info">
                <p><i class="fa fa-calendar"></i> {{ event.date }}</p>
                <p><i class="fa fa-map-marker"></i> {{ event.location }}</p>
              </div>
              <div class="event-footer">
                <span class="price">Rp {{ event.price }}</span>
                <button class="buy-btn" @click="goToDetail(event)">
                  Beli Tiket
                </button>
              </div>
            </div>
          </div>
        </div>

        <button @click="nextSlide" class="nav-btn right">&#8594;</button>
      </div>
    </div>

    <!-- Laris Manis Section (Tidak Diubah) -->
    <div class="laris-section">
      <div class="laris-text">
        <h2>Laris Manis!</h2>
        <p>
          Kumpulan event-event laris manis di Artatix yang mungkin kamu sukai.
        </p>
      </div>
      <div class="laris-slider-wrapper">
        <div class="laris-slider">
          <div
            v-for="(event, index) in larisEvents"
            :key="index"
            class="laris-card"
          >
            <img :src="event.image" class="laris-img" />
            <div class="laris-info">
              <h3>{{ event.title }}</h3>
              <p class="organizer">{{ event.organizer }}</p>
              <p><i class="fa fa-calendar"></i> {{ event.date }}</p>
              <p><i class="fa fa-map-marker"></i> {{ event.location }}</p>
            </div>
            <div class="event-footer">
              <span class="price">Rp {{ event.price }}</span>
              <router-link
                :to="{ name: 'EventDetail', params: { title: event.title } }"
                class="buy-btn"
                >Beli Tiket</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Event Terdekat -->
    <div class="event-terdekat-section">
      <h2 class="section-title text-merah">Event Terdekat</h2>
      <div class="grid-terdekat">
        <div
          v-for="(event, index) in terdekatEvents"
          :key="index"
          class="card-terdekat"
        >
          <img
            v-if="event.image"
            :src="event.image"
            alt="Poster"
            class="poster-img"
          />
          <div v-else class="poster-placeholder"></div>
          <div class="card-content">
            <h3 class="judul-event">{{ event.title }}</h3>
            <p class="info-text">{{ event.date }}</p>
            <p class="info-text">{{ event.location }}</p>
          </div>
          <div class="card-footer">
            <span class="harga">Rp {{ event.price }}</span>
            <router-link
              :to="{ name: 'EventDetail', params: { title: event.title } }"
              class="buy-btn"
              >Beli Tiket</router-link
            >
          </div>
        </div>
      </div>
      <div class="lihat-lainnya">
        <button class="btn-lihat">Lihat Lainnya</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const goToDetail = (event) => {
  localStorage.setItem("selectedEvent", JSON.stringify(event));
  router.push({ name: "EventDetail", params: { title: event.title } });
};

/* Banner Logic */
const banners = ["/banner1.png", "/banner2.png", "/banner3.png"];
const currentIndex = ref(0);
let bannerInterval = null;

const goToSlide = (index) => {
  currentIndex.value = index;
};
const nextBannerSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % banners.length;
};

onMounted(() => {
  bannerInterval = setInterval(nextBannerSlide, 3000);
});
onUnmounted(() => {
  clearInterval(bannerInterval);
});

/* Rekomendasi Event Carousel Logic */
const events = [
  {
    title: "Event 1",
    date: "10 Mei 2025",
    time: "21.00 WIB",
    location: "Jakarta",
    price: "50.000",
    image: "/eventmusik1.png",
    description: "Baramian Festival 2025 (Baramian Fest 2025) merupakan wadah apresiasi seni musik dan kebudayaan lokal Kalimantan selatan dengan menghadirkan guest star nasional sebagai penampil utama dalam Baramian Fest 2025.",
  },
  {
    title: "Event 2",
    date: "11 Mei 2025",
    location: "Bandung",
    price: "75.000",
    image: "/eventolahraga1.png",
  },
  {
    title: "Event 3",
    date: "12 Mei 2025",
    location: "Surabaya",
    price: "100.000",
    image: "/eventmusik2.png",
  },
  {
    title: "Event 4",
    date: "13 Mei 2025",
    location: "Yogyakarta",
    price: "60.000",
    image: "/eventolahraga2.jpeg",
  },
  {
    title: "Event 5",
    date: "14 Mei 2025",
    location: "Bali",
    price: "120.000",
    image: "/eventmusik1.png",
  },
  {
    title: "Event 6",
    date: "15 Mei 2025",
    location: "Lombok",
    price: "90.000",
    image: "/eventmusik2.png",
  },
  {
    title: "Event 1",
    date: "10 Mei 2025",
    location: "Jakarta",
    price: "50.000",
    image: "/eventmusik1.png",
  },
  {
    title: "Event 2",
    date: "11 Mei 2025",
    location: "Bandung",
    price: "75.000",
    image: "/eventolahraga1.png",
  },
  {
    title: "Event 3",
    date: "12 Mei 2025",
    location: "Surabaya",
    price: "100.000",
    image: "/eventmusik2.png",
  },
  {
    title: "Event 4",
    date: "13 Mei 2025",
    location: "Yogyakarta",
    price: "60.000",
    image: "/eventolahraga2.jpeg",
  },
  {
    title: "Event 5",
    date: "14 Mei 2025",
    location: "Bali",
    price: "120.000",
    image: "/eventmusik1.png",
  },
  {
    title: "Event 6",
    date: "15 Mei 2025",
    location: "Lombok",
    price: "90.000",
    image: "/eventmusik2.png",
  },
];

const currentEventIndex = ref(0);
const cardWidth = 240;
const gap = 20;
const maxIndex = events.length - 4;

const nextSlide = () => {
  if (currentEventIndex.value < maxIndex) {
    currentEventIndex.value++;
  }
};

const prevSlide = () => {
  if (currentEventIndex.value > 0) {
    currentEventIndex.value--;
  }
};

/* Laris Manis Events */
const larisEvents = [
  {
    title: "Event 1",
    date: "10 Mei 2025",
    location: "Jakarta",
    price: "50.000",
    image: "/eventmusik1.png",
  },
  {
    title: "Event 2",
    date: "11 Mei 2025",
    location: "Bandung",
    price: "75.000",
    image: "/eventolahraga1.png",
  },
  {
    title: "Event 3",
    date: "12 Mei 2025",
    location: "Surabaya",
    price: "100.000",
    image: "/eventmusik2.png",
  },
  {
    title: "Event 4",
    date: "13 Mei 2025",
    location: "Yogyakarta",
    price: "60.000",
    image: "/eventolahraga2.jpeg",
  },
  {
    title: "Event 5",
    date: "14 Mei 2025",
    location: "Bali",
    price: "120.000",
    image: "/eventmusik1.png",
  },
  {
    title: "Event 6",
    date: "15 Mei 2025",
    location: "Lombok",
    price: "90.000",
    image: "/eventmusik2.png",
  },
  {
    title: "Event 1",
    date: "10 Mei 2025",
    location: "Jakarta",
    price: "50.000",
    image: "/eventmusik1.png",
  },
  {
    title: "Event 2",
    date: "11 Mei 2025",
    location: "Bandung",
    price: "75.000",
    image: "/eventolahraga1.png",
  },
  {
    title: "Event 3",
    date: "12 Mei 2025",
    location: "Surabaya",
    price: "100.000",
    image: "/eventmusik2.png",
  },
  {
    title: "Event 4",
    date: "13 Mei 2025",
    location: "Yogyakarta",
    price: "60.000",
    image: "/eventolahraga2.jpeg",
  },
  {
    title: "Event 5",
    date: "14 Mei 2025",
    location: "Bali",
    price: "120.000",
    image: "/eventmusik1.png",
  },
  {
    title: "Event 6",
    date: "15 Mei 2025",
    location: "Lombok",
    price: "90.000",
    image: "/eventmusik2.png",
  },
];

const terdekatEvents = [
  {
    title: "Event 1",
    date: "10 Mei 2025",
    location: "Jakarta",
    price: "50.000",
    image: "/eventmusik1.png",
  },
  {
    title: "Event 2",
    date: "11 Mei 2025",
    location: "Bandung",
    price: "75.000",
    image: "/eventolahraga1.png",
  },
  {
    title: "Event 3",
    date: "12 Mei 2025",
    location: "Surabaya",
    price: "100.000",
    image: "/eventmusik2.png",
  },
  {
    title: "Event 4",
    date: "13 Mei 2025",
    location: "Yogyakarta",
    price: "60.000",
    image: "/eventolahraga2.jpeg",
  },
  {
    title: "Event 5",
    date: "14 Mei 2025",
    location: "Bali",
    price: "120.000",
    image: "/eventmusik1.png",
  },
  {
    title: "Event 6",
    date: "15 Mei 2025",
    location: "Lombok",
    price: "90.000",
    image: "/eventmusik2.png",
  },
  {
    title: "Event 1",
    date: "10 Mei 2025",
    location: "Jakarta",
    price: "50.000",
    image: "/eventmusik1.png",
  },
  {
    title: "Event 2",
    date: "11 Mei 2025",
    location: "Bandung",
    price: "75.000",
    image: "/eventolahraga1.png",
  },
  {
    title: "Event 3",
    date: "12 Mei 2025",
    location: "Surabaya",
    price: "100.000",
    image: "/eventmusik2.png",
  },
  {
    title: "Event 4",
    date: "13 Mei 2025",
    location: "Yogyakarta",
    price: "60.000",
    image: "/eventolahraga2.jpeg",
  },
  {
    title: "Event 5",
    date: "14 Mei 2025",
    location: "Bali",
    price: "120.000",
    image: "/eventmusik1.png",
  },
  {
    title: "Event 6",
    date: "15 Mei 2025",
    location: "Lombok",
    price: "90.000",
    image: "/eventmusik2.png",
  },
];
</script>

<style scoped>
.home-page {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}

/* Carousel */
.carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-top: 20px; /* jarak dari navbar */
  margin-bottom: 20px;
  border-radius: 16px;
}
.slides {
  display: flex;
  transition: transform 0.5s ease;
}
.slide {
  min-width: 100%;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

/* Event Section */
.event-section {
  margin: 40px 20px;
}

.section-title {
  margin-left: 230px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}
.event-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 30px 0;
}
.event-cards-wrapper {
  overflow: hidden;
  width: 1000px;
}
.event-cards {
  display: flex;
  transition: transform 0.4s ease-in-out;
}
.event-card {
  background: white;
  border-radius: 16px;
  width: 240px;
  margin-right: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}
.event-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.event-card h3 {
  padding: 12px 16px 4px;
  font-size: 16px;
  font-weight: bold;
}
.event-info {
  padding: 0 16px;
  font-size: 12px;
  color: #666;
}
.event-info p {
  margin: 4px 0;
}
.event-footer {
  padding: 12px 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  color: #a43434;
  font-weight: bold;
}
.buy-btn {
  background: #a43434;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
}

/* Arrow buttons */
.nav-btn {
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
}
.left {
  margin-left: 10px;
}
.right {
  margin-right: 10px;
}

/* Laris Manis Section */
.laris-section {
  background: linear-gradient(to right, #a43434, #3e1414);
  padding: 40px 20px;
  color: white;
  margin: 60px 0;
}
.laris-text {
  max-width: 300px;
  float: left;
  margin-right: 30px;
  margin-top: 80px;
}

.laris-text h2 {
  font-weight: bold;
}

.laris-slider-wrapper {
  overflow-x: hidden;
  white-space: nowrap;
  padding-top: 10px;
  margin-top: 10px;
}
.laris-slider {
  display: flex;
  gap: 20px;
  animation: moveLaris 15s linear infinite;
}
.laris-card {
  background: white;
  border-radius: 16px;
  width: 240px;
  margin-right: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}
.laris-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.laris-info {
  padding: 0 16px;
  font-size: 12px;
  color: #000000;
}
.laris-info h3 {
  padding: 12px 0px 4px;
  font-size: 16px;
  font-weight: bold;
}
.laris-info p {
  margin: 4px 0;
}

/* event terdekat Section */

.event-terdekat-section {
  margin: 40px 20px;
}

.text-merah {
  margin-left: 150px;
  font-size: 24px;
  font-weight: bold;
  color: #a43434;
  margin-bottom: 20px;
}

.grid-terdekat {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 0 230px 20px;
}

.card-terdekat {
  background: white;
  border-radius: 16px;
  width: 270px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

.poster-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.poster-placeholder {
  background: #e5e5e5;
  height: 120px;
}

.card-content {
  padding: 10px 12px;
  flex: 1;
}

.judul-event {
  padding: 12px 0px 4px;
  font-size: 16px;
  font-weight: bold;
}

.info-text {
  font-size: 12px;
  color: #666;
  margin: 2px 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
}

.harga {
  font-weight: bold;
  color: #a43434;
  font-size: 14px;
}

.btn-terdekat {
  background: #a43434;
  color: white;
  padding: 6px 12px;
  font-size: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.lihat-lainnya {
  text-align: center;
  margin-top: 20px;
}

.btn-lihat {
  border: 1px solid #a43434;
  color: #a43434;
  padding: 6px 16px;
  background: transparent;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.event-footer {
  padding: 12px 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: #a43434;
  font-weight: bold;
}

.buy-btn {
  background: #a43434;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
}

@keyframes moveLaris {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
