import { reactive } from "vue";

export const store = reactive({
  animationFinished: false,
  loaded: false,
  apiUrl: 'http://127.0.0.1:8000/api/',
  restaurants: [],
  restaurant: [],
  types: [],
  types_id: [],
  restaurantfilter: [],
  restaurant_backup: [],
  arraydishes: [],
  error: false,
  loaded: false,
  restaurantcart: localStorage.getItem('restaurantcart') || null,
  totalOrder : localStorage.getItem('totalOrder'),
  //totalPrice : localStorage.getItem('totalPrice'),
})