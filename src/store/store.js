import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api/',
  restaurants: [],
  types: [],
  types_id: [],
  restaurantfilter: [],
  restaurant_backup: [],
  arraydishes: [
    {
      id: 0,
      dish:[],
      counterQuantity: Number,
    }
  ],

  //counterQuantity: localStorage.getItem('counterQuantity') || 0,
  quantity: [],

  error: false,
  //lastDish: localStorage.getItem('lastDish') || 0,
  loaded: false,

  buttons: [],
  
  quantity: [],
  totalPrice: localStorage.getItem('totalPrice') || 0,
  restaurantId: localStorage.getItem('restaurantId'),

  //totalItems: localStorage.getItem('totalItems') || 0,

    /*
  for (let i = 0; i < localStorage.length - 1; i++) {
    if (localStorage.key(i).includes("quantity")) {
        store.ids.push(parseInt(localStorage.key(i).split("%")[1]));
        store.quantity.push(localStorage.getItem(localStorage.key(i)));
    }
  }*/
  

})