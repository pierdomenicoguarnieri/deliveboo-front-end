import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api/',
  restaurants: [],
  types: [],
  types_id: [],
  restaurantfilter: [],
  restaurant_backup: [],
  array_cart: [],
  quantitY_dish: 0,
/*
  for (var i = 0; i < localStorage.length - 1; i++) {
      if (localStorage.key(i).includes("quantity")) {
          ids.push(parseInt(localStorage.key(i).split("%")[1]));
          quantity.push(localStorage.getItem(localStorage.key(i)));
      }
  },*/

  error: false,
  lastDish: '',
  totalItems: localStorage.getItem('totalItems') || 0,
  ids: [],
  quantity: [],
  totalPrice: localStorage.getItem('totalPrice') || 0,
  restaurantId: localStorage.getItem('restaurantId'),

})