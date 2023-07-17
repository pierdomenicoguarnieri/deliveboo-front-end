<template>
  <div class="home-container-inner">
    <h1 class="home-title">Benvenuto su Food Delivery!</h1>
    <div class="home-search-container">
      <input class="home-search-input" type="text" placeholder="Cerca il tuo ristorante...">
    </div>
    <div class="home-category-scroll">
      <button @click="scroll(-1)" class="scroll-button">←</button>
      <div class="home-category-container">
        <div class="home-category-card" v-for="category in categories" :key="category.name" @mouseover="onHover"
          @mouseout="onMouseOut">
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
        <p class="closing-time">Chiude alle 23:00 - Affrettati!</p>
        <div class="user-rating">
          <span class="rating-label">Valutazione:</span>
          <span class="rating-star">&#9733;</span>
          <span class="rating-star">&#9733;</span>
          <span class="rating-star">&#9733;</span>
          <span class="rating-star">&#9733;</span>
          <span class="rating-star">&#9733;</span>
        </div>
        <p class="home-restaurant-details">Scopri i nostri piatti di ispirazione italiana, cucinati con amore e
          ingredienti freschi di giornata.</p>
      </div>
    </div>
  </div>
</template>

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
    },
    onHover(event) {
      event.target.style.transform = "scale(1.1)";
    },
    onMouseOut(event) {
      event.target.style.transform = "";
    }
  }
}
</script>

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
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
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
  transition: transform 0.2s;

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

  &:hover {
    transform: scale(1.1);
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
  transition: transform 0.2s;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    margin-top: 10px;
  }

  .closing-time {
    font-size: 0.9em;
    color: #E37285;
  }

  .user-rating {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFD700;

    .rating-label {
      margin-right: 5px;
    }

    .rating-star {
      margin-right: 2px;
    }
  }

  .home-restaurant-details {
    margin-top: 10px;
    font-size: 0.8em;
    text-align: justify;
  }

  &:hover {
    transform: scale(1.03);
  }
}

@media (max-width: 768px) {
  .home-restaurant-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .home-restaurant-grid {
    grid-template-columns: 1fr;
  }
}
</style>
