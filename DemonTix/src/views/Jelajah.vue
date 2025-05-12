    <template>
    <div class="jelajah-container">
        <!-- Header -->
        <div class="header">
        <h1>Jelajah</h1>

        <!-- Filter dan Search -->
        <div class="filter-bar">
            <select v-model="selectedCategory">
            <option>Kategori</option>
            <option>Konser</option>
            <option>Lomba</option>
            <option>Festival</option>
            </select>

            <select v-model="selectedTime">
            <option>Waktu</option>
            <option>Terbaru</option>
            <option>Terdekat</option>
            </select>

            <select v-model="selectedPrice">
            <option>Harga</option>
            <option>Termurah</option>
            <option>Termahal</option>
            </select>

            <input type="text" v-model="searchQuery" placeholder="Search" />
        </div>
    </div>

        <!-- Grid Event -->
        <div class="event-grid">
        <div v-for="(event, index) in filteredEvents" :key="index" class="event-card">
            <img :src="event.image" alt="event image" class="event-image" />
            <div class="event-body">
            <h3>{{ event.title }}</h3>
            <p class="event-date"><i class="fa fa-calendar"></i> {{ event.date }}</p>
            <p class="event-location"><i class="fa fa-map-marker"></i> {{ event.location }}</p>
            <div class="event-bottom">
                <span class="price">Rp {{ event.price }}</span>
                <router-link
                :to="{ name: 'EventDetail', params: { title: event.title } }"
                class="buy-btn">Beli Tiket</router-link>
            </div>
            </div>
        </div>
        </div>
    </div>
    </template>

    <script setup>
    import { ref, computed } from 'vue'

    const selectedCategory = ref('')
    const selectedTime = ref('')
    const selectedPrice = ref('')
    const searchQuery = ref('')

    const events = ref([
    { title: 'KENDURI MUSIK FESTIVAL', date: '11 Mei 2025', location: 'Candi Prambanan', price: '25.000', image: '/eventmusik1.png' },
    { title: 'GROOVY MELODY 2025', date: '24 Mei 2025', location: 'Puncak Sosok', price: '35.000', image: '/eventmusik2.png' },
    { title: 'LAND OF KOPLO', date: '24 Mei 2025', location: 'Stadion Kridosono', price: '135.000', image: '/eventolahraga1.png' },
    { title: 'LAW SOEDIRMAN FUN RUN 2025', date: '15 Mei 2025', location: 'Fakultas Hukum UNSOED', price: '149.000', image: '/eventolahraga2.jpeg' },
    { title: 'DIRAYA FESTIVAL VOL.1', date: '14 Februari 2025', location: 'Stadion Kridosono', price: '165.000', image: '/eventmusik1.png' },
    { title: 'GALA MYSTICA 2025', date: '7 Juni 2025', location: 'Yogyakarta, Indonesia', price: '165.000', image: '/eventmusik2.png' },
    { title: 'COLOR AND BUBBLE RUN JOGJA', date: '29 Juni 2025', location: 'Trip Tap Toe', price: '225.000', image: '/eventolahraga1.png' },
    { title: 'REWARD', date: '5 Juli 2025', location: 'Lapangan Sawo Sido Mulyo, Sleman', price: '225.000', image: '/eventolahraga2.jpeg' },
    { title: 'FARMASI CUP 2025', date: '15 Februari 2025', location: 'Adispark, Yogyakarta', price: '225.000', image: '/eventmusik2.png' },
    ])

    const filteredEvents = computed(() => {
    return events.value.filter(event =>
        event.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    })
    </script>

    <style scoped>
    .jelajah-container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    }

    .header h1 {
    font-size: 32px;
    margin-bottom: 20px;
    }

    .filter-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    }

    .filter-bar select,
    .filter-bar input {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    min-width: 120px;
    }

    .event-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    }

    .event-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    }

    .event-image {
    width: 100%;
    height: 140px;
    object-fit: cover;
    }

    .event-body {
    padding: 15px;
    }

    .event-body h3 {
    font-size: 18px;
    margin-bottom: 10px;
    }

    .event-date,
    .event-location {
    font-size: 14px;
    color: #555;
    margin: 3px 0;
    }

    .event-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    }

    .price {
    color: #b91c1c;
    font-weight: bold;
    }

    .buy-btn {
    background-color: #b91c1c;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
    }

    .buy-btn:hover {
    background-color: #991b1b;
    }
    </style>
