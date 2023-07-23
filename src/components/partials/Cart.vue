<script>
import {store} from '../../store/store';
import axios from 'axios';
export default {
    name: 'Cart',
    
    data() {
        return {
            store,
            restaurant: [],
            //arraydishes: [],
            //dishes: "",
            //restaurant: "",
        };
    },
    computed: {
        /*
        totalPrice() {
           // return store.totalPrice;
        },
        quantity() {
            //return store.quantity;
        },
        arraydishes() {
            return JSON.parse(localStorage.getItem('arraydishes'));
        }*/
    },
    methods: {
        /*
        getRestaurant(endpoint){
            store.loaded = false; 
            store.done = false; 
            axios.get(store.apiUrl + endpoint)
            .then(results => {
                this.restaurant = results.data;
                console.log(this.restaurant);
            })
        },*/
        
        fetchDishes() {
            //let arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
            // axios.get(store.apiUrl + 'cart/dishes/' . $arraydishes)
            //     .then(result => {
            //         console.log(result);
            //         console.log(result.data);
            //         this.dishes = result.data.dishes;
            //         this.restaurant = localStorage.setItem('restaurantId', dish.restaurant_id);
            //     })
        },
        clearCart() {
            localStorage.clear();
            //store.restaurantId = localStorage.getItem('restaurantId');
            // store.totalItems = localStorage.getItem('totalPrice') || 0;
            // store.ids = [];
            // store.quantity = [];
        },
    },
    mounted() {
        //this.getRestaurant('restaurants/restaurant-detail/' + this.$route.params.slug);
        this.fetchDishes();
        //this.fetchPlates();
    },
}
</script>

<template>
    <div>
        <div>
            <div>
                <h6>
                    Ordine per il ristorante:<br> 
                    <strong>Pinco Pallino</strong>
                </h6>
                <div class="text-center">
                    <div>
                        Totale ordine: <strong>&euro; 14,00</strong>
                    </div>
                    <span class="btn btn-success mt-2">
                        Vai alla cassa
                    </span>
                </div>
            </div>

            <div class="mt-2">
                <strong>Riepilogo ordine</strong>
                <!--Qui sotto ciclare i piatti selezionati dall'utente e salvati dentro lo storage-->
                <div>
                    <div>
                        <img>
                    </div>
                    <div class="row">
                        <div class="col-5">
                            <strong>
                                Pizza Margherita
                            </strong>
                        </div>
                        <div class="col-7 d-flex align-items-center">
                            <div class="mx-2">
                                <button type="button" class="btn btn-danger btn-sm" @click="console.log('rimosso')"><i class="fa-solid fa-minus"></i></button>
                                    <span class="mx-2" :id="'quantity'">1</span>
                                <button type="button" class="btn btn-success btn-sm" @click="console.log('aggiunto')"><i class="fa-solid fa-plus"></i></button>
                            </div>
                            <span>
                                &euro; 6,00
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img>
                    </div>
                    <div class="row">
                        <div class="col-5">
                            <strong>
                                Pizza Diavola
                            </strong>
                        </div>
                        <div class="col-7 d-flex align-items-center">
                            <div class="mx-2">
                                <button type="button" class="btn btn-danger btn-sm" @click="console.log('rimosso')"><i class="fa-solid fa-minus"></i></button>
                                    <span class="mx-2" :id="'quantity'">1</span>
                                <button type="button" class="btn btn-success btn-sm" @click="console.log('aggiunto')"><i class="fa-solid fa-plus"></i></button>
                            </div>
                            <span>
                                &euro; 8,00
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button class="btn btn-danger btn-sm mt-3" @click="clearCart()">
                    Svuota carrello
                </button>
            </div>

        </div>
        <!--Aggiungere condizione se non c'è nessun piatto nel carrello-->
        <div class="text-center">
            <h3>
                Carrello vuoto!
            </h3>

            <span class="btn btn-primary">
                Torna alla home
            </span>
        </div>
    </div>
</template>

