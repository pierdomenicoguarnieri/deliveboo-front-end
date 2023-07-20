
<script>
  import  {store} from '../store/store.js';
  import axios from 'axios';

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Mousewheel, Autoplay],
    };
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi(endpoint){
      axios.get(store.apiUrl + endpoint)
        .then(results => {
          store.restaurants = results.data.restaurants;
          store.types = results.data.types;
        })
    },
    
  },
  mounted(){
    this.getApi('restaurants');
  }
}
</script>

<template>
  <div class="home-container-inner">
    <h1 class="home-title">Benvenuto su DeliveBoo!</h1>

    <div class="home-search-container d-flex justify-content-center">
      <input class="home-search-input w-50" type="search" placeholder="Cerca un ristorante...">
        <button type="submit" class="p-3 text-center search_button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>

    <div class="container">
      <div class="swiper_type_restaurant">
        <swiper
          :slidesPerView="9"
          :spaceBetween="30"
          :loop="true"
          :mousewheel="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper h-100"
        >
          <swiper-slide v-for="type in store.types" :key="type.id">
          <span class="text-dark fw-bold">{{ type.name }}</span>
          </swiper-slide>
        </swiper>

      </div>

      <div class="mb-5">
        <h2 class="home-subtitle">Ristoranti popolari</h2>
        <div class="home-restaurant-grid">

          <div class="home-restaurant-card" v-for="restaurant in store.restaurants" :key="restaurant.id" v-show="restaurant.rating > 4">
            <img class="home-restaurant-image" :src="'http://127.0.0.1:8000/storage' + restaurant.image_path" :alt="restaurant.image_name">
            <h3 class="home-restaurant-name">{{restaurant.name}}</h3>
            <div class="user-rating">
              <span class="rating-label">{{restaurant.rating}}</span>
            </div>
            <button class="btn btn-primary">ORDINA</button>
          </div>
        </div>

      </div>

      <div>
        <h2 class="home-subtitle">Tutti i Ristoranti</h2>
        <div class="home-restaurant-grid">
          <div class="home-restaurant-card" v-for="restaurant in store.restaurants" :key="restaurant.id">
            <img class="home-restaurant-image" :src="'http://127.0.0.1:8000/storage' + restaurant.image_path" :alt="restaurant.image_name">
            <div class="text">
              <h3 class="home-restaurant-name">{{restaurant.name}}</h3>
              <div class="user-rating">
                <span class="rating-label">{{restaurant.rating}}</span>
              </div>
              <div>
                <span>Tipo</span>
              </div>
              <button class="btn btn-primary">ORDINA</button>
            </div>
          </div>
        </div>

      </div>

      

    </div>



  </div>
</template>


<style lang="scss" scoped>
@import '../scss/app.scss';
.home-container-inner {
  padding: 20px;
  background-color: #f0ebe9;
  color: #EDECEC;
  text-align: center;
}

.home-title {
  margin: 20px;
  color: $tertiary_color;
}

.home-search-container {
  margin-bottom: 60px;
  &:hover {
    .home-search-input{
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .search_button{
      color: $tertiary_color;
    }
  }
  .home-search-input {
    width: 100%;
    padding: 10px 15px;
    font-size: 1em;
    border-radius: 20px 0 0 20px;
    border: 1px solid grey;
    background-color: #fff;
    transition: box-shadow 0.2s;

  }
  .search_button{
    border-radius: 0 20px 20px 0;
    border: 1px solid grey;
    background-color: white;
    font-size: bold;
  }
}
.swiper_type_restaurant{
  height: 150px;
  .swiper-slide{
    height: 100px;
    padding: 0 15px;
    border: 2px solid black;
    background-color: $tertiary_color;
  }
  span{
    text-transform: capitalize;
    
  }
}

.home-subtitle {
  margin-bottom: 30px;
  color: $tertiary_color;
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
  cursor: pointer;

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

@media (max-width: 550px) {
  .home-restaurant-grid {
    grid-template-columns: 1fr;
  }
}
</style>
