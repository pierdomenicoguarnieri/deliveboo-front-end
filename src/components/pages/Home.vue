
<script>
  import  {store} from '../../store/store';
  import axios from 'axios';

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
  import Loading from '../partials/Loading.vue';
  import Card from '../partials/Card.vue';

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    Loading,
    Card
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
      store.loaded = false;
      axios.get(store.apiUrl + endpoint)
        .then(results => {
          store.restaurants = results.data.restaurants;
          store.restaurant_backup = store.restaurants;
          store.types = results.data.types;
          store.loaded = true;
        })
    },

    getTypeId(id){
      let counter = 0;
      store.restaurants = [];
      store.restaurantfilter = [];
      
      if(!store.types_id.includes(id)){
        store.types_id.push(id);
      }else{
        store.types_id = store.types_id.filter(type => type != id);
      }

      if(store.types_id.length > 0){
        store.restaurant_backup.forEach(restaurant => {
          counter = 0;
          restaurant.types.forEach(type =>{
            if(store.types_id.includes(type.id) && !store.restaurantfilter.includes(restaurant)){
              counter++;
              counter == store.types_id.length ? store.restaurantfilter.push(restaurant) : null 
            }
          })
        })
        store.restaurants = store.restaurantfilter;
      }else{
        store.restaurants = store.restaurant_backup;
      }
    },

    checkActive(id){
      const check = document.getElementById(id);
      if (!check.classList.contains('active')){
        check.classList.add('active')
      }else{
        check.classList.remove('active')
      }
    },
    resetActive(){
      const typologies_buttons = document.querySelectorAll('.typology');

      typologies_buttons.forEach(typology => {
        if(typology.classList.contains('active')) typology.classList.remove('active');
      });
    }

  },
  mounted(){
    this.getApi('restaurants');
  }
}
</script>

<template>
  <div class="home-container-inner">
    <h1 class="home-title">Benvenuto su DeliveBoo!</h1>

    <Loading v-if="!store.loaded"/>
    <div class="container" v-else>
      
      <div class="accordion accordion-flush accordion-filter d-sm-none mb-4 mt-2 rounded-5 overflow-hidden" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed rounded-5 overflow-hidden" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Filtra per TIPI di ristorante
            </button>
          </h2>
          <div id="flush-collapseOne" class="collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="form-check d-flex flex-column">
                <div class="input-wrapper" v-for="(type, index) in store.types" :key="index">
                  <input
                    type="checkbox"
                    class="form-check-input boo-btn"
                    autocomplete="off"
                    id="type"
                    value="{{type.id}}"
                    @click="getTypeId(type.id), checkActive(type.id)"
                    >
                  <label class="form-check-label text-capitalize" for="type">{{ type.name }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="container-types d-none d-sm-flex flex-wrap justify-content-center mb-5">
        <div class="type-container p-3" v-for="(type, index) in store.types" :key="index">
          <span class="fw-bold typology" :id="type.id" @click="getTypeId(type.id), checkActive(type.id)">{{ type.name }}</span>
        </div>
        <div class="btn-container p-3">
          <span class="reset btn-reset fw-bold mb-5" @click="store.types_id = [], store.restaurants = store.restaurant_backup, resetActive()">
            Elimina filtri
          </span>
        </div>
      </div>

      <div class="popular_restaurant mb-5" v-if="store.types_id.length == 0">
        <h2 class="home-subtitle">Ristoranti popolari</h2>
        <Loading v-if="!store.loaded"/>
        <swiper
          v-else
          :slidesPerView="3"
          :spaceBetween="30"
          :mousewheel="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          :breakpoints="{
            '0': {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            '768': {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            '991': {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            '1200': {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            '1400': {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            }"
          class="restaurant-swiper"
        >
        
          <swiper-slide v-for="restaurant in store.restaurants" :key="restaurant.id" v-show="restaurant.rating > 4">
            <Card :restaurant="restaurant"/>
          </swiper-slide>
        </swiper>
      </div>
      

      <div v-if="store.restaurants.length != 0">
        <h2 class="home-subtitle">Tutti i Ristoranti</h2>
        <Loading v-if="!store.loaded"/>
        <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1" v-else>
          <div class="col" v-for="restaurant in store.restaurants" :key="restaurant.id">
            <Card :restaurant="restaurant"/>
          </div>
        </div>
      </div>
      
      <div v-if="store.restaurants.length == 0">
        <h2 class="home-subtitle">Non ci sono ristoranti</h2>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

@use '../../scss/partials/variables' as *;
@import '../../scss/app.scss';

.home-container-inner {
  padding: 20px;
  background-color: rgba(white, 0.6);
  color: #EDECEC;
  text-align: center;
}

.accordion-filter{
  background-color: $custom_white !important;
  button.collapsed{
    background-color: rgba(lighten($custom_gray, 60%), 0.95) !important;
    border: 2px solid $tertiary_color;
  }

  button:not(.collapsed){
    background-color: $tertiary_color !important;
    color: $custom_white !important;
    border: 2px solid $tertiary_color;
    &::after{
      filter: invert(100%) !important;
    }
  }

  button:focus{
    box-shadow: 0 0 0 5px rgba($tertiary_color, 0.5) !important;
  }
}
.row{
  padding-top: 30px;
  .col{
    height: 400px;
    margin-bottom: 50px;
  }
}

.home-title {
  margin: 20px;
  font-size: 4.5rem;
  font-weight: 700;
  color: $tertiary_color;
}

.restaurant-swiper{
  z-index: 2 !important;
  .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal{
    .swiper-pagination-bullet-active{
      background-color: $tertiary_color !important;
    }
  }
  .swiper-slide{
    height: 500px;
    padding: 30px 30px;
    .boo-card{
      height: 420px;
    }
  }
}

.container-types{
  span{
    color: $custom_white;
    cursor: pointer;
    text-transform: capitalize;
    padding: 10px 15px;
    background-color: $tertiary_color;
    border-radius: 20px;
    transition: all .3s;
    &.reset{
      border: 2px solid $tertiary_color;
      color: $tertiary_color;
      background-color:  $custom_white;
    }

    &:hover, &.active{
      background-color: rgba($tertiary_color, 0.6);
      color: $custom_white;
    }
  }
}

.home-subtitle {
  margin-bottom: 10px;
  color: $tertiary_color;
}

@media screen and (max-width: 768px) {
  .home-title{
    font-size: 3rem;
  }

  .typology{
    font-size: .9rem;
  }
}

@media screen and (max-width: 430px) {
  .home-title{
    font-size: 2rem;
  }

  .typology{
    font-size: .8rem;
  }
}
</style>
