<script>
import {store} from '../../store/store';
import axios from 'axios';
export default {
    data() {
        return {
            dishes: "",
            restaurant: "",
            empty: false,
        };
    },
    computed: {
        totalPrice() {
            return store.totalPrice;
        },
        quantity() {
            return store.quantity;
        },
        ids() {
            return store.ids;
        }
    },
    methods: {
        /*
        fetchPlates() {
            axios.get(store.apiUrl + `cart/dishes/${this.ids}`)
                .then(result => {
                    this.dishes = result.data.dishes;
                    if (!this.dishes)
                        this.empty = true;
                    this.restaurant = result.data.restaurant;
                }).catch(err => {
                    console.log(err);
                    //redirect to 404
                    //this.$router.push({ name: "404" });
                });
        },
        clearCart() {
            localStorage.clear();
            store.restaurantId = localStorage.getItem('restaurantId');
            store.totalItems = localStorage.getItem('totalPrice') || 0;
            store.ids = [];
            store.quantity = [];
        },*/
    },
    mounted() {
        //this.fetchPlates();
    },
    watch: {
        ids() {
            window.location.reload();
        }
    },
}
</script>

<template>
    <div class="container">

        <div v-if="(dishes && !empty)">

            <div>
                <h1 >
                    Ordine per il ristorante: <span class="font-bold">{{ restaurant.name }}</span>
                </h1>
                <div
                    >
                    <div class="text-4xl">
                        Totale: <span class="font-bold">&euro;{{ totalPrice }}</span>
                    </div>
                    <router-link :to="{
                        name: 'checkout',
                        params: { bool: true }
                        }" 
                        title="Vai alla cassa"
                        >
                        Vai alla cassa
                    </router-link>
                </div>
            </div>
            <div >
                <div v-for="(dish, index) in dishes" :key="index">
                    <div class="h-60">
                        <img :src="dish.image_path"
                            :alt="dish.image_name">
                    </div>
                    <div >
                        <h3 >
                            {{ dish.name }}
                        </h3>
                        <span >
                            Totale piatto: <span >&euro;{{ (parseFloat(quantity[i]) *
                                parseFloat(dish.price)).toFixed(2)
                            }}</span>
                        </span>

                    </div>
                </div>
            </div>
            <div @click="clearCart">
                <button
                    >
                    Svuota carrello
                </button>
            </div>

        </div>

        <div v-if="empty">
            <h1 >
                Carrello vuoto.
            </h1>

            <router-link :to="{
                name: 'home',
            }" 
                title="Torna al carrello">
                Torna alla home
            </router-link>
        </div>

    </div>
</template>

