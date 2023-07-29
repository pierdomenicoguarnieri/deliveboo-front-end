import { Logger } from 'sass';
import {store} from '../store/store';
import axios from 'axios';

export const cart = {

  getRestaurant(endpoint, route){
    store.loaded = false; 
    store.done = false; 
    axios.get(store.apiUrl + endpoint)
    .then(results => {
      store.restaurant = results.data;
      let somma = document.getElementById("somma");
      somma.classList.add('d-none');
      setTimeout(() => {
        store.loaded = true;
        this.checkInCart(route);
      }, 200);
    })
  },

  //Funzione per aggiungere piatto al carrello
  AddToCart(dish, route) {
    const addcartbutton = document.getElementById('add' + dish.id);
    const changequantity = document.getElementById('changequantity' + dish.id);
    let arraydishes = store.arraydishes;
    let totalQuantity = 0;
    document.getElementById("somma").innerHTML = localStorage.getItem("totalQuantity");
    

    //Se totalPrice esiste aggiungiamo un piatto
    if (localStorage.totalPrice) {
      // Controllo che il ristorante da cui sta acquistando sia lo stesso
      if (localStorage.restaurantId != dish.restaurant_id) {
          store.error = true;
          store.messageErrorCart = 'Attenzione! Stai già ordinando dei piatti da un altro ristorante, se vuoi aggiungere questo piatto, clicca su "Svuota carrello"!';

          setTimeout(() => {
            return store.messageErrorCart = '';
          },5000);

      }else{
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
      }

      
    // Se totalPrice NON esiste
    }else{      
      // Setto totalPrice con chiave=>valore dal localStorage
      localStorage.setItem('totalPrice', dish.price);
      document.getElementById("totalPrice").innerHTML = localStorage.getItem("totalPrice");
      
      // Prendo l'id del ristorante collegato al piatto che ho aggiunto con chiave=>valore dal localStorage
      localStorage.setItem('restaurantId', dish.restaurant_id);

      //Salvo il nome del ristorante
      // store.restaurant.name = store.restaurantcart;
      let restaurantcart = document.getElementById("restaurantcart");
      localStorage.setItem('restaurantcart', store.restaurant.name);
      restaurantcart.innerHTML = localStorage.getItem("restaurantcart");

      localStorage.setItem('totalQuantity', 0),

      // Il counter della quantità lo metto = 1 e creo l'oggetto del piatto
      arraydishes[0] = {
        id : dish.id,
        dish : dish,
        counterQuantity : 1,
      }
      totalQuantity++;
      localStorage.setItem('totalQuantity', totalQuantity);
      somma.classList.remove('d-none');
      somma.innerHTML = localStorage.getItem("totalQuantity");
      // Salvo l'array in localStorage
      localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
      // Salvo la rotta
      localStorage.setItem('route', route);
      localStorage.setItem('token', crypto.randomUUID());
    }
    this.printDishQuantity(dish, route);
    //Al click del bottone il bottone add to cart va in d-none e compaiono i bottoni per modificare la quantità
    this.checkInCart(route);
      
  },

   //Funzione per aggiungere quantità del piatto con il button (+)
  addCart(dish, route) {
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
    // Salvo l'array aggiornato in localStorage
    localStorage.setItem('arraydishes', JSON.stringify(arraydishes));

    // Chiamo la funzione per stampare le quantità nell'HTML
    this.printDishQuantity(dish, route);
    this.arraydishes(route);
  },

  //Funzione per rimuovere piatto/quantità con il button (-)
  removeCart(dish, route) {
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

        }else{
          arraydishes.splice(index, 1);
          localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) - dish.price).toFixed(2);
          document.getElementById("totalPrice").innerHTML = localStorage.getItem("totalPrice");

          totalQuantity--;
          localStorage.setItem('totalQuantity', totalQuantity);
          somma.innerHTML = localStorage.getItem("totalQuantity");

          if(route === localStorage.getItem('route')){
            const add = document.getElementById('add' + array_dish.id);
            const change = document.getElementById('changequantity' + array_dish.id);
            add.classList.remove('d-none');
            change.classList.add('d-none');
            }
          }
      }
      
    })

    // Se l'array dei piatti è vuoto svuoto il localStorage
    if(arraydishes.length === 0){
      totalQuantity = 0;
      localStorage.setItem('totalQuantity', totalQuantity);
      somma.classList.add('d-none');

      store.restaurantcart = '';
      localStorage.setItem('restaurantcart', store.restaurantcart);
      this.arraydishes();
      
      localStorage.clear();
      store.arraydishes = [];
      let arraydishes = store.arraydishes;
      arraydishes = localStorage.getItem('arraydishes');
      
      // Altrimenti aggiorno il localStorage e stampo le nuove quantità nell'HTML
    }else{
      localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
      this.printDishQuantity(dish, route);
      this.arraydishes();
    }
    
  },

  //Funzione per stampare quantità piatto selezionato
  printDishQuantity(dish, route){
    let arraydishes = store.arraydishes;
    arraydishes = JSON.parse(localStorage.getItem('arraydishes'));

    arraydishes.forEach(dish_from_array => {
      if(dish.id == dish_from_array.id){
        if(route === localStorage.getItem('route')){
          setTimeout(()=>{
            let quantity = document.getElementById('quantity' +  dish.id);
            quantity.innerHTML = dish_from_array.counterQuantity;
          }, 200);
        }
        setTimeout(() => {
          let quantity_cart = document.getElementById('quantity_cart' +  dish.id);
          quantity_cart.innerHTML = dish_from_array.counterQuantity;
        }, 200);      
      }
    });
  },
  //Funzione per modificare visibilità pulsanti
  checkInCart(route){
    setTimeout(() => {
      if(localStorage.getItem('totalPrice') && route === localStorage.getItem('route')){
        let arraydishes = store.arraydishes;
        arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
        arraydishes.forEach(dish => {
          let add = document.getElementById('add' + dish.id);
          let change = document.getElementById('changequantity' + dish.id);
          add.classList.add('d-none');
          change.classList.remove('d-none');
          this.printDishQuantity(dish, route)
        });
      }
    }, 300);
    this.arraydishes(route);
  },

  //Funzione per aggiornare array carrello
  arraydishes(route) {
    if(localStorage.totalPrice){     
      store.arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
      store.restaurant_backup.forEach(restaurant => {
      if(restaurant.id == localStorage.getItem('restaurantId')){
        store.restaurant.dishes.forEach(dish_array => {
          store.arraydishes.forEach((dish_from_array, index) => {
            if(dish_from_array.dish.id === dish_array.id){
              if(dish_array.visible == 0){
                this.deleteDishFromCart(dish_from_array.dish, route);
              }
              else{
                this.printDishQuantity(dish_from_array.dish, route);
              }
            }
          })
        });
      }

      });
      totalPrice.innerHTML = localStorage.getItem("totalPrice");

      let restaurantcart = document.getElementById("restaurantcart");
      restaurantcart.innerHTML = localStorage.getItem("restaurantcart", store.restaurant.name);

      if(localStorage.getItem("totalPrice") > 0){
        let somma = document.getElementById("somma");
        somma.innerHTML = localStorage.getItem("totalQuantity");
        somma.classList.remove('d-none');
      }      
      return store.arraydishes
    }
  },

  //Funzione per eliminare piatto dalla (X) nel carrello
  deleteDishFromCart(dish, route){
    let arraydishes = store.arraydishes;
    arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
    
    arraydishes.forEach((dish_from_array, index) => {
      if(dish.id == dish_from_array.id){
        localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) - dish.price * dish_from_array.counterQuantity).toFixed(2);
        document.getElementById("totalPrice").innerHTML = localStorage.getItem("totalPrice");
        
        let totalQuantity = localStorage.getItem("totalQuantity");

        totalQuantity = totalQuantity - dish_from_array.counterQuantity;
        localStorage.setItem('totalQuantity', totalQuantity);
        somma.innerHTML = localStorage.getItem("totalQuantity");

        if(route === localStorage.getItem('route')){
          let quantity = document.getElementById('quantity' +  dish.id);
          quantity.innerHTML = dish_from_array.counterQuantity;
          const add = document.getElementById('add' + dish_from_array.id);
          const change = document.getElementById('changequantity' + dish_from_array.id);
          add.classList.remove('d-none');
          change.classList.add('d-none');
        }
        arraydishes.splice(index, 1);
        localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
        this.arraydishes(route);
      }
      if(arraydishes.length == 0){
        this.clearCart(route);
      }
    })
  },

  //Funzione per pulire il carrello ed eliminare tutto al suo interno
  clearCart(route) {
    let arraydishes = [];
    arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
    arraydishes.forEach(dish_from_array => {
      if(route === localStorage.getItem('route')){
        let add = document.getElementById('add' + dish_from_array.id);
        let change = document.getElementById('changequantity' + dish_from_array.id);
        add.classList.remove('d-none');
        change.classList.add('d-none');
      }
    });
    let somma = document.getElementById("somma");
    somma.innerHTML = 0;
    somma.classList.add('d-none');
    localStorage.clear();
    store.arraydishes = [];
  },
  
}
