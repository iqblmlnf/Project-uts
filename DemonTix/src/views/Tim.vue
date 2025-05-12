<template>
  <div class="team-container">
    <h1 class="title">Tim Project DemonTix</h1>

    <!-- Baris 1: 4 anggota -->
    <div class="team-grid grid-4">
      <div
        v-for="(member, index) in members.slice(0, 4)"
        :key="member.name"
        class="member-card"
      >
        <div class="image-wrapper">
          <img
            :src="member.image"
            class="member-photo"
          />
        </div>
        <h3 class="name">{{ member.name }}</h3>
        <p class="nim">{{ member.nim }}</p>
      </div>
    </div>

    <!-- Baris 2: 3 anggota (dengan pemusatan) -->
    <div class="team-grid grid-3">
      <div
        v-for="(member, index) in members.slice(4)"
        :key="member.name"
        class="member-card"
      >
        <div class="image-wrapper">
          <img
            :src="member.image"
            class="member-photo"
          />
        </div>
        <h3 class="name">{{ member.name }}</h3>
        <p class="nim">{{ member.nim }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        { name: "Rofik", nim: "23.11.5475", image: "/eventmusik1.png" },
        { name: "Iqbal", nim: "23.11.5467", image: "" },
        { name: "Rizal", nim: "23.11.5498", image: "" },
        { name: "Andre", nim: "23.11.5756", image: "" },
        { name: "Tegar", nim: "23.11.5458", image: "/eventmusik1.png" },
        { name: "Lingga", nim: "23.11.5447", image: "" },
        { name: "Fata", nim: "23.11.5470", image: "" }
      ]
    };
  }
};
</script>

<style scoped>
.team-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
}

.team-grid {
  display: grid;
  gap: 40px;
  margin-bottom: 40px;
}

.grid-4 {
  grid-template-columns: repeat(4, 150px);
  justify-content: center;
}

.grid-3 {
  grid-template-columns: repeat(3, 150px);
  justify-content: center;
}

.member-card {
  text-align: center;
}

.image-wrapper {
  width: 150px;
  height: 150px;
  margin: 0 auto 10px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-weight: 600;
  margin-top: 10px;
}

.nim {
  color: #333;
}
</style>
