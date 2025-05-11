<template>
  <div class="home-page">
    <!-- Carousel -->
    <div class="carousel-container">
      <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
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

        <div class="event-cards">
          <div
            v-for="(event, index) in visibleEvents"
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
              <button class="buy-btn">Beli Tiket</button>
            </div>
          </div>
        </div>

        <button @click="nextSlideEvent" class="nav-btn right">&#8594;</button>
      </div>
    </div>

    <!-- Laris Manis Section -->
    <div class="laris-section">
      <div class="laris-text">
        <h2>Laris Manis!</h2>
        <p>Kumpulan event-event laris manis di Artatix yang mungkin kamu sukai.</p>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

/* Banner Logic */
const banners = [
  '/banner1.png',
  '/banner2.png',
  '/banner3.png',
  '/banner4.png'
]

const currentIndex = ref(0)
let intervalId = null

const goToSlide = (index) => {
  currentIndex.value = index
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % banners.length
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 3000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

/* Event Carousel Logic */
const currentEventIndex = ref(0)
const events = [
  {
    title: 'Ruang Bermusik 2025',
    date: '19 - 20 Jul 2025',
    location: 'LANUD WIRIADINATA',
    price: '80.000',
    image: '/eventmusik1.png',
  },
  {
    title: 'HIPHOP SORINGIN FESTIVAL',
    date: '10 Mei 2025',
    location: 'JNM BLOC',
    price: '35.000',
    image: '/eventolahraga1.png',
  },
  {
    title: 'BALI BARBER EXPO',
    date: '05 - 06 Jul 2025',
    location: 'Dharma Negara Alaya',
    price: '500.000',
    image: '/eventmusik2.png',
  },
  {
    title: 'BARAMIAN FEST 2025',
    date: '28 - 29 Jun 2025',
    location: 'Gedung Sultan Suriansyah',
    price: '150.000',
    image: '/eventolahraga2.jpeg',
  },
]

const visibleEvents = computed(() => {
  return events.slice(currentEventIndex.value, currentEventIndex.value + 4)
})

const nextSlideEvent = () => {
  if (currentEventIndex.value + 4 < events.length) {
    currentEventIndex.value += 1
  }
}

const prevSlide = () => {
  if (currentEventIndex.value > 0) {
    currentEventIndex.value -= 1
  }
}

/* Laris Manis Section */
const larisEvents = [
  {
    title: "LAND OF KOPLO",
    organizer: "TWENTY THREE ENTERTAINMENT",
    date: "24 May 2025",
    location: "Stadion Kridosono, Yogyakarta",
    image: "/eventlaris1.png",
  },
  {
    title: "Pesta Mangan",
    organizer: "Pesta Mangan",
    date: "30 - 01 Jun 2025",
    location: "Alun-alun Barat Kota Serang Banten",
    image: "/eventlaris2.png",
  },
  {
    title: "Story in Garut 2025",
    organizer: "One Night Project",
    date: "17 May 2025",
    location: "Lapangan Korem Garut",
    image: "/eventlaris3.png",
  },
]
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 30px;
  margin-bottom: 30px;
  overflow: hidden;
  padding: 0 20px;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.slide {
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20px;
}

/* Event section */
.event-section {
  margin: 40px 20px;
}
.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: 230px;
  font-weight: bold;
}

.event-carousel {
  display: flex;
  align-items: center;
  justify-content: center; 
  position: relative;
  margin: 0 auto;
}

.event-cards {
  display: flex;
  justify-content: center;
  gap: 19px;
  flex: 1;
  max-width: 1000px;
}

.event-card {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #eee;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  min-width: 240px;
  max-width: 240px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
}

.event-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
}

.event-card h3 {
  font-size: 16px;
  margin: 10px 16px 4px;
  font-weight: bold;
}

.event-info {
  padding: 0 16px;
}

.event-info p {
  font-size: 12px;
  margin: 4px 0;
  color: #666;
}

.event-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 16px 16px;
  margin-top: auto;
}

.price {
  color: #A43434;
  font-weight: bold;
}

.buy-btn {
  background-color: #A43434;
  color: #fff;
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
}

.nav-btn {
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #ddd;
  width: 36px;
  height: 36px;
  cursor: pointer;
}
.left {
  margin-right: 10px;
}
.right {
  margin-left: 10px;
}

/* Laris Manis */
.laris-section {
  background: linear-gradient(to right, #A43434, #3e1414);
  padding: 40px 20px;
  color: white;
  margin: 60px auto;
  max-width: 100%;
  overflow: hidden;
}

.laris-text {
  max-width: 300px;
  float: left;
  margin-right: 30px;
  margin-top: 80px;
}

.laris-text h2 {
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: bold;
}

.laris-text p {
  font-size: 14px;
  color: #f0f0f0;
}

.laris-slider-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  padding-top: 10px;
  margin-top: 10px;
}

.laris-slider {
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease;
}

.laris-card {
  background: white;
  color: black;
  border-radius: 16px;
  width: 250px;
  min-width: 250px;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
}

.laris-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.laris-info {
  padding: 12px;
}

.laris-info h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
}

.organizer {
  font-size: 13px;
  font-weight: 500;
  color: #555;
  margin-bottom: 6px;
}

.laris-info p {
  font-size: 12px;
  color: #555;
  margin: 2px 0;
}
</style>
