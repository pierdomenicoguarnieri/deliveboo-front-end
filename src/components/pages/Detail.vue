<script>
import {store} from '../../store/store';
import Stars from '../partials/Stars.vue';
import Loading from '../partials/Loading.vue';
import {cart} from '../../js/cart.js';
import axios from 'axios';
import AnimationHome from '../partials/AnimationHome.vue';

export default {
  name: 'Detail',
  data(){
    return{
      store,
      cart,
    }
  },
  components:{
    Stars,
    Loading,
    AnimationHome
  },
  methods:{
    getApi(endpoint){
      store.loaded = false;
      axios.get(store.apiUrl + endpoint)
        .then(results => {
          store.restaurants = results.data.restaurants;
          store.restaurant_backup = store.restaurants;
          store.types = results.data.types;
          store.loaded = true;
        })
    }
  },
  mounted(){
    this.getApi('restaurants');
    cart.getRestaurant('restaurants/restaurant-detail/' + this.$route.params.slug, this.$route.fullPath);
  }
}

</script>

<template>
  <AnimationHome v-if="!store.animationFinished"/>
  <div class="content-wrapper" v-else>
    <div v-if="store.messageErrorCart != ''" class="container_message_error_cart d-flex justify-content-center py-5">
      <div class="message_error_cart text-center">
        <h1 class="text-uppercase text-decoration-underline">attenzione!!</h1>
        <P>{{ store.messageErrorCart }}</P>
        <button class="btn btn-danger btn-sm mt-3 me-3" @click="cart.clearCart($route.fullPath)">
            Svuota carrello
        </button>
      </div>
    </div>

    <div class="detail-wrapper mvh-100" v-else>
      <Loading v-if="!store.loaded"/>
      <div class="restaurant-detail" v-else>
  
        <div class="header-card rounded-5">
          <div class="header-card-image">
            <img :src="store.restaurant.image_path" class="object-fit-cover rounded-5 w-100" :alt="store.restaurant.name" />
          </div>
          <div class="header-card-info">
            <h1>{{ store.restaurant.name }}</h1>
            <p><i class="fa-solid fa-location-dot"></i> {{ store.restaurant.address }}</p>
            <p><i class="fa-solid fa-phone"></i> {{ store.restaurant.telephone_number }}</p>
            <p><i class="fa-solid fa-envelope" @click="console.log(store.restaurant)"></i> {{ store.restaurant.email }}</p>
            <div>
              <span v-for="typology in store.restaurant.types" :key="typology.id" class="badge text-bg-secondary me-2 text-capitalize mb-2">{{ typology.name }}</span>
            </div>
          </div>
        </div>
        <section class="dishes-section">
          <h2>I nostri piatti</h2>
          <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
            <div class="col" v-for="dish in store.restaurant.dishes"  v-show="dish.visible" :key="dish.id">
              <div class="boo-card rounded-5">
                <div class="card-body">
                  <div class="dish-image-wrapper">
                    <img :src="dish.image_path" class="dish-image" :alt="dish.name" />
                  </div>
                  <div class="text d-flex flex-column justify-content-between">
                    <div class="infos">
                      <h3 class="dish-name">{{ dish.name }}</h3>
                      <p v-html="dish.description" class="dish-description mb-0"></p>
                      <p class="dish-ingredients"><i class="fa-solid fa-utensils"></i> {{ dish.ingredients }}</p>
                      <p><i class="fa-solid fa-money-bill-wave"></i> {{ dish.price.toFixed(2) }} &euro;</p>
                    </div>
  
                    <div class="btn-container d-flex justify-content-center">
                      <button 
                        type="button" 
                        class="btn btn-primary boo-btn" 
                        :id="'add' + dish.id"
                        @click="cart.AddToCart(dish, $route.fullPath)">
                        Aggiungi al carrello
                      </button>
                      <div class="d-none" :id="'changequantity' + dish.id">
                        <button type="button" class="custom-btn-remove" @click="cart.removeCart(dish, $route.fullPath)"><i class="fa-solid fa-minus"></i></button>
                          <span class="mx-2" :id="'quantity' + dish.id"></span>
                        <button type="button" class="custom-btn-add" @click="cart.addCart(dish, $route.fullPath)"><i class="fa-solid fa-plus"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

@use '../../scss/partials/variables' as *;
.container_message_error_cart{
  background-color: rgba($custom_white, 0.8);
  .message_error_cart{
    z-index: 10;
    width: 600px;
    padding: 20px;
    background-color: white;
    border: 4px solid red;
    color: red;
    font-size: bold;
    border-radius: 15px;
  }
}
.typology-container{
  white-space: nowrap;
  display: inline-block;
  padding: 0 10px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 35px;
  cursor: default;
  transition: all 1s;
  &:hover, &:hover, &:hover{
    white-space: break-spaces;
    max-width: none;
    max-height: 200px;
  }
}

  .boo-card{
    box-shadow: 5px 5px 20px rgba($custom_black, 0.5);
    color: $custom_black;
    overflow: hidden;
    height: 100%;
    .card-body{
      height: 100%;
      background-color: rgba($custom_white, 0.8);
      .text{
        padding: 20px;
        height: calc(100% - 200px);
        overflow-y: auto;
        &::-webkit-scrollbar{
          width: 5px;
          background-color: $custom_white;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.8);
          border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: $custom_gray;
          border-radius: 10px;
        }
        p{
          margin-bottom: 10px;
        }
        .dish-name, .dish-ingredients{
          white-space: nowrap;
          display: inline-block;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 35px;
          cursor: default;
          transition: all 1s;
          &:hover, &:hover{
            white-space: break-spaces;
            max-width: none;
            max-height: 200px;
          }
        }
      }
      .dish-image-wrapper{
        height: 200px;
        .dish-image{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

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
    height: 550px;
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
