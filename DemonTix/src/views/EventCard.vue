<template>
  <div class="col-6 col-md-4 col-lg-3">
    <div class="card h-100">
      <img v-if="event.img" :src="event.img" class="card-img-top" alt="Event Image" />
      <div class="card-body">
        <h6 class="card-title">{{ event.title }}</h6>
        <p class="card-text mb-1"><i class="bi bi-calendar-event"></i> {{ event.date }}</p>
        <p class="card-text mb-2"><i class="bi bi-geo-alt"></i> {{ event.place }}</p>
        <p class="text-danger fw-bold">Rp {{ event.price.toLocaleString() }}</p>
        <button class="btn btn-danger btn-sm w-100"@click="activeTab = 'tiket'">Beli Tiket</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['event'])
</script>
