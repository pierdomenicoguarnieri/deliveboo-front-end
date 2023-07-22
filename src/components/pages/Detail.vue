<script>
import {store} from '../../store/store';
import axios from 'axios';
import Stars from '../partials/Stars.vue';
import { compileString } from 'sass';
import Loading from '../partials/Loading.vue';
import DishCard from '../partials/DishCard.vue';

export default {
  name: 'Detail',
  data(){
    return{
      store,
      restaurant: [],
      dishQuantity: 1,
      
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
      store.done = false; 
      axios.get(store.apiUrl + endpoint)
      .then(results => {
        this.restaurant = results.data;
        setTimeout(() => {
          store.loaded = true;
          this.checkInCart();
        }, 200);
      })
    },

    AddToCart(dish) {
      const addcartbutton = document.getElementById('add' + dish.id);
      const changequantity = document.getElementById('changequantity' + dish.id);
      let arraydishes = [];

      //Se totalPrice esiste aggiungiamo un piatto
      if (localStorage.totalPrice) {
        //Controllo che il ristorante da cui sta acquistando sia lo stesso
        if (localStorage.restaurantId != dish.restaurant_id) {
            store.error = true;
            return;
        }

        // Salvo nell'array quello che c'è su localStorage
        arraydishes = JSON.parse(localStorage.getItem('arraydishes'));

        // Aggiorniamo il prezzo totale
        localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) + dish.price).toFixed(2);

        // Se il piatto è già inserito, ne aumentiamo la quantità
        if(arraydishes[(arraydishes.length) - 1].id == dish.id){
          arraydishes[(arraydishes.length) - 1].counterQuantity++;
        }else{
          // Inseriamo un nuovo piatto nell'array
          arraydishes[arraydishes.length] = {
            id : dish.id,
            dish : dish,
            counterQuantity : 1,
          }

          // Aggiorniamo localStorage
          localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
        }
      // Se totalPrice NON esiste
      }else{

        // Setto totalPrice con chiave=>valore dal localStorage
        localStorage.setItem('totalPrice', dish.price);
        
        // Prendo l'id del ristorante collegato al piatto che ho aggiunto con chiave=>valore dal localStorage
        localStorage.setItem('restaurantId', dish.restaurant_id);

        // Il counter della quantità lo metto = 1 e creo l'ggetto del piatto
        arraydishes[0] = {
          id : dish.id,
          dish : dish,
          counterQuantity : 1,
        }

        // Salvo l'array in localStorage
        localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
      }
        //Al click del bottone il bottone add to cart va in d-none e compaiono i bottoni per modificare la quantità
        this.checkInCart();
    },

    addCart(dish) {
      // Salvo il localStorage in un array
      let arraydishes = JSON.parse(localStorage.getItem('arraydishes'));

      // Ciclo l'array ed aggiungo +1 alla quantità e modifico il prezzo totale
      arraydishes.forEach(array_dish => {
        if(array_dish.id == dish.id){
          array_dish.counterQuantity++;
          localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) + dish.price).toFixed(2);
        }
      });

      // Salvo l'array aggiornato in localStorage
      localStorage.setItem('arraydishes', JSON.stringify(arraydishes));

      // Chiamo la funzione per stampare le quantità nell'HTML
      this.printDishQuantity(dish);
    },

    removeCart(dish) {
      // Salvo il localStorage in un array
      let arraydishes = JSON.parse(localStorage.getItem('arraydishes'));

      // Ciclo l'array
      arraydishes.forEach((array_dish, index) => {
        if(array_dish.id == dish.id){
          // Se il piatto ha una quantità maggiore di 1 rimuovo 1 alla quantità e modifico il prezzo totale
          if(array_dish.counterQuantity > 1){
            array_dish.counterQuantity--;
            localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) - dish.price).toFixed(2);
            // Altrimenti se è pari ad uno e cerco di rimuoverne un altro, lo elimino dall'array. modifico il prezzo e rimetto visibile il pulsante per aggiungere al carrello
          }else{
            arraydishes.splice(index, 1);
            localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) - dish.price).toFixed(2);
            const add = document.getElementById('add' + array_dish.id);
            const change = document.getElementById('changequantity' + array_dish.id);
            add.classList.remove('d-none');
            change.classList.add('d-none');
          }
        }
      });

      // Se l'array dei piatti è vuoto svuoto il localStorage
      if(arraydishes.length === 0){
        localStorage.clear();

        // Altrimenti aggiorno il localStorage e stampo le nuove quantità nell'HTML
      }else{
        localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
        this.printDishQuantity(dish);
      }
    },

    printDishQuantity(dish){
      let arraydishes = JSON.parse(localStorage.getItem('arraydishes'));

      arraydishes.forEach(dish_from_array => {
        if(dish.id == dish_from_array.id){
          let quantity = document.getElementById('quantity' +  dish.id);
          quantity.innerHTML = dish_from_array.counterQuantity;
        }
      });
    },

    checkInCart(){
      if(localStorage.getItem('totalPrice')){
        let arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
        arraydishes.forEach(dish => {
          let add = document.getElementById('add' + dish.id);
          let change = document.getElementById('changequantity' + dish.id);
          add.classList.add('d-none');
          change.classList.remove('d-none');
          this.printDishQuantity(dish)
        });
      }
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
                          <button 
                type="button" 
                class="btn btn-primary" 
                :id="'add' + dish.id"
                @click="AddToCart(dish)">
                Aggiungi al carrello
              </button>
              <div 
                class="btn d-none" 
                :id="'changequantity' + dish.id"
                >
                
                <button type="button" class="btn btn-danger" @click="removeCart(dish)"><i class="fa-solid fa-minus"></i></button>
                  <span class="mx-2" :id="'quantity' + dish.id"></span>
                <button type="button" class="btn btn-success" @click="addCart(dish)"><i class="fa-solid fa-plus"></i></button>
              </div>
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
