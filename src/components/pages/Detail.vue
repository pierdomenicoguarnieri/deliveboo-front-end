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
        <div class="header-card-image">
          <img :src="restaurant.image_path" class="object-fit-cover rounded-5 w-100" :alt="restaurant.name" />
        </div>
        <div class="header-card-info">
          <h1>{{ restaurant.name }}</h1>
          <p><i class="fa-solid fa-location-dot"></i> {{ restaurant.address }}</p>
          <p><i class="fa-solid fa-phone"></i> {{ restaurant.telephone_number }}</p>
          <p><i class="fa-solid fa-location-dot"></i> {{ restaurant.email }}</p>
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


h2{
  color: $tertiary_color;
  margin-left: 10px;
  font-size: 3rem;
  font-weight: 700;
}
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

.header-card-image{
  width: 300px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
}

.header-card-info {
  h1{
    margin-bottom: 20px;
  }
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}

.dishes-section {
  grid-column: 1 / span 12;
}

.row{
  padding-top: 30px;
  .col{
    height: 470px;
    margin-bottom: 50px;
  }
}

@media (max-width: 992px) {

  .header-card-image{
    width: 250px;
  }

  .header-card-info {
    margin-left: 20px;
  }
}

@media (max-width: 768px) {
  h2{
    font-size: calc(2rem + 1vw);
  }

  .header-card-image{
    width: 200px;
  }
}

@media (max-width: 600px) {
  .header-card-image{
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
  .header-card-info {
    margin-top: 20px;
    margin-left: 10px;
  }
}
</style>
