<script>
import {store} from '../../store/store';
import axios from 'axios';
import Stars from '../partials/Stars.vue';
import Loading from '../partials/Loading.vue';
import DishCard from '../partials/DishCard.vue';
export default {
  data(){
    return{
      store,
      restaurant: []
    }
  },
  components:{
    Stars,
    Loading,
    DishCard
  },
  methods:{
    getRestaurant(endpoint){
      store.loaded = false;
      axios.get(store.apiUrl + endpoint)
      .then(results => {
        this.restaurant = results.data;
        store.loaded = true;
      })
    } 
  },
  mounted(){
    this.getRestaurant('restaurants/restaurant-detail/' + this.$route.params.slug);
  }
}
</script>

<template>
  <div class="detail-wrapper mvh-100">
    <Loading v-if="!store.loaded"/>
    <div class="restaurant-detail" v-else>
      <div class="header-card rounded-5">
        <div class="header-card-image w-25">
          <img :src="restaurant.image_path" class="object-fit-cover rounded-5 w-100" :alt="restaurant.name" />
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
        <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
          <div class="col" v-for="dish in restaurant.dishes" :key="dish.id">
            <DishCard :dish="dish"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;

.detail-wrapper{
  background-color: rgba(white, 0.6);
}
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
  background-color: rgba($custom_white, 0.8);
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
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.row{
  padding-top: 30px;
  .col{
    height: 470px;
    margin-bottom: 50px;
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
