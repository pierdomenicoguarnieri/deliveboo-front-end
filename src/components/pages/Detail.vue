<script>
import {store} from '../../store/store';
import axios from 'axios';
import Stars from '../partials/Stars.vue';
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
    Stars
  },
  methods:{
    getRestaurant(endpoint){
      axios.get(store.apiUrl + endpoint)
      .then(results => {
        this.restaurant = results.data;

      })
    },
    /*
    cart(id){
      const addcartbutton = document.getElementById('addcartbutton');
      const changequantity = document.getElementById('changequantity');
      //pusho id piatto nel carrello
      store.array_cart.push(id);
      store.totalItems++;

      console.log(store.array_cart);
      if(store.totalItems > 0){
        addcartbutton.classList.add('d-none')
        changequantity.classList.remove('d-none')
      }else if(store.totalItems == 0){
        addcartbutton.classList.remove('d-none')
        changequantity.classList.add('d-none')
      }
    },
    */

    AddToCart(dish) {
      const addcartbutton = document.getElementById(dish.id);
      const changequantity = document.getElementById('changequantity');
      let arraydishes = [];
      console.log(dish.id);
      //Al click del bottone il bottone add to cart va in d-none e compaiono i bottoni per modificare la quantità

      //questa dove va?
      localStorage.clear();
      
      //Se totalPrice esiste
      if (localStorage.totalPrice) {
        //Controllo che il ristorante da cui sta acquistando sia corretto
          if (localStorage.restaurantId != dish.restaurant_id) {
              store.error = true;
              store.lastDish = dish;
              return;
          }
          //localStorage.arraydishes = setItem('arraydishes', store.arraydishes);
          console.log(localStorage.arraydishes);
          
          localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) + dish.price).toFixed(2);

          store.totalPrice = localStorage.totalPrice;
          const lastDish = localStorage.setItem('lastDish', 0);

          if(localStorage.arraydishes[lastDish].id == dish.id){
            localStorage.arraydishes[lastDish].counterQuantity++;
          }else{
            lastDish++;
            localStorage.arraydishes[store.lastDish] = 
            {
              id : dish.id, 
              dish: dish, 
              counterQuantity : 1
            };
              arraydishes[lastDish] = {
              id : dish.id,
              dish : dish,
              counterQuantity : 1,
            }
            localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
            }
          //Aggiuno 1 al counter localstorage
          //localStorage.counterQuantity = parseInt(parseInt(localStorage.counterQuantity) + 1);
      }
       //Se totalPrice NON esiste
      else {
          //Prendo totalPrice con chiave=>valore dal localstorage
          localStorage.setItem('totalPrice', dish.price);
          store.totalPrice = localStorage.totalPrice;
          
          //Prendo l'id del ristorante collegato al piatto che ho aggiunto con chiave=>valore dal localstorage
          localStorage.setItem('restaurantId', dish.restaurant_id);
          store.restaurantId = localStorage.restaurantId;
          
          //Il counter della quantità lo metto = 0
          arraydishes[0] = {
            id : dish.id,
            dish : dish,
            counterQuantity : 1,
          }
          localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
          //localStorage.setItem('counterQuantity', 1);
          //console.log('counter',localStorage.counterQuantity);         
          console.log(arraydishes);         
          console.log(localStorage);
      }
      
      //Se la quantità di quell'id del piatto è presente 
      if (store.arraydishes.includes(store.dish)){
        localStorage.setItem(`quantity%${dish.id}`, parseFloat(localStorage.getItem(`quantity%${dish.id}`)) + 1);
      }
      //Altrimenti pusho l'id del piatto nell'array quantity
      else {
          localStorage.setItem(`quantity%${dish.id}`, 1);
          store.ids.push(dish.id);
          store.quantity.push('1');
      }

      if(store.counterQuantity > 0){
        addcartbutton.classList.add('d-none')
        changequantity.classList.remove('d-none')
        
      }else if(store.counterQuantity == 0){
        addcartbutton.classList.remove('d-none')
        changequantity.classList.add('d-none')
      }
      console.log(store.counterQuantity);
    },
    

    addCart(dish) {
        console.log('id piatto',dish.id);
        localStorage.setItem(`quantity%${dish.id}`, parseFloat(localStorage.getItem(`quantity%${dish.id}`)) + 1);
        //console.log(parseFloat(parseFloat(localStorage.totalPrice) + dish.price).toFixed(2));
        console.log(dish.price);
        console.log(store.totalPrice);
        localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) + dish.price).toFixed(2);

        //store.totalPrice = localStorage.totalPrice;
        

        
        //store.counterQuantity = localStorage.getItem(`quantity%[${dish.id}]`);
        //console.log(localStorage.getItem(`quantity%[${dish.id}]`));
        //Al click incremento il contatore della quantità
        store.counterQuantity++;
        localStorage.counterQuantity = parseInt(parseInt(localStorage.counterQuantity) + 1);
        //Restituisce l'indice del dell'id chegli sto passando e incremento la quantità nell'array quantity
        const index = store.ids.indexOf(dish.id);
        if(index != -1){
          store.quantity[index]++;
        }
          
    },

    removeCart(dish) {
      localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) - dish.price).toFixed(2);

      //store.totalPrice = localStorage.totalPrice;

      const index = store.ids.indexOf(dish.id);
      store.counterQuantity--;
      localStorage.counterQuantity = parseInt(parseInt(localStorage.counterQuantity) - 1);

      // se ha quantità 1
      if(this.counterQuantity == 1) {
          // rimuovo l'id dall'array id dello store
          store.ids.splice(index, 1);
          // rimuovo la quantità dall'array quantity dello store
          store.quantity.splice(index, 1);
          // lo rimuovo dal localStorage
          localStorage.removeItem(`quantity%${dish.id}`)
          // se non sono rimasti altri piati
          if(!store.counterQuantity) {
              // svuoto lo store
              localStorage.clear();
              store.restaurantId = null;
          }
      }
      // altrimenti
      else {
          // tolgo 1 alla quantità nel localStorage
          localStorage.setItem(`quantity%${dish.id}`, parseFloat(localStorage.getItem(`quantity%${dish.id}`)) - 1);
          // tolgo 1 al plateQuantity
          this.counterQuantity = localStorage.getItem(`quantity%${dish.id}`);
            if(index != -1)
            // tolgo 1 alla sua quantity nello store
              store.quantity[index]--;
      }
    }
  },
  mounted(){
    this.getRestaurant('restaurants/restaurant-detail/' + this.$route.params.slug);  
    
    /*const index = store.ids.indexOf(this.dish['id']);
      if(index != -1){
        this.counterQuantity = store.quantity[index];
      }*/
                
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
            <div class="text-center">
              <button 
                type="button" 
                class="btn btn-primary" 
                :id="dish.id"
                @click="AddToCart(dish)">Add to Cart
                
              </button>
              <div 
                class="btn d-none" 
                id="changequantity"
                >
                
                <button type="button" @click="removeCart(dish)">-</button>
                  <span class="mx-2">{{store.counterQuantity}}</span>
                <button type="button" @click="addCart(dish)">+</button>
              </div>

            </div>

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
