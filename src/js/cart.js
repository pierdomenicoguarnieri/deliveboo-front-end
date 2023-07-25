import { Logger } from 'sass';
import {store} from '../store/store';
import axios from 'axios';

export const cart = {

  getRestaurant(endpoint){
    store.loaded = false; 
    store.done = false; 
    axios.get(store.apiUrl + endpoint)
    .then(results => {
      store.restaurant = results.data;
      let somma = document.getElementById("somma");
      somma.classList.add('d-none');
      let somma_mobile = document.getElementById("somma_mobile");
      somma_mobile.classList.add('d-none');
      setTimeout(() => {
        store.loaded = true;
        this.checkInCart();
      }, 200);
    })
  },

  //Funzione per aggiungere piatto al carrello
  AddToCart(dish) {
    const addcartbutton = document.getElementById('add' + dish.id);
    const changequantity = document.getElementById('changequantity' + dish.id);
    let arraydishes = store.arraydishes;
    let totalQuantity = 0;
    document.getElementById("somma").innerHTML = localStorage.getItem("totalQuantity");
    document.getElementById("somma_mobile").innerHTML = localStorage.getItem("totalQuantity");
    

    //Se totalPrice esiste aggiungiamo un piatto
    if (localStorage.totalPrice) {
      // Controllo che il ristorante da cui sta acquistando sia lo stesso
      if (localStorage.restaurantId != dish.restaurant_id) {
          store.error = true;
          return;
      }

      // Salvo nell'array quello che c'è su localStorage
      arraydishes = JSON.parse(localStorage.getItem('arraydishes'));

      totalQuantity = localStorage.getItem('totalQuantity');

      // Aggiorniamo il prezzo totale
      localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) + dish.price).toFixed(2);
      document.getElementById("totalPrice").innerHTML = localStorage.getItem("totalPrice");

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
      // Incrementiamo la totalQuantity
      totalQuantity++;
      // Aggiorniamo localStorage
      localStorage.setItem('totalQuantity', totalQuantity);
      document.getElementById("somma").innerHTML = localStorage.getItem("totalQuantity");
      document.getElementById("somma_mobile").innerHTML = localStorage.getItem("totalQuantity");
    // Se totalPrice NON esiste
    }else{

      //arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
      
      // Setto totalPrice con chiave=>valore dal localStorage
      localStorage.setItem('totalPrice', dish.price);
      document.getElementById("totalPrice").innerHTML = localStorage.getItem("totalPrice");
      
      // Prendo l'id del ristorante collegato al piatto che ho aggiunto con chiave=>valore dal localStorage
      localStorage.setItem('restaurantId', dish.restaurant_id);

      //Salvo il nome del ristorante
      // store.restaurant.name = store.restaurantcart;
      localStorage.setItem('restaurantcart', store.restaurant.name);
      document.getElementById("restaurantcart").innerHTML = localStorage.getItem("restaurantcart");

      localStorage.setItem('totalQuantity', 0),

      // Il counter della quantità lo metto = 1 e creo l'ggetto del piatto
      arraydishes[0] = {
        id : dish.id,
        dish : dish,
        counterQuantity : 1,
      }
      totalQuantity++;
      localStorage.setItem('totalQuantity', totalQuantity);
      somma.classList.remove('d-none');
      somma.innerHTML = localStorage.getItem("totalQuantity");
      somma_mobile.classList.remove('d-none');
      somma_mobile.innerHTML = localStorage.getItem("totalQuantity");
      // Salvo l'array in localStorage
      localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
    }
    this.printDishQuantity(dish);
    //Al click del bottone il bottone add to cart va in d-none e compaiono i bottoni per modificare la quantità
    this.checkInCart();
      
  },

   //Funzione per aggiungere quantità del piatto con il button (+)
  addCart(dish) {
    // Salvo il localStorage in un array
    let arraydishes = store.arraydishes;
    arraydishes = JSON.parse(localStorage.getItem('arraydishes'));

    let totalQuantity =  localStorage.getItem('totalQuantity');


    // Ciclo l'array ed aggiungo +1 alla quantità e modifico il prezzo totale
    arraydishes.forEach(array_dish => {
      if(array_dish.id == dish.id){
        array_dish.counterQuantity++;
        totalQuantity++;
        
        localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) + dish.price).toFixed(2);
        document.getElementById("totalPrice").innerHTML = localStorage.getItem("totalPrice");
        localStorage.setItem('totalQuantity', totalQuantity);
      }
    });
    
    document.getElementById("somma").innerHTML = localStorage.getItem("totalQuantity");
    document.getElementById("somma_mobile").innerHTML = localStorage.getItem("totalQuantity");
    // Salvo l'array aggiornato in localStorage
    localStorage.setItem('arraydishes', JSON.stringify(arraydishes));

    // Chiamo la funzione per stampare le quantità nell'HTML
    this.printDishQuantity(dish);
    this.arraydishes();
  },

  //Funzione per rimuovere piatto/quantità con il button (-)
  removeCart(dish) {
    // Salvo il localStorage in un array
    let arraydishes = store.arraydishes;
    arraydishes = JSON.parse(localStorage.getItem('arraydishes'));

    let totalQuantity =  localStorage.getItem('totalQuantity');
    // Ciclo l'array
    arraydishes.forEach((array_dish, index) => {
      if(array_dish.id == dish.id){
        // Se il piatto ha una quantità maggiore di 1 rimuovo 1 alla quantità e modifico il prezzo totale
        if(array_dish.counterQuantity > 1){
          array_dish.counterQuantity--;
          localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) - dish.price).toFixed(2);
          document.getElementById("totalPrice").innerHTML = localStorage.getItem("totalPrice");
          // Altrimenti se è pari ad uno e cerco di rimuoverne un altro, lo elimino dall'array. modifico il prezzo e rimetto visibile il pulsante per aggiungere al carrello

          totalQuantity--;
          localStorage.setItem('totalQuantity', totalQuantity);
          somma.innerHTML = localStorage.getItem("totalQuantity");
          somma_mobile.innerHTML = localStorage.getItem("totalQuantity");

        }else{
          arraydishes.splice(index, 1);
          localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) - dish.price).toFixed(2);
          document.getElementById("totalPrice").innerHTML = localStorage.getItem("totalPrice");

          totalQuantity--;
          localStorage.setItem('totalQuantity', totalQuantity);
          somma.innerHTML = localStorage.getItem("totalQuantity");
          somma_mobile.innerHTML = localStorage.getItem("totalQuantity");

          const add = document.getElementById('add' + array_dish.id);
          const change = document.getElementById('changequantity' + array_dish.id);
          add.classList.remove('d-none');
          change.classList.add('d-none');
          
        }
      }
      
    })

    // Se l'array dei piatti è vuoto svuoto il localStorage
    if(arraydishes.length === 0){
      totalQuantity = 0;
      localStorage.setItem('totalQuantity', totalQuantity);
      somma.classList.add('d-none');
      somma_mobile.classList.add('d-none');

      store.restaurant.name = '';
      console.log(store.restaurant.name);
      localStorage.setItem('restaurant', store.restaurant.name);
      console.log(localStorage.setItem('restaurant', store.restaurant.name));
      this.arraydishes();

      localStorage.clear();

      
      // Altrimenti aggiorno il localStorage e stampo le nuove quantità nell'HTML
    }else{
      localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
      this.printDishQuantity(dish);
      this.arraydishes();
    }
    
  },

  //Funzione per stampare quantità piatto selezionato
  printDishQuantity(dish){
    let arraydishes = store.arraydishes;
    arraydishes = JSON.parse(localStorage.getItem('arraydishes'));

    arraydishes.forEach(dish_from_array => {
      if(dish.id == dish_from_array.id){
        let quantity = document.getElementById('quantity' +  dish.id);
        quantity.innerHTML = dish_from_array.counterQuantity;
        setTimeout(() => {
          let quantity_cart = document.getElementById('quantity_cart' +  dish.id);
          quantity_cart.innerHTML = dish_from_array.counterQuantity;
        }, 200);
        
        
        
      }
    });
  },

  //Funzione per modificare visibilità pulsanti
  checkInCart(){
    setTimeout(() => {
      if(localStorage.getItem('totalPrice')){
        let arraydishes = store.arraydishes;
        arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
        arraydishes.forEach(dish => {
          let add = document.getElementById('add' + dish.id);
          let change = document.getElementById('changequantity' + dish.id);
          add.classList.add('d-none');
          change.classList.remove('d-none');
          this.printDishQuantity(dish)
        });
      }
    }, 300);
    this.arraydishes();
  },

  //Funzione per aggiornare array carrello
  arraydishes() {
    if(localStorage.totalPrice){
      store.arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
      totalPrice.innerHTML = localStorage.getItem("totalPrice");
      if(localStorage.getItem("totalPrice") > 0){
        let somma = document.getElementById("somma");
        let somma_mobile = document.getElementById("somma_mobile");
        somma.innerHTML = localStorage.getItem("totalQuantity");
        somma.classList.remove('d-none');
        somma_mobile.innerHTML = localStorage.getItem("totalQuantity");
        somma_mobile.classList.remove('d-none');
      }
      return store.arraydishes
    }
  },

  //Funzione per eliminare piatto dalla (X) nel carrello
  deleteDishFromCart(dish){
    let arraydishes = store.arraydishes;
    arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
    
    arraydishes.forEach((dish_from_array, index) => {
      if(dish.id == dish_from_array.id){
        let quantity = document.getElementById('quantity' +  dish.id);
        quantity.innerHTML = dish_from_array.counterQuantity;

        localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) - dish.price * dish_from_array.counterQuantity).toFixed(2);
        document.getElementById("totalPrice").innerHTML = localStorage.getItem("totalPrice");
        
        let totalQuantity = localStorage.getItem("totalQuantity");

        totalQuantity = totalQuantity - dish_from_array.counterQuantity;
        localStorage.setItem('totalQuantity', totalQuantity);
        somma.innerHTML = localStorage.getItem("totalQuantity");
        somma_mobile.innerHTML = localStorage.getItem("totalQuantity");

        const add = document.getElementById('add' + dish_from_array.id);
        const change = document.getElementById('changequantity' + dish_from_array.id);
        add.classList.remove('d-none');
        change.classList.add('d-none');

        arraydishes.splice(index, 1);
        localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
        this.arraydishes();
      }
      if(arraydishes.length == 0){
        this.clearCart();
      }
      
      

    })
  },

  //Funzione per pulire il carrello ed eliminare tutto al suo interno
  clearCart() {
    let arraydishes = [];
    arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
    arraydishes.forEach(dish_from_array => {
      let add = document.getElementById('add' + dish_from_array.id);
      let change = document.getElementById('changequantity' + dish_from_array.id);
      add.classList.remove('d-none');
      change.classList.add('d-none');
    });
    let somma = document.getElementById("somma");
    let somma_mobile = document.getElementById("somma_mobile");
    somma.innerHTML = 0;
    somma.classList.add('d-none');
    somma_mobile.innerHTML = 0;
    somma_mobile.classList.add('d-none');
    localStorage.clear();
    store.arraydishes = [];
  },
  
}
