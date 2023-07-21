<script>
import {store} from '../../store/store';
import axios from 'axios';
import Stars from '../partials/Stars.vue';
export default {
  data(){
    return{
      store,
      restaurant: []
    }
  },
  components:{
    Stars
  },
  methods:{
    getRestaurant(endpoint){
      axios.get(store.apiUrl + endpoint)
      .then(results => {
        this.restaurant = results.data;
      })
    } 
  },
  mounted(){
    this.getRestaurant('restaurants/restaurant-detail/' + this.$route.params.slug);
  }
}
</script>

<template>
  <div class="restaurant-detail">
    <div class="header-card">
      <div class="header-card-image w-25">
        <img :src="restaurant.image_path" class="object-fit-cover w-100" :alt="restaurant.name" />
      </div>
      <div class="header-card-info">
        <h1>{{ restaurant.name }}</h1>
        <p>Indirizzo: {{ restaurant.address }}</p>
        <p>Telefono: {{ restaurant["telephone-number"] }}</p>
        <p>Email: {{ restaurant.email }}</p>
        <p>Voto: {{ restaurant.rating }}</p>
        <div class="user-rating">
          <!-- <Stars :rating="Math.floor(restaurant.rating)" :originalRating="restaurant.rating"/> -->
        </div>
      </div>
    </div>
    <section class="dishes-section">
      <h2>I nostri piatti</h2>
      <div class="dishes-grid">
        <div class="dish-card" v-for="dish in restaurant.dishes" :key="dish.id">
          <div class="dish-card-image w-50">
            <img :src="dish.image_path" class="w-100 object-fit-cover" :alt="dish.name" />
          </div>
          <div class="dish-card-info">
            <h3>{{ dish.name }}</h3>
            <p v-html="dish.description"></p>
            <p>Ingredienti: {{ dish.ingredients }}</p>
            <p>Prezzo: {{ dish.price }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.restaurant-detail {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
}

.header-card {
  grid-column: 1 / span 12;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.header-card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.header-card-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dishes-section {
  grid-column: 1 / span 12;
}

.dishes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.dish-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.dish-card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

@media (max-width: 992px) {
  .dishes-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .header-card-image img {
    height: 150px;
  }
}

@media (max-width: 768px) {
  .dishes-grid {
    grid-template-columns: 1fr;
  }

  .header-card-image img {
    height: 100px;
  }
}
</style>
