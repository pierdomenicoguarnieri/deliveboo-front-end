<script>
export default {
  name: 'Home',
  data() {
    return {
      categories: [
        { name: 'italiano' },
        { name: 'sushi' },
        { name: 'pizza' },
        { name: 'pesce' },
        { name: 'cinese' },
        { name: 'indiano' },
        { name: 'messicano' },
        { name: 'vegetariano' },
        { name: 'vegano' },
        { name: 'fusion' },
        { name: 'mediterraneo' },
        { name: 'greco' },
        { name: 'francese' }
      ],
    };
  },
  methods: {
    scroll(direction) {
    }
  }
}
</script>

<template>
  <div class="home-container-inner">
    <h1 class="home-title">Benvenuto su Deliveboo!</h1>
    <div class="home-search-container">
      <input class="home-search-input" type="text" placeholder="Cerca il tuo ristorante...">
    </div>
    <div class="home-category-scroll">
      <button @click="scroll(-1)" class="scroll-button">←</button>
      <div class="home-category-container">
        <div class="home-category-card" v-for="category in categories" :key="category.name">
          <img :src="'https://source.unsplash.com/random?' + category.name" alt="category.name">
          <h3>{{ category.name }}</h3>
        </div>
      </div>
      <button @click="scroll(1)" class="scroll-button">→</button>
    </div>
    <h2 class="home-subtitle">Ristoranti popolari nella tua zona</h2>
    <div class="home-restaurant-grid">
      <div class="home-restaurant-card" v-for="n in 6" :key="n">
        <img class="home-restaurant-image" :src="'https://source.unsplash.com/random?restaurant,' + n" alt="Ristorante">
        <h3 class="home-restaurant-name">Nome del ristorante</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-container-inner {
  padding: 20px;
  background-color: #f0ebe9;
  color: #EDECEC;
  text-align: center;
}

.home-title {
  margin-bottom: 20px;
  font-size: 2em;
  color: #E37285;
}

.home-search-container {
  margin-bottom: 40px;
}

.home-search-input {
  width: 100%;
  padding: 15px;
  font-size: 1em;
  border-radius: 5px;
  border: none;
  background-color: #fff;
}

.home-category-scroll {
  position: relative;
  display: flex;
  overflow: hidden;
  margin-bottom: 30px;
}

.home-category-container {
  display: flex;
  overflow-x: auto;
}

.home-category-card {
  flex: 0 0 auto;
  background-color: #EDECEC;
  color: #65605F;
  border-radius: 5px;
  padding: 10px;
  overflow: hidden;
  margin-right: 10px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }

  h3 {
    margin-top: 5px;
    font-size: 14px;
    text-align: center;
  }
}

.scroll-button {
  position: absolute;
  background: rgba(209, 209, 209, 0.953);
  border: none;
  font-size: 2em;
  padding: 10px;
  color: #65605F;
  cursor: pointer;

  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
  }

  &:hover {
    color: #E37285;
  }
}

.home-subtitle {
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #E37285;
}

.home-restaurant-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.home-restaurant-card {
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    margin-top: 10px;
  }
}

@media (max-width: 768px) {
  .home-restaurant-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .home-restaurant-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
